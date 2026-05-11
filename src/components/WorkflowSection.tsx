import { workflowSteps } from '../content/landing'
import { SectionHeading } from './SectionHeading'

export function WorkflowSection() {
  return (
    <section className="section workflow-section" id="workflow">
      <SectionHeading eyebrow="Как работает" title="От кабинета маркетплейса до решения для команды.">
        Сервис убирает ручную сборку отчетов и переводит данные в понятные действия: где теряется прибыль и какой шаг даст эффект.
      </SectionHeading>
      <div className="workflow-layout">
        <div className="workflow-panel" aria-hidden="true">
          <div className="flow-card flow-card-primary">
            <span>WB / Ozon</span>
            <strong>API подключен</strong>
          </div>
          <div className="flow-connector"></div>
          <div className="flow-card">
            <span>Единая экономика</span>
            <strong>SKU, реклама, склад</strong>
          </div>
          <div className="flow-connector"></div>
          <div className="flow-card flow-card-accent">
            <span>Решение</span>
            <strong>Приоритет: 1 420 000 ₽</strong>
          </div>
        </div>
        <div className="workflow-steps">
          {workflowSteps.map((step, index) => (
            <article key={step.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
