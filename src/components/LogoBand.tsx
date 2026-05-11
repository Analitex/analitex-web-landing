import { customerSegments } from '../content/landing'

export function LogoBand() {
  return (
    <section className="logo-band" aria-label="Сегменты клиентов">
      <span>Собрано для команд, где продажи уже нельзя держать в разрозненных таблицах</span>
      {customerSegments.map((segment) => (
        <strong key={segment}>{segment}</strong>
      ))}
    </section>
  )
}
