import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import type { PageType } from '../App'

interface NavbarProps {
  currentPage: PageType
  setCurrentPage: (page: PageType) => void
}

const LogoIcon: React.FC<{ size?: number }> = ({ size = 22 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 20 20" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M3 10L7 6L11 10L7 14L3 10Z" 
      fill="white" 
      opacity="0.95"
    />
    <path 
      d="M9 10L13 6L17 10L13 14L9 10Z" 
      fill="white" 
      opacity="0.55"
    />
  </svg>
)

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks: { id: PageType; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'industry', label: 'Industry' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'team', label: 'Team' },
  ]

  const handleNavClick = (page: PageType) => {
    setCurrentPage(page)
    setIsMenuOpen(false)
  }
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-blue-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            <div onClick={() => handleNavClick('home')} className="flex items-center gap-2.5 cursor-pointer group">
              <div className="w-10 h-10 rounded-lg bg-linear-to-br from-blue-700 to-blue-500 shadow-md shadow-blue-500/30 flex items-center justify-center group-hover:scale-105 transition-transform">
                <LogoIcon size={22} />
              </div>
              <span className="font-syne font-bold text-xl text-gray-800">
                Logic<span className="text-blue-500">Shell</span>
              </span>
            </div>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    currentPage === link.id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50/50'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleNavClick('contact')}
                className="hidden md:inline-flex px-5 py-2 rounded-lg bg-blue-500 text-white text-sm font-semibold shadow-md shadow-blue-500/30 hover:bg-blue-600 transition-all"
              >
                Contact Us
              </button>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-blue-50 transition-colors"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed top-16 left-0 right-0 z-40 bg-white border-b border-blue-100 shadow-lg md:hidden">
          <div className="px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-4 py-3 rounded-lg text-sm font-medium text-left transition-all ${
                  currentPage === link.id
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('contact')}
              className="mt-2 px-4 py-3 rounded-lg bg-blue-500 text-white text-sm font-semibold text-center hover:bg-blue-600 transition-all"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar