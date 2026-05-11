import heroLayer from './assets/hero.png'
import './App.css'
import {
  customerSegments,
  decisionCards,
  faqs,
  featureTiles,
  heroStats,
  marketplaces,
  navLinks,
  operatingModules,
  pricingPlans,
  supportFeatures,
  testimonials,
  workflowSteps,
} from './content/landing'
import { formatPrice } from './utils/pricing'

const links = {
  site: 'https://analitex.ru',
  app: 'https://app.analitex.ru',
  docs: {
    privacyPolicy: 'https://docs.analitex.ru/docs/legal/privacy_policy',
    termsOfUse: 'https://docs.analitex.ru/docs/legal/terms_of_use',
    publicOffer: 'https://docs.analitex.ru/docs/legal/public_offer',
    personalDataConsent: 'https://docs.analitex.ru/docs/legal/personal_data_consent',
  },
}

function App() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <Hero />
        <LogoBand />
        <WorkflowIntro />
        <FeatureStory />
        <Testimonials />
        <FeatureTiles />
        <SupportGrid />
        <Results />
        <Pricing />
        <Faq />
        <ClosingCta />
      </main>
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href={links.site} aria-label="Analitex">
        <span className="brand-name">Analitex</span>
        <span className="brand-badge">PRO</span>
      </a>
      <nav className="site-nav" aria-label="Разделы страницы">
        {navLinks.map((link) => (
          <a href={link.href} key={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <a className="login-link" href={links.app}>Войти</a>
        <a className="trial-button" href={links.app}>Попробовать</a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-copy">
        <h1>Оцифруйте продажи с Analitex™</h1>
        <p>
          Сервис аналитики для маркетплейсов: прибыль, реклама, остатки и рекомендации в одном аккуратном интерфейсе для селлеров и команд роста.
        </p>
        <div className="hero-actions">
          <a className="primary-button" href={links.app}>Подключить кабинет</a>
          <a className="secondary-button" href="#features">Смотреть платформу</a>
        </div>
      </div>
      <div className="hero-art" aria-hidden="true">
        <DashboardMockup />
        <article className="floating-card card-left">
          <span>Total revenue</span>
          <strong>2 670</strong>
          <em>+8% за неделю</em>
        </article>
        <article className="floating-card card-right">
          <span>Маржа</span>
          <strong>18,6%</strong>
          <em>чистая прибыль</em>
        </article>
        <img className="hero-layer" src={heroLayer} alt="" />
      </div>
    </section>
  )
}

function DashboardMockup() {
  return (
    <div className="browser-mockup">
      <div className="browser-bar">
        <span></span>
        <span></span>
        <span></span>
        <div>analitex.ru</div>
      </div>
      <div className="mockup-body">
        <aside className="mockup-sidebar">
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </aside>
        <section className="mockup-main">
          <div className="mockup-title">
            <span>Jason Product</span>
            <strong>₽ 4 532 000</strong>
          </div>
          <div className="chart-card">
            <div className="chart-line"></div>
          </div>
          <div className="mockup-grid">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </section>
        <aside className="mockup-panel">
          <span></span>
          <span></span>
          <span></span>
          <strong></strong>
        </aside>
      </div>
    </div>
  )
}

function LogoBand() {
  return (
    <section className="logo-section" aria-label="Поддерживаемые маркетплейсы">
      <p>Подключается к популярным маркетплейсам и процессам вашей команды</p>
      <div className="logo-row">
        {marketplaces.map((marketplace) => (
          <strong key={marketplace}>{marketplace}</strong>
        ))}
      </div>
    </section>
  )
}

function WorkflowIntro() {
  return (
    <section className="section centered-section" id="features">
      <span className="pill">TWO-COL FEATURES</span>
      <h2>Ускорьте работу с маркетплейсами</h2>
      <p>
        Analitex убирает ручную сборку отчетов и помогает команде принимать решения по прибыли, рекламе, карточкам и остаткам быстрее.
      </p>
    </section>
  )
}

function FeatureStory() {
  return (
    <section className="feature-story" id="cases">
      <div className="story-visual visual-list" aria-hidden="true">
        {customerSegments.map((segment) => (
          <div className="mini-user" key={segment}>
            <span></span>
            <strong>{segment}</strong>
            <i></i>
          </div>
        ))}
        <article className="mini-metric">
          <strong>2 670</strong>
          <span>товаров в работе</span>
        </article>
      </div>
      <div className="story-copy">
        <span className="pill">Simplified Workflows</span>
        <h3>Понятная операционная панель вместо десятков таблиц.</h3>
        <p>
          Подключите кабинеты, загрузите себестоимость и смотрите, какие товары, склады и кампании влияют на реальные деньги.
        </p>
        <ul>
          {workflowSteps.map((step) => (
            <li key={step.title}>{step.title}</li>
          ))}
        </ul>
        <div className="inline-actions">
          <a className="primary-button small" href={links.app}>Стартовать</a>
          <a className="text-link" href="mailto:social@analitex.ru">Связаться</a>
        </div>
      </div>
      <div className="story-copy">
        <span className="pill">AI-Powered Insights</span>
        <h3>Рекомендации, которые объясняют финансовый эффект.</h3>
        <p>
          Сервис показывает, что остановить, где поднять цену, что довезти и какие карточки требуют внимания.
        </p>
        <ul>
          {operatingModules.slice(0, 3).map((module) => (
            <li key={module.title}>{module.title}</li>
          ))}
        </ul>
        <div className="inline-actions">
          <a className="primary-button small" href="#pricing">Тарифы</a>
          <a className="text-link" href="#faq">FAQ</a>
        </div>
      </div>
      <div className="story-visual visual-dashboard" aria-hidden="true">
        <div className="analytics-window">
          <div className="stat-row">
            <span>₽ 870 000</span>
            <span>18,6%</span>
            <span>11 SKU</span>
          </div>
          <div className="bar-chart">
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </div>
          <div className="bottom-widgets">
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="section testimonials-section">
      <h2>Client <span>Testimonials</span></h2>
      <p>Analitex помогает командам видеть прибыль и действовать спокойнее.</p>
      <div className="testimonial-grid">
        {testimonials.map((item) => (
          <article className="testimonial-card" key={item.name}>
            <p>{item.quote}</p>
            <div>
              <span></span>
              <strong>{item.name}</strong>
              <small>{item.role}</small>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function FeatureTiles() {
  return (
    <section className="section tile-section">
      <h2>Все, что нужно, чтобы <span>расти на маркетплейсах</span></h2>
      <p>Собрали ключевые модули в легкую, современную систему для ежедневной работы.</p>
      <div className="tile-grid">
        {featureTiles.map((feature, index) => (
          <article className={index < 2 ? 'feature-tile large' : 'feature-tile'} key={feature.title}>
            <div className="tile-visual"></div>
            <span className="pill">{feature.eyebrow}</span>
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function SupportGrid() {
  return (
    <section className="section support-section">
      <span className="pill">MORE FEATURES</span>
      <h2>Мы закрыли основные задачи</h2>
      <p>
        От экономики до карточек и алертов: сервис помогает держать продажи под контролем без перегруженного интерфейса.
      </p>
      <div className="support-grid">
        {supportFeatures.map((feature) => (
          <article className="support-item" key={feature.title}>
            <span></span>
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function Results() {
  return (
    <section className="section results-section">
      <div className="result-grid">
        {decisionCards.map((card) => (
          <article className={card.featured ? 'result-card featured' : 'result-card'} key={card.title}>
            <span>{card.label}</span>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </article>
        ))}
      </div>
      <div className="stat-strip">
        {heroStats.map((stat) => (
          <article key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
            <em>{stat.trend}</em>
          </article>
        ))}
      </div>
    </section>
  )
}

function Pricing() {
  return (
    <section className="section pricing-section" id="pricing">
      <span className="pill">Pricing</span>
      <h2>Прозрачные планы под ваш масштаб</h2>
      <div className="pricing-grid">
        {pricingPlans.map((plan) => (
          <article className={plan.highlighted ? 'pricing-card highlighted' : 'pricing-card'} key={plan.name}>
            <span>{plan.name}</span>
            <h3>{formatPrice(plan.monthly, false)} ₽</h3>
            <p>{plan.description}</p>
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <a href={links.app}>{plan.highlighted ? 'Попробовать Growth' : 'Выбрать тариф'}</a>
          </article>
        ))}
      </div>
    </section>
  )
}

function Faq() {
  return (
    <section className="section faq-section" id="faq">
      <span className="pill">FAQ</span>
      <h2>Короткие ответы перед демо.</h2>
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

function ClosingCta() {
  return (
    <section className="closing-section" id="demo">
      <h2>Build faster marketplace teams.</h2>
      <p>Подключите Analitex и начните видеть прибыль, рекламу и остатки без ручных отчетов.</p>
      <a className="cta-white-button" href={links.app}>Запросить демо</a>
      <small>
        Нажимая кнопку, вы соглашаетесь с{' '}
        <a href={links.docs.personalDataConsent} target="_blank" rel="noreferrer">согласием на обработку данных</a>
        .
      </small>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <a className="brand" href={links.site} aria-label="Analitex">
          <span className="brand-name">Analitex</span>
          <span className="brand-badge">PRO</span>
        </a>
        <p>Премиальный сервис аналитики продаж и прибыли на маркетплейсах.</p>
        <a href="mailto:social@analitex.ru">social@analitex.ru</a>
      </div>
      <nav aria-label="Футер">
        <a href="#features">Возможности</a>
        <a href="#pricing">Тарифы</a>
        <a href="#faq">FAQ</a>
        <a href={links.app}>Войти в сервис</a>
      </nav>
      <nav aria-label="Документы">
        <a href={links.docs.privacyPolicy} target="_blank" rel="noreferrer">Политика конфиденциальности</a>
        <a href={links.docs.termsOfUse} target="_blank" rel="noreferrer">Пользовательское соглашение</a>
        <a href={links.docs.publicOffer} target="_blank" rel="noreferrer">Публичная оферта</a>
        <a href={links.docs.personalDataConsent} target="_blank" rel="noreferrer">Согласие на обработку данных</a>
      </nav>
      <span>© 2026 Analitex. Все права защищены.</span>
    </footer>
  )
}

export default App
