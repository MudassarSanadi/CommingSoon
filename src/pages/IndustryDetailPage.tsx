import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, Calendar, Sparkles, Mail, X,
  TrendingUp, Users, Package, Activity, Droplet, Factory, Store,
  Award, Clock, Shield, Zap, BarChart3, Settings, Truck, 
  ClipboardCheck, Database, Cloud, Smartphone, Cpu, Milk, 
  Gauge, Warehouse, FlaskConical, 
  IceCream, Coffee, Sandwich, Wheat,  Croissant
} from 'lucide-react';
import type { PageType } from '../App';

interface IndustryDetailPageProps {
  setCurrentPage: (page: PageType) => void;
}

interface MachineItem {
  name: string;
  category: string;
  description: string;
  detailedInfo: string[];
  icon: any;
  image: string;
}

type ColorKey =
  | 'blue' | 'teal' | 'orange' | 'purple' | 'emerald'
  | 'cyan' | 'indigo' | 'pink' | 'red' | 'amber';

interface ColorClassSet {
  bg50: string;
  bg500: string;
  bg600: string;
  text500: string;
  text600: string;
  border300: string;
  hoverBg600: string;
}

const colorClasses: Record<ColorKey, ColorClassSet> = {
  blue: {
    bg50: 'bg-blue-50',
    bg500: 'bg-blue-500',
    bg600: 'bg-blue-600',
    text500: 'text-blue-500',
    text600: 'text-blue-600',
    border300: 'border-blue-300',
    hoverBg600: 'hover:bg-blue-600',
  },
  teal: {
    bg50: 'bg-teal-50',
    bg500: 'bg-teal-500',
    bg600: 'bg-teal-600',
    text500: 'text-teal-500',
    text600: 'text-teal-600',
    border300: 'border-teal-300',
    hoverBg600: 'hover:bg-teal-600',
  },
  orange: {
    bg50: 'bg-orange-50',
    bg500: 'bg-orange-500',
    bg600: 'bg-orange-600',
    text500: 'text-orange-500',
    text600: 'text-orange-600',
    border300: 'border-orange-300',
    hoverBg600: 'hover:bg-orange-600',
  },
  purple: {
    bg50: 'bg-purple-50',
    bg500: 'bg-purple-500',
    bg600: 'bg-purple-600',
    text500: 'text-purple-500',
    text600: 'text-purple-600',
    border300: 'border-purple-300',
    hoverBg600: 'hover:bg-purple-600',
  },
  emerald: {
    bg50: 'bg-emerald-50',
    bg500: 'bg-emerald-500',
    bg600: 'bg-emerald-600',
    text500: 'text-emerald-500',
    text600: 'text-emerald-600',
    border300: 'border-emerald-300',
    hoverBg600: 'hover:bg-emerald-600',
  },
  cyan: {
    bg50: 'bg-cyan-50',
    bg500: 'bg-cyan-500',
    bg600: 'bg-cyan-600',
    text500: 'text-cyan-500',
    text600: 'text-cyan-600',
    border300: 'border-cyan-300',
    hoverBg600: 'hover:bg-cyan-600',
  },
  indigo: {
    bg50: 'bg-indigo-50',
    bg500: 'bg-indigo-500',
    bg600: 'bg-indigo-600',
    text500: 'text-indigo-500',
    text600: 'text-indigo-600',
    border300: 'border-indigo-300',
    hoverBg600: 'hover:bg-indigo-600',
  },
  pink: {
    bg50: 'bg-pink-50',
    bg500: 'bg-pink-500',
    bg600: 'bg-pink-600',
    text500: 'text-pink-500',
    text600: 'text-pink-600',
    border300: 'border-pink-300',
    hoverBg600: 'hover:bg-pink-600',
  },
  red: {
    bg50: 'bg-red-50',
    bg500: 'bg-red-500',
    bg600: 'bg-red-600',
    text500: 'text-red-500',
    text600: 'text-red-600',
    border300: 'border-red-300',
    hoverBg600: 'hover:bg-red-600',
  },
  amber: {
    bg50: 'bg-amber-50',
    bg500: 'bg-amber-500',
    bg600: 'bg-amber-600',
    text500: 'text-amber-500',
    text600: 'text-amber-600',
    border300: 'border-amber-300',
    hoverBg600: 'hover:bg-amber-600',
  },
};

function getColorClasses(color: string): ColorClassSet {
  return colorClasses[color as ColorKey] || colorClasses.blue;
}

function useInView<T extends HTMLElement>(threshold = 0.1) {
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

const MachineCard: React.FC<{ machine: MachineItem; color: string; onClick: () => void; delay?: number; visible?: boolean }> = ({ machine, color, onClick, delay = 0, visible = true }) => {
  const c = getColorClasses(color);
  return (
    <div
      onClick={onClick}
      className="group bg-white rounded-xl border border-blue-100 shadow-sm hover:shadow-lg hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        animation: visible ? `fadeInUp 0.6s ease-out ${delay}ms both` : undefined,
      }}
    >
      <div className="relative h-64 md:h-72 bg-gray-100 overflow-hidden">
        <img
          src={machine.image}
          alt={machine.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        <div className={`absolute top-2 left-2 w-8 h-8 rounded-lg ${c.bg500} flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110`}>
          <machine.icon size={16} className="text-white" />
        </div>
      </div>

      <div className="p-4">
        <span className={`inline-block text-[10px] font-semibold uppercase tracking-wide ${c.text600} mb-1`}>
          {machine.category}
        </span>
        <h3 className="font-bold text-gray-900 text-sm md:text-base mb-1">{machine.name}</h3>
        <p className="text-xs text-gray-500 leading-relaxed">{machine.description}</p>
        <span className={`inline-block mt-2 text-[11px] font-medium ${c.text600} group-hover:underline transition-all duration-300`}>
          View Details →
        </span>
      </div>
    </div>
  );
};

const MachineModal: React.FC<{ machine: MachineItem; color: string; onClose: () => void }> = ({ machine, color, onClose }) => {
  const [visible, setVisible] = useState(false);
  const c = getColorClasses(color);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 200);
  };

  useEffect(() => {
    const t = requestAnimationFrame(() => setVisible(true));
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      cancelAnimationFrame(t);
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-200"
      style={{ opacity: visible ? 1 : 0 }}
      onClick={handleClose}
    >
      <div
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl transition-all duration-250 ease-out"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'scale(1) translateY(0)' : 'scale(0.94) translateY(16px)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-64 md:h-80 bg-gray-100">
          <img src={machine.image} alt={machine.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/60 hover:rotate-90 transition-all duration-300"
            aria-label="Close"
          >
            <X size={18} />
          </button>
          <div className="absolute bottom-4 left-5 flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl ${c.bg500} flex items-center justify-center shadow-md`}>
              <machine.icon size={20} className="text-white" />
            </div>
            <div>
              <span className={`block text-[10px] font-semibold uppercase tracking-wide text-white/80`}>
                {machine.category}
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-white">{machine.name}</h3>
            </div>
          </div>
        </div>

        <div className="p-5 md:p-6">
          <div className="space-y-3">
            {machine.detailedInfo.map((line, i) => (
              <div
                key={i}
                className="flex items-start gap-2.5"
                style={{ animation: visible ? `fadeInUp 0.4s ease-out ${i * 60 + 100}ms both` : undefined }}
              >
                <div className={`w-1.5 h-1.5 rounded-full ${c.bg500} mt-2 shrink-0`} />
                <p className="text-sm text-gray-600 leading-relaxed">{line}</p>
              </div>
            ))}
          </div>

          <button
            onClick={handleClose}
            className={`mt-6 w-full py-2.5 rounded-lg ${c.bg500} text-white font-semibold text-sm ${c.hoverBg600} transition-all duration-300`}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const IndustryDetailPage: React.FC<IndustryDetailPageProps> = ({ setCurrentPage }) => {
  const { industryId } = useParams();
  const navigate = useNavigate();
  const [activeMachine, setActiveMachine] = useState<MachineItem | null>(null);
  const [heroLoaded, setHeroLoaded] = useState(false);

  const statsSection = useInView<HTMLDivElement>();
  const overviewSection = useInView<HTMLDivElement>();
  const processingSection = useInView<HTMLDivElement>();
  const utilitySection = useInView<HTMLDivElement>();
  const receptionSection = useInView<HTMLDivElement>();
 
  const benefitsSection = useInView<HTMLDivElement>();
  const modulesSection = useInView<HTMLDivElement>();
  const techSection = useInView<HTMLDivElement>();
  const ctaSection = useInView<HTMLDivElement>();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    const t = requestAnimationFrame(() => setHeroLoaded(true));
    return () => cancelAnimationFrame(t);
  }, []);

  const heroImages: Record<string, string> = {
    manufacturing: 'https://i.pinimg.com/736x/c2/03/f0/c203f0f2ca090e28d38c375f6591fe9f.jpg',
    dairy: 'https://i.pinimg.com/1200x/23/7d/4c/237d4c85c92e6ac7235f782c8073df77.jpg',
    retail: 'https://i.pinimg.com/1200x/52/bc/a2/52bca2af216c16bd480dd3d815713ff7.jpg',
    healthcare: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1600&h=500&fit=crop&q=80',
    'milk-plant-machinery': 'https://i.pinimg.com/736x/c5/97/c4/c597c4708f5c84e3068bea03a1e51e7a.jpg',
    'milk-by-product-machinery': 'https://i.pinimg.com/1200x/b9/5e/c5/b95ec5519631ca915f75f3c459136347.jpg',
  };

  const milkMachines: MachineItem[] = [
   
  ];

  const byProductMachines: MachineItem[] = [
    {
      name: 'Ghee Plant Equipment',
      category: 'By-Product Processing',
      description: 'Complete Ghee production line with clarification, boiling, and packaging.',
      detailedInfo: [
        'Butter melting & clarification system with automatic temperature control.',
        'Continuous ghee boiling kettle with steam heating and agitation.',
        'Ghee filtration system for crystal-clear product quality.',
        'Automated filling & packaging line with nitrogen flushing.',
        'Capacity options from 500kg to 10,000kg per day.'
      ],
      icon: Coffee,
      image: 'https://5.imimg.com/data5/SELLER/Default/2022/2/IA/RZ/GY/680498/ghee-plant-500x500.JPG'
    },
    {
      name: 'Butter Plant Machinery',
      category: 'By-Product Processing',
      description: 'Complete butter production line from cream churning to packaging.',
      detailedInfo: [
        'Continuous butter churn with cream ripening and churning section.',
        'Butter working machine with moisture control and salt addition.',
        'Automatic butter packaging with portioning and wrapping.',
        'In-line CIP system for hygienic operation between batches.',
        'Capacity ranges from 1,000kg to 20,000kg per day.'
      ],
      icon: Package,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJLKWNbvQUx_eLz_NWy3mqAs7hhega-jaohf89SddcoXurDtOLAOgKRWc&s=10'
    },
    {
      name: 'Paneer & Chhena Plant',
      category: 'By-Product Processing',
      description: 'Paneer and Chhena production line with curd setting and pressing.',
      detailedInfo: [
        'Automatic curd setting vats with precise temperature control.',
        'Hydraulic pressing system for consistent paneer texture.',
        'Continuous paneer cutting & packaging line.',
        'Chhena production with specialized curd draining system.',
        'Capacity from 500kg to 5,000kg per day.'
      ],
      icon: Sandwich,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD24fmt3ysBxC4MNFnFMfigzE_MlU0FrvsqfjvnS1jKw&s'
    },
    {
      name: 'Curd & Yogurt Plant',
      category: 'By-Product Processing',
      description: 'Curd and Yogurt production line with incubation and cooling.',
      detailedInfo: [
        'Milk standardization and heating system with pasteurization.',
        'Automatic incubation chambers with precise temperature control.',
        'Continuous cooling and packaging systems for set and stirred curd.',
        'Yogurt fermentation tanks with culture addition and pH monitoring.',
        'Capacity from 1,000L to 10,000L per day.'
      ],
      icon: Milk,
      image: 'https://5.imimg.com/data5/SELLER/Default/2025/9/545845666/NI/BA/OE/142534/curd-yogurt-buttermilk-plant-500x500.jpg'
    },
    {
      name: 'Lassi Plant',
      category: 'By-Product Processing',
      description: 'Lassi production line for sweet and salted varieties.',
      detailedInfo: [
        'Milk standardization and pasteurization system.',
        'Flavoring and sugar addition with automated mixing.',
        'Homogenization for smooth, consistent texture.',
        'Aseptic filling and packaging system.',
        'Capacity from 1,000L to 8,000L per day.'
      ],
      icon: Droplet,
      image: 'https://5.imimg.com/data5/SU/DM/NV/SELLER-2051008/curd-lassi-plant-500x500.jpg'
    },
    {
      name: 'Cream Separator',
      category: 'By-Product Processing',
      description: 'High-speed centrifugal cream separation for fat standardization.',
      detailedInfo: [
        'Self-cleaning bowl design for continuous operation.',
        'Fat standardization from 0.5% to 60% with precision.',
        'Automatic desludging system reduces downtime.',
        'Integrated with CIP system for easy cleaning.',
        'Capacity from 2,000L to 20,000L per hour.'
      ],
      icon: Gauge,
      image: 'https://i.pinimg.com/736x/d1/7f/5b/d17f5b6f98ea920c33c56b39a5973e01.jpg'
    },
    {
      name: 'Khoya Plant',
      category: 'By-Product Processing',
      description: 'Khoya/Mawa production system with continuous cooking and cooling.',
      detailedInfo: [
        'Continuous khoya boiling kettle with scraping agitation.',
        'Automatic temperature and moisture control system.',
        'Cooling conveyor with product shaping and portioning.',
        'Vacuum packaging for extended shelf life.',
        'Capacity from 500kg to 5,000kg per day.'
      ],
      icon: Wheat,
      image: 'https://5.imimg.com/data5/YF/YZ/DR/SELLER-79448625/steam-operated-khoya-plant-500x500.jpg'
    },
    {
      name: 'Ice Cream Plant',
      category: 'By-Product Processing',
      description: 'Complete ice cream production line from mix preparation to freezing.',
      detailedInfo: [
        'Mix pasteurization and homogenization system.',
        'Continuous freezer with overrun control and flavor injection.',
        'Fruit & inclusion feeder for variegated products.',
        'Harding tunnel with automatic packaging and wrapping.',
        'Capacity from 1,000L to 15,000L per day.'
      ],
      icon: IceCream,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2rSXSydwusaT8NdiTANA4HEhFAsPzb6gZPY90Jrrzmf4p_JEczaQEhsPs&s=10'
    },
    {
      name: 'Flavoured Milk Plant',
      category: 'By-Product Processing',
      description: 'Flavoured milk production line with flavoring and packaging.',
      detailedInfo: [
        'Milk standardization and pasteurization system.',
        'Flavor addition tank with automated dosing system.',
        'Homogenization for uniform texture and mouthfeel.',
        'Aseptic filling for UHT and ESL products.',
        'Capacity from 2,000L to 20,000L per day.'
      ],
      icon: Coffee,
      image: 'https://5.imimg.com/data5/QX/AW/MY-3778663/flavoured-milk-plant.jpeg'
    },
    {
      name: 'Cheese Plant Equipment',
      category: 'By-Product Processing',
      description: 'Complete cheese production line from curd making to aging.',
      detailedInfo: [
        'Curd setting vats with cutting, stirring & cooking sections.',
        'Curd draining and matting system with whey recovery.',
        'Cheddaring and milling equipment for block cheese.',
        'Pressing, brining, and aging room systems.',
        'Capacity from 1,000kg to 10,000kg per day.'
      ],
      icon: Sandwich,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTrBj5op5ESOi5tBydx75G52bK4RY914TreztAzJSYoWjiviIyc8LjgmQ&s=10'
    },
    {
      name: 'Yogurt Plant System',
      category: 'By-Product Processing',
      description: 'Specialized yogurt production with fruit and flavor integration.',
      detailedInfo: [
        'Milk standardizing and pasteurizing system with heat treatment.',
        'Starter culture addition and fermentation tanks with temperature control.',
        'Fruit prepper and flavoring system for fruit-on-the-bottom.',
        'Automatic filling and packaging with multi-cup formats.',
        'Capacity from 1,000L to 8,000L per day.'
      ],
      icon: Croissant,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdLzeIOXa4PNWGCeQwjcMnXkzn_L_axncpyqlKyCLs-tIqODwtOvIwFCE&s=10'
    },
    {
      name: 'Dairy Mixing & Blending System',
      category: 'Utility & Automation',
      description: 'Centralized blending system for all by-products with recipe management.',
      detailedInfo: [
        'Computer controlled recipe management with automated ingredient dosing.',
        'Precise temperature control for different product requirements.',
        'In-line homogenization and deaeration for optimal product quality.',
        'Integrated CIP system for seamless cleaning between batches.',
        'Supports multiple product changeovers without cross-contamination.'
      ],
      icon: Settings,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8-SikN-7hKQ9tAWiwT4Sb4GhwzqdykD7Ucd2p_yj9cVG_4tSbRGg7nlY&s=10'
    }
  ];

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
    },
    'milk-plant-machinery': {
      name: 'Milk Plant Machinery',
      tagline: 'Complete Dairy Plant Equipment, From Reception to Processing',
      icon: Milk,
      color: 'blue',
      gradient: 'from-blue-500 to-indigo-500',
      description: 'Comprehensive dairy plant machinery covering processing, utility automation, and reception & storage.',
      longDescription: 'We deliver equipment that performs as a plant, not a pile of boxes. Our milk plant machinery lineup spans processing equipment like pasteurizers, homogenizers and heat exchangers, utility & automation systems like CIP and valve clusters, and reception & storage solutions built for real-world dairy operations.',
      stats: [
        { value: '12', label: 'Machine Types', icon: Package },
        { value: '500–10K+', label: 'LPH Capacity Range', icon: Gauge },
        { value: '1K–100K+ L', label: 'Storage Range', icon: Warehouse },
        { value: '100%', label: 'Hygienic Design', icon: Shield },
      ],
      isMachineryPage: true,
      machines: milkMachines,
      benefits: [
        { metric: '30%', label: 'Faster Processing', color: 'blue' },
        { metric: '99%', label: 'Hygiene Compliance', color: 'indigo' },
        { metric: '40%', label: 'Reduced Manual Labor', color: 'blue' },
        { metric: '100%', label: 'Plant-wide Integration', color: 'indigo' },
      ],
      technologies: ['SS304/SS316 Construction', 'PLC Automation', 'IoT Monitoring', 'Mix-proof Valves', 'CIP Integration', 'Cold Chain Systems'],
      modules: [
        { name: 'Processing Module', status: 'Core', features: 3 },
        { name: 'Utility Module', status: 'Core', features: 2 },
        { name: 'Reception Module', status: 'Core', features: 2 },
        { name: 'Processing & Utility Module', status: 'Advanced', features: 5 },
      ]
    },
    'milk-by-product-machinery': {
      name: 'Milk By-Product Machinery',
      tagline: 'Complete Processing Solutions For All Dairy By-Products',
      icon: FlaskConical,
      color: 'amber',
      gradient: 'from-amber-500 to-orange-500',
      description: 'Comprehensive machinery for Ghee, Butter, Paneer, Curd, Lassi, Cream Separator, Khoya, Ice Cream, Flavoured Milk, Cheese & Yogurt.',
      longDescription: 'Our milk by-product machinery line delivers complete processing solutions for dairy manufacturers. From Ghee and Butter to Paneer, Cheese, Yogurt, and Ice Cream, we provide end-to-end equipment that ensures consistent quality, operational efficiency, and full regulatory compliance.',
      stats: [
        { value: '11', label: 'Product Lines', icon: Package },
        { value: '500–20K+', label: 'Capacity Range', icon: Gauge },
        { value: '100%', label: 'Hygienic Design', icon: Shield },
        { value: '24/7', label: 'Automated Operation', icon: Clock },
      ],
      isMachineryPage: true,
      machines: byProductMachines,
      benefits: [
        { metric: '35%', label: 'Faster Production', color: 'amber' },
        { metric: '99%', label: 'Quality Consistency', color: 'orange' },
        { metric: '40%', label: 'Lower Operating Costs', color: 'amber' },
        { metric: '100%', label: 'Product Traceability', color: 'orange' },
      ],
      technologies: ['SS316 Food Grade', 'PLC Automation', 'Recipe Management', 'CIP Integration', 'IoT Ready', 'Energy Efficient Design'],
      modules: [
        { name: 'Ghee Module', status: 'Core', features: 4 },
        { name: 'Butter Module', status: 'Core', features: 4 },
        { name: 'Paneer Module', status: 'Core', features: 4 },
        { name: 'Curd/Yogurt Module', status: 'Core', features: 5 },
        { name: 'Ice Cream Module', status: 'Advanced', features: 6 },
        { name: 'Cheese Module', status: 'Advanced', features: 5 },
      ]
    }
  };

  const industry = industryData[industryId || 'manufacturing'];
  const heroImage = heroImages[industryId || 'manufacturing'];
  const IconComponent = industry?.icon;
  const c = getColorClasses(industry?.color);

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

  const industryTitle = `${industry.name} Solutions - Logic Shell`;

  return (
    <>
      <Helmet>
        <title>{industryTitle}</title>
        <meta name="description" content={`Logic Shell ${industry.name} solutions - ${industry.tagline}. Explore our comprehensive digital solutions for ${industry.name} industry.`} />
        <link rel="canonical" href={`https://thelogicshell.com/industry/${industryId}`} />
      </Helmet>

      {/* Scoped keyframes — no tailwind.config changes needed */}
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

      <div className="bg-white min-h-screen">
        <section className="relative h-[50vh] md:h-[55vh] lg:h-[60vh] min-h-87.5 max-h-125 overflow-hidden">
          <img 
            src={heroImage} 
            alt={industry.name}
            className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1200 ease-out"
            style={{ objectPosition: 'center 30%', transform: heroLoaded ? 'scale(1)' : 'scale(1.08)' }}
          />
          
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-black/20" />
          
          <div className="relative z-10 h-full flex items-end pb-12 md:pb-16 lg:pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <button 
                onClick={() => navigate('/industry')}
                className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-4 md:mb-6 group bg-black/30 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full text-sm md:text-base transition-all duration-300"
                style={{
                  opacity: heroLoaded ? 1 : 0,
                  transform: heroLoaded ? 'translateY(0)' : 'translateY(12px)',
                  transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
                }}
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-300" />
                Back to Industries
              </button>
              
              <div
                className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4 mb-2 md:mb-3"
                style={{
                  opacity: heroLoaded ? 1 : 0,
                  transform: heroLoaded ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 0.7s ease-out 100ms, transform 0.7s ease-out 100ms',
                }}
              >
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
              <p
                className="text-white/95 text-base md:text-lg lg:text-xl max-w-2xl font-medium leading-relaxed"
                style={{
                  opacity: heroLoaded ? 1 : 0,
                  transform: heroLoaded ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 0.7s ease-out 220ms, transform 0.7s ease-out 220ms',
                }}
              >
                {industry.tagline}
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-12 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div ref={statsSection.ref} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {industry.stats.map((stat: any, i: number) => (
                <div
                  key={i}
                  className={`text-center p-3 md:p-4 rounded-xl bg-linear-to-br from-gray-50 to-white border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 ${
                    statsSection.inView ? 'reveal-visible' : 'reveal-hidden'
                  }`}
                  style={{ animationDelay: statsSection.inView ? `${i * 100}ms` : undefined }}
                >
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl ${c.bg50} flex items-center justify-center mx-auto mb-2 md:mb-3`}>
                    <stat.icon size={20} className={`${c.text500} md:w-5.5 md:h-5.5`} />
                  </div>
                  <div className={`text-xl md:text-2xl lg:text-3xl font-bold ${c.text600}`}>{stat.value}</div>
                  <div className="text-[11px] md:text-xs text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {industry.isMachineryPage ? (
          <>
            <section className="py-10 md:py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-2">
                  <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto text-sm md:text-base">
                    {industry.longDescription}
                  </p>
                </div>
              </div>
            </section>

            <section className="py-6 md:py-8">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-4">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">Processing Equipment</h2>
                </div>
                <div ref={processingSection.ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {industry.machines.filter((m: MachineItem) => m.category === 'Processing Equipment').map((machine: MachineItem, i: number) => (
                    <MachineCard key={i} machine={machine} color={industry.color} onClick={() => setActiveMachine(machine)} delay={i * 100} visible={processingSection.inView} />
                  ))}
                </div>
              </div>
            </section>

            <section className="py-6 md:py-8 bg-gray-50/50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-4">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">By-Product Processing</h2>
                </div>
                <div ref={utilitySection.ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {industry.machines.filter((m: MachineItem) => m.category === 'By-Product Processing').map((machine: MachineItem, i: number) => (
                    <MachineCard key={i} machine={machine} color={industry.color} onClick={() => setActiveMachine(machine)} delay={i * 100} visible={utilitySection.inView} />
                  ))}
                </div>
              </div>
            </section>

            <section className="py-6 md:py-8 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-4">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">Utility & Automation</h2>
                </div>
                <div ref={receptionSection.ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {industry.machines.filter((m: MachineItem) => m.category === 'Utility & Automation').map((machine: MachineItem, i: number) => (
                    <MachineCard key={i} machine={machine} color={industry.color} onClick={() => setActiveMachine(machine)} delay={i * 100} visible={receptionSection.inView} />
                  ))}
                </div>
              </div>
            </section>
          </>
        ) : (
          <section className="py-10 md:py-16">
            <div ref={overviewSection.ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
                <div className={overviewSection.inView ? 'reveal-visible' : 'reveal-hidden'}>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Overview</h2>
                  <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
                    {industry.longDescription}
                  </p>
                  
                  <div className="bg-linear-to-br from-gray-50 to-white rounded-xl p-5 md:p-6 border border-gray-100">
                    <h3 className="font-semibold text-gray-900 mb-3 md:mb-4 flex items-center gap-2 text-base md:text-lg">
                      <Award size={18} className={c.text500} />
                      Key Benefits
                    </h3>
                    <div className="grid grid-cols-2 gap-3 md:gap-4">
                      {industry.benefits.map((benefit: any, i: number) => {
                        const bc = getColorClasses(benefit.color);
                        return (
                          <div key={i} className="text-center p-2 md:p-3 bg-white rounded-lg border border-gray-100 transition-transform duration-300 hover:-translate-y-0.5">
                            <div className={`text-base md:text-xl font-bold ${bc.text600}`}>{benefit.metric}</div>
                            <div className="text-[10px] md:text-xs text-gray-500">{benefit.label}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div
                  className={overviewSection.inView ? 'reveal-visible' : 'reveal-hidden'}
                  style={{ animationDelay: overviewSection.inView ? '150ms' : undefined }}
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Key Features</h2>
                  <div className="space-y-3 max-h-100 md:max-h-125 overflow-y-auto pr-2 custom-scrollbar">
                    {industry.features.map((feature: any, i: number) => (
                      <div key={i} className="flex items-start gap-3 p-3 md:p-4 bg-white rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-300">
                        <div className={`w-7 h-7 md:w-8 md:h-8 rounded-lg ${c.bg50} flex items-center justify-center shrink-0`}>
                          <feature.icon size={14} className={`${c.text500} md:w-4 md:h-4`} />
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
        )}

        {industry.isMachineryPage && (
          <section className="py-10 md:py-12 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div
                ref={benefitsSection.ref}
                className={`bg-linear-to-br from-gray-50 to-white rounded-xl p-5 md:p-6 border border-gray-100 ${
                  benefitsSection.inView ? 'reveal-visible' : 'reveal-hidden'
                }`}
              >
                <h3 className="font-semibold text-gray-900 mb-3 md:mb-4 flex items-center gap-2 text-base md:text-lg">
                  <Award size={18} className={c.text500} />
                  Key Benefits
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                  {industry.benefits.map((benefit: any, i: number) => {
                    const bc = getColorClasses(benefit.color);
                    return (
                      <div key={i} className="text-center p-2 md:p-3 bg-white rounded-lg border border-gray-100 transition-transform duration-300 hover:-translate-y-0.5">
                        <div className={`text-base md:text-xl font-bold ${bc.text600}`}>{benefit.metric}</div>
                        <div className="text-[10px] md:text-xs text-gray-500">{benefit.label}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        )}

        <section className="py-10 md:py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Solution Modules</h2>
              <p className="text-gray-500 text-sm md:text-base">Comprehensive modules designed for your business needs</p>
            </div>
            <div ref={modulesSection.ref} className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              {industry.modules.map((module: any, i: number) => (
                <div
                  key={i}
                  className={`bg-white rounded-xl p-3 md:p-5 border border-gray-100 text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300 ${
                    modulesSection.inView ? 'reveal-visible' : 'reveal-hidden'
                  }`}
                  style={{ animationDelay: modulesSection.inView ? `${i * 100}ms` : undefined }}
                >
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl ${c.bg50} flex items-center justify-center mx-auto mb-2 md:mb-3`}>
                    <Package size={18} className={`${c.text500} md:w-5 md:h-5`} />
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

        <section className="py-10 md:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              ref={techSection.ref}
              className={`bg-linear-to-r ${industry.gradient} rounded-2xl p-6 md:p-8 text-white ${
                techSection.inView ? 'reveal-visible' : 'reveal-hidden'
              }`}
            >
              <div className="text-center mb-4 md:mb-6">
                <h3 className="text-xl md:text-2xl font-bold mb-2">Technologies We Use</h3>
                <p className="text-white/80 text-xs md:text-sm">Cutting-edge technology stack for modern solutions</p>
              </div>
              <div className="flex flex-wrap gap-1.5 md:gap-2 justify-center">
                {industry.technologies.map((tech: string, i: number) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 md:px-4 md:py-2 bg-white/20 backdrop-blur-sm rounded-full text-[11px] md:text-sm font-medium border border-white/30 transition-transform duration-300 hover:scale-105 hover:bg-white/30"
                    style={{
                      animation: techSection.inView ? `fadeInUp 0.4s ease-out ${i * 50}ms both` : undefined,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 md:py-16 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              ref={ctaSection.ref}
              className={`bg-linear-to-r ${industry.gradient} rounded-2xl p-6 md:p-10 text-center shadow-xl transition-shadow duration-300 hover:shadow-2xl ${
                ctaSection.inView ? 'reveal-visible' : 'reveal-hidden'
              }`}
            >
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
                  className="px-4 py-2 md:px-6 md:py-3 bg-white text-gray-800 rounded-xl font-semibold text-sm md:text-base hover:bg-gray-100 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 inline-flex items-center gap-2 shadow-lg"
                >
                  <Mail size={16} />
                  Contact Sales
                </button>
                <button 
                  onClick={() => setCurrentPage('contact')}
                  className="px-4 py-2 md:px-6 md:py-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-xl font-semibold text-sm md:text-base hover:bg-white/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 inline-flex items-center gap-2"
                >
                  <Calendar size={16} />
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {activeMachine && (
        <MachineModal machine={activeMachine} color={industry.color} onClose={() => setActiveMachine(null)} />
      )}
    </>
  );
};

export default IndustryDetailPage;