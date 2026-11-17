import { ArrowRight } from 'lucide-react'

const variants = {
  primary:
    'bg-accent text-background hover:bg-lime-300',
  secondary:
    'border border-line bg-white/[0.03] text-foreground hover:border-white/20 hover:bg-white/[0.07]',
}

function ActionLink({ href, children, variant = 'primary', showArrow = false }) {
  return (
    <a
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 text-sm font-semibold transition-colors ${variants[variant]}`}
      href={href}
    >
      {children}
      {showArrow && <ArrowRight aria-hidden="true" size={16} />}
    </a>
  )
}

export default ActionLink
