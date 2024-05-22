const setDateOfEnrollment = (): string => {
  const dateItem = new Date()
  const selectorDate = item => {
    switch (true) {
      case item < new Date(2024, 4, 26):
        return new Date(2024, 4, 25).toLocaleString('ru-RU', {
          day: 'numeric',
          month: 'long'
        })

      case item < new Date(2024, 4, 29):
        return new Date(2024, 4, 28).toLocaleString('ru-RU', {
          day: 'numeric',
          month: 'long'
        })

      case item < new Date(2024, 5, 6):
        return new Date(2024, 5, 5).toLocaleString('ru-RU', {
          day: 'numeric',
          month: 'long'
        })

      case item < new Date(2024, 5, 13):
        return new Date(2024, 5, 12).toLocaleString('ru-RU', {
          day: 'numeric',
          month: 'long'
        })
      case item < new Date(2024, 5, 20):
        return new Date(2024, 5, 19).toLocaleString('ru-RU', {
          day: 'numeric',
          month: 'long'
        })

      case item < new Date(2024, 5, 27):
        return new Date(2024, 5, 26).toLocaleString('ru-RU', {
          day: 'numeric',
          month: 'long'
        })
      case item < new Date(2024, 6, 1):
        return new Date(2024, 5, 30).toLocaleString('ru-RU', {
          day: 'numeric',
          month: 'long'
        })

      case item < new Date(2024, 6, 4):
        return new Date(2024, 6, 3).toLocaleString('ru-RU', {
          day: 'numeric',
          month: 'long'
        })
    }
  }

  return selectorDate(dateItem)
}

export default setDateOfEnrollment

