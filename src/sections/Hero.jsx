import { ArrowDown, ArrowUpRight, Code2 } from 'lucide-react'
import ActionLink from '../components/ui/ActionLink.jsx'
import Container from '../components/layout/Container.jsx'
import profilePhoto from '../assets/images/prince-profile.png'
import profilePhotoWebp from '../assets/images/prince-profile.webp'

function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden border-b border-line"
      id="top"
    >
      <div aria-hidden="true" className="page-grid pointer-events-none absolute inset-0 -z-10" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 top-12 -z-10 size-96 rounded-full bg-accent/[0.07] blur-[120px]"
      />
      <Container className="grid min-h-[calc(100svh-5rem)] grid-cols-1 items-center gap-y-12 py-16 sm:py-20 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-x-12 lg:gap-y-0 lg:py-24 xl:gap-x-16">
        <div className="min-w-0 max-w-3xl">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3.5 py-2 text-xs font-medium text-muted">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
            BCA student · Greater Noida
          </p>
          <h1
            className="text-balance text-5xl font-semibold leading-[1.05] tracking-[-0.055em] text-foreground sm:text-6xl lg:text-7xl"
            id="hero-title"
          >
            Prince
            <br />
            <span className="text-accent">Pradhan.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-muted sm:text-xl">
            Aspiring Java Backend Developer
          </p>
          <p className="mt-2 max-w-xl text-sm leading-6 text-muted">
            BCA · Global Institute of Information Technology, Greater Noida ·
            Expected graduation 2027
          </p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-muted sm:text-base">
            I build practical Java backend applications with Spring Boot, REST
            APIs, and relational databases while continuing to learn backend
            architecture and software engineering.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ActionLink href="#projects" showArrow>
              Explore projects
            </ActionLink>
            <ActionLink href="#contact" variant="secondary">
              Contact
            </ActionLink>
          </div>
          <ul aria-label="Social profiles" className="mt-6 flex flex-wrap gap-4">
            <li>
              <a
                className="inline-flex min-h-10 items-center gap-2 rounded-md text-sm font-medium text-muted transition-colors hover:text-foreground"
                href="https://github.com/princepradhan0909"
                rel="noopener noreferrer"
                target="_blank"
              >
                GitHub
                <ArrowUpRight aria-hidden="true" size={14} />
              </a>
            </li>
            <li>
              <a
                className="inline-flex min-h-10 items-center gap-2 rounded-md text-sm font-medium text-muted transition-colors hover:text-foreground"
                href="https://www.linkedin.com/in/prince-pradhan-a68239436/"
                rel="noopener noreferrer"
                target="_blank"
              >
                LinkedIn
                <ArrowUpRight aria-hidden="true" size={14} />
              </a>
            </li>
          </ul>
          <a
            className="mt-10 inline-flex min-h-10 items-center gap-2 text-xs font-medium text-muted transition-colors hover:text-foreground"
            href="#about"
          >
            <ArrowDown aria-hidden="true" size={14} />
            Scroll to explore
          </a>
        </div>

        <div className="relative mx-auto min-w-0 w-full max-w-sm lg:max-w-[30rem]">
          <div
            aria-hidden="true"
            className="absolute -inset-4 rounded-[2rem] border border-accent/10"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line bg-surface p-3 shadow-2xl shadow-black/30">
            <div className="relative h-full overflow-hidden rounded-2xl border border-white/5 bg-[#111113]">
              <picture className="absolute inset-0 size-full">
                <source srcSet={profilePhotoWebp} type="image/webp" />
                <img
                  alt="Prince Pradhan - Aspiring Java Backend Developer"
                  className="size-full object-cover object-[center_35%]"
                  decoding="async"
                  fetchPriority="high"
                  height="1254"
                  src={profilePhoto}
                  width="1254"
                />
              </picture>
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-xl border border-white/10 bg-background/80 px-4 py-3 backdrop-blur">
                <span className="flex items-center gap-2 text-xs text-muted">
                  <Code2 aria-hidden="true" className="text-accent" size={15} />
                  Career focus
                </span>
                <span className="text-xs font-medium text-foreground">
                  Backend development
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
