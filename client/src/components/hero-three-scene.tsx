import { useEffect, useRef } from "react";
import * as THREE from "three";

const PARTICLE_COUNT = 9000;
const GLOBE_RADIUS = 5;
const SHARD_COUNT = 46;

/**
 * Interactive WebGL layer for the hero section.
 * Renders a particle globe with orbiting shards and pointer parallax.
 * Pauses when the hero leaves the viewport and when the tab is hidden.
 */
export default function HeroThreeScene() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas?.parentElement;
    if (!canvas || !host) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
    } catch {
      // WebGL unavailable: keep the CSS gradient background only
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0, 15);

    const globe = new THREE.Group();
    globe.position.z = -2;
    scene.add(globe);

    // Particle sphere
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const colors = new Float32Array(PARTICLE_COUNT * 3);
    const colorTop = new THREE.Color("#4338ca");
    const colorMid = new THREE.Color("#7e22ce");
    const colorBottom = new THREE.Color("#be185d");

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      const radius = GLOBE_RADIUS * (0.97 + Math.random() * 0.06);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.cos(phi);
      const z = radius * Math.sin(phi) * Math.sin(theta);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      const height = (y / GLOBE_RADIUS + 1) / 2;
      const color =
        height < 0.5
          ? colorTop.clone().lerp(colorMid, height * 2)
          : colorMid.clone().lerp(colorBottom, (height - 0.5) * 2);

      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    const pointGeometry = new THREE.BufferGeometry();
    pointGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    pointGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const pointMaterial = new THREE.PointsMaterial({
      size: 0.085,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
      blending: THREE.NormalBlending,
      sizeAttenuation: true,
    });

    const points = new THREE.Points(pointGeometry, pointMaterial);
    globe.add(points);

    // Wireframe shell
    const shellGeometry = new THREE.IcosahedronGeometry(GLOBE_RADIUS * 1.005, 2);
    const shellMaterial = new THREE.MeshBasicMaterial({
      color: "#6d28d9",
      wireframe: true,
      transparent: true,
      opacity: 0.16,
    });
    const shell = new THREE.Mesh(shellGeometry, shellMaterial);
    globe.add(shell);

    // Orbit ring around the globe
    const ringGeometry = new THREE.TorusGeometry(GLOBE_RADIUS * 1.24, 0.012, 8, 220);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: "#a855f7",
      transparent: true,
      opacity: 0.32,
    });
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.rotation.x = Math.PI / 2.3;
    globe.add(ring);

    // Orbiting shards
    const shardGeometry = new THREE.TetrahedronGeometry(0.11);
    const shardMaterial = new THREE.MeshBasicMaterial({
      color: "#6d28d9",
      transparent: true,
      opacity: 0.65,
    });
    const shards = new THREE.InstancedMesh(shardGeometry, shardMaterial, SHARD_COUNT);
    const shardState = Array.from({ length: SHARD_COUNT }, () => ({
      radius: GLOBE_RADIUS * (1.12 + Math.random() * 0.45),
      speed: 0.08 + Math.random() * 0.22,
      phase: Math.random() * Math.PI * 2,
      tilt: (Math.random() - 0.5) * 1.4,
      spin: Math.random() * Math.PI,
    }));
    globe.add(shards);
    const shardDummy = new THREE.Object3D();

    // Distant drone sphere for depth
    const droneGeometry = new THREE.IcosahedronGeometry(0.7, 1);
    const droneMaterial = new THREE.MeshBasicMaterial({
      color: "#4f46e5",
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const drone = new THREE.Mesh(droneGeometry, droneMaterial);
    drone.position.set(-6, -2.4, -6);
    scene.add(drone);

    // Pointer parallax
    const parallax = { x: 0, y: 0 };
    const pointer = { x: 0, y: 0 };
    const onPointerMove = (event: PointerEvent) => {
      pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.y = (event.clientY / window.innerHeight) * 2 - 1;
    };

    const layout = () => {
      const width = host.clientWidth;
      const height = host.clientHeight;
      if (!width || !height) return;

      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      const isCompact = width / height < 1;
      if (isCompact) {
        globe.position.set(0, -2.4, -2);
        globe.scale.setScalar(0.8);
        pointMaterial.opacity = 0.5;
        shardMaterial.opacity = 0.5;
        drone.visible = false;
      } else {
        globe.position.set(3.9, 0.15, -2);
        globe.scale.setScalar(1);
        pointMaterial.opacity = 0.85;
        shardMaterial.opacity = 0.65;
        drone.visible = true;
      }

      if (reduceMotion) renderer.render(scene, camera);
    };

    const clock = new THREE.Clock();
    let frameId = 0;
    let active = false;
    let inViewport = true;

    const renderFrame = () => {
      const elapsed = clock.getElapsedTime();

      parallax.x += (pointer.x - parallax.x) * 0.045;
      parallax.y += (pointer.y - parallax.y) * 0.045;

      globe.rotation.y = elapsed * 0.075 + parallax.x * 0.35;
      globe.rotation.x = Math.sin(elapsed * 0.22) * 0.08 + parallax.y * 0.18;
      points.rotation.y = Math.sin(elapsed * 0.12) * 0.05;
      shell.rotation.y = -elapsed * 0.035;
      ring.rotation.z = elapsed * 0.35;

      drone.rotation.x = elapsed * 0.3;
      drone.rotation.y = elapsed * 0.42;
      drone.position.y = -2.4 + Math.sin(elapsed * 0.7) * 0.35;

      for (let i = 0; i < SHARD_COUNT; i++) {
        const shard = shardState[i];
        const angle = elapsed * shard.speed + shard.phase;
        shardDummy.position.set(
          Math.cos(angle) * shard.radius,
          Math.sin(angle * 1.3) * shard.radius * 0.55 * Math.cos(shard.tilt),
          Math.sin(angle) * shard.radius
        );
        shardDummy.rotation.set(angle * 1.7 + shard.spin, angle * 1.2, shard.spin);
        shardDummy.scale.setScalar(0.8 + Math.sin(elapsed * 1.6 + shard.phase) * 0.35);
        shardDummy.updateMatrix();
        shards.setMatrixAt(i, shardDummy.matrix);
      }
      shards.instanceMatrix.needsUpdate = true;

      camera.position.x = parallax.x * 0.55;
      camera.position.y = -parallax.y * 0.4;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(renderFrame);
    };

    const start = () => {
      if (active || reduceMotion || !inViewport) return;
      active = true;
      clock.getDelta();
      frameId = requestAnimationFrame(renderFrame);
    };

    const stop = () => {
      active = false;
      cancelAnimationFrame(frameId);
    };

    const resizeObserver = new ResizeObserver(layout);
    resizeObserver.observe(host);

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        inViewport = entries[0]?.isIntersecting ?? true;
        if (inViewport) {
          start();
        } else {
          stop();
        }
      },
      { threshold: 0.01 }
    );
    intersectionObserver.observe(host);

    const onVisibilityChange = () => {
      if (document.hidden) {
        stop();
      } else {
        start();
      }
    };

    if (!reduceMotion) {
      window.addEventListener("pointermove", onPointerMove, { passive: true });
      document.addEventListener("visibilitychange", onVisibilityChange);
    }

    layout();
    if (reduceMotion) {
      renderer.render(scene, camera);
    } else {
      start();
    }

    return () => {
      stop();
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("visibilitychange", onVisibilityChange);

      pointGeometry.dispose();
      pointMaterial.dispose();
      shellGeometry.dispose();
      shellMaterial.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
      shardGeometry.dispose();
      shardMaterial.dispose();
      shards.dispose();
      droneGeometry.dispose();
      droneMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-[1] h-full w-full"
    />
  );
}
