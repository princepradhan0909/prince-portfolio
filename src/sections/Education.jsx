import { GraduationCap } from 'lucide-react'
import Container from '../components/layout/Container.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'

function Education() {
  return (
    <section
      aria-labelledby="education-title"
      className="section-anchor py-20 sm:py-24"
      id="education"
    >
      <Container>
        <SectionHeading
          id="education-title"
          eyebrow="Education"
          title="Currently pursuing a BCA."
        />
        <article className="flex flex-col gap-5 rounded-2xl border border-line bg-surface p-6 sm:flex-row sm:items-center sm:p-8">
          <span className="grid size-12 shrink-0 place-items-center rounded-xl border border-accent/20 bg-accent/[0.06] text-accent">
            <GraduationCap aria-hidden="true" size={22} />
          </span>
          <div className="flex-1">
              <h3 className="text-lg font-semibold text-foreground">
                Bachelor of Computer Applications (BCA)
              </h3>
              <p className="mt-1 text-sm text-muted">
                Global Institute of Information Technology · Greater Noida
              </p>
          </div>
          <dl className="grid gap-3 text-sm sm:min-w-48">
            <div className="flex flex-wrap gap-1">
                <dt className="text-muted">Status:</dt>
                <dd className="text-foreground">Student</dd>
            </div>
            <div className="flex flex-wrap gap-1">
              <dt className="text-muted">Expected graduation:</dt>
              <dd className="text-foreground">2027</dd>
            </div>
          </dl>
        </article>
      </Container>
    </section>
  )
}

export default Education
