import React, { useState, useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import { Sparkles, Users, Award, Briefcase, Calendar, Mail, MapPin, Code } from 'lucide-react'
import type { PageType } from '../App'

export interface TeamMember {
  id: number
  name: string
  initials: string
  role: string
  bio: string
  skills: string[]
  email: string
  phone: string
  location: string
  experience: string
  education: string
  achievements: string[]
  projects: string[]
  social?: {
    github?: string
    linkedin?: string
    twitter?: string
  }
}

interface TeamPageProps {
  setCurrentPage: (page: PageType) => void
  showProfile?: (member: TeamMember) => void
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

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Asgar Nesari',
    initials: 'AN',
    role: 'Full Stack Developer',
    bio: 'Passionate full-stack developer with expertise in building scalable web applications and enterprise solutions.',
    skills: ['React', 'Node.js', 'TypeScript', 'Python', 'MongoDB', 'AWS', 'Next.js', 'Express.js', 'PostgreSQL', 'Socket.IO', 'REST APIs', 'Docker', 'Git', 'Jest', 'Spring boot'],
    email: 'asgar@logicshell.in',
    phone: '+91 9075566776',
    location: 'Terani, India',
    experience: '2+ years',
    education: 'Master Of Computer Application, DYP University',
    achievements: [
      'Built 15+ production-grade applications',
      'Microsoft Certified: Full Stack Developer',
      'Open source contributor',
      'Hackathon Winner 2023'
    ],
    projects: [
      'Manufacturing ERP System - Built a complete ERP solution for a manufacturing company with 500+ daily users using React, Node.js, and PostgreSQL',
      'Dairy Supply Chain Platform - Developed end-to-end dairy management system with real-time tracking using Socket.IO and MongoDB',
      'Healthcare Portal - Created telemedicine platform with video consultation and EHR integration using WebRTC and React',
      'E-commerce Analytics Dashboard - Built real-time analytics dashboard processing 100K+ events/day using Next.js and Express.js'
    ],
    social: {
      github: 'https://github.com/asgar',
      linkedin: 'https://linkedin.com/in/asgar',
     
    }
  },
  {
    id: 2,
    name: 'Muskan Mujawar',
    initials: 'MM',
    role: 'Full Stack Developer',
    bio: 'Creative full-stack developer specializing in modern web technologies and delightful user experiences.',
    skills: ['React', 'Node.js', 'TypeScript', 'Python', 'MongoDB', 'AWS', 'Next.js', 'Express.js', 'PostgreSQL', 'Socket.IO', 'REST APIs', 'Docker', 'Git', 'Jest','Spring boot'],
    email: 'muskan@logicshell.in',
    phone: '+91 9156070412',
    location: 'Ashta, India',
    experience: '2+ years',
    education: 'Master Of Computer Application, DYP University',
    achievements: [
      'Women in Tech Award 2024',
      'Google Cloud Certified',
      'Published 3 technical blogs',
      'Open Source Contributor - Next.js'
    ],
    projects: [
      'Retail POS System - Built modern POS solution for a retail chain with 50+ stores using Next.js, Node.js, and PostgreSQL',
      'E-learning Platform - Developed online learning platform with live classes and assessments using WebRTC and GraphQL',
      'Inventory Management System - Created real-time inventory tracking for warehouse management using Redis and Socket.IO',
      'Social Media Dashboard - Built analytics dashboard for social media management using Next.js and Prisma'
    ],
    social: {
      github: 'https://github.com/muskan',
      linkedin: 'https://linkedin.com/in/muskan',
    
    }
  },
  {
    id: 3,
    name: 'Gayatri Patil',
    initials: 'GP',
    role: 'Full Stack Developer',
    bio: 'Results-driven full-stack developer focused on building robust backend systems and intuitive frontend interfaces.',
    skills: ['React', 'Node.js', 'TypeScript', 'Python', 'MongoDB', 'AWS', 'Next.js', 'Express.js', 'PostgreSQL', 'Socket.IO', 'REST APIs', 'Docker', 'Git', 'Jest','Spring boot'],
    email: 'gayatri@logicshell.in',
    phone: '+91 7841981102',
    location: 'Kolhapur, India',
    experience: '2+ years',
    education: 'Master Of Computer Application, DYP University',
    achievements: [
      'Java Champion Award',
      'Microsoft Certified: Full Stack Developer',
      'Mentored 50+ junior developers',
      'Published 2 research papers'
    ],
    projects: [
      'Banking Software Suite - Developed secure banking platform with transaction processing using Spring Boot and Angular',
      'Healthcare Management System - Built hospital management system with 10,000+ patient records using Java and React',
      'Logistics Platform - Created shipment tracking and fleet management solution using Microservices architecture',
      'Payment Gateway Integration - Built scalable payment processing system handling 10K+ transactions/day'
    ],
    social: {
      github: 'https://github.com/gayatri',
      linkedin: 'https://linkedin.com/in/gayatri',
     
    }
  },
   
  
]

const TeamPage: React.FC<TeamPageProps> = ({ setCurrentPage, showProfile }) => {
  const [filter, setFilter] = useState<string>('all')
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)
  const [heroLoaded, setHeroLoaded] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)

  const statsBarSection = useInView<HTMLDivElement>()
  const teamGridSection = useInView<HTMLDivElement>()
  const hiringSection = useInView<HTMLDivElement>()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    const t = requestAnimationFrame(() => setHeroLoaded(true))
    return () => cancelAnimationFrame(t)
  }, [])

  useEffect(() => {
    if (selectedMember) {
      const t = requestAnimationFrame(() => setModalVisible(true))
      return () => cancelAnimationFrame(t)
    }
    setModalVisible(false)
  }, [selectedMember])

  const closeModal = () => {
    setModalVisible(false)
    setTimeout(() => setSelectedMember(null), 200)
  }

  const roles = ['all', ...new Set(teamMembers.map(member => member.role))]

  const filteredMembers = filter === 'all' 
    ? teamMembers 
    : teamMembers.filter(member => member.role === filter)

  const getAvatarGradient = (initials: string) => {
    const gradients: Record<string, string> = {
      AN: 'from-blue-500 to-indigo-500',
      MM: 'from-purple-500 to-pink-500',
      GP: 'from-green-500 to-teal-500',
      AS: 'from-blue-600 to-blue-800',
      PS: 'from-indigo-500 to-indigo-700',
      KM: 'from-cyan-500 to-blue-600',
      RD: 'from-orange-500 to-red-500',
    }
    return gradients[initials] || 'from-blue-500 to-indigo-500'
  }

  const getBgGradient = (initials: string) => {
    const gradients: Record<string, string> = {
      AN: 'from-blue-50 via-indigo-50 to-blue-50',
      MM: 'from-purple-50 via-pink-50 to-purple-50',
      GP: 'from-green-50 via-teal-50 to-green-50',
      AS: 'from-blue-50 via-sky-50 to-blue-50',
      PS: 'from-indigo-50 via-purple-50 to-indigo-50',
      KM: 'from-cyan-50 via-blue-50 to-cyan-50',
      RD: 'from-orange-50 via-red-50 to-orange-50',
    }
    return gradients[initials] || 'from-blue-50 via-indigo-50 to-blue-50'
  }

  const categorizeSkills = (skills: string[]) => {
    const frontend = skills.filter(skill => 
      ['React', 'Next.js', 'Angular', 'Vue', 'Tailwind CSS', 'HTML5', 'CSS3', 'Figma', 'WebRTC'].includes(skill)
    )
    const backend = skills.filter(skill => 
      ['Node.js', 'Express.js', 'Python', 'Java', 'Spring Boot', 'C#', 'PHP', 'Go'].includes(skill)
    )
    const database = skills.filter(skill => 
      ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Prisma', 'Hibernate', 'GraphQL'].includes(skill)
    )
    const devops = skills.filter(skill => 
      ['Docker', 'Kubernetes', 'AWS', 'Jenkins', 'Terraform', 'Git', 'CI/CD'].includes(skill)
    )
    const other = skills.filter(skill => 
      !frontend.includes(skill) && !backend.includes(skill) && !database.includes(skill) && !devops.includes(skill)
    )
    
    return { frontend, backend, database, devops, other }
  }

  const stats = [
    { value: `${teamMembers.length}+`, label: 'Expert Members', icon: Users },
    { value: '60+', label: 'Projects Completed', icon: Briefcase },
    { value: '98%', label: 'Client Satisfaction', icon: Award },
    { value: '40+', label: 'Years Combined', icon: Calendar },
  ]

  return (
    <>
      <Helmet>
        <title>Team - Logic Shell | Our Expert Developers</title>
        <meta name="description" content="Meet the Logic Shell team - Full-stack developers and industry experts building enterprise-grade software solutions." />
        <link rel="canonical" href="https://thelogicshell.com/team" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Team - Logic Shell | Our Expert Developers" />
        <meta property="og:description" content="Meet the Logic Shell team - Full-stack developers and industry experts building enterprise-grade software solutions." />
        <meta property="og:url" content="https://thelogicshell.com/team" />
        <meta property="og:image" content="https://thelogicshell.com/favicon.svg" />
        <meta property="og:site_name" content="Logic Shell" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Team - Logic Shell | Our Expert Developers" />
        <meta name="twitter:description" content="Meet the Logic Shell team - Full-stack developers and industry experts." />
        <meta name="twitter:image" content="https://thelogicshell.com/favicon.svg" />

        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://thelogicshell.com/' },
              { '@type': 'ListItem', position: 2, name: 'Team', item: 'https://thelogicshell.com/team' },
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
              <span className="text-xs font-semibold text-blue-600 tracking-wide uppercase">The People</span>
            </div>
            
            <h1
              className="font-syne font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4 transition-all duration-700 ease-out"
              style={{
                opacity: heroLoaded ? 1 : 0,
                transform: heroLoaded ? 'translateY(0)' : 'translateY(24px)',
                transitionDelay: '100ms',
              }}
            >
              Our Expert Team
            </h1>
            
            <p
              className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed transition-all duration-700 ease-out"
              style={{
                opacity: heroLoaded ? 1 : 0,
                transform: heroLoaded ? 'translateY(0)' : 'translateY(24px)',
                transitionDelay: '220ms',
              }}
            >
              Meet our talented full-stack developers and industry experts building the future of enterprise software.
            </p>
          </div>
        </section>

        <div ref={statsBarSection.ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`bg-white rounded-xl p-4 border border-blue-100 shadow-md text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${
                  statsBarSection.inView ? 'reveal-visible' : 'reveal-hidden'
                }`}
                style={{ animationDelay: statsBarSection.inView ? `${i * 90}ms` : undefined }}
              >
                <stat.icon size={18} className="text-blue-500 mx-auto mb-2" />
                <div className="font-syne font-bold text-xl text-gray-900">{stat.value}</div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {roles.map((role) => (
                <button
                  key={role}
                  onClick={() => setFilter(role)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 capitalize ${
                    filter === role
                      ? 'bg-blue-500 text-white shadow-md shadow-blue-500/30'
                      : 'bg-white border border-blue-200 text-gray-600 hover:border-blue-300 hover:text-blue-500'
                  }`}
                >
                  {role === 'all' ? 'All Members' : role}
                </button>
              ))}
            </div>

            <div ref={teamGridSection.ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMembers.map((member, i) => (
                <div 
                  key={member.id} 
                  className={`group bg-white rounded-xl border border-blue-100 shadow-sm overflow-hidden hover:shadow-lg hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 ${
                    teamGridSection.inView ? 'reveal-visible' : 'reveal-hidden'
                  }`}
                  style={{ animationDelay: teamGridSection.inView ? `${i * 110}ms` : undefined }}
                >
                  <div className={`h-40 bg-linear-to-br ${getBgGradient(member.initials)} flex items-center justify-center relative`}>
                    <div className={`w-20 h-20 rounded-full bg-linear-to-br ${getAvatarGradient(member.initials)} flex items-center justify-center text-white text-xl font-bold border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                      {member.initials}
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <h3 className="font-syne font-bold text-gray-900 text-lg">{member.name}</h3>
                    <p className="text-blue-500 text-sm font-medium mb-2">{member.role}</p>
                    <p className="text-gray-500 text-sm leading-relaxed mb-3 line-clamp-2">
                      {member.bio}
                    </p>
                    
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {member.skills.slice(0, 4).map((skill, i) => (
                        <span key={i} className="px-2 py-0.5 bg-blue-50 border border-blue-100 rounded-full text-xs text-blue-600">
                          {skill}
                        </span>
                      ))}
                      {member.skills.length > 4 && (
                        <span className="px-2 py-0.5 bg-gray-100 rounded-full text-xs text-gray-500">
                          +{member.skills.length - 4}
                        </span>
                      )}
                    </div>
                    
                    <button
                      onClick={() => {
                        if (showProfile) {
                          showProfile(member)
                        } else {
                          setSelectedMember(member)
                        }
                      }}
                      className="w-full py-2 rounded-lg bg-blue-500 text-white text-sm font-medium shadow-sm hover:bg-blue-600 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                    >
                      View Profile
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredMembers.length === 0 && (
              <div className="text-center py-16" style={{ animation: 'fadeInUp 0.5s ease-out' }}>
                <p className="text-gray-500">No team members found for this role.</p>
                <button 
                  onClick={() => setFilter('all')}
                  className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500 text-white text-sm font-medium hover:bg-blue-600 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Show all members
                </button>
              </div>
            )}

            <div
              ref={hiringSection.ref}
              className={`mt-16 bg-linear-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100 transition-shadow duration-300 hover:shadow-md ${
                hiringSection.inView ? 'reveal-visible' : 'reveal-hidden'
              }`}
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-5">
                <div className="text-center md:text-left">
                  <div className="inline-flex items-center gap-2 bg-white/80 border border-blue-200 rounded-full px-3 py-1 mb-3">
                    <Sparkles size={12} className="text-blue-500" />
                    <span className="text-xs font-semibold text-blue-600">We're Hiring!</span>
                  </div>
                  <h3 className="font-syne font-bold text-xl text-gray-900 mb-2">
                    Want to join our team?
                  </h3>
                  <p className="text-gray-500 text-sm">
                    We're always looking for talented individuals to grow with us.
                  </p>
                </div>
                <button 
                  onClick={() => setCurrentPage('contact')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-500 text-white font-semibold text-sm shadow-md hover:bg-blue-600 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 whitespace-nowrap"
                >
                  View Open Positions
                </button>
              </div>
            </div>
          </div>
        </section>

  
        {selectedMember && (
          <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 transition-opacity duration-200"
            style={{ opacity: modalVisible ? 1 : 0 }}
            onClick={closeModal}
          >
            <div
              className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 transition-all duration-250 ease-out"
              style={{
                opacity: modalVisible ? 1 : 0,
                transform: modalVisible ? 'scale(1) translateY(0)' : 'scale(0.96) translateY(12px)',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center gap-3">
                    <div className={`w-16 h-16 rounded-full bg-linear-to-br ${getAvatarGradient(selectedMember.initials)} flex items-center justify-center text-white text-2xl font-bold`}>
                      {selectedMember.initials}
                    </div>
                    <div>
                      <h3 className="font-syne font-bold text-2xl text-gray-900">{selectedMember.name}</h3>
                      <p className="text-blue-500 text-sm font-medium">{selectedMember.role}</p>
                    </div>
                  </div>
                </div>
                <button onClick={closeModal} className="text-gray-400 hover:text-gray-600 text-2xl  duration-200 hover:rotate-90 transition-transform">✕</button>
              </div>
              
              <div className="space-y-4 text-sm mt-4">
                <p className="text-gray-600 leading-relaxed">{selectedMember.bio}</p>
                
                {selectedMember.role === 'Full Stack Developer' && (() => {
                  const { frontend, backend, database, devops, other } = categorizeSkills(selectedMember.skills)
                  return (
                    <div className="space-y-3">
                      {frontend.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                            <span>🎨</span> Frontend
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {frontend.map((skill, i) => (
                              <span key={i} className="px-2 py-1 bg-blue-50 rounded-full text-xs text-blue-600 font-medium">{skill}</span>
                            ))}
                          </div>
                        </div>
                      )}
                      {backend.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                            <span>⚙️</span> Backend
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {backend.map((skill, i) => (
                              <span key={i} className="px-2 py-1 bg-green-50 rounded-full text-xs text-green-600 font-medium">{skill}</span>
                            ))}
                          </div>
                        </div>
                      )}
                      {database.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                            <span>🗄️</span> Database
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {database.map((skill, i) => (
                              <span key={i} className="px-2 py-1 bg-purple-50 rounded-full text-xs text-purple-600 font-medium">{skill}</span>
                            ))}
                          </div>
                        </div>
                      )}
                      {devops.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                            <span>🚀</span> DevOps & Tools
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {devops.map((skill, i) => (
                              <span key={i} className="px-2 py-1 bg-orange-50 rounded-full text-xs text-orange-600 font-medium">{skill}</span>
                            ))}
                          </div>
                        </div>
                      )}
                      {other.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                            <span>🔧</span> Other Skills
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {other.map((skill, i) => (
                              <span key={i} className="px-2 py-1 bg-gray-50 rounded-full text-xs text-gray-600 font-medium">{skill}</span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })()}

                {selectedMember.role !== 'Full Stack Developer' && selectedMember.skills.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                      <Code size={14} className="text-blue-500" />
                      Skills & Expertise
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedMember.skills.map((skill, i) => (
                        <span key={i} className="px-2 py-1 bg-blue-50 rounded-full text-xs text-blue-600 font-medium">{skill}</span>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <Briefcase size={14} className="text-blue-500" />
                    Key Projects
                  </h4>
                  <div className="space-y-2">
                    {selectedMember.projects.map((project, i) => (
                      <div key={i} className="bg-gray-50 rounded-lg p-3 border border-gray-100 hover:bg-gray-100 transition-colors duration-300">
                        <p className="text-gray-700 text-sm leading-relaxed">{project}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <Award size={14} className="text-blue-500" />
                    Achievements
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedMember.achievements.map((achievement, i) => (
                      <span key={i} className="px-2 py-1 bg-green-50 rounded-full text-xs text-green-600">
                        🏆 {achievement}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-2 text-gray-500">
                    <Mail size={14} className="text-blue-500" />
                    <span className="text-xs break-all">{selectedMember.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <span className="text-blue-500">📱</span>
                    <span className="text-xs">{selectedMember.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <MapPin size={14} className="text-blue-500" />
                    <span className="text-xs">{selectedMember.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Briefcase size={14} className="text-blue-500" />
                    <span className="text-xs">{selectedMember.experience}</span>
                  </div>
                </div>

                {selectedMember.social && (
                  <div className="flex gap-3 pt-2">
                    {selectedMember.social.github && (
                      <a href={selectedMember.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 transition-colors duration-300">
                        <Mail size={18} />
                      </a>
                    )}
                    {selectedMember.social.linkedin && (
                      <a href={selectedMember.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors duration-300">
                        <Mail size={18} />
                      </a>
                    )}
                    {selectedMember.social.twitter && (
                      <a href={selectedMember.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-400 transition-colors duration-300">
                        <Mail size={18} />
                      </a>
                    )}
                  </div>
                )}
              </div>
              
              <button 
                onClick={() => setCurrentPage('contact')}
                className="w-full mt-5 py-2.5 rounded-lg bg-blue-500 text-white text-sm font-medium hover:bg-blue-600 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail size={16} />
                Contact {selectedMember.name.split(' ')[0]}
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default TeamPage