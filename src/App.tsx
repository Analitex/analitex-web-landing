import './App.css'
import { ClosingCta } from './components/ClosingCta'
import { ComparisonSection } from './components/ComparisonSection'
import { FaqSection } from './components/FaqSection'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { IntegrationsSection } from './components/IntegrationsSection'
import { LogoBand } from './components/LogoBand'
import { PlatformSection } from './components/PlatformSection'
import { PricingSection } from './components/PricingSection'
import { WorkflowSection } from './components/WorkflowSection'

function App() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <HeroSection />
        <LogoBand />
        <PlatformSection />
        <WorkflowSection />
        <ComparisonSection />
        <IntegrationsSection />
        <PricingSection />
        <FaqSection />
        <ClosingCta />
      </main>
      <Footer />
    </div>
  )
}

export default App
