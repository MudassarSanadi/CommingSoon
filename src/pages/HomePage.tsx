import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  LayoutGrid,
  Smartphone,
  Database,
  Building2,
  Users,
  ShoppingBag,
  Shield,
  Cloud,
  Milk,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import type { PageType } from "../App";

interface HomePageProps {
  setCurrentPage: (page: PageType) => void;
}


function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(node);
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  const [heroLoaded, setHeroLoaded] = useState(false);

  const aboutSection = useInView<HTMLElement>();
  const servicesSection = useInView<HTMLElement>();
  const brandsSection = useInView<HTMLElement>();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    // trigger hero entrance on mount
    const t = requestAnimationFrame(() => setHeroLoaded(true));
    return () => cancelAnimationFrame(t);
  }, []);

  const services = [
    {
      icon: LayoutGrid,
      title: "Web Development",
      desc: "Scalable, high-performance web applications built with modern frameworks.",
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      desc: "Native and cross-platform mobile apps for iOS and Android.",
    },
    {
      icon: Database,
      title: "Custom Software",
      desc: "Bespoke software solutions designed around your exact business logic.",
    },
    {
      icon: Building2,
      title: "ERP Solutions",
      desc: "End-to-end enterprise resource planning for operations.",
    },
    {
      icon: Users,
      title: "CRM Systems",
      desc: "Customer relationship management for lead tracking and sales.",
    },
    {
      icon: ShoppingBag,
      title: "POS & Billing",
      desc: "Point-of-sale and intelligent billing systems.",
    },
    {
      icon: Shield,
      title: "Enterprise Automation",
      desc: "Intelligent automation that streamlines repetitive workflows.",
    },
    {
      icon: Cloud,
      title: "Cloud Applications",
      desc: "Cloud-native apps with real-time synchronization.",
    },
    {
      icon: Milk,
      title: "Milk Plant Machinery",
      desc: "Processing, utility, and reception equipment for dairy plants.",
    },
  ];

  const stats = [
    { value: "50+", label: "Projects Delivered" },
    { value: "12+", label: "Industry Verticals" },
    { value: "8+", label: "Years of Expertise" },
    { value: "99%", label: "Client Satisfaction" },
  ];

  const capabilities = [
    { label: "Web & Mobile", percentage: 95 },
    { label: "Enterprise ERP", percentage: 88 },
    { label: "Cloud Systems", percentage: 80 },
    { label: "CRM & Automation", percentage: 92 },
    { label: "Hardware Integration", percentage: 75 },
  ];

  const values = ["Precision", "Innovation", "Reliability", "Scalability"];

  return (
    <>
      <Helmet>
        <title>Home - Logic Shell | Intelligent Digital Ecosystems</title>
        <meta
          name="description"
          content="Logic Shell LLP delivers scalable digital solutions across web, mobile, enterprise systems, and cloud platforms for modern businesses."
        />
        <link rel="canonical" href="https://thelogicshell.com/" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Logic Shell | Intelligent Digital Ecosystems" />
        <meta
          property="og:description"
          content="Logic Shell LLP delivers scalable digital solutions across web, mobile, enterprise systems, and cloud platforms for modern businesses."
        />
        <meta property="og:url" content="https://thelogicshell.com/" />
        <meta property="og:image" content="https://thelogicshell.com/favicon.svg" />
        <meta property="og:site_name" content="Logic Shell" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Logic Shell | Intelligent Digital Ecosystems" />
        <meta
          name="twitter:description"
          content="Logic Shell LLP delivers scalable digital solutions across web, mobile, enterprise systems, and cloud platforms for modern businesses."
        />
        <meta name="twitter:image" content="https://thelogicshell.com/favicon.svg" />

        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://thelogicshell.com/' },
            ],
          })}
        </script>
      </Helmet>

      {/* Local keyframes — kept scoped here so no tailwind.config changes are needed */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes floatBlob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(10px, -14px) scale(1.05); }
        }
        @keyframes growBar {
          from { width: 0%; }
        }
        .reveal-hidden {
          opacity: 0;
          transform: translateY(24px);
        }
        .reveal-visible {
          animation: fadeInUp 0.7s ease-out forwards;
        }
      `}</style>

      <div>
        <section className="relative min-h-[calc(100vh-64px)] flex items-center overflow-hidden bg-linear-to-br from-blue-50 via-white to-indigo-50">
          <div
            className="absolute top-20 right-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"
            style={{ animation: "floatBlob 8s ease-in-out infinite" }}
          />
          <div
            className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl"
            style={{ animation: "floatBlob 10s ease-in-out infinite", animationDelay: "1.5s" }}
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="max-w-3xl">
              <div
                className="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 rounded-full px-4 py-1.5 mb-6 transition-all duration-700 ease-out"
                style={{
                  opacity: heroLoaded ? 1 : 0,
                  transform: heroLoaded ? "translateY(0)" : "translateY(16px)",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-xs font-semibold text-blue-600 tracking-wide">
                  where precision meets perfection
                </span>
              </div>

              <h1
                className="font-syne font-extrabold text-4xl sm:text-5xl md:text-6xl text-gray-900 leading-tight mb-5 transition-all duration-700 ease-out"
                style={{
                  opacity: heroLoaded ? 1 : 0,
                  transform: heroLoaded ? "translateY(0)" : "translateY(24px)",
                  transitionDelay: "100ms",
                }}
              >
                Building Intelligent
                <br />
                <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Digital Ecosystems
                </span>
                <br />
                for Modern Businesses
              </h1>

              <p
                className="text-gray-600 text-lg max-w-2xl leading-relaxed mb-8 transition-all duration-700 ease-out"
                style={{
                  opacity: heroLoaded ? 1 : 0,
                  transform: heroLoaded ? "translateY(0)" : "translateY(24px)",
                  transitionDelay: "220ms",
                }}
              >
                Logic Shell LLP delivers scalable digital solutions across web,
                mobile, enterprise systems, and cloud platforms.
              </p>

              <div
                className="flex flex-wrap gap-4 mb-12 transition-all duration-700 ease-out"
                style={{
                  opacity: heroLoaded ? 1 : 0,
                  transform: heroLoaded ? "translateY(0)" : "translateY(24px)",
                  transitionDelay: "340ms",
                }}
              >
                <button
                  onClick={() => setCurrentPage("services")}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-500 text-white font-semibold shadow-md shadow-blue-500/30 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                >
                  Explore Services{" "}
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
                <button
                  onClick={() => setCurrentPage("team")}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                >
                  Meet Our Team
                </button>
              </div>

              <div
                className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-gray-100 transition-all duration-700 ease-out"
                style={{
                  opacity: heroLoaded ? 1 : 0,
                  transform: heroLoaded ? "translateY(0)" : "translateY(24px)",
                  transitionDelay: "460ms",
                }}
              >
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className="transition-transform duration-300 hover:-translate-y-1"
                  >
                    <div className="font-syne font-bold text-2xl text-gray-900">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          ref={aboutSection.ref}
          className="py-16 bg-gray-50/50 border-y border-gray-100"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div
                className={aboutSection.inView ? "reveal-visible" : "reveal-hidden"}
              >
                <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 rounded-full px-3 py-1 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">
                    About Logic Shell
                  </span>
                </div>
                <h2 className="font-syne font-bold text-2xl md:text-3xl text-gray-900 mb-4">
                  Powering the Next Generation of Enterprise Software
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Logic Shell LLP is a technology solutions company focused on
                  building intelligent software ecosystems that power
                  businesses, automate operations, and enhance digital
                  transformation.
                </p>
                <div className="flex flex-wrap gap-2">
                  {values.map((v) => (
                    <span
                      key={v}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-sm font-medium text-gray-700 transition-all duration-300 hover:border-blue-300 hover:shadow-sm hover:-translate-y-0.5"
                    >
                      <CheckCircle2 size={12} className="text-blue-500" />
                      {v}
                    </span>
                  ))}
                </div>
              </div>

              <div
                className={`bg-white border border-blue-100 rounded-xl p-6 shadow-sm transition-shadow duration-300 hover:shadow-md ${
                  aboutSection.inView ? "reveal-visible" : "reveal-hidden"
                }`}
                style={{ animationDelay: aboutSection.inView ? "150ms" : undefined }}
              >
                <div className="text-xs font-bold tracking-wider uppercase text-blue-500 mb-5">
                  Capability Depth
                </div>
                <div className="space-y-4">
                  {capabilities.map((cap, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">{cap.label}</span>
                        <span className="font-semibold text-gray-800">
                          {cap.percentage}%
                        </span>
                      </div>
                      <div className="bg-gray-100 rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-linear-to-r from-blue-500 to-indigo-500 transition-[width] duration-1000 ease-out"
                          style={{
                            width: aboutSection.inView ? `${cap.percentage}%` : "0%",
                            transitionDelay: `${200 + i * 120}ms`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-4 border-t border-gray-100 text-xs text-gray-400">
                  Trusted across manufacturing, dairy, retail & more
                </div>
              </div>
            </div>
          </div>
        </section>

        <section ref={servicesSection.ref} className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`text-center mb-10 ${
                servicesSection.inView ? "reveal-visible" : "reveal-hidden"
              }`}
            >
              <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 rounded-full px-3 py-1 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">
                  What We Build
                </span>
              </div>
              <h2 className="font-syne font-bold text-3xl text-gray-900 mb-3">
                Core Service Offerings
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                From bespoke software to enterprise platforms — every solution
                engineered for precision and scale.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {services.map((service, i) => (
                <div
                  key={i}
                  className={`group bg-white border border-gray-100 rounded-xl p-5 hover:shadow-lg hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 cursor-pointer ${
                    servicesSection.inView ? "reveal-visible" : "reveal-hidden"
                  }`}
                  style={{
                    animationDelay: servicesSection.inView
                      ? `${i * 80}ms`
                      : undefined,
                  }}
                >
                  <div className="w-11 h-11 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-500 group-hover:scale-110 transition-all duration-300">
                    <service.icon
                      size={18}
                      className="text-blue-500 group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          ref={brandsSection.ref}
          className="py-10 bg-gray-50/50 border-y border-gray-100"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xs font-semibold text-blue-500 uppercase tracking-wider mb-5">
              Trusted By Businesses Worldwide
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {[
                "Tech Corp",
                "Global Industries",
                "Future Systems",
                "Eco Solutions",
                "Smart Retail",
              ].map((brand, i) => (
                <span
                  key={i}
                  className={`text-gray-500 font-semibold text-lg font-syne opacity-50 hover:opacity-90 transition-all duration-300 hover:scale-105 ${
                    brandsSection.inView ? "reveal-visible" : "reveal-hidden"
                  }`}
                  style={{
                    animationDelay: brandsSection.inView ? `${i * 90}ms` : undefined,
                  }}
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;