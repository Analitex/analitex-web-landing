import { heroStats, marketplaces } from '../content/landing'
import { DashboardPreview } from './DashboardPreview'

export function HeroSection() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-backdrop" aria-hidden="true">
        <DashboardPreview />
      </div>
      <div className="hero-content">
        <div className="hero-kicker">
          <span className="live-dot"></span>
          Аналитика и рост продаж на маркетплейсах
        </div>
        <h1>Прибыль, реклама и остатки в одном сервисе.</h1>
        <p className="hero-copy">
          Analitex помогает селлерам видеть реальные деньги, находить слабые места и быстрее принимать решения по Wildberries, Ozon и другим площадкам.
        </p>
        <div className="hero-actions">
          <a className="primary-button" href="#demo">Попробовать бесплатно</a>
          <a className="secondary-button" href="#platform">Смотреть инструменты</a>
        </div>
        <div className="market-row" aria-label="Поддерживаемые маркетплейсы">
          {marketplaces.map((marketplace) => (
            <span key={marketplace}>{marketplace}</span>
          ))}
        </div>
      </div>
      <div className="hero-stat-strip" aria-label="Метрики эффективности клиентов">
        {heroStats.map((stat) => (
          <div className="metric" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
