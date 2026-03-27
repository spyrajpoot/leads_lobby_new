"use client";

import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollView } from "./scroll-view";

const testimonials = [
  {
    name: "Omar Farooq",
    role: "IT Consultant",
    avatar: "", // add real image path when available
    fallback: "OF",
    review:
      "Exceptional web development services with cutting-edge technology. Clean code, modern design, and outstanding performance. They truly understand what businesses need online!",
    rating: 5,
  },
  {
    name: "Hina Abbas",
    role: "Brand Manager",
    avatar: "",
    fallback: "HA",
    review:
      "Our website redesign was handled perfectly from start to finish. The new look has elevated our brand significantly. Professional, creative, and technically excellent!",
    rating: 5,
  },
  {
    name: "Imran Yousaf",
    role: "E-Commerce Director",
    avatar: "",
    fallback: "IY",
    review:
      "Best decision we made was hiring them for our online store. Sales are up, customers are happy, and the backend is easy to manage. Highly skilled team!",
    rating: 5,
  },
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.offsetWidth / 3;
    const amount = direction === "right" ? cardWidth : -cardWidth;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });

    setActiveIndex((prev) =>
      direction === "right"
        ? Math.min(prev + 1, testimonials.length - 1)
        : Math.max(prev - 1, 0)
    );
  };

  return (
    <section className="py-16 md:py-32 bg-white" id="testimonials">
      <div className="mx-auto max-w-6xl space-y-12 px-6">

        {/* Header */}
        <div className="relative z-10 mx-auto max-w-xl space-y-4 text-center">
          <ScrollView>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-500">
              Client Reviews
            </p>
          </ScrollView>
          <ScrollView delay={0.2}>
            <h2 className="text-4xl font-bold lg:text-5xl text-gray-900">
              What Our Clients Say
            </h2>
          </ScrollView>
          <ScrollView delay={0.3}>
            <p className="text-gray-500">
              Real feedback from real businesses we've helped grow online.
            </p>
          </ScrollView>
        </div>

        {/* Slider */}
        <ScrollView delay={0.3}>
          <div className="relative">
            {/* Left Arrow */}
            <button
              onClick={() => scroll("left")}
              className="absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-blue-500 hover:bg-blue-600 flex items-center justify-center shadow-lg transition-all duration-300"
              aria-label="Previous"
            >
              <ArrowLeft className="w-4 h-4 text-white" />
            </button>

            {/* Cards container */}
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth px-2 pr-12 "
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {testimonials.map((t, index) => (
                <div
                  key={index}
                  className="snap-start flex-shrink-0 w-[85vw] sm:w-[380px] min-w-[280px] bg-[#f0f6ff] rounded-2xl p-8 flex flex-col items-center text-center gap-5 border border-blue-100 hover:shadow-lg hover:border-blue-300 transition-all duration-300"
                >
                  {/* Avatar — floats above card like screenshot */}
                  <div className="relative -mt-14">
                    <div className="w-20 h-20 rounded-full border-4 border-blue-500 bg-white overflow-hidden shadow-lg">
                      <Avatar className="w-full h-full">
                        <AvatarImage
                          src={t.avatar}
                          alt={t.name}
                          className="object-cover"
                        />
                        <AvatarFallback className="text-xl font-bold text-blue-600 bg-blue-50">
                          {t.fallback}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-blue-500 text-blue-500"
                      />
                    ))}
                  </div>

                  {/* Review text */}
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {t.review}
                  </p>

                  {/* Divider */}
                  <div className="w-12 h-px bg-blue-200" />

                  {/* Name & role */}
                  <div>
                    <p className="font-bold text-gray-900">{t.name}</p>
                    <p className="text-sm text-blue-500 font-medium">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => scroll("right")}
              className="absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-blue-500 hover:bg-blue-600 flex items-center justify-center shadow-lg transition-all duration-300"
              aria-label="Next"
            >
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </ScrollView>

        {/* Note about adding more reviews */}
        <p className="text-center text-xs text-gray-400 italic">
          More reviews coming soon — we're just getting started 🚀
        </p>

      </div>
    </section>
  );
}