"use client";

import { ScrollView } from "@/components/scroll-view";
import {
  Layers,
  Globe,
  Search,
  Monitor,
  ShoppingCart,
  Smartphone,
  ClipboardList,
  BarChart2,
  CheckCircle,
  Rocket,
} from "lucide-react";

const services = [
  {
    icon: Layers,
    title: "Web Design",
    description:
      "We craft user-focused designs that are visually stunning, intuitive, and built to convert visitors into loyal customers.",
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Fast, scalable, and clean-coded websites tailored to your business goals using the latest modern technologies.",
  },
  {
    icon: Search,
    title: "SEO Marketing",
    description:
      "Dominate search rankings with our data-driven SEO strategies. More visibility, more traffic, more revenue.",
  },
  {
    icon: Monitor,
    title: "Ed Tech",
    description:
      "Seamless deployment from code to production — fast, secure, and reliable launches with zero downtime.",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce Solutions",
    description:
      "We build secure, scalable ecommerce stores optimized for sales, performance, and a smooth customer experience.",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description:
      "Custom mobile and web applications designed for performance, scalability, and a seamless user experience.",
  },
];

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Discovery & Planning",
    description:
      "We analyze your requirements and create a strategic roadmap tailored to your goals and timeline.",
  },
  {
    icon: BarChart2,
    step: "02",
    title: "Design & Development",
    description:
      "Our experts build your solution using cutting-edge technologies and industry best practices.",
  },
  {
    icon: CheckCircle,
    step: "03",
    title: "Testing & Optimization",
    description:
      "Rigorous quality checks ensure everything works perfectly, performs fast, and looks great before launch.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Launch & Support",
    description:
      "We deploy your project and provide ongoing support to ensure continued success and growth.",
  },
];

export default function ServicesAndProcess() {
  return (
    <>
      {/* ── SERVICES SECTION ── */}
      <section className="py-16 md:py-28 bg-white" id="services">
        <div className="mx-auto max-w-6xl px-6 space-y-14">

          {/* Header */}
          <div className="text-center space-y-3">
            <ScrollView>
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-500">
                Our Services
              </p>
            </ScrollView>
            <ScrollView delay={0.15}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Professional IT Services Built to Scale
              </h2>
            </ScrollView>
          </div>

          {/* Grid */}
          <ScrollView delay={0.2}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-x divide-y border border-gray-100 rounded-2xl overflow-hidden">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="group flex flex-col items-center text-center gap-4 p-10 hover:bg-blue-50 transition-colors duration-300"
                  >
                    <Icon
                      className="w-10 h-10 text-blue-500 group-hover:text-blue-600 transition-colors duration-300"
                      strokeWidth={1.5}
                    />
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </ScrollView>
        </div>
      </section>

      {/* ── WORK PROCESS SECTION ── */}
      <section className="py-16 md:py-28 bg-[#f0f6ff]" id="process">
        <div className="mx-auto max-w-6xl px-6 space-y-16">

          {/* Header */}
          <div className="text-center space-y-4">
            <ScrollView>
              <div className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm">
                <span className="w-5 h-px bg-blue-500" />
                Work Process
                <span className="w-5 h-px bg-blue-500" />
              </div>
            </ScrollView>
            <ScrollView delay={0.15}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                How We Deliver Results
              </h2>
            </ScrollView>
            <ScrollView delay={0.25}>
              <p className="text-gray-500 max-w-xl mx-auto">
                Our proven 4-step process ensures your project is delivered on
                time, within budget, and exceeding expectations.
              </p>
            </ScrollView>
          </div>

          {/* Steps */}
          <ScrollView delay={0.2}>
            <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

              {/* Dashed connecting line (desktop only) */}
              <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px border-t-2 border-dashed border-blue-300 z-0" />

              {steps.map((step, index) => {
                const Icon = step.icon;
               
                return (
                  <div
                    key={index}
                    className="relative z-10 flex flex-col items-center text-center gap-5"
                  >
                    {/* Circle */}
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 bg-blue-600 hover:bg-gray-900 cursor-pointer"
                      
                    >
                      <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                    </div>

                    {/* Step number badge */}
                    <span className="text-xs font-bold text-blue-500 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-full">
                      Step {step.step}
                    </span>

                    <h3 className="text-lg font-bold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </ScrollView>

        </div>
      </section>
    </>
  );
}