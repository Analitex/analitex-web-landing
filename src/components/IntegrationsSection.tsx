import { integrations } from '../content/landing'
import { SectionHeading } from './SectionHeading'

export function IntegrationsSection() {
  return (
    <section className="section integrations-section" id="integrations">
      <SectionHeading eyebrow="Интеграции" title="Данные приходят туда, где уже работает команда.">
        Подключайте кабинеты, импортируйте себестоимость и отправляйте итоговые сигналы в привычные каналы.
      </SectionHeading>
      <div className="integration-cloud" aria-label="Интеграции Analitex">
        {integrations.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  )
}
