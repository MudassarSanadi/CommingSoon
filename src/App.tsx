import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import SolutionsPage from './pages/SolutionsPage'
import IndustryPage from './pages/IndustryPage'
import ServicesPage from './pages/ServicesPage'
import AboutPage from './pages/AboutPage'
import TeamPage from './pages/TeamPage'
import ContactPage from './pages/ContactPage'

export type PageType = 'home' | 'solutions' | 'industry' | 'services' | 'about' | 'team' | 'contact'

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home')

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <HomePage setCurrentPage={setCurrentPage} />
      case 'solutions': return <SolutionsPage setCurrentPage={setCurrentPage} />
      case 'industry': return <IndustryPage setCurrentPage={setCurrentPage} />
      case 'services': return <ServicesPage setCurrentPage={setCurrentPage} />
      case 'about': return <AboutPage setCurrentPage={setCurrentPage} />
      case 'team': return <TeamPage setCurrentPage={setCurrentPage} />
      case 'contact': return <ContactPage />
      default: return <HomePage setCurrentPage={setCurrentPage} />
    }
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-indigo-50">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="pt-16">
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  )
}

export default App