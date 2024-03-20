const getCasesRuCourseString = (coursesQty: number) => {
  const num = coursesQty % 10

  if (coursesQty === 0) return 'курсов'

  if (coursesQty === 1) return 'курс'

  if (coursesQty > 1 && coursesQty < 5) return 'курса'

  if (coursesQty >= 5 && coursesQty < 20) return 'курсов'

  if (coursesQty > 20 && num === 0) return 'курсов'

  if (coursesQty > 20 && num === 1) return 'курс'

  if (coursesQty > 20 && num > 1 && num < 5) return 'курса'

  if (coursesQty > 20 && num >= 5) return 'курсов'

  return ''
}

export default getCasesRuCourseString
