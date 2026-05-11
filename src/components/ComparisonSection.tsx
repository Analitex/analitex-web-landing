import { decisionCards } from '../content/landing'
import { SectionHeading } from './SectionHeading'

export function ComparisonSection() {
  return (
    <section className="section results-section" id="results">
      <SectionHeading eyebrow="Эффект" title="Сразу видно, что исправить в первую очередь.">
        Analitex показывает, где теряется маржа, какая реклама не окупается и какие товары требуют внимания до того, как проблема станет дорогой.
      </SectionHeading>
      <div className="result-grid">
        {decisionCards.map((card) => (
          <article className={card.featured ? 'result-card featured' : 'result-card'} key={card.title}>
            <span>{card.label}</span>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
