import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, Clock, Building2, User, MessageSquare, Sparkles } from 'lucide-react'
import type { PageType } from '../App'

interface ContactPageProps {
  setCurrentPage: (page: PageType) => void
}

const ContactPage: React.FC<ContactPageProps> = ({ setCurrentPage: _setCurrentPage }) => {
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
    { icon: Mail, label: 'Email', value: 'info@thelogicshell.com', action: 'mailto:info@thelogicshell.com' },
    { icon: Phone, label: 'Phone', value: '+91 9579074450', action: 'tel:+919579074450' },
    { icon: MapPin, label: 'Office', value: 'Siddhivinayak Apartment Block No 6, Madhvnagar Road, Sangli', action: 'https://maps.google.com/?q=Siddhivinayak+Apartment+Block+No+6+Madhvnagar+Road+Sangli' },
    { icon: Clock, label: 'Business Hours', value: 'Mon-Fri, 9:00 AM - 7:00 PM IST', action: null },
  ]

  // Exact coordinates for Sangli location
  const mapLocation = {
    address: 'Siddhivinayak apartment block no 6, Madhvnagar Road Sangli',
    lat: 16.8524,
    lng: 74.5815
  }

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
                        placeholder="+91 95790 74450"
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
                    rel="noopener noreferrer"
                    className="block bg-white rounded-lg p-4 border border-blue-100 hover:border-blue-300 hover:shadow-sm transition-all"
                  >
                    <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center mb-2">
                      <info.icon size={16} className="text-blue-500" />
                    </div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">{info.label}</p>
                    <p className="text-sm text-gray-800 font-medium break-all">{info.value}</p>
                  </a>
                ))}
              </div>

              <div className="bg-white rounded-lg overflow-hidden border border-blue-100 shadow-sm">
                <div className="p-3 border-b border-blue-100 bg-gray-50">
                  <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                    <MapPin size={16} className="text-blue-500" />
                    Our Office Location
                  </h3>
                </div>
                <div className="p-3 bg-blue-50/30 border-b border-blue-100">
                  <p className="text-sm text-gray-700 flex items-start gap-2">
                    <MapPin size={14} className="text-blue-500 mt-0.5 " />
                    <span>
                      Siddhivinayak Apartment Block No 6<br />
                      Madhvnagar Road, Sangli<br />
                      Maharashtra, India
                    </span>
                  </p>
                  <p className="text-sm text-gray-500 mt-2 flex items-center gap-2">
                    <Phone size={12} className="text-blue-500" />
                    <span>Sushant Rajmane: +91 9579074450</span>
                  </p>
                </div>
                <div className="h-80 w-full">
                  <iframe
                    title="Logic Shell LLP Office Location - Sangli"
                    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(mapLocation.address)}&center=${mapLocation.lat},${mapLocation.lng}&zoom=15`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="p-3 bg-gray-50 text-center">
                  <a 
                    href={`https://maps.google.com/?q=${encodeURIComponent(mapLocation.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-500 hover:text-blue-600 inline-flex items-center gap-1"
                  >
                    <MapPin size={12} />
                    Open in Google Maps
                  </a>
                </div>
              </div>

              {/* Additional Contact Person Info */}
              <div className="bg-white rounded-lg p-4 border border-blue-100 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center">
                    <User size={16} className="text-blue-500" />
                  </div>
                  <h3 className="font-semibold text-gray-800">Contact Person</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">Sushant Rajmane</span>
                  </p>
                  <p className="text-sm text-gray-600 flex items-center gap-2">
                    <Phone size={12} className="text-blue-500" />
                    <a href="tel:+919579074450" className="hover:text-blue-500">+91 9579074450</a>
                  </p>
                  <p className="text-sm text-gray-600 flex items-center gap-2">
                    <Mail size={12} className="text-blue-500" />
                    <a href="mailto:info@thelogicshell.com" className="hover:text-blue-500">info@thelogicshell.com</a>
                  </p>
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
              <button 
                onClick={() => {
                  window.location.href = 'tel:+919579074450'
                }}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-white text-blue-600 font-semibold text-sm hover:bg-gray-100 transition-all"
              >
                <Phone size={14} />
                Call Us Now
              </button>
              <button 
                onClick={() => {
                  window.location.href = 'mailto:info@thelogicshell.com'
                }}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-blue-600/30 border border-white/30 text-white font-semibold text-sm hover:bg-blue-600/40 transition-all"
              >
                <Mail size={14} />
                Email Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage