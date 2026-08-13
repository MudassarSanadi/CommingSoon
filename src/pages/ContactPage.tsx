import React, { useState, useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import { Mail, Phone, MapPin, Send, Clock, Building2, User, MessageSquare, Sparkles, AlertTriangle } from 'lucide-react'
import type { PageType } from '../App'

interface ContactPageProps {
  setCurrentPage: (page: PageType) => void
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

const ContactPage: React.FC<ContactPageProps> = ({ setCurrentPage: _setCurrentPage }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  })
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [heroLoaded, setHeroLoaded] = useState(false)

  const formSection = useInView<HTMLDivElement>()
  const infoSection = useInView<HTMLDivElement>()
  const ctaSection = useInView<HTMLDivElement>()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    const t = requestAnimationFrame(() => setHeroLoaded(true))
    return () => cancelAnimationFrame(t)
  }, [])

 
  const validateName = (value: string) => {
    if (!value.trim()) {
      return 'Name is required'
    }
    if (!/^[A-Za-z\s]+$/.test(value)) {
      return 'Name can only contain letters and spaces'
    }
    return ''
  }

  
  const validateEmail = (value: string) => {
    if (!value) {
      return 'Email is required'
    }
    if (!/^[a-z][a-z0-9._%+-]*@[a-z0-9.-]+\.com$/.test(value)) {
      return 'Email must be in lowercase and end with .com (e.g., name@domain.com)'
    }
    return ''
  }


  const validatePhone = (value: string) => {
    if (value && !/^[0-9]{10}$/.test(value)) {
      return 'Phone number must be exactly 10 digits'
    }
    return ''
  }


  const validateMessage = (value: string) => {
    if (!value.trim()) {
      return 'Message is required'
    }
    return ''
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value
    
    value = value.replace(/[^A-Za-z\s]/g, '')
 
    value = value.replace(/\b\w/g, (char) => char.toUpperCase())
    setFormData({ ...formData, name: value })
    const error = validateName(value)
    setErrors({ ...errors, name: error })
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value

    value = value.toLowerCase()
    setFormData({ ...formData, email: value })
    const error = validateEmail(value)
    setErrors({ ...errors, email: error })
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value
  
    value = value.replace(/\D/g, '')
 
    if (value.length <= 10) {
      setFormData({ ...formData, phone: value })
      const error = validatePhone(value)
      setErrors({ ...errors, phone: error })
    }
  }

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    setFormData({ ...formData, message: value })
    const error = validateMessage(value)
    setErrors({ ...errors, message: error })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
   
    const nameError = validateName(formData.name)
    const emailError = validateEmail(formData.email)
    const phoneError = validatePhone(formData.phone)
    const messageError = validateMessage(formData.message)
    
    setErrors({
      name: nameError,
      email: emailError,
      phone: phoneError,
      message: messageError
    })

   
    if (nameError || emailError || phoneError || messageError) {
      return
    }

    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1000))

    try {
      const STORAGE_KEY = 'contactSubmissions'
      const existingRaw = localStorage.getItem(STORAGE_KEY)
      const existingSubmissions = existingRaw ? JSON.parse(existingRaw) : []

      const newSubmission = {
        id: Date.now(),
        name: formData.name,
        company: formData.company,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        submittedAt: new Date().toISOString()
      }

      existingSubmissions.push(newSubmission)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(existingSubmissions))
    } catch (err) {
      console.error('Failed to save submission to localStorage:', err)
    }

    setIsSubmitting(false)
    setShowSuccess(true)
    setFormData({ name: '', company: '', email: '', phone: '', message: '' })
    setErrors({ name: '', email: '', phone: '', message: '' })
    setTimeout(() => setShowSuccess(false), 8000)
  }

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'info@thelogicshell.com', action: 'mailto:info@thelogicshell.com' },
    { icon: Phone, label: 'Phone', value: '+91 9579074450', action: 'tel:+919579074450' },
    { icon: MapPin, label: 'Office', value: 'Siddhivinayak Apartment Block No 6, Madhvnagar Road, Sangli', action: 'https://maps.google.com/?q=Siddhivinayak+Apartment+Block+No+6+Madhvnagar+Road+Sangli' },
    { icon: Clock, label: 'Business Hours', value: 'Mon-Fri, 9:00 AM - 7:00 PM IST', action: null },
  ]

  const mapLocation = {
    address: 'Siddhivinayak apartment block no 6, Madhvnagar Road Sangli',
    lat: 16.8524,
    lng: 74.5815
  }

  return (
    <>
      <Helmet>
        <title>Contact - Logic Shell | Get in Touch</title>
        <meta name="description" content="Contact Logic Shell team for inquiries, support, or collaboration opportunities. We'd love to hear about your project and discuss how we can help." />
        <link rel="canonical" href="https://thelogicshell.com/contact" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact - Logic Shell | Get in Touch" />
        <meta property="og:description" content="Contact Logic Shell team for inquiries, support, or collaboration opportunities." />
        <meta property="og:url" content="https://thelogicshell.com/contact" />
        <meta property="og:image" content="https://thelogicshell.com/favicon.svg" />
        <meta property="og:site_name" content="Logic Shell" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact - Logic Shell | Get in Touch" />
        <meta name="twitter:description" content="Contact Logic Shell team for inquiries, support, or collaboration opportunities." />
        <meta name="twitter:image" content="https://thelogicshell.com/favicon.svg" />

        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://thelogicshell.com/' },
              { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://thelogicshell.com/contact' },
            ],
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Logic Shell LLP',
            image: 'https://thelogicshell.com/favicon.svg',
            email: 'info@thelogicshell.com',
            telephone: '+91-9579074450',
            url: 'https://thelogicshell.com/contact',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Siddhivinayak Apartment, Block No 6, Madhvnagar Road',
              addressLocality: 'Sangli',
              addressRegion: 'Maharashtra',
              addressCountry: 'IN',
            },
          })}
        </script>
      </Helmet>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
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
              <span className="text-xs font-semibold text-blue-600 tracking-wide uppercase">Get in Touch</span>
            </div>
            <h1
              className="font-syne font-bold text-4xl md:text-5xl text-gray-900 mb-3 transition-all duration-700 ease-out"
              style={{
                opacity: heroLoaded ? 1 : 0,
                transform: heroLoaded ? 'translateY(0)' : 'translateY(24px)',
                transitionDelay: '100ms',
              }}
            >
              Let's Start a Conversation
            </h1>
            <p
              className="text-gray-600 text-lg max-w-2xl mx-auto transition-all duration-700 ease-out"
              style={{
                opacity: heroLoaded ? 1 : 0,
                transform: heroLoaded ? 'translateY(0)' : 'translateY(24px)',
                transitionDelay: '220ms',
              }}
            >
              Ready to build something powerful? We would love to hear about your project.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10">
              <div
                ref={formSection.ref}
                className={`bg-white rounded-xl p-6 border border-blue-100 shadow-sm transition-shadow duration-300 hover:shadow-md relative overflow-hidden ${
                  formSection.inView ? 'reveal-visible' : 'reveal-hidden'
                }`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center">
                    <MessageSquare size={16} className="text-blue-500" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">Send us a message</h2>
                </div>

                {showSuccess && (
                  <div
                    className="mb-4 p-4 rounded-lg bg-red-50 border border-red-200 flex items-start gap-3"
                    style={{ animation: 'slideDown 0.35s ease-out' }}
                  >
                    <div className="w-10 h-10 rounded-full bg-red-100 shrink-0 flex items-center justify-center">
                      <AlertTriangle size={20} className="text-red-500" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-red-600 text-sm">We couldn't deliver your message right now</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Your details were saved, but our online form isn't fully connected yet. Please call us directly at{' '}
                        <a href="tel:+919579074450" className="text-red-600 font-medium hover:text-red-700 underline">
                          +91 9579074450
                        </a>{' '}
                        so we can help you right away.
                      </p>
                    </div>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          value={formData.name}
                          onChange={handleNameChange}
                          className={`w-full pl-9 pr-3 py-2 rounded-lg border ${
                            errors.name ? 'border-red-400' : 'border-gray-200'
                          } text-gray-800 placeholder:text-gray-400 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400 transition-all duration-300`}
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      {errors.name && (
                        <p className="text-xs text-red-500 mt-1">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                      <div className="relative">
                        <Building2 size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full pl-9 pr-3 py-2 rounded-lg border border-gray-200 text-gray-800 placeholder:text-gray-400 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400 transition-all duration-300"
                          placeholder="Tech Corp"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="email"
                          value={formData.email}
                          onChange={handleEmailChange}
                          className={`w-full pl-9 pr-3 py-2 rounded-lg border ${
                            errors.email ? 'border-red-400' : 'border-gray-200'
                          } text-gray-800 placeholder:text-gray-400 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400 transition-all duration-300`}
                          placeholder="name@domain.com"
                          required
                        />
                      </div>
                      {errors.email && (
                        <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={handlePhoneChange}
                          className={`w-full pl-9 pr-3 py-2 rounded-lg border ${
                            errors.phone ? 'border-red-400' : 'border-gray-200'
                          } text-gray-800 placeholder:text-gray-400 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400 transition-all duration-300`}
                          placeholder="9876543210"
                          required
                          maxLength={10}
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
                      )}
                      <p className="text-xs text-gray-400 mt-1">Enter exactly 10 digits (e.g., 9876543210)</p>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Project Description <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={handleMessageChange}
                      rows={4}
                      className={`w-full px-3 py-2 rounded-lg border ${
                        errors.message ? 'border-red-400' : 'border-gray-200'
                      } text-gray-800 placeholder:text-gray-400 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400 resize-none transition-all duration-300`}
                      placeholder="Tell us about your project, requirements, and timeline..."
                      required
                    />
                    {errors.message && (
                      <p className="text-xs text-red-500 mt-1">{errors.message}</p>
                    )}
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-blue-500 text-white font-semibold shadow-md shadow-blue-500/30 hover:bg-blue-600 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 disabled:opacity-50 disabled:hover:translate-y-0"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-3.5 h-3.5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <><Send size={14} /> Send Message</>
                    )}
                  </button>
                </form>
              </div>

              <div ref={infoSection.ref} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.action || '#'}
                      target={info.action?.startsWith('http') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      className={`block bg-white rounded-lg p-4 border border-blue-100 hover:border-blue-300 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300 ${
                        infoSection.inView ? 'reveal-visible' : 'reveal-hidden'
                      }`}
                      style={{ animationDelay: infoSection.inView ? `${index * 90}ms` : undefined }}
                    >
                      <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center mb-2">
                        <info.icon size={16} className="text-blue-500" />
                      </div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">{info.label}</p>
                      <p className="text-sm text-gray-800 font-medium break-all">{info.value}</p>
                    </a>
                  ))}
                </div>

                <div
                  className={`bg-white rounded-lg overflow-hidden border border-blue-100 shadow-sm transition-shadow duration-300 hover:shadow-md ${
                    infoSection.inView ? 'reveal-visible' : 'reveal-hidden'
                  }`}
                  style={{ animationDelay: infoSection.inView ? '360ms' : undefined }}
                >
                  <div className="p-3 border-b border-blue-100 bg-gray-50">
                    <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                      <MapPin size={16} className="text-blue-500" />
                      Our Office Location
                    </h3>
                  </div>
                  <div className="p-3 bg-blue-50/30 border-b border-blue-100">
                    <p className="text-sm text-gray-700 flex items-start gap-2">
                      <MapPin size={14} className="text-blue-500 mt-0.5" />
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
                      className="text-xs text-blue-500 hover:text-blue-600 inline-flex items-center gap-1 transition-all duration-300 hover:gap-2"
                    >
                      <MapPin size={12} />
                      Open in Google Maps
                    </a>
                  </div>
                </div>

                <div
                  className={`bg-white rounded-lg p-4 border border-blue-100 shadow-sm transition-shadow duration-300 hover:shadow-md ${
                    infoSection.inView ? 'reveal-visible' : 'reveal-hidden'
                  }`}
                  style={{ animationDelay: infoSection.inView ? '450ms' : undefined }}
                >
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
                      <a href="tel:+919579074450" className="hover:text-blue-500 transition-colors duration-300">+91 9579074450</a>
                    </p>
                    <p className="text-sm text-gray-600 flex items-center gap-2">
                      <Mail size={12} className="text-blue-500" />
                      <a href="mailto:info@thelogicshell.com" className="hover:text-blue-500 transition-colors duration-300">info@thelogicshell.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              ref={ctaSection.ref}
              className={`mt-12 bg-linear-to-r from-blue-500 to-indigo-500 rounded-xl p-8 text-center shadow-lg transition-shadow duration-300 hover:shadow-xl ${
                ctaSection.inView ? 'reveal-visible' : 'reveal-hidden'
              }`}
            >
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
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-white text-blue-600 font-semibold text-sm hover:bg-gray-100 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                >
                  <Phone size={14} />
                  Call Us Now
                </button>
                <button 
                  onClick={() => {
                    window.location.href = 'mailto:info@thelogicshell.com'
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-blue-600/30 border border-white/30 text-white font-semibold text-sm hover:bg-blue-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                >
                  <Mail size={14} />
                  Email Us
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default ContactPage