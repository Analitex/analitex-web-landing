export function DashboardPreview() {
  return (
    <div className="dashboard-shell" aria-hidden="true">
      <div className="dash-sidebar">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="dash-main">
        <div className="dash-topline">
          <span>Analitex Command</span>
          <strong>Маржа онлайн +18,6%</strong>
        </div>
        <div className="dash-grid">
          <div className="dash-card wide">
            <span>Чистая прибыль после расходов</span>
            <strong>12,8 млн ₽</strong>
            <div className="line-chart">
              <i></i>
            </div>
          </div>
          <div className="dash-card">
            <span>Скрытые списания</span>
            <strong>1,4 млн ₽</strong>
            <em>найдено</em>
          </div>
          <div className="dash-card">
            <span>Реклама без маржи</span>
            <strong>18%</strong>
            <em>остановить</em>
          </div>
          <div className="ai-feed">
            <span>AI-очередь решений</span>
            <p>Остановите скидку на 8 SKU: оборот растет, но чистая маржа уходит ниже 6%. Перенесите бюджет в кластер с ROI 2,8x.</p>
            <div className="feed-progress"><span></span></div>
          </div>
        </div>
      </div>
    </div>
  )
}
