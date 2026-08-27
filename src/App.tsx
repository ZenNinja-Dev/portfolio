import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'
import CaseStudy from './components/CaseStudy'
import Approach from './components/Approach'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Services />
        <CaseStudy />
        <Approach />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
