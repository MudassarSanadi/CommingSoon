import React, { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Target, Eye, CheckCircle2, Zap, Shield, Users, Clock, TrendingUp, Award, Briefcase, MapPin } from 'lucide-react'

interface AboutPageProps {
  setCurrentPage: (page: any) => void
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

const AboutPage: React.FC<AboutPageProps> = ({ setCurrentPage }) => {
  const [heroLoaded, setHeroLoaded] = useState(false)

  const missionVisionSection = useInView<HTMLDivElement>()
  const statsSection = useInView<HTMLDivElement>()
  const valuesSection = useInView<HTMLDivElement>()
  const ctaSection = useInView<HTMLElement>()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    const t = requestAnimationFrame(() => setHeroLoaded(true))
    return () => cancelAnimationFrame(t)
  }, [])

  const values = [
    { icon: CheckCircle2, title: 'Precision', desc: 'Every line of code, every interface decision is made with deliberate intent and technical rigor.' },
    { icon: Zap, title: 'Innovation', desc: 'We embrace emerging technologies and challenge conventional approaches.' },
    { icon: Shield, title: 'Reliability', desc: 'Systems that businesses depend on must be robust, tested, and maintained.' },
    { icon: TrendingUp, title: 'Scalability', desc: 'Architecture designed to grow with your business without a rebuild.' },
    { icon: Clock, title: 'Efficiency', desc: 'We eliminate waste in both software and process.' },
    { icon: Users, title: 'Partnership', desc: 'Long-term partners in your digital journey.' },
  ]

  const teamStats = [
    { value: '8+', label: 'Years of Excellence', icon: Award },
    { value: '15+', label: 'Expert Engineers', icon: Users },
    { value: '12+', label: 'Industry Verticals', icon: Briefcase },
    { value: 'PAN India', label: 'Presence', icon: MapPin },
  ]

  return (
    <>
      <Helmet>
        <title>About - Logic Shell | Our Mission & Vision</title>
        <meta name="description" content="Learn about Logic Shell LLP - A technology company built on precision and innovation. We design, build, and deploy scalable digital solutions for modern businesses." />
        <link rel="canonical" href="https://thelogicshell.com/about" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="About - Logic Shell | Our Mission & Vision" />
        <meta property="og:description" content="Learn about Logic Shell LLP - A technology company built on precision and innovation. We design, build, and deploy scalable digital solutions for modern businesses." />
        <meta property="og:url" content="https://thelogicshell.com/about" />
        <meta property="og:image" content="https://thelogicshell.com/favicon.svg" />
        <meta property="og:site_name" content="Logic Shell" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About - Logic Shell | Our Mission & Vision" />
        <meta name="twitter:description" content="Learn about Logic Shell LLP - A technology company built on precision and innovation." />
        <meta name="twitter:image" content="https://thelogicshell.com/favicon.svg" />

        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://thelogicshell.com/' },
              { '@type': 'ListItem', position: 2, name: 'About', item: 'https://thelogicshell.com/about' },
            ],
          })}
        </script>
      </Helmet>

     
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
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
        <section className="bg-linear-to-br from-blue-50 via-white to-indigo-50 border-b border-blue-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div
              className="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 rounded-full px-4 py-1.5 mb-4 transition-all duration-700 ease-out"
              style={{
                opacity: heroLoaded ? 1 : 0,
                transform: heroLoaded ? 'translateY(0)' : 'translateY(16px)',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-xs font-semibold text-blue-600 tracking-wide uppercase">Our Story</span>
            </div>
            <h1
              className="font-syne font-bold text-4xl md:text-5xl text-gray-900 mb-3 transition-all duration-700 ease-out"
              style={{
                opacity: heroLoaded ? 1 : 0,
                transform: heroLoaded ? 'translateY(0)' : 'translateY(24px)',
                transitionDelay: '100ms',
              }}
            >
              About Logic Shell LLP
            </h1>
            <p
              className="text-gray-600 text-lg max-w-2xl mx-auto transition-all duration-700 ease-out"
              style={{
                opacity: heroLoaded ? 1 : 0,
                transform: heroLoaded ? 'translateY(0)' : 'translateY(24px)',
                transitionDelay: '220ms',
              }}
            >
              A technology company built on the belief that precision and innovation are not trade-offs.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div ref={missionVisionSection.ref} className="grid md:grid-cols-2 gap-8 mb-16">
              <div
                className={`bg-white rounded-xl p-6 border border-blue-100 shadow-sm transition-all duration-300 hover:shadow-md ${
                  missionVisionSection.inView ? 'reveal-visible' : 'reveal-hidden'
                }`}
              >
                <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 rounded-full px-3 py-1 mb-4">
                  <Target size={14} className="text-blue-500" />
                  <span className="text-xs font-bold text-blue-600 uppercase">Our Mission</span>
                </div>
                <h2 className="font-syne font-bold text-2xl text-gray-900 mb-3">Simplify operations through powerful software ecosystems</h2>
                <p className="text-gray-600 leading-relaxed">
                  Logic Shell LLP was founded on the conviction that great software should feel invisible — it should simply work, reliably and at scale. 
                  We partner with businesses to design, build, and deploy technology that removes friction and unlocks capability.
                </p>
              </div>
              <div
                className={`bg-linear-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100 shadow-sm transition-all duration-300 hover:shadow-md ${
                  missionVisionSection.inView ? 'reveal-visible' : 'reveal-hidden'
                }`}
                style={{ animationDelay: missionVisionSection.inView ? '150ms' : undefined }}
              >
                <div className="inline-flex items-center gap-2 bg-white/80 border border-blue-200 rounded-full px-3 py-1 mb-4">
                  <Eye size={14} className="text-blue-500" />
                  <span className="text-xs font-bold text-blue-600 uppercase">Our Vision</span>
                </div>
                <h2 className="font-syne font-bold text-2xl text-gray-900 mb-3">Intelligent, scalable, future-ready digital systems</h2>
                <p className="text-gray-600 leading-relaxed">
                  We see a world where every business has access to enterprise-grade software that grows with them. 
                  Logic Shell LLP is building that future, one ecosystem at a time.
                </p>
              </div>
            </div>

            <div ref={statsSection.ref} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              {teamStats.map((stat, i) => (
                <div
                  key={i}
                  className={`bg-white rounded-lg p-4 text-center border border-blue-100 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 ${
                    statsSection.inView ? 'reveal-visible' : 'reveal-hidden'
                  }`}
                  style={{ animationDelay: statsSection.inView ? `${i * 100}ms` : undefined }}
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center mx-auto mb-2">
                    <stat.icon size={18} className="text-blue-500" />
                  </div>
                  <div className="font-syne font-bold text-xl text-gray-900">{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 rounded-full px-3 py-1 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span className="text-xs font-bold text-blue-600 uppercase">What Drives Us</span>
              </div>
              <h2 className="font-syne font-bold text-3xl text-gray-900">Our Core Values</h2>
            </div>

            <div ref={valuesSection.ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {values.map((value, i) => (
                <div
                  key={i}
                  className={`bg-white border border-blue-100 rounded-xl p-5 text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300 ${
                    valuesSection.inView ? 'reveal-visible' : 'reveal-hidden'
                  }`}
                  style={{ animationDelay: valuesSection.inView ? `${i * 90}ms` : undefined }}
                >
                  <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center mx-auto mb-3 transition-transform duration-300 hover:scale-110">
                    <value.icon size={20} className="text-blue-500" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          ref={ctaSection.ref}
          className="py-16 bg-linear-to-r from-blue-500 to-indigo-500"
        >
          <div
            className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center ${
              ctaSection.inView ? 'reveal-visible' : 'reveal-hidden'
            }`}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Ready to Build Something Great?</h2>
            <p className="text-blue-100 mb-5">Let's discuss how Logic Shell can help transform your business.</p>
            <button 
              onClick={() => setCurrentPage('contact')}
              className="px-6 py-3 rounded-lg bg-white text-blue-600 font-semibold hover:bg-gray-100 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 shadow-lg"
            >
              Start a Conversation
            </button>
          </div>
        </section>
      </div>
    </>
  )
}

export default AboutPage