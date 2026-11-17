import { ArrowUpRight, Code2, ExternalLink, Layers3 } from 'lucide-react'
import Container from '../components/layout/Container.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import { projects } from '../data/projects.js'

function Projects() {
  return (
    <section
      aria-labelledby="projects-title"
      className="section-anchor py-20 sm:py-24"
      id="projects"
    >
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            id="projects-title"
            eyebrow="Selected work"
            title="Featured projects."
            description="Practical applications demonstrating backend API development, data persistence, and full-stack problem solving."
          />
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <article
              className="group relative flex min-h-80 flex-col overflow-hidden rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent/30 sm:p-8"
              key={project.name}
            >
              <div
                aria-hidden="true"
                className="absolute -right-16 -top-20 size-56 rounded-full bg-accent/[0.035] blur-3xl transition-colors group-hover:bg-accent/[0.08]"
              />
              <div className="relative flex items-center justify-between">
                <span className="grid size-11 place-items-center rounded-xl border border-line bg-background text-accent">
                  <Layers3 aria-hidden="true" size={20} />
                </span>
                <span className="font-mono text-xs text-muted/70">
                  {project.number}
                </span>
              </div>
              <div className="relative mt-8">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent">
                  {project.category}
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
                  {project.name}
                </h3>
                <p className="mt-4 text-sm leading-6 text-muted">
                  <span className="font-semibold text-foreground">Problem: </span>
                  {project.problem}
                </p>
                <p className="mt-3 text-sm leading-6 text-muted">
                  <span className="font-semibold text-foreground">
                    Technical contribution:{' '}
                  </span>
                  {project.contribution}
                </p>
                <div className="mt-5">
                  <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                    Implemented features
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {project.features.map((feature) => (
                      <li
                        className="flex gap-2 text-xs leading-5 text-muted sm:text-sm"
                        key={feature}
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 size-1 shrink-0 rounded-full bg-accent"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-5">
                  <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                    Technologies
                  </h4>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <li
                        className="rounded-full border border-line bg-background/70 px-2.5 py-1 text-xs text-foreground"
                        key={technology}
                      >
                        {technology}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="relative mt-6 flex flex-wrap gap-3 border-t border-line pt-5">
                {project.links.map((link) => (
                  <a
                    aria-label={`${project.name} ${link.label} (opens in a new tab)`}
                    className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-line px-3 text-xs font-medium text-foreground transition-colors hover:border-accent/40 hover:text-accent"
                    href={link.href}
                    key={link.label}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {link.label === 'GitHub' ? (
                      <Code2 aria-hidden="true" size={15} />
                    ) : (
                      <ExternalLink aria-hidden="true" size={15} />
                    )}
                    {link.label}
                    <ArrowUpRight aria-hidden="true" size={13} />
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Projects
