import React, { useState, useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import { 
  Sparkles, CheckCircle2, Code, Cloud, Smartphone, 
  Palette, Server, GitMerge, Bot, ChevronDown, ChevronUp, 
  Clock, Shield, Zap, Users, Briefcase, Calendar, Phone, Award 
} from 'lucide-react'
import type { PageType } from '../App'

interface ServicesPageProps {
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

const ServicesPage: React.FC<ServicesPageProps> = ({ setCurrentPage }) => {
  const [expandedService, setExpandedService] = useState<number | null>(null)
  const [heroLoaded, setHeroLoaded] = useState(false)

  const servicesSection = useInView<HTMLDivElement>()
  const benefitsSection = useInView<HTMLDivElement>()
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

  const services = [
    { 
      num: '01', 
      title: 'Software Development', 
      shortDesc: 'End-to-end custom software built for performance, maintainability, and long-term scalability.',
      longDesc: 'We build enterprise-grade custom software solutions tailored to your unique business needs. Our development process follows industry best practices including agile methodology, continuous integration, automated testing, and code reviews.',
      icon: Code,
      features: ['Custom CRM & ERP', 'Legacy System Modernization', 'Enterprise Portals', 'Workflow Automation'],
      timeline: '4-12 weeks',
      technologies: ['React', 'Node.js', 'Python', 'Java', 'PostgreSQL']
    },
    { 
      num: '02', 
      title: 'SaaS Product Development', 
      shortDesc: 'Multi-tenant SaaS platforms from concept to launch, with subscription management and onboarding flows.',
      longDesc: 'Transform your SaaS idea into a fully functional, scalable product. We specialize in building multi-tenant architecture with robust subscription management and analytics dashboards.',
      icon: Cloud,
      features: ['Subscription Billing', 'User & Team Management', 'Tenant Isolation', 'Analytics Dashboard'],
      timeline: '8-16 weeks',
      technologies: ['Next.js', 'AWS', 'Stripe API', 'PostgreSQL', 'Docker']
    },
    { 
      num: '03', 
      title: 'Mobile App Development', 
      shortDesc: 'iOS and Android applications with native performance and elegant cross-platform design.',
      longDesc: 'Create powerful mobile experiences that users love. We develop native and cross-platform apps with smooth performance, beautiful UI, and seamless backend integration.',
      icon: Smartphone,
      features: ['iOS & Android Native', 'Cross-Platform', 'Offline Sync', 'Push Notifications'],
      timeline: '6-14 weeks',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase']
    },
    { 
      num: '04', 
      title: 'UI/UX Design', 
      shortDesc: 'Research-driven interface design that balances aesthetics with enterprise usability.',
      longDesc: 'Our UI/UX team creates intuitive, beautiful interfaces that users love. We follow a research-driven process including user interviews, wireframing, prototyping, and usability testing.',
      icon: Palette,
      features: ['User Research', 'Wireframing', 'High-Fidelity Mockups', 'Design Systems'],
      timeline: '2-6 weeks',
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'Miro']
    },
    { 
      num: '05', 
      title: 'Cloud Architecture', 
      shortDesc: 'Scalable, secure cloud infrastructure design and deployment on AWS, Azure, or GCP.',
      longDesc: 'Design and deploy robust cloud infrastructure that scales automatically with your business. We implement infrastructure-as-code, CI/CD pipelines, and monitoring solutions.',
      icon: Server,
      features: ['AWS/Azure/GCP', 'Infrastructure as Code', 'CI/CD Pipelines', 'Auto-scaling'],
      timeline: '3-8 weeks',
      technologies: ['AWS', 'Azure', 'Terraform', 'Kubernetes', 'Docker']
    },
    { 
      num: '06', 
      title: 'API Development', 
      shortDesc: 'RESTful and GraphQL API development, third-party integrations, and webhook automation.',
      longDesc: 'Connect your systems seamlessly with robust APIs. We design and build RESTful and GraphQL APIs that are secure, documented, and performant.',
      icon: GitMerge,
      features: ['RESTful & GraphQL APIs', 'API Documentation', 'Third-party Integrations', 'Webhook Automation'],
      timeline: '2-8 weeks',
      technologies: ['Node.js', 'Python FastAPI', 'GraphQL', 'Redis']
    },
    { 
      num: '07', 
      title: 'Business Automation', 
      shortDesc: 'Intelligent workflow automation that eliminates manual processes and reduces overhead.',
      longDesc: 'Transform your business operations with intelligent automation. We analyze your workflows and implement automated solutions using AI and workflow engines.',
      icon: Bot,
      features: ['Workflow Analysis', 'RPA Implementation', 'Document Processing', 'Email Automation'],
      timeline: '4-10 weeks',
      technologies: ['n8n', 'Zapier', 'Python', 'AI/ML Models']
    },
  ]

  const benefits = [
    { icon: Users, title: 'Dedicated Team', desc: 'Get a dedicated project manager and development team focused on your success' },
    { icon: Clock, title: 'On-time Delivery', desc: 'We respect your deadlines with transparent timelines and regular updates' },
    { icon: Shield, title: 'Security First', desc: 'Enterprise-grade security practices and data encryption standards' },
    { icon: Zap, title: 'Agile Process', desc: 'Iterative development with continuous feedback and rapid delivery' },
  ]

  const stats = [
    { value: '50+', label: 'Projects Delivered', icon: Briefcase },
    { value: '98%', label: 'Client Satisfaction', icon: Award },
    { value: '24/7', label: 'Support Available', icon: Clock },
    { value: '5+', label: 'Years Experience', icon: Users },
  ]

  return (
    <>
      <Helmet>
        <title>Services - Logic Shell | Software Development & IT Services</title>
        <meta name="description" content="Logic Shell offers full-spectrum IT services including custom software development, SaaS, mobile apps, UI/UX design, cloud architecture, and business automation." />
        <link rel="canonical" href="https://thelogicshell.com/services" />
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
              <span className="text-xs font-semibold text-blue-600 tracking-wide uppercase">What We Do</span>
            </div>
            
            <h1
              className="font-syne font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4 transition-all duration-700 ease-out"
              style={{
                opacity: heroLoaded ? 1 : 0,
                transform: heroLoaded ? 'translateY(0)' : 'translateY(24px)',
                transitionDelay: '100ms',
              }}
            >
              Our Services
            </h1>
            
            <p
              className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed transition-all duration-700 ease-out"
              style={{
                opacity: heroLoaded ? 1 : 0,
                transform: heroLoaded ? 'translateY(0)' : 'translateY(24px)',
                transitionDelay: '220ms',
              }}
            >
              Full-spectrum technology services from architecture and design to deployment and integration.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div ref={servicesSection.ref} className="grid md:grid-cols-2 gap-6">
              {services.map((service, i) => (
                <div 
                  key={i} 
                  className={`group bg-white rounded-xl p-6 border border-blue-100 shadow-sm hover:shadow-lg hover:border-blue-300 hover:-translate-y-0.5 transition-all duration-300 ${
                    servicesSection.inView ? 'reveal-visible' : 'reveal-hidden'
                  }`}
                  style={{ animationDelay: servicesSection.inView ? `${i * 90}ms` : undefined }}
                >
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 group-hover:bg-blue-500 group-hover:border-blue-500 group-hover:scale-110 transition-all duration-300">
                      <service.icon size={20} className="text-blue-500 group-hover:text-white transition-all duration-300" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-mono font-bold text-blue-500 bg-blue-50 px-2 py-0.5 rounded">
                          {service.num}
                        </span>
                        <h3 className="font-syne font-bold text-gray-900 text-lg">{service.title}</h3>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {expandedService === i ? service.longDesc : service.shortDesc}
                      </p>

                      <div className={`accordion-panel ${expandedService === i ? 'open' : ''}`}>
                        <div>
                          <div className="mt-4 space-y-3">
                            <div>
                              <h4 className="font-semibold text-gray-800 text-sm mb-2">Key Features:</h4>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                                {service.features.map((feature, idx) => (
                                  <div
                                    key={idx}
                                    className="flex items-center gap-1.5"
                                    style={{
                                      animation: expandedService === i ? `fadeInUp 0.4s ease-out ${idx * 50}ms both` : undefined,
                                    }}
                                  >
                                    <CheckCircle2 size={12} className="text-blue-500 shrink-0" />
                                    <span className="text-xs text-gray-600">{feature}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold text-gray-800 text-sm mb-2">Tech Stack:</h4>
                              <div className="flex flex-wrap gap-1.5">
                                {service.technologies.map((tech, idx) => (
                                  <span
                                    key={idx}
                                    className="px-2 py-0.5 bg-gray-100 rounded-md text-xs text-gray-600 transition-transform duration-300 hover:-translate-y-0.5"
                                    style={{
                                      animation: expandedService === i ? `fadeInUp 0.4s ease-out ${idx * 50 + 80}ms both` : undefined,
                                    }}
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-2 pt-1">
                              <Clock size={14} className="text-blue-500" />
                              <span className="text-xs text-gray-500">Timeline: <strong className="text-gray-700">{service.timeline}</strong></span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => setExpandedService(expandedService === i ? null : i)}
                        className="inline-flex items-center gap-1 text-blue-500 text-sm font-medium mt-3 hover:gap-2 transition-all duration-300"
                      >
                        {expandedService === i ? (
                          <>Show Less <ChevronUp size={14} className="transition-transform duration-300" /></>
                        ) : (
                          <>Read More <ChevronDown size={14} className="transition-transform duration-300" /></>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div
              ref={benefitsSection.ref}
              className="mt-16 bg-linear-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100"
            >
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-white/80 border border-blue-200 rounded-full px-4 py-1.5 mb-4">
                  <Sparkles size={12} className="text-blue-500" />
                  <span className="text-xs font-semibold text-blue-600 tracking-wide uppercase">Why Choose Us</span>
                </div>
                <h2 className="font-syne font-bold text-2xl md:text-3xl text-gray-900 mb-2">
                  What Makes Our Services Different
                </h2>
                <p className="text-gray-500 max-w-2xl mx-auto">
                  We don't just write code — we build solutions that drive business growth.
                </p>
              </div>
              <div className="grid md:grid-cols-4 gap-5">
                {benefits.map((benefit, i) => (
                  <div
                    key={i}
                    className={`text-center transition-transform duration-300 hover:-translate-y-1 ${
                      benefitsSection.inView ? 'reveal-visible' : 'reveal-hidden'
                    }`}
                    style={{ animationDelay: benefitsSection.inView ? `${i * 100}ms` : undefined }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-white border border-blue-200 flex items-center justify-center mx-auto mb-3">
                      <benefit.icon size={18} className="text-blue-500" />
                    </div>
                    <h3 className="font-bold text-gray-800 text-sm mb-1">{benefit.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{benefit.desc}</p>
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
                  <stat.icon size={20} className="text-blue-500 mx-auto mb-2" />
                  <div className="font-syne font-bold text-xl text-gray-900">{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>

            <div
              ref={ctaSection.ref}
              className={`mt-12 bg-linear-to-r from-blue-500 to-indigo-500 rounded-xl p-8 md:p-10 text-center shadow-lg transition-shadow duration-300 hover:shadow-xl ${
                ctaSection.inView ? 'reveal-visible' : 'reveal-hidden'
              }`}
            >
              <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 rounded-full px-4 py-1.5 mb-4">
                <Sparkles size={14} className="text-white" />
                <span className="text-xs font-semibold text-white uppercase">Ready to Start?</span>
              </div>
              <h2 className="font-syne font-bold text-2xl md:text-3xl text-white mb-2">
                Let's Build Your Next Big Idea
              </h2>
              <p className="text-blue-100 mb-6 max-w-md mx-auto">
                From concept to deployment, we're here to bring your vision to life.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button 
                  onClick={() => setCurrentPage('contact')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-blue-600 font-semibold text-sm shadow-lg hover:bg-gray-100 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                >
                  <Calendar size={16} />
                  Start a Project
                </button>
                <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600/30 border border-white/30 text-white font-semibold text-sm hover:bg-blue-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300">
                  <Phone size={16} />
                  Call Us Now
                </button>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-400 text-sm">
                ⚡ Free consultation | Typical response time: 24 hours | 
                <button onClick={() => setCurrentPage('contact')} className="text-blue-500 hover:underline ml-1 transition-all duration-300">Schedule a call →</button>
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default ServicesPage