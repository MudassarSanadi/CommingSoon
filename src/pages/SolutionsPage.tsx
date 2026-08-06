import React, { useState, useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import { 
  Server, Users, Building2, CheckCircle2, Sparkles, 
  ChevronDown, ChevronUp, Clock, Shield, Zap, BarChart3, 
  TrendingUp, Database, Cloud, Smartphone, Mail,
  Calendar, Briefcase, GitBranch, Award
} from 'lucide-react'
import type { PageType } from '../App'

interface SolutionsPageProps {
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

const SolutionsPage: React.FC<SolutionsPageProps> = ({ setCurrentPage }) => {
  const [expandedSolution, setExpandedSolution] = useState<number | null>(null)
  const [heroLoaded, setHeroLoaded] = useState(false)

  const solutionsSection = useInView<HTMLElement>()
  const featuresSection = useInView<HTMLDivElement>()
  const statsSection = useInView<HTMLDivElement>()
  const ctaSection = useInView<HTMLDivElement>()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    const t = requestAnimationFrame(() => setHeroLoaded(true))
    return () => cancelAnimationFrame(t)
  }, [])

  const solutions = [
    {
      id: 1,
      icon: Server,
      title: 'Business Software Solutions',
      subtitle: 'Streamline your core business operations',
      shortDesc: 'Web-based billing systems for sales, purchase, invoicing and accounting with full audit trails and real-time analytics.',
      longDesc: 'Transform your business operations with our comprehensive business software solutions. We build custom billing and accounting systems that automate your financial workflows, reduce manual errors, and provide real-time visibility into your business performance.',
      items: [
        'Web-based billing systems for sales, purchase, invoicing and accounting',
        'Customer and vendor ledger management with full audit trails',
        'Financial reporting dashboards with real-time analytics',
        'Business workflow automation and process optimization'
      ],
      benefits: ['Reduce manual errors by 90%', 'Real-time financial insights', 'Automated tax calculations'],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe API'],
      timeline: '4-8 weeks'
    },
    {
      id: 2,
      icon: Users,
      title: 'CRM and Office Solutions',
      subtitle: 'Build stronger customer relationships',
      shortDesc: 'Lead management systems with pipeline visualization, client communication tracking, and task automation for teams.',
      longDesc: 'Empower your sales and support teams with our custom CRM solutions. Track every customer interaction, manage leads through your sales pipeline, and automate routine tasks.',
      items: [
        'Lead management systems with pipeline visualization',
        'Client communication tracking and history management',
        'Task and workflow automation for teams',
        'Sales pipeline monitoring with conversion analytics'
      ],
      benefits: ['Increase sales conversion by 35%', 'Improve customer retention', 'Reduce response time by 50%'],
      technologies: ['React', 'Node.js', 'MongoDB', 'SendGrid'],
      timeline: '6-10 weeks'
    },
    {
      id: 3,
      icon: Building2,
      title: 'Enterprise Management Systems',
      subtitle: 'Complete control over your enterprise',
      shortDesc: 'ERP solutions for full operational management, inventory tracking, multi-branch synchronization, and role-based access control.',
      longDesc: 'Take full control of your enterprise operations with our custom ERP solutions. From inventory management to multi-branch synchronization, we build comprehensive systems that give you complete visibility.',
      items: [
        'ERP solutions for full operational management',
        'Inventory and stock management with low-stock alerts',
        'Multi-branch synchronization and centralized control',
        'Role-based access control and permission management'
      ],
      benefits: ['Centralized operations', '30% reduction in operational costs', 'Real-time inventory tracking'],
      technologies: ['Python', 'Django', 'PostgreSQL', 'Redis'],
      timeline: '10-16 weeks'
    }
  ]

  const additionalFeatures = [
    { icon: Cloud, title: 'Cloud-Based Access', desc: 'Access your data from anywhere, anytime' },
    { icon: Smartphone, title: 'Mobile Responsive', desc: 'Works on desktop, tablet, and mobile' },
    { icon: Shield, title: 'Enterprise Security', desc: 'Bank-grade encryption and security' },
    { icon: Zap, title: 'Real-Time Sync', desc: 'Instant data across all branches' },
    { icon: Database, title: 'Data Backup', desc: 'Automated daily backups' },
    { icon: BarChart3, title: 'Analytics Dashboard', desc: 'Custom reports and insights' }
  ]

  const stats = [
    { value: '100+', label: 'Businesses Transformed', icon: Briefcase },
    { value: '50K+', label: 'Daily Transactions', icon: TrendingUp },
    { value: '99.9%', label: 'Uptime Guarantee', icon: Award },
    { value: '24/7', label: 'Support Available', icon: Clock }
  ]

  return (
    <>
      <Helmet>
        <title>Solutions - Logic Shell | Business Software & ERP Solutions</title>
        <meta name="description" content="Explore Logic Shell's business solutions - Custom software, CRM, and enterprise management systems designed to automate and scale your business operations." />
        <link rel="canonical" href="https://thelogicshell.com/solutions" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Solutions - Logic Shell | Business Software & ERP Solutions" />
        <meta property="og:description" content="Custom software, CRM, and enterprise management systems designed to automate and scale your business operations." />
        <meta property="og:url" content="https://thelogicshell.com/solutions" />
        <meta property="og:image" content="https://thelogicshell.com/favicon.svg" />
        <meta property="og:site_name" content="Logic Shell" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Solutions - Logic Shell | Business Software & ERP Solutions" />
        <meta name="twitter:description" content="Custom software, CRM, and enterprise management systems designed to automate and scale your business." />
        <meta name="twitter:image" content="https://thelogicshell.com/favicon.svg" />

        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://thelogicshell.com/' },
              { '@type': 'ListItem', position: 2, name: 'Solutions', item: 'https://thelogicshell.com/solutions' },
            ],
          })}
        </script>
      </Helmet>

     
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
        .accordion-panel {
          display: grid;
          grid-template-rows: 0fr;
          opacity: 0;
          transition: grid-template-rows 0.4s ease, opacity 0.3s ease;
        }
        .accordion-panel.open {
          grid-template-rows: 1fr;
          opacity: 1;
        }
        .accordion-panel > div {
          overflow: hidden;
          min-height: 0;
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
              <span className="text-xs font-semibold text-blue-600 tracking-wide uppercase">Core Solutions</span>
            </div>
            
            <h1
              className="font-syne font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4 transition-all duration-700 ease-out"
              style={{
                opacity: heroLoaded ? 1 : 0,
                transform: heroLoaded ? 'translateY(0)' : 'translateY(24px)',
                transitionDelay: '100ms',
              }}
            >
              Smart Digital Solutions<br />for Modern Enterprises
            </h1>
            
            <p
              className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed transition-all duration-700 ease-out"
              style={{
                opacity: heroLoaded ? 1 : 0,
                transform: heroLoaded ? 'translateY(0)' : 'translateY(24px)',
                transitionDelay: '220ms',
              }}
            >
              Comprehensive software ecosystems built to automate, scale, and transform your business operations.
            </p>
          </div>
        </section>

        <section ref={solutionsSection.ref} className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-10">
              {solutions.map((sol, idx) => (
                <div 
                  key={idx}
                  className={`bg-white rounded-xl border border-blue-100 shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 ${
                    solutionsSection.inView ? 'reveal-visible' : 'reveal-hidden'
                  }`}
                  style={{ animationDelay: solutionsSection.inView ? `${idx * 140}ms` : undefined }}
                >
                  <div className="p-6 border-b border-blue-50">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow-md shrink-0 transition-transform duration-300 hover:scale-105 hover:rotate-3">
                        <sol.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h2 className="font-syne font-bold text-xl md:text-2xl text-gray-900">{sol.title}</h2>
                        <p className="text-blue-500 text-sm font-medium mt-1">{sol.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed transition-opacity duration-300">
                      {expandedSolution === idx ? sol.longDesc : sol.shortDesc}
                    </p>
                    <button
                      onClick={() => setExpandedSolution(expandedSolution === idx ? null : idx)}
                      className="inline-flex items-center gap-1 text-blue-500 text-sm font-medium mt-3 hover:gap-2 transition-all duration-300"
                    >
                      {expandedSolution === idx ? (
                        <>Show Less <ChevronUp size={14} className="transition-transform duration-300" /></>
                      ) : (
                        <>Read More <ChevronDown size={14} className="transition-transform duration-300" /></>
                      )}
                    </button>
                  </div>

                  <div className="p-6 bg-gray-50/30">
                    <div className="grid md:grid-cols-2 gap-3">
                      {sol.items.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2 bg-white rounded-lg p-3 border border-blue-50 hover:border-blue-200 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-300"
                        >
                          <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                          <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className={`accordion-panel ${expandedSolution === idx ? 'open' : ''}`}>
                      <div>
                        <div className="mt-5 pt-4 border-t border-blue-100">
                          <div className="mb-4">
                            <h3 className="font-semibold text-gray-800 text-sm mb-2">Key Benefits:</h3>
                            <div className="flex flex-wrap gap-2">
                              {sol.benefits.map((benefit, i) => (
                                <span
                                  key={i}
                                  className="px-2 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium transition-transform duration-300 hover:-translate-y-0.5"
                                  style={{
                                    animation: expandedSolution === idx ? `fadeInUp 0.4s ease-out ${i * 60}ms both` : undefined,
                                  }}
                                >
                                  ✓ {benefit}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <div className="mb-4">
                            <h3 className="font-semibold text-gray-800 text-sm mb-2">Technologies:</h3>
                            <div className="flex flex-wrap gap-1.5">
                              {sol.technologies.map((tech, i) => (
                                <span
                                  key={i}
                                  className="px-2 py-1 bg-gray-100 rounded-md text-gray-600 text-xs transition-transform duration-300 hover:-translate-y-0.5"
                                  style={{
                                    animation: expandedSolution === idx ? `fadeInUp 0.4s ease-out ${i * 60 + 100}ms both` : undefined,
                                  }}
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <Clock size={14} className="text-blue-500" />
                            <span className="text-xs text-gray-500">Implementation: <strong className="text-gray-700">{sol.timeline}</strong></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div
              ref={featuresSection.ref}
              className="mt-16 bg-linear-to-r from-blue-50 to-indigo-50 rounded-xl p-6 md:p-8 border border-blue-100"
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-white/80 border border-blue-200 rounded-full px-3 py-1.5 mb-3">
                  <Sparkles size={12} className="text-blue-500" />
                  <span className="text-xs font-semibold text-blue-600 tracking-wide uppercase">Platform Features</span>
                </div>
                <h2 className="font-syne font-bold text-xl md:text-2xl text-gray-900 mb-2">
                  Enterprise-Grade Platform Features
                </h2>
                <p className="text-gray-500 text-sm max-w-2xl mx-auto">
                  Every solution comes with these powerful features built-in
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {additionalFeatures.map((feature, i) => (
                  <div
                    key={i}
                    className={`flex items-start gap-3 bg-white rounded-lg p-3 border border-blue-100 hover:border-blue-200 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-300 ${
                      featuresSection.inView ? 'reveal-visible' : 'reveal-hidden'
                    }`}
                    style={{ animationDelay: featuresSection.inView ? `${i * 90}ms` : undefined }}
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                      <feature.icon size={14} className="text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm">{feature.title}</h3>
                      <p className="text-gray-500 text-xs mt-0.5">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div ref={statsSection.ref} className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className={`bg-white rounded-xl p-4 border border-blue-100 shadow-sm text-center hover:-translate-y-1 hover:shadow-md transition-all duration-300 ${
                    statsSection.inView ? 'reveal-visible' : 'reveal-hidden'
                  }`}
                  style={{ animationDelay: statsSection.inView ? `${i * 100}ms` : undefined }}
                >
                  <stat.icon size={18} className="text-blue-500 mx-auto mb-2" />
                  <div className="font-syne font-bold text-xl text-gray-900">{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4 transition-shadow duration-300 hover:shadow-sm">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                    <GitBranch size={14} className="text-blue-500" />
                  </div>
                  <p className="text-sm text-gray-700">
                    <strong className="text-gray-900">Seamless Integration</strong> — Our solutions integrate with your existing tools
                  </p>
                </div>
                <button className="text-blue-500 text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all duration-300">
                  Learn more
                </button>
              </div>
            </div>

            <div
              ref={ctaSection.ref}
              className={`mt-12 bg-linear-to-r from-blue-500 to-indigo-500 rounded-xl p-8 md:p-10 text-center shadow-lg transition-shadow duration-300 hover:shadow-xl ${
                ctaSection.inView ? 'reveal-visible' : 'reveal-hidden'
              }`}
            >
              <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 rounded-full px-3 py-1.5 mb-4">
                <Sparkles size={12} className="text-white" />
                <span className="text-xs font-semibold text-white uppercase">Ready to Transform?</span>
              </div>
              <h2 className="font-syne font-bold text-xl md:text-2xl text-white mb-2">
                Let's Build Your Custom Solution
              </h2>
              <p className="text-blue-100 mb-6 max-w-md mx-auto text-sm">
                Get a free consultation and see how our solutions can transform your business
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button 
                  onClick={() => setCurrentPage('contact')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-blue-600 font-semibold text-sm shadow-md hover:bg-gray-100 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                >
                  <Calendar size={14} />
                  Schedule Consultation
                </button>
                <button 
                  onClick={() => setCurrentPage('contact')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600/30 border border-white/30 text-white font-semibold text-sm hover:bg-blue-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                >
                  <Mail size={14} />
                  Contact Sales
                </button>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-400 text-sm">
                ⚡ Free demo available | 14-day trial | 
                <button onClick={() => setCurrentPage('contact')} className="text-blue-500 hover:underline ml-1 transition-all duration-300">Request a demo →</button>
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default SolutionsPage