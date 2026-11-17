import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { navigation } from '../../data/navigation.js'
import Container from './Container.jsx'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('#top')
  const menuButtonRef = useRef(null)

  useEffect(() => {
    const sections = [...document.querySelectorAll('main section[id]')]
    function updateActiveSection() {
      const marker = window.innerHeight * 0.3
      const active = sections.find((section) => {
        const bounds = section.getBoundingClientRect()
        return bounds.top <= marker && bounds.bottom > marker
      })

      if (active) setActiveSection(`#${active.id}`)
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)
    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return undefined

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-background/90 backdrop-blur-xl">
      <Container className="flex flex-wrap items-center justify-between gap-3 py-3 sm:py-4">
        <a
          aria-label="Prince Pradhan, home"
          className="group inline-flex w-fit items-center gap-3 rounded-sm"
          href="#top"
          onClick={() => {
            setActiveSection('#top')
            closeMenu()
          }}
        >
          <span className="grid size-9 place-items-center rounded-lg border border-accent/30 bg-accent/10 text-xs font-bold tracking-tight text-accent transition-colors group-hover:bg-accent group-hover:text-background">
            PP
          </span>
          <span className="text-sm font-semibold tracking-wide text-foreground">
            Prince Pradhan
          </span>
        </a>

        <button
          aria-controls="primary-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="inline-flex size-10 items-center justify-center rounded-md border border-line text-foreground transition-colors hover:bg-white/5 lg:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          ref={menuButtonRef}
          type="button"
        >
          {isMenuOpen ? (
            <X aria-hidden="true" size={18} />
          ) : (
            <Menu aria-hidden="true" size={18} />
          )}
        </button>

        <nav
          aria-label="Main navigation"
          className={`${isMenuOpen ? 'block' : 'hidden'} w-full lg:block lg:w-auto`}
          id="primary-navigation"
        >
          <ul className="flex flex-col gap-1 border-t border-line pt-3 lg:flex-row lg:items-center lg:gap-1 lg:border-0 lg:pt-0">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  aria-current={activeSection === item.href ? 'location' : undefined}
                  className={`inline-flex min-h-10 w-full items-center rounded-md px-3 text-sm font-medium transition-colors hover:bg-white/5 hover:text-foreground lg:w-auto ${
                    activeSection === item.href
                      ? 'bg-white/5 text-foreground'
                      : 'text-muted'
                  }`}
                  href={item.href}
                  onClick={() => {
                    setActiveSection(item.href)
                    closeMenu()
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-1 lg:pl-1 lg:pt-0">
              <a
                aria-current={activeSection === '#contact' ? 'location' : undefined}
                className="inline-flex min-h-10 w-full items-center justify-center gap-1 rounded-md bg-accent px-3 text-sm font-semibold text-background transition-colors hover:bg-lime-300 lg:w-auto"
                href="#contact"
                onClick={() => {
                  setActiveSection('#contact')
                  closeMenu()
                }}
              >
                Get in touch <ArrowUpRight aria-hidden="true" size={14} />
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header
