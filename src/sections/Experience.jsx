import { Blocks, Database, Layers3, Server } from 'lucide-react'
import Container from '../components/layout/Container.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'

const milestones = [
  {
    title: 'Programming foundations',
    description:
      'Building a foundation in programming concepts and problem-solving through BCA studies.',
    Icon: Blocks,
  },
  {
    title: 'Java and relational data',
    description:
      'Applying Java with relational databases including PostgreSQL and MySQL.',
    Icon: Database,
  },
  {
    title: 'Backend application development',
    description:
      'Learning Spring Boot, REST APIs, and persistence with Spring Data JPA.',
    Icon: Server,
  },
  {
    title: 'Independent project work',
    description:
      'Putting these skills into practice through independent projects. This is project work, not professional employment.',
    Icon: Layers3,
  },
]

function Experience() {
  return (
    <section
      aria-labelledby="journey-title"
      className="section-anchor border-y border-line bg-white/[0.015] py-20 sm:py-24"
      id="journey"
    >
      <Container>
        <SectionHeading
          id="journey-title"
          eyebrow="Development journey"
          title="From fundamentals to working applications."
          description="A learning progression shaped by BCA studies and hands-on independent projects."
        />
        <ol className="grid gap-4 md:grid-cols-2">
          {milestones.map(({ title, description, Icon }, index) => (
            <li
              className="flex gap-4 rounded-2xl border border-line bg-surface p-5 sm:p-6"
              key={title}
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-accent/20 bg-accent/[0.05] text-accent">
                <Icon aria-hidden="true" size={20} />
              </span>
              <div>
                <p className="text-xs font-medium text-accent">
                  Step {index + 1}
                </p>
                <h3 className="mt-1 font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}

export default Experience
