type TypeGetCasedRuMonthString = {
  months: number
}

const getCasedRuMonthString = ({ months }: TypeGetCasedRuMonthString) => {
  if (+months === 1) return `${months} Месяц`

  if (+months > 1 && +months < 5) return `${months} Месяца`

  if (+months >= 5) return `${months} Месяцев`

  return ''
}

export default getCasedRuMonthString
