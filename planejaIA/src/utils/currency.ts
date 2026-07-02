export function formatCurrencyMask(value: string): string {
  const digits = value.replace(/\D/g, '')

  if (!digits) {
    return ''
  }

  const number = Number(digits) / 100

  if (isNaN(number)) {
    return ''
  }

  const amount = number.toFixed(2)
  
  return amount
    .replace('.', ',')
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}

export function parseCurrency(value: string): number {
  if (!value || typeof value !== 'string') {
    return 0
  }

  const cleanValue = value
    .replace(/\./g, '')       
    .replace(',', '.')
    .replace(/[^0-9.]/g, '')  

  return parseFloat(cleanValue) || 0
}
