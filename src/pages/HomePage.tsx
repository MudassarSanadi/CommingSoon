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
  Code2,
  Droplet,
  FlaskConical,
  Gauge,
  Monitor,
  Wifi,
  Link,
  Factory,
  Award,
  TrendingUp,
  Eye,
} from "lucide-react";
import type { PageType } from "../App";
import EcosystemDiagram, { ecosystemNodes } from "../components/EcosystemDiagram";
import ServiceOrbitDiagram from "../components/ServiceOrbitDiagram";
import HeroSlider from "../components/HeroSlider";

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
  const serviceOrbitSection = useInView<HTMLElement>();
  const brandsSection = useInView<HTMLElement>();
  const dairyHeroSection = useInView<HTMLElement>();
  const ecosystemSection = useInView<HTMLElement>();
  const dairySolutionsSection = useInView<HTMLElement>();
  const whyChooseSection = useInView<HTMLElement>();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    const t = requestAnimationFrame(() => setHeroLoaded(true));
    return () => cancelAnimationFrame(t);
  }, []);

  const softwareServices = [
    {
      icon: Code2,
      title: "Custom Software Development",
      desc: "Bespoke software solutions designed around your exact business logic and workflows.",
    },
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
      icon: Database,
      title: "Database & Backend Systems",
      desc: "Robust, secure backend architecture built to scale with your business.",
    },
  ];

  const machineryServices = [
    {
      icon: Milk,
      title: "Dairy Plant Machinery",
      desc: "Processing, utility, reception & storage equipment for dairy plants — pasteurizers, homogenizers, CIP systems & more.",
    },
  ];

  const dairySolutions = [
    {
      icon: Droplet,
      title: "Milk Collection Systems",
      desc: "Automated milk collection solutions for accurate measurement of milk quantity, Fat, SNF and other quality parameters, with seamless data capture and digital records.",
    },
    {
      icon: FlaskConical,
      title: "Milk Testing & Quality Solutions",
      desc: "Reliable milk testing and quality measurement solutions that help dairies monitor milk quality and maintain transparency throughout procurement.",
    },
    {
      icon: Gauge,
      title: "Weighing & Measurement Solutions",
      desc: "Smart weighing and measurement systems designed for accurate milk quantity recording and integration with milk collection software.",
    },
    {
      icon: Monitor,
      title: "Dairy Management Software",
      desc: "Powerful software solutions for milk procurement, farmer management, collection management, rate management, billing, payments, deductions, accounting and reporting.",
    },
    {
      icon: Smartphone,
      title: "Mobile & Digital Solutions",
      desc: "Mobile and web applications that connect farmers, collection centers, field staff and dairy management with real-time information.",
    },
    {
      icon: Wifi,
      title: "Monitoring & Automation",
      desc: "Connected solutions for monitoring dairy operations, equipment, milk collection and critical processes—helping reduce manual work and improve operational visibility.",
    },
    {
      icon: Link,
      title: "Hardware & Software Integration",
      desc: "We integrate dairy equipment such as milk analyzers, weighing systems, collection devices, printers and other field equipment with software platforms for a seamless digital workflow.",
    },
    {
      icon: Factory,
      title: "Dairy Enterprise Solutions",
      desc: "Integrated solutions for dairy organizations covering procurement, collection, processing, inventory, sales, finance, farmer payments and management reporting.",
    },
  ];

  const whyChooseItems = [
    {
      icon: Milk,
      title: "Dairy-Focused Technology",
      desc: "Our solutions are designed around the specific operational requirements of the dairy industry.",
    },
    {
      icon: Link,
      title: "Equipment + Software",
      desc: "We bring together dairy equipment, software and digital automation to create connected solutions rather than isolated systems.",
    },
    {
      icon: Database,
      title: "Accurate Data",
      desc: "Automated data capture reduces manual entry, improves accuracy and provides reliable information for decision-making.",
    },
    {
      icon: Wifi,
      title: "End-to-End Connectivity",
      desc: "Connect milk collection centers, farmers, analyzers, weighing systems and management software through a unified digital ecosystem.",
    },
    {
      icon: TrendingUp,
      title: "Scalable Solutions",
      desc: "Our technology can support individual milk collection centers as well as growing dairy cooperatives, milk unions and larger dairy operations.",
    },
    {
      icon: Eye,
      title: "Better Transparency",
      desc: "Digital records, automated calculations and real-time information help improve transparency in milk procurement, farmer payments and dairy operations.",
    },
    {
      icon: Shield,
      title: "Reliable Support",
      desc: "We provide implementation, integration and technical support to help dairy organizations operate their systems effectively.",
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
    { label: "Dairy Machinery Manufacturing", percentage: 75 },
  ];

  const values = ["Precision", "Innovation", "Reliability", "Scalability"];

  return (
    <>
      <Helmet>
        <title>Home - Logic Shell | Intelligent Digital Ecosystems</title>
        <meta
          name="description"
          content="Logic Shell LLP delivers custom software solutions across web, mobile, enterprise systems, and cloud platforms — plus dairy plant machinery manufacturing for the dairy industry."
        />
        <link rel="canonical" href="https://thelogicshell.com/" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Logic Shell | Intelligent Digital Ecosystems" />
        <meta
          property="og:description"
          content="Logic Shell LLP delivers custom software solutions across web, mobile, enterprise systems, and cloud platforms — plus dairy plant machinery manufacturing for the dairy industry."
        />
        <meta property="og:url" content="https://thelogicshell.com/" />
        <meta property="og:image" content="https://thelogicshell.com/favicon.svg" />
        <meta property="og:site_name" content="Logic Shell" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Logic Shell | Intelligent Digital Ecosystems" />
        <meta
          name="twitter:description"
          content="Logic Shell LLP delivers custom software solutions across web, mobile, enterprise systems, and cloud platforms — plus dairy plant machinery manufacturing."
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
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        @keyframes flowDash {
          to { stroke-dashoffset: -24; }
        }
        @keyframes coreMsgShine {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes hubRing {
          0% { box-shadow: 0 0 0 0 rgba(99,102,241,0.45); }
          70% { box-shadow: 0 0 0 12px rgba(99,102,241,0); }
          100% { box-shadow: 0 0 0 0 rgba(99,102,241,0); }
        }
        .reveal-hidden {
          opacity: 0;
          transform: translateY(24px);
        }
        .reveal-visible {
          animation: fadeInUp 0.7s ease-out forwards;
        }
        .core-msg-shine {
          background: linear-gradient(
            110deg,
            #1e3a8a 0%,
            #1e3a8a 35%,
            #60a5fa 45%,
            #ffffff 50%,
            #60a5fa 55%,
            #1e3a8a 65%,
            #1e3a8a 100%
          );
          background-size: 220% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: coreMsgShine 5s ease-in-out infinite;
        }
        .flow-connector {
          stroke-dasharray: 6 6;
          animation: flowDash 1.4s linear infinite;
        }
        .flow-connector-vert {
          stroke-dasharray: 6 6;
          animation: flowDash 1.4s linear infinite;
        }
        .hub-icon-ring {
          animation: hubRing 2.2s ease-out infinite;
        }
      `}</style>

      <div>
 <HeroSlider/>
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


              <div
                className="relative flex items-start gap-3 mb-6 pl-4 border-l-2 border-blue-400 transition-all duration-700 ease-out"
                style={{
                  opacity: heroLoaded ? 1 : 0,
                  transform: heroLoaded ? "translateX(0)" : "translateX(-16px)",
                  transitionDelay: "60ms",
                }}
              >
                <Link size={18} className="text-blue-500 mt-1 shrink-0" />
                <p className="font-syne font-bold text-lg sm:text-xl leading-snug core-msg-shine">
                  Integrated Dairy Technology Solutions — Equipment, Software &amp; Automation.
                </p>
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
                Logic Shell LLP delivers custom software solutions across web,
                mobile, enterprise systems, and cloud platforms — and
                manufactures dairy plant machinery for the dairy industry.
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
                  building custom software ecosystems that power businesses,
                  automate operations, and enhance digital transformation. We
                  also manufacture dairy plant machinery, bringing the same
                  precision engineering to the physical side of the dairy
                  industry.
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
                From custom software to dairy plant machinery — every
                solution engineered for precision and scale.
              </p>
            </div>

            <div className="mb-4 flex items-center gap-2">
              <Code2 size={16} className="text-blue-500" />
              <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wide">
                Custom Software & Digital Solutions
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
              {softwareServices.map((service, i) => (
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

            <div className="mb-4 flex items-center gap-2">
              <Milk size={16} className="text-indigo-500" />
              <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wide">
                Machinery Manufacturing — Dairy Industry Only
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {machineryServices.map((service, i) => (
                <div
                  key={i}
                  className={`group bg-linear-to-br from-indigo-50 to-white border border-indigo-100 rounded-xl p-5 hover:shadow-lg hover:border-indigo-300 hover:-translate-y-1 transition-all duration-300 cursor-pointer sm:col-span-2 ${
                    servicesSection.inView ? "reveal-visible" : "reveal-hidden"
                  }`}
                  style={{
                    animationDelay: servicesSection.inView
                      ? `${(softwareServices.length + i) * 80}ms`
                      : undefined,
                  }}
                >
                  <div className="w-11 h-11 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-4 group-hover:bg-indigo-500 group-hover:scale-110 transition-all duration-300">
                    <service.icon
                      size={18}
                      className="text-indigo-500 group-hover:text-white transition-colors duration-300"
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

        {/* ================= SERVICE ORBIT DIAGRAM ================= */}
        <section
          ref={serviceOrbitSection.ref}
          className="py-16 bg-gray-50/50 border-y border-gray-100 overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`text-center mb-10 ${
                serviceOrbitSection.inView ? "reveal-visible" : "reveal-hidden"
              }`}
            >
              <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 rounded-full px-3 py-1 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">
                  Our Ecosystem
                </span>
              </div>
              <h2 className="font-syne font-bold text-3xl text-gray-900 mb-3">
                Everything We Build, Connected
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                A single ecosystem powering software, cloud, and dairy
                machinery — all engineered under one roof.
              </p>
            </div>

            <div
              className={
                serviceOrbitSection.inView ? "reveal-visible" : "reveal-hidden"
              }
              style={{
                animationDelay: serviceOrbitSection.inView ? "80ms" : undefined,
              }}
            >
              <ServiceOrbitDiagram />
            </div>
          </div>
        </section>
        {/* ================= END SERVICE ORBIT DIAGRAM ================= */}

        <section
          ref={dairyHeroSection.ref}
          className="py-16 bg-linear-to-br from-blue-50 via-white to-indigo-50 border-y border-blue-100"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`text-center max-w-4xl mx-auto ${
                dairyHeroSection.inView ? "reveal-visible" : "reveal-hidden"
              }`}
            >
              <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 rounded-full px-3 py-1 mb-4">
                <Milk size={14} className="text-blue-500" />
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">
                  Dairy Technology
                </span>
              </div>
              <h2 className="font-syne font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
                Smart Technology for a <span className="text-blue-600">Smarter Dairy Industry</span>
              </h2>
              <p className="text-lg text-gray-600 mb-3">
                Dairy Equipment • Software • Automation • Digital Solutions
              </p>
              <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed">
                We provide innovative <strong>dairy technology solutions that connect equipment, software, and automation</strong> to simplify dairy operations—from milk collection and testing to procurement, farmer management, billing, monitoring, and dairy management.
              </p>
              <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed mt-3">
                Our solutions are designed for <strong>Dairy Cooperatives, Milk Unions, Milk Collection Centers, Chilling Centers, Dairy Farms, and Dairy Processing Units</strong>, helping organizations improve accuracy, transparency, efficiency, and control across the dairy supply chain.
              </p>
              <p className="text-blue-600 font-semibold mt-4 text-lg">
                Technology that connects the dairy ecosystem.
              </p>
              <div className="flex flex-wrap gap-3 justify-center mt-6">
                <button
                  onClick={() => setCurrentPage("industry")}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-500 text-white font-semibold shadow-md shadow-blue-500/30 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                >
                  Explore Our Solutions <ArrowRight size={16} />
                </button>
                <button
                  onClick={() => setCurrentPage("contact")}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ================= ECOSYSTEM SECTION — Farm / Collection Centre / Dairy tiers ================= */}
        <section
          ref={ecosystemSection.ref}
          className="py-16 bg-white overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`text-center mb-10 ${
                ecosystemSection.inView ? "reveal-visible" : "reveal-hidden"
              }`}
            >
              <div className="inline-flex items-center gap-2 bg-indigo-100 border border-indigo-200 rounded-full px-3 py-1 mb-4">
                <Link size={14} className="text-indigo-500" />
                <span className="text-xs font-bold text-indigo-600 uppercase tracking-wide">
                  The Dairy Ecosystem
                </span>
              </div>
              <h2 className="font-syne font-bold text-3xl md:text-4xl text-gray-900 mb-3">
                One Connected Journey, From Farm to Ledger
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                Every stage of the dairy supply chain, linked by a single
                digital thread — from the farm, through the collection
                centre, to the dairy plant.
              </p>
            </div>

            {/* Illustrated single-row diagram lives in its own file: EcosystemDiagram.tsx
                Tier labels (FARM / COLLECTION CENTRE / DAIRY LEVEL) are rendered
                inside the SVG itself — no separate HTML label row needed here. */}
            <div
              className={ecosystemSection.inView ? "reveal-visible" : "reveal-hidden"}
              style={{ animationDelay: ecosystemSection.inView ? "60ms" : undefined }}
            >
              <EcosystemDiagram nodes={ecosystemNodes} />
            </div>
          </div>
        </section>
        {/* ================= END ECOSYSTEM SECTION ================= */}

        {/* Dairy Solutions Section */}
        <section
          ref={dairySolutionsSection.ref}
          className="py-16 bg-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`text-center mb-10 ${
                dairySolutionsSection.inView ? "reveal-visible" : "reveal-hidden"
              }`}
            >
              <h2 className="font-syne font-bold text-3xl md:text-4xl text-gray-900 mb-3">
                Complete Dairy Technology Solutions
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                From the village-level milk collection center to the dairy plant, we provide integrated technology solutions designed specifically for the dairy industry.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {dairySolutions.map((solution, i) => (
                <div
                  key={i}
                  className={`group bg-white border border-blue-100 rounded-xl p-5 hover:shadow-lg hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 ${
                    dairySolutionsSection.inView ? "reveal-visible" : "reveal-hidden"
                  }`}
                  style={{
                    animationDelay: dairySolutionsSection.inView
                      ? `${i * 80}ms`
                      : undefined,
                  }}
                >
                  <div className="w-11 h-11 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-500 group-hover:scale-110 transition-all duration-300">
                    <solution.icon
                      size={18}
                      className="text-blue-500 group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2 text-sm">
                    {solution.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {solution.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section
          ref={whyChooseSection.ref}
          className="py-16 bg-gray-50/50 border-y border-gray-100"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`text-center mb-10 ${
                whyChooseSection.inView ? "reveal-visible" : "reveal-hidden"
              }`}
            >
              <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 rounded-full px-3 py-1 mb-4">
                <Award size={14} className="text-blue-500" />
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">
                  Why Choose Us
                </span>
              </div>
              <h2 className="font-syne font-bold text-3xl md:text-4xl text-gray-900 mb-3">
                Why Choose The Logic Shell?
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {whyChooseItems.map((item, i) => (
                <div
                  key={i}
                  className={`group bg-white border border-gray-100 rounded-xl p-5 hover:shadow-lg hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 ${
                    whyChooseSection.inView ? "reveal-visible" : "reveal-hidden"
                  }`}
                  style={{
                    animationDelay: whyChooseSection.inView
                      ? `${i * 80}ms`
                      : undefined,
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 group-hover:bg-blue-500 group-hover:scale-110 transition-all duration-300">
                      <item.icon
                        size={18}
                        className="text-blue-500 group-hover:text-white transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1 text-sm">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brands Section */}
        <section
          ref={brandsSection.ref}
          className="py-10 bg-white border-y border-gray-100"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xs font-semibold text-blue-500 uppercase tracking-wider mb-5">
              Trusted By Businesses Worldwide
            </p>
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center items-center gap-x-6 gap-y-4 sm:gap-8">
              {[
                "Tech Corp",
                "Global Industries",
                "Future Systems",
                "Eco Solutions",
                "Smart Retail",
              ].map((brand, i) => (
                <span
                  key={i}
                  className={`text-gray-500 font-semibold text-base sm:text-lg font-syne opacity-50 hover:opacity-90 transition-all duration-300 hover:scale-105 ${
                    brandsSection.inView ? "reveal-visible" : "reveal-hidden"
                  } ${i === 4 ? "col-span-2" : ""}`}
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