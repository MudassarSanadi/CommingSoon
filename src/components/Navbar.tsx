import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import type { PageType } from '../App'
import LogoIcon from './LogoIcon'

interface NavbarProps {
  currentPage: PageType
  setCurrentPage: (page: PageType) => void
}

const pageHref = (page: PageType) => (page === 'home' ? '/' : `/${page}`)

const Navbar: React.FC<NavbarProps> = ({ currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks: { id: PageType; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'industry', label: 'Industry' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'team', label: 'Team' },
  ]

  const closeMenu = () => setIsMenuOpen(false)
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-blue-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            <Link to="/" onClick={closeMenu} className="flex items-center gap-2.5 cursor-pointer group">
              <div className="w-14 h-14 rounded-full bg-white border border-blue-200 shadow-sm flex items-center justify-center group-hover:scale-105 transition-transform overflow-hidden p-1">
                <LogoIcon />
              </div>
              <span className="font-syne font-bold text-xl text-gray-800">
                Logic<span className="text-blue-500">Shell</span>
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  to={pageHref(link.id)}
                  onClick={closeMenu}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    currentPage === link.id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50/50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <Link
                to="/contact"
                onClick={closeMenu}
                className="hidden lg:inline-flex px-5 py-2 rounded-lg bg-blue-500 text-white text-sm font-semibold shadow-md shadow-blue-500/30 hover:bg-blue-600 transition-all"
              >
                Contact Us
              </Link>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMenuOpen}
                className={`lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg border transition-all duration-200 active:scale-95 ${
                  isMenuOpen
                    ? 'bg-blue-500 border-blue-500 text-white shadow-md shadow-blue-500/30'
                    : 'bg-white border-blue-200 text-gray-700 hover:bg-blue-50 hover:border-blue-300'
                }`}
              >
                <span className="relative w-5 h-5">
                  <Menu
                    size={20}
                    className={`absolute inset-0 transition-all duration-200 ${
                      isMenuOpen ? 'opacity-0 rotate-45 scale-75' : 'opacity-100 rotate-0 scale-100'
                    }`}
                  />
                  <X
                    size={20}
                    className={`absolute inset-0 transition-all duration-200 ${
                      isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-45 scale-75'
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed top-16 left-0 right-0 z-40 bg-white border-b border-blue-100 shadow-lg lg:hidden">
          <div className="px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={pageHref(link.id)}
                onClick={closeMenu}
                className={`px-4 py-3 rounded-lg text-sm font-medium text-left transition-all ${
                  currentPage === link.id
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={closeMenu}
              className="mt-2 px-4 py-3 rounded-lg bg-blue-500 text-white text-sm font-semibold text-center hover:bg-blue-600 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar