export function DashboardPreview() {
  return (
    <div className="dashboard-shell" aria-hidden="true">
      <div className="dash-sidebar">
        <strong>A</strong>
        <span className="active"></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="dash-main">
        <div className="dash-topline">
          <span>Analitex dashboard</span>
          <strong>Маржа онлайн +18,6%</strong>
        </div>
        <div className="dash-grid">
          <div className="dash-card wide">
            <span>Чистая прибыль</span>
            <strong>12,8 млн ₽</strong>
            <div className="line-chart">
              <b></b>
              <i></i>
            </div>
          </div>
          <div className="dash-card">
            <span>Потери в рекламе</span>
            <strong>1,4 млн ₽</strong>
            <em>найдено</em>
          </div>
          <div className="dash-card">
            <span>Риск дефицита</span>
            <strong>11 SKU</strong>
            <em>поставить</em>
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
