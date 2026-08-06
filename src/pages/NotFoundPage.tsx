import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Home, ArrowLeft, Mail, Search } from 'lucide-react'
import type { PageType } from '../App'

interface NotFoundPageProps {
  setCurrentPage: (page: PageType) => void
}

const quickLinks: { label: string; to: string }[] = [
  { label: 'Solutions', to: '/solutions' },
  { label: 'Industry', to: '/industry' },
  { label: 'Services', to: '/services' },
  { label: 'About Us', to: '/about' },
  { label: 'Our Team', to: '/team' },
  { label: 'Contact', to: '/contact' },
]

const NotFoundPage: React.FC<NotFoundPageProps> = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <>
      <Helmet>
        <title>Page Not Found - Logic Shell</title>
        <meta
          name="description"
          content="The page you're looking for doesn't exist or may have moved. Explore Logic Shell's solutions, services, and industries instead."
        />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://thelogicshell.com/404" />
      </Helmet>

      <section className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl w-full text-center">
         
          <div className="relative inline-flex items-center justify-center mb-8">
            <div className="absolute inset-0 bg-blue-200/50 blur-3xl rounded-full" />
            <div
              className="relative font-syne font-extrabold text-blue-500/90 leading-none select-none"
              style={{
                fontSize: 'clamp(5rem, 18vw, 9rem)',
                animation: 'fadeInUp 0.7s ease-out both',
              }}
            >
              404
            </div>
          </div>

          <h1
            className="font-syne font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-3"
            style={{ animation: 'fadeInUp 0.7s ease-out 0.1s both' }}
          >
            Page Not Found
          </h1>
          <p
            className="text-sm sm:text-base text-gray-500 max-w-md mx-auto mb-10 leading-relaxed"
            style={{ animation: 'fadeInUp 0.7s ease-out 0.2s both' }}
          >
            The page you're looking for doesn't exist, may have been moved, or the URL might be
            mistyped. Let's get you back on track.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12"
            style={{ animation: 'fadeInUp 0.7s ease-out 0.3s both' }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-500 text-white text-sm font-semibold shadow-md shadow-blue-500/30 hover:bg-blue-600 transition-all w-full sm:w-auto justify-center"
            >
              <Home size={16} />
              Back to Home
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white border border-blue-200 text-gray-700 text-sm font-semibold hover:bg-blue-50 hover:text-blue-600 transition-all w-full sm:w-auto justify-center"
            >
              <Mail size={16} />
              Contact Us
            </Link>
          </div>

          <div
            className="pt-8 border-t border-blue-100"
            style={{ animation: 'fadeInUp 0.7s ease-out 0.4s both' }}
          >
            <p className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
              <Search size={14} />
              Or explore these pages
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-gray-600 bg-blue-50/60 hover:bg-blue-100 hover:text-blue-600 transition-all"
                >
                  <ArrowLeft size={12} className="rotate-180" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  )
}

export default NotFoundPage
