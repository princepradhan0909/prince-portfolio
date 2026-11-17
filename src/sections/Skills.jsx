import {
  Brain,
  Blocks,
  Code2,
  Database,
  ListChecks,
  ListTree,
  Network,
  Workflow,
} from 'lucide-react'
import {
  siApachemaven,
  siGit,
  siGithub,
  siJavascript,
  siMysql,
  siPostgresql,
  siReact,
  siSpring,
  siSpringboot,
  siTailwindcss,
  siVite,
} from 'simple-icons'
import Container from '../components/layout/Container.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import javaLogo from '../assets/icons/java-original.svg'
import vscodeLogo from '../assets/icons/vscode-original.svg'
import { skillGroups } from '../data/skills.js'

const brandIcons = {
  java: javaLogo,
  springboot: siSpringboot,
  spring: siSpring,
  postgresql: siPostgresql,
  mysql: siMysql,
  git: siGit,
  github: siGithub,
  maven: siApachemaven,
  vscode: vscodeLogo,
  javascript: siJavascript,
  react: siReact,
  vite: siVite,
  tailwindcss: siTailwindcss,
}

const conceptIcons = {
  Brain,
  Blocks,
  Code2,
  Database,
  ListChecks,
  ListTree,
  Network,
  Workflow,
}

function SkillVisual({ skill }) {
  const brandIcon = brandIcons[skill.brand]

  if (typeof brandIcon === 'string') {
    return (
      <img
        alt=""
        aria-hidden="true"
        className="size-6 shrink-0"
        src={brandIcon}
      />
    )
  }

  if (brandIcon) {
    return (
      <svg
        aria-hidden="true"
        className="size-6 shrink-0"
        fill={skill.brand === 'github' ? '#e4e4e7' : `#${brandIcon.hex}`}
        focusable="false"
        viewBox="0 0 24 24"
      >
        <path d={brandIcon.path} />
      </svg>
    )
  }

  const Icon = conceptIcons[skill.icon]
  return Icon ? (
    <Icon
      aria-hidden="true"
      className="size-6 shrink-0 text-accent"
      size={24}
      strokeWidth={1.7}
    />
  ) : null
}

function Skills() {
  return (
    <section
      aria-labelledby="skills-title"
      className="section-anchor border-y border-line bg-white/[0.015] py-20 sm:py-24"
      id="skills"
    >
      <Container>
        <SectionHeading
          id="skills-title"
          eyebrow="Technical skills"
          title="Technologies and fundamentals."
          description="Technologies used in this portfolio and its featured projects, alongside core fundamentals."
        />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <li
              className="min-h-48 rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-white/15 sm:p-6"
              key={group.title}
            >
              <h3 className="text-sm font-semibold text-foreground">
                {group.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-line bg-background/70 px-3 py-2 text-sm text-muted"
                    key={skill.name}
                  >
                    <SkillVisual skill={skill} />
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

export default Skills
