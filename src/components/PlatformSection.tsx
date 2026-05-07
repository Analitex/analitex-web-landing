import { operatingModules } from '../content/landing'
import { SectionHeading } from './SectionHeading'

export function PlatformSection() {
  return (
    <section className="section tools-section" id="platform">
      <SectionHeading eyebrow="Инструменты" title="Все важное для роста продаж. Без лишней сложности.">
        Выберите задачу, подключите кабинеты и смотрите понятные рекомендации вместо десятков выгрузок.
      </SectionHeading>
      <div className="tools-grid">
        {operatingModules.map((tool) => (
          <article className="tool-card" key={tool.title}>
            <span>{tool.eyebrow}</span>
            <h3>{tool.title}</h3>
            <p>{tool.text}</p>
            <strong>{tool.metric}</strong>
          </article>
        ))}
      </div>
    </section>
  )
}
