import React from 'react'
import { Database, Cloud, Smartphone, Cpu, CheckCircle2, Calendar, Sparkles, Factory, Droplet, Store, Activity } from 'lucide-react'
import type { PageType } from '../App'

interface IndustryPageProps {
  setCurrentPage: (page: PageType) => void
}

const IndustryPage: React.FC<IndustryPageProps> = ({ setCurrentPage }) => {
  const industries = [
    { 
      icon: Database, 
      title: 'Operational Data Systems', 
      subtitle: 'Records, reporting, and tracking',
      color: 'blue',
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
      color: 'indigo',
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
      color: 'cyan',
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
      color: 'purple',
      items: [
        'Integration with industry-grade analyzers and machines',
        'Automated data capture systems via device APIs',
        'Plug-and-play connectivity solutions'
      ] 
    }
  ]

  const industriesList = [
    { icon: Factory, name: 'Manufacturing', desc: 'Production tracking, inventory management, quality control' },
    { icon: Droplet, name: 'Dairy & Agriculture', desc: 'Farm management, testing, billing, supply chain' },
    { icon: Store, name: 'Retail & Distribution', desc: 'POS systems, inventory, customer management' },
    { icon: Activity, name: 'Healthcare', desc: 'Patient records, appointment systems, billing' }
  ]

  const dairyModules = [
    { 
      title: 'Farm Management', 
      items: [
        'Farmer registration and production tracking',
        'Cattle and yield record management',
        'Farm-level analytics and performance reports'
      ] 
    },
    { 
      title: 'Quality Testing System', 
      items: [
        'Automated analyzer integration for data capture',
        'Fat and SNF measurement and logging',
        'Quality validation and rejection workflow'
      ] 
    },
    { 
      title: 'Billing and Payment System', 
      items: [
        'Automated rate calculation based on quality metrics',
        'Payment slips and settlement tracking',
        'Bank integration-ready payment system'
      ] 
    },
    { 
      title: 'Cloud Analytics', 
      items: [
        'Real-time operational dashboards',
        'Multi-branch consolidated reporting',
        'Historical data insights and trend analysis'
      ] 
    }
  ]

  const flowSteps = ['Farmer Collection', 'Quality Testing', 'Smart Billing', 'Cloud Sync', 'Analytics']

  return (
    <div className="bg-white min-h-screen">
      <section className="relative bg-linear-to-br from-blue-50 via-white to-indigo-50 border-b border-blue-100 py-16 md:py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-xs font-semibold text-blue-600 tracking-wide uppercase">Industry Focus</span>
          </div>
          
          <h1 className="font-syne font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4">
            Industry-Focused<br />Digital Ecosystems
          </h1>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
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
              We deliver tailored solutions for diverse industry verticals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {industriesList.map((industry, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-blue-100 shadow-sm hover:shadow-md hover:border-blue-300 transition-all text-center">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mx-auto mb-3">
                  <industry.icon size={20} className="text-blue-500" />
                </div>
                <h3 className="font-bold text-gray-800 mb-1">{industry.name}</h3>
                <p className="text-xs text-gray-500">{industry.desc}</p>
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

          <div className="grid md:grid-cols-2 gap-6">
            {industries.map((ind, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-blue-100 shadow-sm hover:shadow-md transition-all">
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
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 rounded-full px-3 py-1 mb-4">
              <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">Case Study</span>
            </div>
            <h2 className="font-syne font-bold text-3xl text-gray-900 mb-3">Dairy Ecosystem Solution</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              A complete supply chain management platform engineered for the dairy industry
            </p>
          </div>

          {/* Flow Visualization */}
          <div className="bg-linear-to-r from-blue-500 to-indigo-500 rounded-xl p-5 mb-10 overflow-x-auto">
            <div className="flex items-center justify-between min-w-80">
              {flowSteps.map((step, i) => (
                <React.Fragment key={i}>
                  <div className="text-center">
                    <div className="w-10 h-10 bg-white/20 border-2 border-white/30 rounded-full flex items-center justify-center text-white font-bold text-sm mx-auto mb-2">
                      {i + 1}
                    </div>
                    <div className="text-xs text-white/80 whitespace-nowrap">{step}</div>
                  </div>
                  {i < flowSteps.length - 1 && (
                    <div className="text-white/40">→</div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Modules Grid */}
          <div className="grid md:grid-cols-2 gap-5 mb-8">
            {dairyModules.map((module, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-blue-100 shadow-sm hover:shadow-md transition-all">
                <h3 className="font-bold text-gray-900 mb-3 pb-2 border-b border-blue-100">{module.title}</h3>
                <ul className="space-y-2">
                  {module.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-blue-700 text-sm flex items-center gap-2">
              <span className="text-lg">💡</span> 
              This is one of many industry-specific solutions supported by Logic Shell LLP — including manufacturing, retail, healthcare, and logistics.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-linear-to-r from-blue-500 to-indigo-500 rounded-xl p-8 md:p-10 text-center shadow-lg">
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
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-blue-600 font-semibold text-sm shadow-md hover:bg-gray-100 transition-all"
              >
                <Calendar size={14} />
                Schedule a Call
              </button>
              <button 
                onClick={() => window.location.href = 'tel:+919876543210'}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600/30 border border-white/30 text-white font-semibold text-sm hover:bg-blue-600/40 transition-all"
              >
                <Calendar size={14} />
                Call Us Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default IndustryPage