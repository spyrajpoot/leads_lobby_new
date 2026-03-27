"use client";

import { ArrowRight, CheckCircle2, Users, Lightbulb, TrendingUp } from "lucide-react";
import Link from "next/link";

const features = [
  "Expert development team",
  "SEO-optimized solutions",
  "100% client satisfaction",
];

const stats = [
  { icon: Users, value: "150+", label: "Clients Served" },
  { icon: TrendingUp, value: "98%", label: "Success Rate" },
  { icon: Lightbulb, value: "5+", label: "Years Experience" },
];

export default function AboutSection() {
  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden" id="about">
      {/* Subtle background accent */}
      <div className="pointer-events-none absolute top-0 right-0 w-1/2 h-full bg-[#f0f6ff] rounded-l-[80px]" />
      <div className="pointer-events-none absolute -bottom-10 left-0 w-72 h-72 rounded-full bg-blue-50 blur-3xl opacity-70" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── LEFT: Text Content ── */}
          <div className="space-y-7">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              About Us
            </span>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Your trusted partner for{" "}
              <span className="text-blue-600">digital transformation</span>{" "}
              and IT excellence.
            </h2>

            {/* Lead paragraph */}
            <p className="text-lg text-blue-600 font-medium leading-relaxed">
              We deliver cutting-edge web development, mobile apps, SEO strategies,
              and ecommerce solutions that drive real business growth.
            </p>

            {/* Body paragraph */}
            <p className="text-gray-500 leading-relaxed">
              From startups to established enterprises, we help businesses leverage
              modern technology to scale faster, reach more customers, and achieve
              their digital goals. Our team combines technical expertise with
              creative thinking to build solutions that work.
            </p>

            {/* Key features */}
            <ul className="space-y-3">
              {features.map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="pt-2">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3.5 rounded-full shadow-lg hover:shadow-blue-200 hover:shadow-xl transition-all duration-300"
              >
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8 pt-4 border-t border-gray-100">
              {stats.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-blue-500" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-xl font-bold text-gray-900">{s.value}</p>
                      <p className="text-xs text-gray-400">{s.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── RIGHT: Image Frame ── */}
          <div className="relative flex justify-center items-center">
            {/* Outer decorative ring */}
            <div className="absolute w-[340px] h-[340px] md:w-[420px] md:h-[420px] rounded-full border-2 border-dashed border-blue-200 animate-[spin_30s_linear_infinite]" />

            {/* Floating badge — top right */}
            <div className="absolute top-4 right-4 md:top-8 md:right-0 z-20 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2 border border-blue-50">
              <span className="text-2xl">🚀</span>
              <div>
                <p className="text-xs font-bold text-gray-900">Projects Delivered</p>
                <p className="text-xs text-gray-400">200+ worldwide</p>
              </div>
            </div>

            {/* Floating badge — bottom left */}
            <div className="absolute bottom-4 left-4 md:bottom-8 md:left-0 z-20 bg-blue-600 rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              <div>
                <p className="text-xs font-bold text-white">Client Rating</p>
                <p className="text-xs text-blue-200">4.9 / 5.0</p>
              </div>
            </div>

            {/* Main image container */}
            <div className="relative z-10 w-[280px] h-[340px] md:w-[340px] md:h-[420px]">
              {/* Shadow layer */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-blue-200 translate-x-4 translate-y-4" />
              {/* Blue accent border */}
              <div className="absolute inset-0 rounded-[2.5rem] border-4 border-blue-500 translate-x-2 translate-y-2" />
              {/* Image */}
              <div className="relative rounded-[2.5rem] overflow-hidden w-full h-full bg-blue-50 border-4 border-white shadow-2xl">
                <img
                  src="/portfolio/About.jpeg"
                  alt="Our team at work"
                  className="w-full h-full object-cover"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
              </div>
            </div>

            {/* Dot grid decoration */}
            <div
              className="absolute bottom-0 right-0 w-24 h-24 opacity-20"
              style={{
                backgroundImage: "radial-gradient(circle, #2563eb 1.5px, transparent 1.5px)",
                backgroundSize: "10px 10px",
              }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}