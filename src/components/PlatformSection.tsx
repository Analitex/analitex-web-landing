import { operatingModules } from '../content/landing'
import { SectionHeading } from './SectionHeading'

export function PlatformSection() {
  return (
    <section className="section tools-section" id="platform">
      <SectionHeading eyebrow="Платформа" title="Одна операционная панель для маркетплейсов.">
        Analitex связывает ежедневные данные с экономикой бизнеса: от SKU и кампаний до поставок, цены и чистой прибыли.
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
