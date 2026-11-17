import { ArrowUp } from 'lucide-react'
import { navigation } from '../../data/navigation.js'
import Container from './Container.jsx'

const currentYear = new Date().getFullYear()

function Footer() {
  return (
    <footer className="border-t border-line py-7">
      <Container className="space-y-6 text-sm text-muted">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <a
              className="font-semibold text-foreground transition-colors hover:text-accent"
              href="#top"
            >
              Prince Pradhan
            </a>
            <p className="mt-1 text-xs">Aspiring Java Backend Developer</p>
          </div>
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-xs">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    className="transition-colors hover:text-foreground"
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  className="transition-colors hover:text-foreground"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex flex-wrap items-center gap-4 text-xs">
            <a
              className="transition-colors hover:text-foreground"
              href="https://github.com/princepradhan0909"
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub
            </a>
            <a
              className="transition-colors hover:text-foreground"
              href="https://www.linkedin.com/in/prince-pradhan-a68239436/"
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              aria-label="Back to top"
              className="inline-flex size-9 items-center justify-center rounded-md border border-line text-foreground transition-colors hover:border-white/20 hover:text-accent"
              href="#top"
            >
              <ArrowUp aria-hidden="true" size={15} />
            </a>
          </div>
        </div>
        <p className="border-t border-line pt-5 text-xs">
          © {currentYear} Prince Pradhan
        </p>
      </Container>
    </footer>
  )
}

export default Footer
