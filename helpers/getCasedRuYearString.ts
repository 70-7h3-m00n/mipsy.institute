type TypeGetCasedRuYearString = {
  years: number
}

const getCasedRuYearString = ({ years }: TypeGetCasedRuYearString) => {
  if (years === 1) return `${years} год`

  if (years > 1 && years < 5) return `${years} года`

  if (years >= 5) return `${years} лет`

  return ''
}

export default getCasedRuYearString
