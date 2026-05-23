import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, Clock, Calendar, Building2, User, MessageSquare, Sparkles } from 'lucide-react'

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    alert('Message sent successfully! We will be in touch within 24 hours.')
    setFormData({ name: '', company: '', email: '', phone: '', message: '' })
    setIsSubmitting(false)
  }

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'hello@logicshell.in', action: 'mailto:hello@logicshell.in' },
    { icon: Phone, label: 'Phone', value: '+91 98765 43210', action: 'tel:+919876543210' },
    { icon: MapPin, label: 'Office', value: 'Pune, Maharashtra, India', action: 'https://maps.google.com/?q=Pune+Maharashtra+India' },
    { icon: Clock, label: 'Business Hours', value: 'Mon-Fri, 9:00 AM - 7:00 PM IST', action: null },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-linear-to-br from-blue-50 via-white to-indigo-50 border-b border-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 rounded-full px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-xs font-semibold text-blue-600 tracking-wide uppercase">Get in Touch</span>
          </div>
          <h1 className="font-syne font-bold text-4xl md:text-5xl text-gray-900 mb-3">Let's Start a Conversation</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Ready to build something powerful? We would love to hear about your project.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            
            <div className="bg-white rounded-xl p-6 border border-blue-100 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center">
                  <MessageSquare size={16} className="text-blue-500" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">Send us a message</h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <div className="relative">
                      <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 rounded-lg border border-gray-200 text-gray-800 placeholder:text-gray-400 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                    <div className="relative">
                      <Building2 size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 rounded-lg border border-gray-200 text-gray-800 placeholder:text-gray-400 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
                        placeholder="Tech Corp"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                    <div className="relative">
                      <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 rounded-lg border border-gray-200 text-gray-800 placeholder:text-gray-400 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
                        placeholder="hello@company.com"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <div className="relative">
                      <Phone size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 rounded-lg border border-gray-200 text-gray-800 placeholder:text-gray-400 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Project Description *</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 text-gray-800 placeholder:text-gray-400 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400 resize-none"
                    placeholder="Tell us about your project, requirements, and timeline..."
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-blue-500 text-white font-semibold shadow-md shadow-blue-500/30 hover:bg-blue-600 transition-all disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : <><Send size={14} /> Send Message</>}
                </button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.action || '#'}
                    target={info.action?.startsWith('http') ? '_blank' : '_self'}
                    className="block bg-white rounded-lg p-4 border border-blue-100 hover:border-blue-300 hover:shadow-sm transition-all"
                  >
                    <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center mb-2">
                      <info.icon size={16} className="text-blue-500" />
                    </div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">{info.label}</p>
                    <p className="text-sm text-gray-800 font-medium">{info.value}</p>
                  </a>
                ))}
              </div>

              <div className="bg-white rounded-lg overflow-hidden border border-blue-100 shadow-sm">
                <div className="p-3 border-b border-blue-100 bg-gray-50">
                  <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                    <MapPin size={16} className="text-blue-500" />
                    Find Us Here
                  </h3>
                </div>
                <div className="h-64 w-full">
                  <iframe
                    title="Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.294960225112!2d73.856743!3d18.52043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c06f29a1a1a1%3A0x8a7b7b7b7b7b7b7b!2sPune%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-linear-to-r from-blue-500 to-indigo-500 rounded-xl p-8 text-center shadow-lg">
            <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-3 py-1 mb-3">
              <Sparkles size={14} className="text-white" />
              <span className="text-xs font-semibold text-white uppercase">Ready to Scale?</span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-2">Let's Build Something Powerful Together</h2>
            <p className="text-blue-100 mb-4 max-w-md mx-auto text-sm">
              Whether you're starting from scratch or scaling an existing platform.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <button className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-white text-blue-600 font-semibold text-sm hover:bg-gray-100 transition-all">
                <Calendar size={14} />
                Schedule a Call
              </button>
              <button className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-blue-600/30 border border-white/30 text-white font-semibold text-sm hover:bg-blue-600/40 transition-all">
                <Phone size={14} />
                Call Us Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage