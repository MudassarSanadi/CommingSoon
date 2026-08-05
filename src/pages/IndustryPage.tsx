import React, { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'
import { Database, Cloud, Smartphone, Cpu, CheckCircle2, Calendar, Sparkles, Factory, Droplet, Store, Activity, ArrowRight, Milk, FlaskConical} from 'lucide-react'
import type { PageType } from '../App'

interface IndustryPageProps {
  setCurrentPage: (page: PageType) => void
}

function useInView<T extends HTMLElement>(threshold = 0.12) {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(node)
        }
      },
      { threshold }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, inView }
}

const IndustryPage: React.FC<IndustryPageProps> = ({ setCurrentPage }) => {
  const navigate = useNavigate()
  const [heroLoaded, setHeroLoaded] = useState(false)

  const industriesGridSection = useInView<HTMLDivElement>()
  const capabilitiesSection = useInView<HTMLDivElement>()
  const ctaSection = useInView<HTMLDivElement>()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    const t = requestAnimationFrame(() => setHeroLoaded(true))
    return () => cancelAnimationFrame(t)
  }, [])

  const industries = [
    { 
      icon: Database, 
      title: 'Operational Data Systems', 
      subtitle: 'Records, reporting, and tracking',
      items: [
        'Digital record management with structured data storage',
        'Real-time reporting dashboards for operations teams',
        'Automated workflow tracking and audit logging'
      ] 
    },
    { 
      icon: Cloud, 
      title: 'Cloud Infrastructure', 
      subtitle: 'Secure, distributed, always-on',
      items: [
        'Secure cloud storage systems with encryption',
        'Multi-location data synchronization in real time',
        'Backup and disaster recovery systems'
      ] 
    },
    { 
      icon: Smartphone, 
      title: 'Mobile Ecosystem Apps', 
      subtitle: 'Visibility from anywhere',
      items: [
        'Owner dashboards with key KPI snapshots',
        'Manager monitoring apps with team oversight',
        'Real-time alerts, reports, and notifications'
      ] 
    },
    { 
      icon: Cpu, 
      title: 'Hardware Integration', 
      subtitle: 'Bridging physical and digital',
      items: [
        'Integration with industry-grade analyzers and machines',
        'Automated data capture systems via device APIs',
        'Plug-and-play connectivity solutions'
      ] 
    }
  ]

  const industriesList = [
    { 
      id: 'manufacturing',
      icon: Factory, 
      name: 'Manufacturing', 
      shortDesc: 'Production tracking, inventory management, quality control'
    },
    { 
      id: 'dairy',
      icon: Droplet, 
      name: 'Dairy & Agriculture', 
      shortDesc: 'Farm management, testing, billing, supply chain'
    },
    { 
      id: 'retail',
      icon: Store, 
      name: 'Retail & Distribution', 
      shortDesc: 'POS systems, inventory, customer management'
    },
    { 
      id: 'healthcare',
      icon: Activity, 
      name: 'Healthcare', 
      shortDesc: 'Patient records, appointment systems, billing'
    },
    { 
      id: 'milk-plant-machinery',
      icon: Milk, 
      name: 'Milk Plant Machinery', 
      shortDesc: 'Processing, utility, and reception equipment for dairy plants'
    },
    { 
      id: 'milk-by-product-machinery',
      icon: FlaskConical, 
      name: 'Milk By-Product Machinery', 
      shortDesc: 'Complete processing solutions for Ghee, Butter, Paneer, Curd, Lassi, Cream, Khoya, Ice Cream, Flavoured Milk, Cheese & Yogurt'
    }
  ]

  const handleIndustryClick = (industryId: string) => {
    navigate(`/industry/${industryId}`)
  }

  return (
    <>
      <Helmet>
        <title>Industry - Logic Shell | Industry-Specific Solutions</title>
        <meta name="description" content="Logic Shell provides industry-specific solutions for manufacturing, dairy, retail, healthcare, and milk plant machinery. Explore our specialized digital ecosystems for your industry." />
        <link rel="canonical" href="https://thelogicshell.com/industry" />
      </Helmet>

      {/* Scoped keyframes — no tailwind.config changes needed */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatBlob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(10px, -14px) scale(1.05); }
        }
        .reveal-hidden {
          opacity: 0;
          transform: translateY(24px);
        }
        .reveal-visible {
          animation: fadeInUp 0.7s ease-out forwards;
        }
      `}</style>

      <div className="bg-white min-h-screen">
        <section className="relative bg-linear-to-br from-blue-50 via-white to-indigo-50 border-b border-blue-100 py-16 md:py-20 overflow-hidden">
          <div
            className="absolute top-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none"
            style={{ animation: 'floatBlob 8s ease-in-out infinite' }}
          />
          <div
            className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl pointer-events-none"
            style={{ animation: 'floatBlob 10s ease-in-out infinite', animationDelay: '1.5s' }}
          />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div
              className="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 rounded-full px-4 py-1.5 mb-5 transition-all duration-700 ease-out"
              style={{
                opacity: heroLoaded ? 1 : 0,
                transform: heroLoaded ? 'translateY(0)' : 'translateY(16px)',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-xs font-semibold text-blue-600 tracking-wide uppercase">Industry Focus</span>
            </div>
            
            <h1
              className="font-syne font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4 transition-all duration-700 ease-out"
              style={{
                opacity: heroLoaded ? 1 : 0,
                transform: heroLoaded ? 'translateY(0)' : 'translateY(24px)',
                transitionDelay: '100ms',
              }}
            >
              Industry-Focused<br />Digital Ecosystems
            </h1>
            
            <p
              className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed transition-all duration-700 ease-out"
              style={{
                opacity: heroLoaded ? 1 : 0,
                transform: heroLoaded ? 'translateY(0)' : 'translateY(24px)',
                transitionDelay: '220ms',
              }}
            >
              Specialized solutions built for the real complexities of modern industries.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 rounded-full px-3 py-1 mb-4">
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">Industries We Serve</span>
              </div>
              <h2 className="font-syne font-bold text-3xl text-gray-900 mb-3">Trusted Across Sectors</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                Click on any industry to explore our specialized solutions
              </p>
            </div>

            <div ref={industriesGridSection.ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
              {industriesList.map((industry, i) => (
                <div 
                  key={i} 
                  onClick={() => handleIndustryClick(industry.id)}
                  className={`group bg-white rounded-xl p-5 border border-blue-100 shadow-sm hover:shadow-lg hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 cursor-pointer ${
                    industriesGridSection.inView ? 'reveal-visible' : 'reveal-hidden'
                  }`}
                  style={{ animationDelay: industriesGridSection.inView ? `${i * 90}ms` : undefined }}
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-500 group-hover:border-blue-500 group-hover:scale-110 transition-all duration-300">
                    <industry.icon size={20} className="text-blue-500 group-hover:text-white transition-all duration-300" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-all duration-300">{industry.name}</h3>
                  <p className="text-xs text-gray-500 mb-3">{industry.shortDesc}</p>
                  <div className="inline-flex items-center gap-1 text-blue-500 text-xs font-medium opacity-0 group-hover:opacity-100 group-hover:gap-2 transition-all duration-300">
                    Learn More <ArrowRight size={12} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50/50 border-y border-blue-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 rounded-full px-3 py-1 mb-4">
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">Core Capabilities</span>
              </div>
              <h2 className="font-syne font-bold text-3xl text-gray-900 mb-3">What We Build</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                Enterprise-grade solutions engineered for real-world operations
              </p>
            </div>

            <div ref={capabilitiesSection.ref} className="grid md:grid-cols-2 gap-6">
              {industries.map((ind, i) => (
                <div
                  key={i}
                  className={`bg-white rounded-xl p-6 border border-blue-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 ${
                    capabilitiesSection.inView ? 'reveal-visible' : 'reveal-hidden'
                  }`}
                  style={{ animationDelay: capabilitiesSection.inView ? `${i * 120}ms` : undefined }}
                >
                  <div className="w-11 h-11 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center mb-3">
                    <ind.icon size={18} className="text-blue-500" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{ind.title}</h3>
                  <p className="text-xs text-gray-500 mb-3">{ind.subtitle}</p>
                  <ul className="space-y-2">
                    {ind.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle2 size={14} className="text-blue-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              ref={ctaSection.ref}
              className={`bg-linear-to-r from-blue-500 to-indigo-500 rounded-xl p-8 md:p-10 text-center shadow-lg transition-shadow duration-300 hover:shadow-xl ${
                ctaSection.inView ? 'reveal-visible' : 'reveal-hidden'
              }`}
            >
              <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 rounded-full px-3 py-1 mb-4">
                <Sparkles size={14} className="text-white" />
                <span className="text-xs font-semibold text-white uppercase">Ready to Scale?</span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
                Let's Build Something Powerful Together
              </h2>
              <p className="text-blue-100 mb-5 max-w-md mx-auto text-sm">
                Whether you're starting from scratch or scaling an existing platform
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <button 
                  onClick={() => setCurrentPage('contact')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-blue-600 font-semibold text-sm shadow-md hover:bg-gray-100 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                >
                  <Calendar size={14} />
                  Schedule a Call
                </button>
                <button 
                  onClick={() => window.location.href = 'tel:+919876543210'}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600/30 border border-white/30 text-white font-semibold text-sm hover:bg-blue-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                >
                  <Calendar size={14} />
                  Call Us Now
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default IndustryPage