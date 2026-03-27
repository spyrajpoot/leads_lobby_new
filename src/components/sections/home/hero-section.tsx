"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/motion-primitives/text-effect";
import { AnimatedGroup } from "@/components/motion-primitives/animated-group";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background Image Container with Rounded Edges */}
      <div className="absolute inset-4 rounded-3xl overflow-hidden z-0">
        <img
          src="/images/nyc-background.jpg"
          alt="Background"
          className="w-full h-full object-cover filter blur-sm"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 text-center px-6 max-w-8xl mx-auto pt-24 md:pt-36">
        <div className="text-6xl md:text-8xl font-bold mb-6">
          <TextEffect
            preset="fade-in-blur"
            speedSegment={0.3}
            as="div"
            className="text-white drop-shadow-lg"
          >
            We Help Businesses
          </TextEffect>
          <TextEffect
            preset="fade-in-blur"
            speedSegment={0.3}
            delay={0.3}
            as="div"
            className="text-blue-400 drop-shadow-lg"
          >
            Generate More Leads.
          </TextEffect>
        </div>
        
        

        <AnimatedGroup
          variants={{
            container: {
              visible: {
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: 0.9,
                },
              },
            },
            ...transitionVariants,
          }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <Button asChild size="lg" className="rounded-xl px-8 bg-blue-500 hover:bg-blue-600 shadow-xl">
            <Link href="/contact">Get Started</Link>
          
          </Button>
        </AnimatedGroup>
      </div>
    </section>
  );
}