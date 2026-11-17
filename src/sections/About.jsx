import { ArrowUpRight, Target } from 'lucide-react'
import Container from '../components/layout/Container.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'

function About() {
  return (
    <section
      aria-labelledby="about-title"
      className="section-anchor py-20 sm:py-24"
      id="about"
    >
      <Container>
        <SectionHeading
          id="about-title"
          eyebrow="About"
          title="Learning by building practical applications."
          description="Interested in Java backend development, problem-solving, and continuous learning."
        />
        <div className="grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-foreground">
              A little about me
            </h3>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base">
              I am a BCA student at Global Institute of Information Technology,
              Greater Noida, interested in Java backend development. I build
              practical applications using Java and Spring Boot while learning
              backend architecture, REST APIs, relational databases, and software
              engineering. I focus on practical problem-solving and continuous
              learning.
            </p>
          </div>
          <div className="rounded-2xl border border-accent/20 bg-accent/[0.04] p-6 sm:p-8">
            <Target aria-hidden="true" className="text-accent" size={21} />
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
              Career direction
            </p>
            <p className="mt-2 text-lg font-semibold text-foreground">
              Java Backend Developer
            </p>
            <p className="mt-2 text-sm leading-6 text-muted">
              Backend Developer opportunities at service-based and product-based
              MNCs.
            </p>
            <a
              className="mt-5 inline-flex min-h-10 items-center gap-2 text-sm font-medium text-accent hover:text-lime-300"
              href="#projects"
            >
              View selected projects
              <ArrowUpRight aria-hidden="true" size={15} />
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default About
