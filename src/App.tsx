import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'  
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export type PageType = 'home' | 'solutions' | 'industry' | 'services' | 'about' | 'team' | 'contact'

// Lazy load all page components
const HomePage = lazy(() => import('./pages/HomePage'))
const SolutionsPage = lazy(() => import('./pages/SolutionsPage'))
const IndustryPage = lazy(() => import('./pages/IndustryPage'))
const IndustryDetailPage = lazy(() => import('./pages/IndustryDetailPage'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const TeamPage = lazy(() => import('./pages/TeamPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))

const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="text-center">
      <div className="w-12 h-12 rounded-full border-4 border-blue-200 border-t-blue-500 animate-spin mx-auto mb-4"></div>
      <p className="text-gray-500 text-sm">Loading...</p>
    </div>
  </div>
)

const AppContent = () => {
  const navigate = useNavigate()
  const location = useLocation()
  
  const getCurrentPage = (): PageType => {
    const path = location.pathname.slice(1) || 'home'
    if (path.startsWith('industry/')) return 'industry'
    return path as PageType
  }

  const currentPage = getCurrentPage()

  const setCurrentPage = (page: PageType) => {
    navigate(page === 'home' ? '/' : `/${page}`)
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-indigo-50">
    
      <Helmet>
        <title>Logic Shell</title>
        <meta name="description" content="Logic Shell - Intelligent Digital Ecosystems" />
        <link rel="canonical" href="https://thelogicshell.com" />
      </Helmet>
      
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="pt-16">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage setCurrentPage={setCurrentPage} />} />
            <Route path="/home" element={<HomePage setCurrentPage={setCurrentPage} />} />
            <Route path="/solutions" element={<SolutionsPage setCurrentPage={setCurrentPage} />} />
            <Route path="/industry" element={<IndustryPage setCurrentPage={setCurrentPage} />} />
            <Route path="/industry/:industryId" element={<IndustryDetailPage setCurrentPage={setCurrentPage} />} />
            <Route path="/services" element={<ServicesPage setCurrentPage={setCurrentPage} />} />
            <Route path="/about" element={<AboutPage setCurrentPage={setCurrentPage} />} />
            <Route path="/team" element={<TeamPage setCurrentPage={setCurrentPage} />} />
            <Route path="/contact" element={<ContactPage setCurrentPage={setCurrentPage} />} />
          </Routes>
        </Suspense>
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App