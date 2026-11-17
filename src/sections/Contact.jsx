import { Code2, Mail, UserRound } from 'lucide-react'
import Container from '../components/layout/Container.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'

const contactItems = [
  {
    label: 'Email',
    value: 'prince.pradhan0909@gmail.com',
    href: 'mailto:prince.pradhan0909@gmail.com',
    ariaLabel: 'Email Prince Pradhan',
    Icon: Mail,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/prince-pradhan-a68239436',
    href: 'https://www.linkedin.com/in/prince-pradhan-a68239436/',
    ariaLabel: 'LinkedIn profile for Prince Pradhan (opens in a new tab)',
    external: true,
    Icon: UserRound,
  },
  {
    label: 'GitHub',
    value: 'github.com/princepradhan0909',
    href: 'https://github.com/princepradhan0909',
    ariaLabel: 'GitHub profile for Prince Pradhan (opens in a new tab)',
    external: true,
    Icon: Code2,
  },
]

function Contact() {
  return (
    <section
      aria-labelledby="contact-title"
      className="section-anchor border-t border-line py-20 sm:py-24"
      id="contact"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
          <div>
            <SectionHeading
              id="contact-title"
              eyebrow="Contact"
              title="Let’s talk about backend development."
              description="Reach out about opportunities or connect with me on LinkedIn and GitHub."
            />
            <p className="inline-flex items-center gap-2 rounded-lg border border-accent/20 bg-accent/[0.04] px-4 py-3 text-sm text-muted">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
              Email or connect through a professional profile.
            </p>
          </div>
          <ul className="grid min-w-0 content-start gap-3">
            {contactItems.map(({ label, value, href, ariaLabel, external, Icon }) => {
              const content = (
                <>
                  <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-line bg-background text-accent">
                    <Icon aria-hidden="true" size={18} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-muted">{label}</span>
                    <span className="mt-1 block wrap-anywhere text-sm font-medium text-foreground">
                      {value}
                    </span>
                  </span>
                </>
              )

              return (
                <li key={label}>
                  {href ? (
                    <a
                      aria-label={ariaLabel}
                      className="flex min-h-20 items-center gap-4 rounded-xl border border-line bg-surface px-5 py-4 transition-colors hover:border-accent/30"
                      href={href}
                      rel={external ? 'noopener noreferrer' : undefined}
                      target={external ? '_blank' : undefined}
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="flex min-h-20 items-center gap-4 rounded-xl border border-line bg-surface px-5 py-4">
                      {content}
                    </div>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </Container>
    </section>
  )
}

export default Contact
