import React, { useState } from 'react'
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

const SolutionsPage: React.FC<SolutionsPageProps> = ({ setCurrentPage }) => {
  const [expandedSolution, setExpandedSolution] = useState<number | null>(null)

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
    <div className="bg-white min-h-screen">
      <section className="relative bg-linear-to-br from-blue-50 via-white to-indigo-50 border-b border-blue-100 py-16 md:py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-xs font-semibold text-blue-600 tracking-wide uppercase">Core Solutions</span>
          </div>
          
          <h1 className="font-syne font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4">
            Smart Digital Solutions<br />for Modern Enterprises
          </h1>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Comprehensive software ecosystems built to automate, scale, and transform your business operations.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {solutions.map((sol, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-xl border border-blue-100 shadow-sm overflow-hidden hover:shadow-lg transition-all"
              >
                {/* Solution Header */}
                <div className="p-6 border-b border-blue-50">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow-md shrink-0">
                      <sol.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="font-syne font-bold text-xl md:text-2xl text-gray-900">{sol.title}</h2>
                      <p className="text-blue-500 text-sm font-medium mt-1">{sol.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {expandedSolution === idx ? sol.longDesc : sol.shortDesc}
                  </p>
                  <button
                    onClick={() => setExpandedSolution(expandedSolution === idx ? null : idx)}
                    className="inline-flex items-center gap-1 text-blue-500 text-sm font-medium mt-3 hover:gap-2 transition-all"
                  >
                    {expandedSolution === idx ? (
                      <>Show Less <ChevronUp size={14} /></>
                    ) : (
                      <>Read More <ChevronDown size={14} /></>
                    )}
                  </button>
                </div>

                <div className="p-6 bg-gray-50/30">
                  <div className="grid md:grid-cols-2 gap-3">
                    {sol.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 bg-white rounded-lg p-3 border border-blue-50 hover:border-blue-200 transition-all">
                        <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>

                  {expandedSolution === idx && (
                    <div className="mt-5 pt-4 border-t border-blue-100">
                      <div className="mb-4">
                        <h3 className="font-semibold text-gray-800 text-sm mb-2">Key Benefits:</h3>
                        <div className="flex flex-wrap gap-2">
                          {sol.benefits.map((benefit, i) => (
                            <span key={i} className="px-2 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium">
                              ✓ {benefit}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h3 className="font-semibold text-gray-800 text-sm mb-2">Technologies:</h3>
                        <div className="flex flex-wrap gap-1.5">
                          {sol.technologies.map((tech, i) => (
                            <span key={i} className="px-2 py-1 bg-gray-100 rounded-md text-gray-600 text-xs">
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
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-linear-to-r from-blue-50 to-indigo-50 rounded-xl p-6 md:p-8 border border-blue-100">
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
                <div key={i} className="flex items-start gap-3 bg-white rounded-lg p-3 border border-blue-100 hover:border-blue-200 transition-all">
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

          {/* Stats Section */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white rounded-xl p-4 border border-blue-100 shadow-sm text-center">
                <stat.icon size={18} className="text-blue-500 mx-auto mb-2" />
                <div className="font-syne font-bold text-xl text-gray-900">{stat.value}</div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                  <GitBranch size={14} className="text-blue-500" />
                </div>
                <p className="text-sm text-gray-700">
                  <strong className="text-gray-900">Seamless Integration</strong> — Our solutions integrate with your existing tools
                </p>
              </div>
              <button className="text-blue-500 text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                Learn more
              </button>
            </div>
          </div>

          <div className="mt-12 bg-linear-to-r from-blue-500 to-indigo-500 rounded-xl p-8 md:p-10 text-center shadow-lg">
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
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-blue-600 font-semibold text-sm shadow-md hover:bg-gray-100 transition-all"
              >
                <Calendar size={14} />
                Schedule Consultation
              </button>
              <button 
                onClick={() => setCurrentPage('contact')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600/30 border border-white/30 text-white font-semibold text-sm hover:bg-blue-600/40 transition-all"
              >
                <Mail size={14} />
                Contact Sales
              </button>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              ⚡ Free demo available | 14-day trial | 
              <button onClick={() => setCurrentPage('contact')} className="text-blue-500 hover:underline ml-1">Request a demo →</button>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SolutionsPage