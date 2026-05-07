const footerGroups = [
  {
    title: 'Платформа',
    links: [
      { label: 'AI-копилот', href: '#automation' },
      { label: 'Юнит-экономика', href: '#platform' },
      { label: 'Прогноз поставок', href: '#automation' },
      { label: 'Тарифы', href: '#pricing' },
    ],
  },
  {
    title: 'Маркетплейсы',
    links: [
      { label: 'Wildberries', href: '#top' },
      { label: 'Ozon', href: '#top' },
      { label: 'Яндекс Маркет', href: '#top' },
      { label: 'Мегамаркет', href: '#top' },
    ],
  },
  {
    title: 'Компания',
    links: [
      { label: 'Демо', href: '#demo' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Партнерство', href: 'mailto:partners@analitex.ai' },
      { label: 'Поддержка', href: 'mailto:support@analitex.ai' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <a className="brand" href="#top" aria-label="Analitex">
            <span className="brand-mark">A</span>
            <span>Analitex</span>
          </a>
          <p>AI-операционная система для селлеров, которым нужна прибыль, а не еще один набор таблиц.</p>
          <a className="footer-mail" href="mailto:demo@analitex.ai">demo@analitex.ai</a>
        </div>
        <div className="footer-links">
          {footerGroups.map((group) => (
            <nav aria-label={group.title} key={group.title}>
              <h3>{group.title}</h3>
              {group.links.map((link) => (
                <a href={link.href} key={link.label}>{link.label}</a>
              ))}
            </nav>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Analitex. Все права защищены.</span>
        <div>
          <a href="#top">Политика конфиденциальности</a>
          <a href="#top">Пользовательское соглашение</a>
        </div>
      </div>
    </footer>
  )
}
