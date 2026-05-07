const ANNUAL_PRICE_MULTIPLIER = 0.82

export function formatPrice(price: number, annual: boolean) {
  const finalPrice = annual ? Math.round(price * ANNUAL_PRICE_MULTIPLIER) : price
  return new Intl.NumberFormat('ru-RU').format(finalPrice)
}

export function getAnnualSavingsPercent() {
  return Math.round((1 - ANNUAL_PRICE_MULTIPLIER) * 100)
}
