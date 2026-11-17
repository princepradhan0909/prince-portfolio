function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  centered = false,
}) {
  return (
    <div className={`mb-10 max-w-2xl ${centered ? 'mx-auto text-center' : ''}`}>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
        {eyebrow}
      </p>
      <h2
        className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
        id={id}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-7 text-muted">{description}</p>
      )}
    </div>
  )
}

export default SectionHeading
