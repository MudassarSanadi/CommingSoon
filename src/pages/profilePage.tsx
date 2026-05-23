import React from 'react'
import { ArrowLeft, Mail, Sparkles, Calendar, User, Briefcase, Award } from 'lucide-react'
import type { TeamMember } from '../data/teamData'
import type { PageType } from '../App'

interface ProfilePageProps {
  member: TeamMember | null
  setCurrentPage: (page: PageType) => void
}

const ProfilePage: React.FC<ProfilePageProps> = ({ member, setCurrentPage }) => {
  if (!member) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center py-20">
        <div className="text-center">
          <p className="text-slate-500 mb-4">No member selected.</p>
          <button 
            onClick={() => setCurrentPage('team')} 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm shadow-md shadow-blue-600/30 hover:bg-blue-700 transition-all"
          >
            Back to Team
          </button>
        </div>
      </div>
    )
  }

  const getAvatarGradient = () => {
    const gradients: Record<string, string> = {
      AR: 'from-blue-600 to-indigo-600',
      PS: 'from-blue-500 to-blue-700',
      KM: 'from-indigo-500 to-indigo-700',
      AN: 'from-cyan-500 to-blue-600',
      MM: 'from-purple-500 to-indigo-600',
      GP: 'from-amber-500 to-orange-600',
    }
    return gradients[member.initials] || 'from-blue-600 to-indigo-600'
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section - Same as ContactPage */}
      <section className="relative bg-linear-to-br from-blue-50 via-white to-indigo-50 border-b border-slate-200 py-12 md:py-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-200/20 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8">
          <button 
            onClick={() => setCurrentPage('team')} 
            className="inline-flex items-center gap-2 text-blue-600 hover:gap-3 transition-all mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
            <span className="text-sm font-medium">Back to Team</span>
          </button>
          
          <div className="flex items-center gap-4">
            <div className={`w-20 h-20 rounded-2xl bg-linear-to-br ${getAvatarGradient()} flex items-center justify-center text-white text-2xl font-bold shadow-lg`}>
              {member.initials}
            </div>
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 rounded-full px-3 py-1 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                <span className="text-xs font-semibold text-blue-700 tracking-wide uppercase">Team Member</span>
              </div>
              <h1 className="font-syne font-extrabold text-3xl md:text-4xl text-slate-900">
                {member.name}
              </h1>
              <p className="text-blue-600 font-medium mt-1">{member.role}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-[340px,1fr] gap-10">
            
            {/* Sidebar - ContactPage card style */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden sticky top-24">
              <div className={`h-32 bg-linear-to-br ${getAvatarGradient()} flex items-center justify-center`}>
                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-2xl font-bold border-2 border-white/30 shadow-lg">
                  {member.initials}
                </div>
              </div>
              <div className="p-6">
                <h2 className="font-bold text-slate-900 text-xl text-center">{member.name}</h2>
                <p className="text-blue-600 text-sm font-medium text-center mb-4">{member.role}</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-5 text-center">
                  {member.bio}
                </p>
                
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {member.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-xs font-medium text-blue-700">
                      {skill}
                    </span>
                  ))}
                </div>
                
                <button 
                  onClick={() => setCurrentPage('contact')} 
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm shadow-md shadow-blue-600/30 hover:bg-blue-700 transition-all"
                >
                  <Mail className="w-4 h-4" /> 
                  Get In Touch
                </button>
              </div>
            </div>

            {/* Main Content - Right Side */}
            <div>
              <div className="mb-8 bg-white rounded-2xl p-6 border border-slate-200 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-xl bg-blue-100 border border-blue-200 flex items-center justify-center">
                    <User size={16} className="text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">About</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  {member.about}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-xl bg-blue-100 border border-blue-200 flex items-center justify-center">
                    <Award size={16} className="text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Notable Projects</h3>
                </div>
                <div className="space-y-3">
                  {member.projects.map((project, i) => (
                    <div key={i} className="bg-slate-50 rounded-xl p-4 border border-slate-100 hover:border-blue-200 transition-all">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-lg bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                          <Briefcase size={12} className="text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-1">Project {i + 1}</h4>
                          <p className="text-slate-500 text-sm">{project}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 bg-linear-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 text-center shadow-xl">
                <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 rounded-full px-3 py-1 mb-4">
                  <Sparkles size={12} className="text-white" />
                  <span className="text-xs font-semibold text-white uppercase">Work With {member.name.split(' ')[0]}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Have a project in mind?</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Let's collaborate and build something amazing together.
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <button
                    onClick={() => setCurrentPage('contact')}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-blue-600 font-semibold text-sm shadow-lg hover:bg-slate-100 transition-all"
                  >
                    <Mail size={14} />
                    Send Message
                  </button>
                  <button
                    onClick={() => setCurrentPage('contact')}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-500/30 border border-white/30 text-white font-semibold text-sm hover:bg-blue-500/40 transition-all"
                  >
                    <Calendar size={14} />
                    Schedule Call
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProfilePage