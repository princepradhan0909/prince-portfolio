
import Footer from './components/layout/Footer.jsx'
import Header from './components/layout/Header.jsx'
import About from './sections/About.jsx'
import Contact from './sections/Contact.jsx'
import Education from './sections/Education.jsx'
import Experience from './sections/Experience.jsx'
import Hero from './sections/Hero.jsx'
import Projects from './sections/Projects.jsx'
import Skills from './sections/Skills.jsx'

function App() {
  return (
    <>
      <a
        className="sr-only z-50 rounded-md bg-accent px-4 py-2 font-semibold text-background focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        href="#main-content"
      >
        Skip to content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
