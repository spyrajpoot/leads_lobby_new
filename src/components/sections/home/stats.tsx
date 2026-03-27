"use client";

import { useEffect, useRef, useState } from "react";
import { ScrollView } from "@/components/scroll-view";
import { motion } from "motion/react";

// Hook: counts from 0 to `end` when `inView` becomes true
function useCountUp(end: number, duration: number = 2000, inView: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, end, duration]);

  return count;
}

// Individual stat with its own intersection observer
function StatCard({
  end,
  suffix,
  prefix,
  label,
}: {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const count = useCountUp(end, 2000, inView);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // only trigger once
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
        visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
      }}
      className="space-y-4 py-8 md:py-0 text-center"
    >
      <div className="text-5xl font-bold tabular-nums">
        {prefix}
        {count}
        {suffix}
      </div>
      <p className="text-muted-foreground">{label}</p>
    </motion.div>
  );
}

export default function StatsSection() {
  return (
    <section className="py-12 md:py-20" id="stats">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
          <ScrollView>
            <h2 className="text-4xl font-medium lg:text-5xl">
              Driven by Design. Backed by Results.
            </h2>
          </ScrollView>
          <ScrollView delay={0.2}>
            <p>
              At Leads Lobby, we don't just make things look good — we create
              thoughtful digital experiences that help businesses grow, connect
              with their audience, and stand out in a crowded digital world.
            </p>
          </ScrollView>
        </div>

        <ScrollView stagger delay={0.04}>
          <div className="grid gap-0 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
            <StatCard end={120} suffix="+" label="Projects Launched" />
            <StatCard end={40} suffix="%" label="Average Client Growth" />
            <StatCard end={5} suffix="+" label="Years in the Game" />
          </div>
        </ScrollView>
      </div>
    </section>
  );
}