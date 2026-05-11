import { heroStats, marketplaces } from '../content/landing'
import { DashboardPreview } from './DashboardPreview'

export function HeroSection() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-content">
        <div className="hero-kicker">
          <span className="live-dot"></span>
          Сервис аналитики продаж на маркетплейсах
        </div>
        <h1>Оцифруйте продажи и управляйте прибылью на маркетплейсах.</h1>
        <p className="hero-copy">
          Analitex собирает продажи, рекламу, остатки и себестоимость в одну картину, чтобы команда видела реальные деньги и понимала, что делать сегодня.
        </p>
        <div className="hero-actions">
          <a className="primary-button" href="#demo">Запросить демо</a>
          <a className="secondary-button" href="#platform">Посмотреть платформу</a>
        </div>
        <div className="market-row" aria-label="Поддерживаемые маркетплейсы">
          {marketplaces.map((marketplace) => (
            <span key={marketplace}>{marketplace}</span>
          ))}
        </div>
      </div>
      <div className="hero-visual">
        <DashboardPreview />
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
