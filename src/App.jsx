import React from "react"
import Header from "./Includes/Header"
import Footer from "./Includes/Footer"
import HeroSection from "./components/Home/HeroSection"
import ClientSection from "./components/Home/ClientSection"
import ServiceSection from "./components/Home/ServiceSection"
import CertificationSection from "./components/Home/CertificationSection"
import AboutSection from "./components/Home/AboutSection"
import StrengthSection from "./components/Home/StrengthSection"
import FAQSection from "./components/Home/FAQSection"
import TrustSection from "./components/Home/TrustSection"
import BackToTop from "./components/BackToTop"

function App() {

  return (
    <React.Fragment>
      <Header />
      <main>
        <HeroSection />
        <ClientSection />
        <ServiceSection />
        <CertificationSection />
        <AboutSection />
        <StrengthSection />
        <FAQSection />
        <TrustSection />
      </main>
      <BackToTop />
      <Footer />
    </React.Fragment>
  )
}

export default App
