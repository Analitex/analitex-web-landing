import { customerSegments } from '../content/landing'

export function LogoBand() {
  return (
    <section className="logo-band" aria-label="Сегменты клиентов">
      <span>Для команд в категориях</span>
      {customerSegments.map((segment) => (
        <strong key={segment}>{segment}</strong>
      ))}
    </section>
  )
}
