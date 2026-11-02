import { useRef, useState } from "react";
import { Play } from "lucide-react";
import Reveal from "@/components/reveal";

// Single source of truth for the marketing clip served from client/public/videos
const STORY_VIDEO_SRC = "/videos/hope-together-ad-wide.mp4";
const STORY_POSTER_SRC = "/videos/hope-together-ad-wide-poster.jpg";

export default function StoryVideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef<HTMLDivElement | null>(null);

  const startPlayback = () => {
    setIsPlaying(true);
    playerRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section id="story-video" className="py-24 bg-gradient-to-b from-white via-indigo-50/50 to-white relative overflow-hidden">
      <div className="absolute top-10 -left-24 w-80 h-80 bg-gradient-to-br from-indigo-200/30 to-purple-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 -right-24 w-80 h-80 bg-gradient-to-br from-pink-200/30 to-rose-200/20 rounded-full blur-3xl" />

      <div className="page-shell relative z-10">
        <Reveal className="max-w-3xl">
          <button
            type="button"
            onClick={startPlayback}
            aria-label="Play the Hope Together story video"
            className="inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full text-sm font-semibold text-indigo-700 mb-6 hover:bg-indigo-200 transition-colors"
            data-testid="button-play-story-badge"
          >
            <Play className="mr-2 h-4 w-4" fill="currentColor" />
            Our Story
          </button>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
            See the impact <span className="gradient-text">in motion</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-xl">
            Six seconds inside the work: communities reached, programs running, and the people behind the numbers.
          </p>
        </Reveal>

        <Reveal className="mt-10 w-full" y={28} delay={0.12}>
          <div ref={playerRef} className="relative aspect-video w-full overflow-hidden rounded-3xl shadow-2xl ring-1 ring-indigo-100 bg-gray-950">
            {isPlaying ? (
              <video
                src={STORY_VIDEO_SRC}
                poster={STORY_POSTER_SRC}
                className="h-full w-full object-cover"
                controls
                autoPlay
                playsInline
                data-testid="video-story"
              />
            ) : (
              <button
                type="button"
                onClick={startPlayback}
                aria-label="Play the Hope Together story video"
                className="group relative block h-full w-full text-left"
                data-testid="button-play-story"
              >
                <img
                  src={STORY_POSTER_SRC}
                  alt="Preview of the Hope Together story video"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  data-testid="img-story-poster"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white/95 shadow-2xl transition-transform duration-300 group-hover:scale-110">
                    <Play className="ml-1 h-9 w-9 text-indigo-600" fill="currentColor" />
                  </span>
                </span>
                <span className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="block text-xl font-bold">Hope Together — 0:06</span>
                  <span className="block text-sm text-white/80">Tap to play with sound</span>
                </span>
              </button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
