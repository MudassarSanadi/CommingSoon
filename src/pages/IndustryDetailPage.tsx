import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, Calendar, Sparkles, Mail, 
  TrendingUp, Users, Package, Activity, Droplet, Factory, Store,
  Award, Clock, Shield, Zap, BarChart3, Settings, Truck, 
  ClipboardCheck, Database, Cloud, Smartphone, Cpu
} from 'lucide-react';
import type { PageType } from '../App';

interface IndustryDetailPageProps {
  setCurrentPage: (page: PageType) => void;
}

const IndustryDetailPage: React.FC<IndustryDetailPageProps> = ({ setCurrentPage }) => {
  const { industryId } = useParams();
  const navigate = useNavigate();

  // High-quality optimized images for each industry
  const heroImages: Record<string, string> = {
    manufacturing: 'https://i.pinimg.com/736x/c2/03/f0/c203f0f2ca090e28d38c375f6591fe9f.jpg',
    dairy: 'https://i.pinimg.com/1200x/23/7d/4c/237d4c85c92e6ac7235f782c8073df77.jpg',
    retail: 'https://i.pinimg.com/1200x/52/bc/a2/52bca2af216c16bd480dd3d815713ff7.jpg',
    healthcare: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1600&h=500&fit=crop&q=80',
  };

  const industryData: Record<string, any> = {
    manufacturing: {
      name: 'Manufacturing',
      tagline: 'Smart Factory Automation & Production Excellence',
      icon: Factory,
      color: 'blue',
      gradient: 'from-blue-500 to-cyan-500',
      description: 'Complete manufacturing execution system (MES) for production tracking, quality control, and inventory management.',
      longDescription: 'Our manufacturing solution provides end-to-end production management, from raw material procurement to finished goods dispatch. Real-time monitoring, quality control checkpoints, and automated reporting help you optimize production and reduce downtime.',
      stats: [
        { value: '98%', label: 'OEE Improvement', icon: TrendingUp },
        { value: '35%', label: 'Cost Reduction', icon: TrendingUp },
        { value: '24/7', label: 'Real-time Monitoring', icon: Clock },
        { value: '99.9%', label: 'Quality Accuracy', icon: Award },
      ],
      features: [
        { title: 'Production Planning & Scheduling', description: 'AI-powered production scheduling and capacity planning', icon: Settings },
        { title: 'Real-time Machine Monitoring', description: 'Live production metrics and machine performance tracking', icon: Activity },
        { title: 'Quality Control System', description: 'Automated quality checks at every production stage', icon: ClipboardCheck },
        { title: 'Inventory Management', description: 'Raw material WIP and finished goods tracking', icon: Package },
        { title: 'Predictive Maintenance', description: 'AI-driven maintenance alerts and scheduling', icon: Cpu },
        { title: 'Labor Management', description: 'Worker productivity attendance and skill tracking', icon: Users },
        { title: 'Supply Chain Integration', description: 'Vendor management and logistics coordination', icon: Truck },
        { title: 'Analytics Dashboard', description: 'Custom reports and real-time business insights', icon: BarChart3 },
      ],
      benefits: [
        { metric: '30%', label: 'Reduction in Downtime', color: 'blue' },
        { metric: '25%', label: 'Increased Productivity', color: 'cyan' },
        { metric: '40%', label: 'Better Quality Control', color: 'indigo' },
        { metric: '50%', label: 'Faster Reporting', color: 'blue' },
      ],
      technologies: ['IoT Sensors', 'SCADA Integration', 'Real-time Analytics', 'Cloud Platform', 'AI/ML', 'Edge Computing'],
      modules: [
        { name: 'Production Module', status: 'Core', features: 12 },
        { name: 'Quality Module', status: 'Core', features: 8 },
        { name: 'Inventory Module', status: 'Core', features: 10 },
        { name: 'Maintenance Module', status: 'Advanced', features: 7 },
      ]
    },
    dairy: {
      name: 'Dairy & Agriculture',
      tagline: 'End-to-End Farm-to-Glass Digital Ecosystem',
      icon: Droplet,
      color: 'teal',
      gradient: 'from-teal-500 to-emerald-500',
      description: 'Complete dairy ecosystem management from farm collection to payment processing.',
      longDescription: 'Transform your dairy operations with our comprehensive platform. From farmer management to milk testing, automated billing, and supply chain optimization, we provide end-to-end solutions for modern dairy businesses.',
      stats: [
        { value: '10K+', label: 'Farmers Onboarded', icon: Users },
        { value: '1M+', label: 'Litres/Day', icon: Droplet },
        { value: '99.9%', label: 'Testing Accuracy', icon: Award },
        { value: 'Same Day', label: 'Payments', icon: Clock },
      ],
      features: [
        { title: 'Farmer Management', description: 'Complete farmer profiles production history and GPS mapping', icon: Users },
        { title: 'Milk Collection System', description: 'Automated collection center management with mobile apps', icon: Database },
        { title: 'Quality Testing Integration', description: 'Fat/SNF testing and automated quality grading', icon: ClipboardCheck },
        { title: 'Smart Billing Engine', description: 'Automated payment calculations and bank integration', icon: TrendingUp },
        { title: 'Cold Chain Monitoring', description: 'Temperature monitoring and real-time alerts', icon: Shield },
        { title: 'Transport Logistics', description: 'Route optimization and GPS vehicle tracking', icon: Truck },
        { title: 'Feed & Inventory', description: 'Cattle feed management and sales tracking', icon: Package },
        { title: 'Cloud Analytics', description: 'Real-time dashboards and business insights', icon: BarChart3 },
      ],
      benefits: [
        { metric: '99%', label: 'Accurate Testing', color: 'teal' },
        { metric: 'Same Day', label: 'Farmer Payments', color: 'emerald' },
        { metric: '50%', label: 'Reduced Collection Time', color: 'teal' },
        { metric: '100%', label: 'Supply Chain Visibility', color: 'emerald' },
      ],
      technologies: ['Analyzer Integration', 'Mobile Apps', 'SMS Gateway', 'Payment Gateway', 'IoT Sensors', 'Blockchain'],
      modules: [
        { name: 'Collection Module', status: 'Core', features: 10 },
        { name: 'Testing Module', status: 'Core', features: 6 },
        { name: 'Billing Module', status: 'Core', features: 8 },
        { name: 'Logistics Module', status: 'Advanced', features: 9 },
      ]
    },
    retail: {
      name: 'Retail & Distribution',
      tagline: 'Modern Commerce Platform for Omnichannel Success',
      icon: Store,
      color: 'orange',
      gradient: 'from-orange-500 to-red-500',
      description: 'Modern retail management platform with POS, inventory control, and CRM.',
      longDescription: 'Empower your retail business with our integrated platform. Manage multiple stores, track inventory in real-time, analyze customer behavior, and optimize your supply chain with powerful analytics.',
      stats: [
        { value: '40%', label: 'Faster Checkout', icon: Zap },
        { value: 'Real-time', label: 'Inventory Sync', icon: Package },
        { value: '35%', label: 'Better Retention', icon: Users },
        { value: '50%', label: 'Less Stockouts', icon: Shield },
      ],
      features: [
        { title: 'Point of Sale (POS)', description: 'Fast intuitive checkout with multi-payment support', icon: Smartphone },
        { title: 'Multi-store Management', description: 'Centralized control of all locations from one dashboard', icon: Store },
        { title: 'Real-time Inventory', description: 'Live stock tracking across all stores and warehouses', icon: Package },
        { title: 'Customer CRM', description: 'Loyalty programs purchase history and targeted offers', icon: Users },
        { title: 'Supplier Portal', description: 'Automated reordering and vendor performance tracking', icon: Truck },
        { title: 'Sales Analytics', description: 'Performance reports trends and profit analysis', icon: BarChart3 },
        { title: 'E-commerce Integration', description: 'Sync online and offline inventory seamlessly', icon: Cloud },
        { title: 'Mobile Manager App', description: 'Real-time alerts and business overview on mobile', icon: Smartphone },
      ],
      benefits: [
        { metric: '40%', label: 'Faster Checkout', color: 'orange' },
        { metric: 'Real-time', label: 'Inventory Updates', color: 'red' },
        { metric: '35%', label: 'Better Retention', color: 'orange' },
        { metric: '50%', label: 'Less Stockouts', color: 'red' },
      ],
      technologies: ['Barcode Scanner', 'Payment Terminal', 'Mobile App', 'Analytics', 'AI Recommendations', 'QR Codes'],
      modules: [
        { name: 'POS Module', status: 'Core', features: 15 },
        { name: 'Inventory Module', status: 'Core', features: 12 },
        { name: 'CRM Module', status: 'Core', features: 10 },
        { name: 'Analytics Module', status: 'Advanced', features: 8 },
      ]
    },
    healthcare: {
      name: 'Healthcare',
      tagline: 'Secure Compliant and Patient-First Digital Health Platform',
      icon: Activity,
      color: 'purple',
      gradient: 'from-purple-500 to-pink-500',
      description: 'HIPAA-compliant healthcare management system for clinics and hospitals.',
      longDescription: 'Modernize your healthcare practice with our comprehensive platform. Manage patient records, schedule appointments, process billing, and ensure compliance with healthcare regulations.',
      stats: [
        { value: '50%', label: 'Less Paperwork', icon: ClipboardCheck },
        { value: '24/7', label: 'Patient Portal', icon: Clock },
        { value: 'Faster', label: 'Claims Processing', icon: Zap },
        { value: '100%', label: 'HIPAA Compliant', icon: Shield },
      ],
      features: [
        { title: 'Electronic Health Records', description: 'Centralized digital health records with access controls', icon: Database },
        { title: 'Appointment Scheduling', description: 'Online booking automated reminders and calendar sync', icon: Calendar },
        { title: 'Patient Portal', description: '24/7 access to health records test results and messaging', icon: Users },
        { title: 'Billing & Insurance', description: 'Automated invoicing insurance claims and payment tracking', icon: TrendingUp },
        { title: 'Prescription Management', description: 'Digital prescriptions e-prescribing and refill tracking', icon: ClipboardCheck },
        { title: 'Lab Integration', description: 'Test ordering result integration and lab management', icon: Activity },
        { title: 'Telemedicine', description: 'Video consultations remote monitoring and e-prescriptions', icon: Cloud },
        { title: 'Compliance & Security', description: 'HIPAA-ready audit logs and data encryption', icon: Shield },
      ],
      benefits: [
        { metric: '50%', label: 'Less Paperwork', color: 'purple' },
        { metric: 'Better', label: 'Patient Experience', color: 'pink' },
        { metric: 'Faster', label: 'Claims Processing', color: 'purple' },
        { metric: '100%', label: 'Compliant', color: 'pink' },
      ],
      technologies: ['EHR Standards', 'Video API', 'Secure Cloud', 'Mobile Access', '2FA', 'Audit Logs'],
      modules: [
        { name: 'EHR Module', status: 'Core', features: 14 },
        { name: 'Appointment Module', status: 'Core', features: 9 },
        { name: 'Billing Module', status: 'Core', features: 11 },
        { name: 'Telehealth Module', status: 'Advanced', features: 7 },
      ]
    }
  };

  const industry = industryData[industryId || 'manufacturing'];
  const heroImage = heroImages[industryId || 'manufacturing'];
  const IconComponent = industry.icon;

  if (!industry) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Industry not found</h2>
          <button onClick={() => navigate('/industry')} className="text-blue-500 hover:underline">
            Back to Industries
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section with Clean Image - No Overlay Colors */}
      <section className="relative h-[50vh] md:h-[55vh] lg:h-[60vh] min-h-87.5 max-h-125 overflow-hidden">
        {/* Background Image */}
        <img 
          src={heroImage} 
          alt={industry.name}
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ objectPosition: 'center 30%' }}
        />
        
        {/* Dark gradient overlay for text readability - subtle */}
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-black/20" />
        
        {/* Content */}
        <div className="relative z-10 h-full flex items-end pb-12 md:pb-16 lg:pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <button 
              onClick={() => navigate('/industry')}
              className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-4 md:mb-6 group bg-black/30 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full text-sm md:text-base transition-all"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Back to Industries
            </button>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4 mb-2 md:mb-3">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-md rounded-xl md:rounded-2xl flex items-center justify-center border border-white/40 shadow-lg">
                <IconComponent size={24} className="text-white md:w-8 md:h-8" />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-2 py-0.5 md:px-3 md:py-1 mb-1 md:mb-2">
                  <span className="text-[10px] md:text-xs font-semibold text-white uppercase tracking-wide">Industry Solution</span>
                </div>
                <h1 className="font-syne font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white leading-tight">
                  {industry.name}
                </h1>
              </div>
            </div>
            <p className="text-white/95 text-base md:text-lg lg:text-xl max-w-2xl font-medium leading-relaxed">
              {industry.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 md:py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {industry.stats.map((stat: any, i: number) => (
              <div key={i} className="text-center p-3 md:p-4 rounded-xl bg-linear-to-br from-gray-50 to-white border border-gray-100 hover:shadow-md transition-shadow">
                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-${industry.color}-50 flex items-center justify-center mx-auto mb-2 md:mb-3`}>
                  <stat.icon size={20} className={`text-${industry.color}-500 md:w-5.5 md:h-5.5`} />
                </div>
                <div className={`text-xl md:text-2xl lg:text-3xl font-bold text-${industry.color}-600`}>{stat.value}</div>
                <div className="text-[11px] md:text-xs text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Overview</h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
                {industry.longDescription}
              </p>
              
              <div className="bg-linear-to-br from-gray-50 to-white rounded-xl p-5 md:p-6 border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-3 md:mb-4 flex items-center gap-2 text-base md:text-lg">
                  <Award size={18} className={`text-${industry.color}-500`} />
                  Key Benefits
                </h3>
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  {industry.benefits.map((benefit: any, i: number) => (
                    <div key={i} className="text-center p-2 md:p-3 bg-white rounded-lg border border-gray-100">
                      <div className={`text-base md:text-xl font-bold text-${benefit.color}-600`}>{benefit.metric}</div>
                      <div className="text-[10px] md:text-xs text-gray-500">{benefit.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Key Features</h2>
              <div className="space-y-3 max-h-100 md:max-h-125 overflow-y-auto pr-2 custom-scrollbar">
                {industry.features.map((feature: any, i: number) => (
                  <div key={i} className="flex items-start gap-3 p-3 md:p-4 bg-white rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all">
                    <div className={`w-7 h-7 md:w-8 md:h-8 rounded-lg bg-${industry.color}-50 flex items-center justify-center shrink-0`}>
                      <feature.icon size={14} className={`text-${industry.color}-500 md:w-4 md:h-4`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-xs md:text-sm">{feature.title}</h3>
                      <p className="text-[10px] md:text-xs text-gray-500 mt-0.5">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-10 md:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Solution Modules</h2>
            <p className="text-gray-500 text-sm md:text-base">Comprehensive modules designed for your business needs</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {industry.modules.map((module: any, i: number) => (
              <div key={i} className="bg-white rounded-xl p-3 md:p-5 border border-gray-100 text-center hover:shadow-md transition-all">
                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-${industry.color}-50 flex items-center justify-center mx-auto mb-2 md:mb-3`}>
                  <Package size={18} className={`text-${industry.color}-500 md:w-5 md:h-5`} />
                </div>
                <h3 className="font-bold text-gray-800 text-sm md:text-base mb-1">{module.name}</h3>
                <div className="flex items-center justify-center gap-1 md:gap-2 mt-1 md:mt-2">
                  <span className={`text-[10px] md:text-xs px-1.5 py-0.5 md:px-2 rounded-full ${module.status === 'Core' ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'}`}>
                    {module.status}
                  </span>
                  <span className="text-[10px] md:text-xs text-gray-400">{module.features} features</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`bg-linear-to-r ${industry.gradient} rounded-2xl p-6 md:p-8 text-white`}>
            <div className="text-center mb-4 md:mb-6">
              <h3 className="text-xl md:text-2xl font-bold mb-2">Technologies We Use</h3>
              <p className="text-white/80 text-xs md:text-sm">Cutting-edge technology stack for modern solutions</p>
            </div>
            <div className="flex flex-wrap gap-1.5 md:gap-2 justify-center">
              {industry.technologies.map((tech: string, i: number) => (
                <span key={i} className="px-2.5 py-1 md:px-4 md:py-2 bg-white/20 backdrop-blur-sm rounded-full text-[11px] md:text-sm font-medium border border-white/30">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`bg-linear-to-r ${industry.gradient} rounded-2xl p-6 md:p-10 text-center shadow-xl`}>
            <Sparkles size={24} className="text-white mx-auto mb-3 md:w-8 md:h-8" />
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-3">
              Ready to Transform Your {industry.name} Business?
            </h3>
            <p className="text-white/90 mb-5 md:mb-6 max-w-md mx-auto text-sm md:text-base">
              Let's discuss how we can help you implement these solutions and drive growth.
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
              <button 
                onClick={() => setCurrentPage('contact')}
                className="px-4 py-2 md:px-6 md:py-3 bg-white text-gray-800 rounded-xl font-semibold text-sm md:text-base hover:bg-gray-100 transition-all inline-flex items-center gap-2 shadow-lg"
              >
                <Mail size={16} />
                Contact Sales
              </button>
              <button 
                onClick={() => setCurrentPage('contact')}
                className="px-4 py-2 md:px-6 md:py-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-xl font-semibold text-sm md:text-base hover:bg-white/30 transition-all inline-flex items-center gap-2"
              >
                <Calendar size={16} />
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
        
        @media (min-width: 768px) {
          .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
          }
        }
      `}</style>
    </div>
  );
};

export default IndustryDetailPage;