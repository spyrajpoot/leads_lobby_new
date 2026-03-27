"use client";
import Services from "@/components/sections/home/services";

export default function ServicesPage() {
  return (
    <>
      {/* Background Image - Only behind content, not footer */}
      <div className="absolute inset-0 z-0" style={{ height: 'fit-content', minHeight: '100vh' }}>
        <div className="sticky top-0 h-screen">
          <img
            src="/Services.jpeg"
            alt="Services Background"
            className="w-full h-full object-cover filter blur-[2px]"
          />
          <div className="absolute inset-0 bg-white/30"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <main>
          {/* Hero Section */}
          <section className="relative pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 drop-shadow-lg">
                Our Services
              </h1>
              <p className="text-xl text-gray-800 max-w-2xl mx-auto drop-shadow-md">
                Comprehensive digital solutions to help your business grow and succeed
              </p>
            </div>
          </section>

          {/* Services Content */}
          <section className="py-12 px-6 pb-20">
            <Services />
          </section>
        </main>
      </div>
    </>
  );
}