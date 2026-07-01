export function formatCurrencyMask(value: string): string {
  // 1. Remove absolutamente tudo o que não for número
  const digits = value.replace(/\D/g, '')

  if (!digits) {
    return ''
  }

  // 2. Transforma em centavos (ex: "150" vira 1.50)
  const number = Number(digits) / 100

  if (isNaN(number)) {
    return ''
  }

  // 3. Formata manualmente para evitar bugs de cursor do toLocaleString puro no input
  const amount = number.toFixed(2)
  
  // Substitui o ponto por vírgula e aplica os pontos de milhar
  return amount
    .replace('.', ',')
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}

export function parseCurrency(value: string): number {
  if (!value) return 0

  // Remove os pontos de milhar, troca a vírgula decimal por ponto e limpa o R$
  const cleanValue = value
    .replace(/\./g, '')
    .replace(',', '.')
    .replace(/[^0-9.]/g, '') // Garante que só fiquem números e o ponto decimal

  return parseFloat(cleanValue) || 0
}
