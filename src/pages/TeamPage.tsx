import React, { useState } from 'react'
import { Sparkles, Users, Award, Briefcase, Calendar, Mail, MapPin } from 'lucide-react'
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
}

interface TeamPageProps {
  setCurrentPage: (page: PageType) => void
  showProfile?: (member: TeamMember) => void
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Amit Sharma',
    initials: 'AS',
    role: 'Founder & CEO',
    bio: 'Visionary leader with 15+ years of experience in enterprise software architecture and business strategy.',
    skills: ['Leadership', 'Strategy', 'Cloud Architecture', 'Business Development'],
    email: 'amit@logicshell.in',
    phone: '+91 98765 43210',
    location: 'Pune, India',
    experience: '15+ years',
    education: 'MBA, IIM Bangalore | B.Tech, IIT Bombay',
    achievements: ['Built 50+ successful products', 'Led teams of 100+ engineers', 'Ex-Microsoft']
  },
  {
    id: 2,
    name: 'Priya Singh',
    initials: 'PS',
    role: 'Lead Software Architect',
    bio: 'Full-stack architect specializing in scalable cloud-native applications and microservices.',
    skills: ['React', 'Node.js', 'AWS', 'Microservices', 'Python'],
    email: 'priya@logicshell.in',
    phone: '+91 98765 43211',
    location: 'Pune, India',
    experience: '10+ years',
    education: 'M.Tech, IIT Delhi | B.E., Pune University',
    achievements: ['AWS Certified Solutions Architect', 'Published 5 tech papers']
  },
  {
    id: 3,
    name: 'Kunal Mehta',
    initials: 'KM',
    role: 'Senior Product Manager',
    bio: 'Product strategist bridging business goals with technical execution for maximum impact.',
    skills: ['Product Strategy', 'Agile', 'User Research', 'Analytics'],
    email: 'kunal@logicshell.in',
    phone: '+91 98765 43212',
    location: 'Mumbai, India',
    experience: '8+ years',
    education: 'PGDM, SP Jain | B.E., Mumbai University',
    achievements: ['Launched 20+ products', 'Certified Scrum Product Owner']
  },
  {
    id: 4,
    name: 'Anjali Nair',
    initials: 'AN',
    role: 'Lead UI/UX Designer',
    bio: 'Design thinker creating intuitive, accessible, and beautiful user experiences.',
    skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems', 'Accessibility'],
    email: 'anjali@logicshell.in',
    phone: '+91 98765 43213',
    location: 'Bangalore, India',
    experience: '7+ years',
    education: 'M.Des, NID | B.Des, NIFT',
    achievements: ['Award-winning designs', 'Google Certified UX Designer']
  },
  {
    id: 5,
    name: 'Manish Patil',
    initials: 'MP',
    role: 'DevOps Engineer',
    bio: 'Infrastructure specialist automating deployment pipelines and cloud operations.',
    skills: ['AWS', 'Kubernetes', 'Terraform', 'CI/CD', 'Docker'],
    email: 'manish@logicshell.in',
    phone: '+91 98765 43214',
    location: 'Pune, India',
    experience: '6+ years',
    education: 'B.Tech, COEP Pune',
    achievements: ['Kubernetes Certified', 'AWS Certified DevOps Engineer']
  },
  {
    id: 6,
    name: 'Neha Gupta',
    initials: 'NG',
    role: 'Quality Assurance Lead',
    bio: 'Quality evangelist ensuring robust, bug-free software through automated testing.',
    skills: ['Selenium', 'Cypress', 'Jest', 'Manual Testing', 'Test Automation'],
    email: 'neha@logicshell.in',
    phone: '+91 98765 43215',
    location: 'Pune, India',
    experience: '7+ years',
    education: 'M.Sc. CS, Pune University',
    achievements: ['ISTQB Certified', 'Built test automation from scratch']
  }
]

const TeamPage: React.FC<TeamPageProps> = ({ setCurrentPage, showProfile }) => {
  const [filter, setFilter] = useState<string>('all')
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)

  // Get unique roles for filter
  const roles = ['all', ...new Set(teamMembers.map(member => member.role))]

  const filteredMembers = filter === 'all' 
    ? teamMembers 
    : teamMembers.filter(member => member.role === filter)

  const getAvatarGradient = (initials: string) => {
    const gradients: Record<string, string> = {
      AS: 'from-blue-500 to-indigo-500',
      PS: 'from-blue-600 to-blue-800',
      KM: 'from-indigo-500 to-indigo-700',
      AN: 'from-cyan-500 to-blue-600',
      MP: 'from-purple-500 to-indigo-600',
      NG: 'from-emerald-500 to-teal-600',
    }
    return gradients[initials] || 'from-blue-500 to-indigo-500'
  }

  const getBgGradient = (initials: string) => {
    const gradients: Record<string, string> = {
      AS: 'from-blue-50 via-indigo-50 to-blue-50',
      PS: 'from-blue-50 via-sky-50 to-blue-50',
      KM: 'from-indigo-50 via-purple-50 to-indigo-50',
      AN: 'from-cyan-50 via-blue-50 to-cyan-50',
      MP: 'from-purple-50 via-pink-50 to-purple-50',
      NG: 'from-emerald-50 via-teal-50 to-emerald-50',
    }
    return gradients[initials] || 'from-blue-50 via-indigo-50 to-blue-50'
  }

  const stats = [
    { value: `${teamMembers.length}+`, label: 'Expert Members', icon: Users },
    { value: '50+', label: 'Projects Completed', icon: Briefcase },
    { value: '98%', label: 'Client Satisfaction', icon: Award },
    { value: '30+', label: 'Years Combined', icon: Calendar },
  ]

  return (
    <div className="bg-white min-h-screen">

      <section className="relative bg-linear-to-br from-blue-50 via-white to-indigo-50 border-b border-blue-100 py-16 md:py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-xs font-semibold text-blue-600 tracking-wide uppercase">The People</span>
          </div>
          
          <h1 className="font-syne font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4">
            Our Expert Team
          </h1>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Seasoned engineers, designers, and strategists working together to build the future of enterprise software.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white rounded-xl p-4 border border-blue-100 shadow-md text-center hover:shadow-lg transition-all">
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
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all capitalize ${
                  filter === role
                    ? 'bg-blue-500 text-white shadow-md shadow-blue-500/30'
                    : 'bg-white border border-blue-200 text-gray-600 hover:border-blue-300 hover:text-blue-500'
                }`}
              >
                {role === 'all' ? 'All Members' : role}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMembers.map((member) => (
              <div 
                key={member.id} 
                className="group bg-white rounded-xl border border-blue-100 shadow-sm overflow-hidden hover:shadow-lg hover:border-blue-300 transition-all"
              >
                {/* Avatar Section */}
                <div className={`h-40 bg-linear-to-br ${getBgGradient(member.initials)} flex items-center justify-center relative`}>
                  <div className={`w-20 h-20 rounded-full bg-linear-to-br ${getAvatarGradient(member.initials)} flex items-center justify-center text-white text-xl font-bold border-4 border-white shadow-lg group-hover:scale-105 transition-transform`}>
                    {member.initials}
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className="font-syne font-bold text-gray-900 text-lg">{member.name}</h3>
                  <p className="text-blue-500 text-sm font-medium mb-2">{member.role}</p>
                  <p className="text-gray-500 text-sm leading-relaxed mb-3">
                    {member.bio}
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {member.skills.slice(0, 3).map((skill, i) => (
                      <span key={i} className="px-2 py-0.5 bg-blue-50 border border-blue-100 rounded-full text-xs text-blue-600">
                        {skill}
                      </span>
                    ))}
                    {member.skills.length > 3 && (
                      <span className="px-2 py-0.5 bg-gray-100 rounded-full text-xs text-gray-500">
                        +{member.skills.length - 3}
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
                    className="w-full py-2 rounded-lg bg-blue-500 text-white text-sm font-medium shadow-sm hover:bg-blue-600 transition-all"
                  >
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredMembers.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500">No team members found for this role.</p>
              <button 
                onClick={() => setFilter('all')}
                className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500 text-white text-sm font-medium hover:bg-blue-600 transition-all"
              >
                Show all members
              </button>
            </div>
          )}

          {/* Join Our Team CTA */}
          <div className="mt-16 bg-linear-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
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
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-500 text-white font-semibold text-sm shadow-md hover:bg-blue-600 transition-all whitespace-nowrap"
              >
                View Open Positions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedMember(null)}>
          <div className="bg-white rounded-xl max-w-md w-full p-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-syne font-bold text-xl text-gray-900">{selectedMember.name}</h3>
                <p className="text-blue-500 text-sm">{selectedMember.role}</p>
              </div>
              <button onClick={() => setSelectedMember(null)} className="text-gray-400 hover:text-gray-600">✕</button>
            </div>
            
            <div className="space-y-3 text-sm">
              <p className="text-gray-600">{selectedMember.bio}</p>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Skills</h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedMember.skills.map((skill, i) => (
                    <span key={i} className="px-2 py-0.5 bg-blue-50 rounded-full text-xs text-blue-600">{skill}</span>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-gray-500">
                <Mail size={14} className="text-blue-500" />
                <span>{selectedMember.email}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <span className="text-blue-500">📱</span>
                <span>{selectedMember.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <MapPin size={14} className="text-blue-500" />
                <span>{selectedMember.location}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <Briefcase size={14} className="text-blue-500" />
                <span>{selectedMember.experience} experience</span>
              </div>
            </div>
            
            <button 
              onClick={() => setCurrentPage('contact')}
              className="w-full mt-5 py-2 rounded-lg bg-blue-500 text-white text-sm font-medium hover:bg-blue-600 transition-all"
            >
              Contact {selectedMember.name.split(' ')[0]}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default TeamPage