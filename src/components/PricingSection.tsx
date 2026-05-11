import { useMemo, useState } from 'react'
import { pricingPlans } from '../content/landing'
import { formatPrice, getAnnualSavingsPercent } from '../utils/pricing'

export function PricingSection() {
  const [annual, setAnnual] = useState(true)
  const savings = useMemo(() => getAnnualSavingsPercent(), [])

  return (
    <section className="section pricing-section" id="pricing">
      <div className="pricing-head">
        <div>
          <span className="eyebrow">Тарифы</span>
          <h2>Планы под текущий масштаб продаж.</h2>
        </div>
        <div className="billing-toggle" aria-label="Период оплаты">
          <button className={!annual ? 'active' : ''} type="button" onClick={() => setAnnual(false)}>Месяц</button>
          <button className={annual ? 'active' : ''} type="button" onClick={() => setAnnual(true)}>Год -{savings}%</button>
        </div>
      </div>
      <div className="pricing-grid">
        {pricingPlans.map((plan) => (
          <article className={plan.highlighted ? 'price-card highlighted' : 'price-card'} key={plan.name}>
            <span>{plan.name}</span>
            <h3>{formatPrice(plan.monthly, annual)} ₽</h3>
            <p>{plan.description}</p>
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <a href="#demo">{plan.highlighted ? 'Запросить Growth' : 'Обсудить тариф'}</a>
          </article>
        ))}
      </div>
    </section>
  )
}
