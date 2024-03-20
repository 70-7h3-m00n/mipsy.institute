const getCasesRuProfessionString = (professionsQty: number) => {
  const num = professionsQty % 10

  if (professionsQty === 0) return 'профессий'

  if (professionsQty === 1) return 'профессия'

  if (professionsQty > 1 && professionsQty < 5) return 'профессии'

  if (professionsQty >= 5 && professionsQty < 20) return 'профессий'

  if (professionsQty > 20 && num === 0) return 'профессий'

  if (professionsQty > 20 && num === 1) return 'профессия'

  if (professionsQty > 20 && num > 1 && num < 5) return 'профессии'

  if (professionsQty > 20 && num >= 5) return 'профессий'

  return ''
}

export default getCasesRuProfessionString
