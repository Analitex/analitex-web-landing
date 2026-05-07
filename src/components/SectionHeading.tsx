type SectionHeadingProps = {
  eyebrow: string
  title: string
  children?: string
}

export function SectionHeading({ eyebrow, title, children }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {children ? <p>{children}</p> : null}
    </div>
  )
}
