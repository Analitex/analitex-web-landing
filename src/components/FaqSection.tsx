import { faqs } from '../content/landing'
import { SectionHeading } from './SectionHeading'

export function FaqSection() {
  return (
    <section className="section faq-section" id="faq">
      <SectionHeading eyebrow="FAQ" title="Короткие ответы перед демо." />
      <div className="faq-list">
        {faqs.map((faq) => (
          <details key={faq.question}>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
