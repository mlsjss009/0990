import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Reveal from "@/components/reveal";
import {
  Package, Droplets, Shirt, GraduationCap, HeartHandshake, HandHeart, UserCheck, ShieldAlert,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Service = {
  title: string;
  kicker: string;
  description: string;
  icon: LucideIcon;
  image: string;
};

const services: Service[] = [
  {
    title: "Food parcels & community kitchens",
    kicker: "Fighting hunger, one family at a time",
    description:
      "Groceries, cooked meals, bread and milk for families under pressure, plus soup-kitchen outreach for people living on the street.",
    icon: Package,
    image: "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Hygiene & dignity packs",
    kicker: "Everyone deserves to feel valued",
    description:
      "Soap, toothpaste, sanitary pads and personal-care essentials packed with dignity for people in hardship.",
    icon: Droplets,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Clothing & blankets",
    kicker: "Sharing warmth",
    description: "Clothing, shoes and warm blankets for homeless people, children and low-income families.",
    icon: Shirt,
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Children & learners",
    kicker: "A fair chance",
    description: "Stationery, school shoes, uniforms and lunch packs for learners from disadvantaged backgrounds.",
    icon: GraduationCap,
    image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Care for older people",
    kicker: "Love and respect",
    description: "Groceries, errands, companionship and referrals for older people living alone.",
    icon: HeartHandshake,
    image: "https://images.unsplash.com/photo-1516307365426-bea591f05011?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Feeding the homeless",
    kicker: "A meal today, hope for tomorrow",
    description: "Soup kitchens, hot meal drives and outreach visits for people experiencing homelessness.",
    icon: HandHeart,
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Job readiness",
    kicker: "Empowering through opportunity",
    description: "CV preparation, applications, interview practice and referrals to training.",
    icon: UserCheck,
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Emergency family support",
    kicker: "Standing with families",
    description: "Essential supplies and referrals for families affected by job loss, fire, illness or bereavement.",
    icon: ShieldAlert,
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
];

const ROTATE_MS = 4000;

export default function ServicesBento() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion || paused) return;

    const id = window.setInterval(() => {
      if (document.hidden) return;
      setActive((index) => (index + 1) % services.length);
    }, ROTATE_MS);

    return () => window.clearInterval(id);
  }, [reduceMotion, paused]);

  const featured = services[active];
  const secondary = services[(active + 4) % services.length];

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-200/25 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-pink-200/25 to-transparent rounded-full blur-3xl" />

      <div className="page-shell relative z-10">
        <Reveal className="text-center mb-14">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-sm font-semibold text-purple-700 mb-6">
            <HandHeart className="mr-2 h-4 w-4" />
            Practical Help
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-ngo-neutral-dark mb-5">
            Support that reaches <span className="gradient-text">people first</span>
          </h2>
          <p className="text-lg text-ngo-neutral max-w-3xl mx-auto leading-relaxed">
            Small, consistent acts of kindness — food, clothing, dignity and a way forward — delivered through
            our community outreach.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          {/* Anchor: food relief */}
          <Reveal className="col-span-2 lg:col-span-3 lg:row-span-2" y={28}>
            <article
              className="group relative h-full min-h-[320px] overflow-hidden rounded-3xl shadow-xl"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onFocus={() => setPaused(true)}
              onBlur={() => setPaused(false)}
              data-testid="service-billboard"
              data-active={active}
            >
              <AnimatePresence initial={false}>
                <motion.img
                  key={featured.image}
                  src={featured.image}
                  alt={featured.title}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-tr from-[#1b0b3a]/90 via-[#3b0a45]/55 to-transparent" />
              <div className="relative h-full p-7 lg:p-9 flex flex-col text-white">
                <motion.div
                  key={featured.title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="flex-1 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-semibold backdrop-blur">
                      {featured.kicker}
                    </span>
                    <span className="text-[11px] font-semibold tabular-nums text-white/60">
                      {String(active + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <h3
                      className="text-2xl lg:text-4xl font-extrabold leading-tight max-w-[16ch]"
                      data-testid="service-billboard-title"
                    >
                      {featured.title}
                    </h3>
                    <p className="mt-3 text-sm lg:text-base text-white/80 max-w-md leading-relaxed">
                      {featured.description}
                    </p>
                  </div>
                </motion.div>
                <div className="mt-5 flex items-center gap-1.5">
                  {services.map((service, index) => (
                    <button
                      key={service.title}
                      type="button"
                      onClick={() => setActive(index)}
                      aria-label={`Show ${service.title}`}
                      aria-current={index === active}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        index === active ? "w-8 bg-white" : "w-3 bg-white/40 hover:bg-white/70"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </article>
          </Reveal>

          {/* Anchor: dignity — second rotating banner */}
          <Reveal className="col-span-2 lg:col-span-3 lg:row-span-2" y={28} delay={0.12}>
            <article
              className="group relative h-full min-h-[240px] overflow-hidden rounded-3xl shadow-xl"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onFocus={() => setPaused(true)}
              onBlur={() => setPaused(false)}
              data-testid="service-billboard-secondary"
              data-active={(active + 4) % services.length}
            >
              <AnimatePresence initial={false}>
                <motion.img
                  key={secondary.image}
                  src={secondary.image}
                  alt={secondary.title}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1330]/90 via-[#0b1330]/35 to-transparent" />
              <div className="relative h-full p-7 lg:p-9 flex flex-col justify-end text-white">
                <motion.div
                  key={secondary.title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <span className="text-[11px] font-semibold text-white/70">{secondary.kicker}</span>
                    <span className="text-[11px] font-semibold tabular-nums text-white/50">
                      {String(((active + 4) % services.length) + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
                    </span>
                  </div>
                  <h3
                    className="text-2xl lg:text-3xl font-extrabold leading-tight"
                    data-testid="service-billboard-secondary-title"
                  >
                    {secondary.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/80 max-w-sm leading-relaxed">{secondary.description}</p>
                </motion.div>
              </div>
            </article>
          </Reveal>

          {/* Clothing */}
          <Card className="col-span-1 lg:col-span-2 rounded-3xl border-0 shadow-lg bg-white p-6 hover:shadow-2xl transition-all duration-300">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mb-4">
              <Shirt className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-lg font-bold text-ngo-neutral-dark mb-1">{services[2].title}</h3>
            <p className="text-sm text-ngo-neutral leading-relaxed">{services[2].description}</p>
          </Card>

          {/* Children */}
          <Card className="col-span-1 lg:col-span-2 rounded-3xl border-0 shadow-lg bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-6 hover:shadow-2xl transition-all duration-300">
            <div className="w-11 h-11 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center mb-4">
              <GraduationCap className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-lg font-bold text-white mb-1">{services[3].title}</h3>
            <p className="text-sm text-white/85 leading-relaxed">{services[3].description}</p>
          </Card>

          {/* Older people */}
          <Card className="col-span-2 lg:col-span-2 rounded-3xl border-0 shadow-lg bg-white p-6 hover:shadow-2xl transition-all duration-300">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-4">
              <HeartHandshake className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-lg font-bold text-ngo-neutral-dark mb-1">{services[4].title}</h3>
            <p className="text-sm text-ngo-neutral leading-relaxed">{services[4].description}</p>
          </Card>

          {/* Homeless */}
          <Card className="col-span-1 lg:col-span-2 rounded-3xl border-0 shadow-lg bg-white p-6 hover:shadow-2xl transition-all duration-300">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center mb-4">
              <HandHeart className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-lg font-bold text-ngo-neutral-dark mb-1">{services[5].title}</h3>
            <p className="text-sm text-ngo-neutral leading-relaxed">{services[5].description}</p>
          </Card>

          {/* Jobs */}
          <Card className="col-span-1 lg:col-span-2 rounded-3xl border-0 shadow-lg bg-white p-6 hover:shadow-2xl transition-all duration-300">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center mb-4">
              <UserCheck className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-lg font-bold text-ngo-neutral-dark mb-1">{services[6].title}</h3>
            <p className="text-sm text-ngo-neutral leading-relaxed">{services[6].description}</p>
          </Card>

          {/* Emergency */}
          <Card className="col-span-2 lg:col-span-2 rounded-3xl border-0 shadow-lg bg-[#0f172a] p-6 hover:shadow-2xl transition-all duration-300">
            <div className="w-11 h-11 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center mb-4">
              <ShieldAlert className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-lg font-bold text-white mb-1">{services[7].title}</h3>
            <p className="text-sm text-white/70 leading-relaxed">{services[7].description}</p>
          </Card>
        </div>
      </div>
    </section>
  );
}
