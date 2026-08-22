import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ProgramSection from './components/ProgramSection'
import AteliersSection from './components/AteliersSection'
import TarifsSection from './components/TarifsSection'
import GalerieSection from './components/GalerieSection'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import GaleriePage from './pages/GaleriePage'
import LanguageSwitcher from './components/LanguageSwitcher'

function App() {

  return (
    <>
      <BrowserRouter>
      <LanguageSwitcher />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <AboutSection />
                <ProgramSection />
                <AteliersSection />
                <TarifsSection />
                <GalerieSection />
                <Footer />
                <ScrollToTop />
              </>
            }
          />
          <Route path="/galerie" element={<GaleriePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
