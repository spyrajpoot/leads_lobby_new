"use client";

import { useRef } from "react";
import { ArrowRight, ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const PROJECTS_LIST = [
  {
    name: "Taleem Ka Safar",
    category: "Education Platform",
    description:
      "Pakistan's first free test preparation platform designed to help students excel in their academic journey.",
    img: "/portfolio/taleem.png",
    url: "https://www.taleemkasafar.com",
    bgColor: "bg-purple-600",
    tags: ["Next.js", "SEO", "LMS"],
  },
  {
    name: "The Ignite",
    category: "Event & Promotions",
    description:
      "Vibrant promotional page for high school prom parties with ticket booking, photo galleries, and theme selection.",
    img: "/portfolio/Theignite.png",
    url: "#",
    bgColor: "bg-gray-800",
    tags: ["React", "UI/UX", "Booking"],
  },
  {
    name: "Al Taj Ristorante",
    category: "Restaurant Website",
    description:
      "Elegant restaurant website with menu showcase, online reservations, and location information for an Italian dining experience.",
    img: "/portfolio/altaj.png",
    url: "https://www.altaj-ristorante.it/",
    bgColor: "bg-blue-900",
    tags: ["Web Design", "Reservations", "Multilingual"],
  },
  {
    name: "AQ Solar Solutions",
    category: "Energy & Solar",
    description:
      "Your trusted partner in cutting energy bills. A modern landing page built to generate leads and showcase solar offerings.",
    img: "/portfolio/altaj.png",
    url: "#",
    bgColor: "bg-blue-600",
    tags: ["Landing Page", "Lead Gen", "SEO"],
  },
];

export default function ProjectsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.offsetWidth * 0.75;
    scrollRef.current.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-20 md:py-32 bg-white overflow-hidden" id="projects">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-500">
              Our Projects
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Work We're{" "}
              <span className="text-blue-600">Proud Of</span>
            </h2>
          </div>

          {/* Arrow controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              className="group w-11 h-11 rounded-full border-2 border-gray-200 hover:border-blue-500 flex items-center justify-center transition-all duration-300 hover:bg-blue-50"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-4 h-4 text-gray-500 group-hover:text-blue-500 transition-colors" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="group w-11 h-11 rounded-full border-2 border-blue-500 bg-blue-500 hover:bg-blue-600 flex items-center justify-center transition-all duration-300"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        {/* Horizontal scroll container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {PROJECTS_LIST.map((project, index) => (
            <div
              key={index}
              className="snap-start flex-shrink-0 w-[85vw] sm:w-[420px] md:w-[460px] group"
            >
              <Link href={project.url} target="_blank" rel="noopener noreferrer">
                {/* Image card */}
                <div
                  className={`${project.bgColor} rounded-2xl p-3 relative overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500`}
                >
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 z-10 rounded-2xl flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white rounded-full p-3 shadow-xl">
                      <ExternalLink className="w-5 h-5 text-blue-600" />
                    </div>
                  </div>

                  <Image
                    src={project.img}
                    alt={project.name}
                    width={720}
                    height={405}
                    className="rounded-xl w-full aspect-[16/10] object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>

                {/* Text below */}
                <div className="mt-5 space-y-2 px-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-widest text-blue-500">
                      {project.category}
                    </span>
                    <div className="flex gap-1">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-[10px] px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 font-medium border border-blue-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {project.name}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Scroll indicator dots */}
        <div className="flex justify-center gap-2 mt-8">
          {PROJECTS_LIST.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === 0 ? "w-6 bg-blue-500" : "w-1.5 bg-gray-200"
              }`}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-14 flex justify-center">
          <Link
            href="/portfolio"
            className="hover:bg-gray-50 bg-white group flex w-fit items-center gap-4 rounded-full border-2 border-blue-500 p-1 pl-6 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <span className="text-gray-800 text-base font-semibold">
              Explore All Projects
            </span>
            <span className="block h-8 w-px bg-blue-200" />
            <div className="bg-blue-500 group-hover:bg-blue-600 size-8 overflow-hidden rounded-full duration-500 -rotate-45">
              <div className="flex w-16 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                <span className="flex size-8">
                  <ArrowRight className="m-auto size-4 text-white" />
                </span>
                <span className="flex size-8">
                  <ArrowRight className="m-auto size-4 text-white" />
                </span>
              </div>
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
}