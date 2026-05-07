import './App.css'

function App() {
  return (
    <main className="coming-soon-page">
      <section className="coming-soon-banner" aria-labelledby="coming-soon-title">
        <span className="eyebrow">Мы скоро откроемся</span>
        <p>
          Простой и понятный сервис оцифровки продаж на маркетплейсах для менеджеров, которые хотят видеть цифры и расти без лишнего шума.
        </p>
        <div className="contact-links" aria-label="Контакты Analitex">
          <a className="contact-link" href="mailto:social@analitex.ru">social@analitex.ru</a>
          <a className="telegram-link" href="https://t.me/analitex_news" target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M21.7 4.2 18.4 20c-.2 1.1-.9 1.4-1.8.9l-5-3.7-2.4 2.3c-.3.3-.5.5-1 .5l.4-5.1 9.3-8.4c.4-.4-.1-.6-.6-.3L5.8 13.4.9 11.8c-1.1-.3-1.1-1.1.2-1.6l19.2-7.4c.9-.4 1.7.2 1.4 1.4Z" />
            </svg>
            Telegram
          </a>
        </div>
      </section>
    </main>
  )
}

export default App
