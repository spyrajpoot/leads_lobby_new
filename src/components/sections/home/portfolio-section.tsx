import { ArrowRight, Globe, Search, Rocket, Code2, BarChart3, Shield } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "We help businesses go online with fast, scalable websites tailored to your goals. Clean code, modern tech, and seamless performance.",
  },
  {
    icon: Search,
    title: "SEO Marketing",
    description:
      "Optimize your online presence with our expert SEO services. We boost your rankings, drive traffic, and increase conversions.",
  },
  {
    icon: Rocket,
    title: "App Deployment",
    description:
      "Seamless deployment from code to production. We ensure fast, secure, and reliable launches with zero downtime and maximum performance.",
  },
  
];

export default function ServicesSection() {
  return (
    <section
      className="relative py-20 md:py-32 overflow-hidden bg-[#f0f6ff]"
      id="services"
    >
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-20 -left-20 w-72 h-72 rounded-full bg-blue-100 opacity-60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-blue-200 opacity-40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-500">
            Our Services
          </p>
          <h2 className="text-4xl md:text-4xl font-bold text-gray-900 leading-tight">
           Professional Web, SEO & App Services for 
            <br className="hidden md:block" /> Forward-Thinking Businesses
          </h2>
         
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-blue-50 hover:border-blue-200 overflow-hidden"
              >
                {/* Decorative wave bottom */}
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 opacity-5">
                  <svg
                    viewBox="0 0 400 60"
                    preserveAspectRatio="none"
                    className="w-full h-full"
                  >
                    <path
                      d="M0,30 C100,60 300,0 400,30 L400,60 L0,60 Z"
                      fill="#2563eb"
                    />
                  </svg>
                </div>

                {/* Subtle hover gradient */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative">
                  {/* Icon */}
                  <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300">
                    <Icon
                      className="w-7 h-7 text-blue-500 group-hover:text-blue-600 transition-colors duration-300"
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Learn more link */}
                  <div className="mt-6 flex items-center gap-1 text-sm font-semibold text-blue-500 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/services"
            className="hover:bg-white bg-white group flex w-fit items-center gap-4 rounded-full border-2 border-blue-500 p-1 pl-6 shadow-md hover:shadow-xl transition-all duration-300"
          >
            <span className="text-gray-800 text-base font-semibold">
              Explore All Services
            </span>
            <span className="block h-8 w-px bg-blue-200"></span>
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
