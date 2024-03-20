const setDateOfEnrollment = (): string => {
  const dateItem = new Date()
  const selectorDate = item => {
    switch (true) {
      case item < new Date(2024, 1, 1):
        return new Date(2024, 0, 31).toLocaleString('ru-RU', {
          day: 'numeric',
          month: 'long'
        })

      case item < new Date(2024, 1, 7):
        return new Date(2024, 1, 6).toLocaleString('ru-RU', {
          day: 'numeric',
          month: 'long'
        })

      case item < new Date(2024, 1, 14):
        return new Date(2024, 1, 13).toLocaleString('ru-RU', {
          day: 'numeric',
          month: 'long'
        })

      case item < new Date(2024, 1, 21):
        return new Date(2024, 1, 20).toLocaleString('ru-RU', {
          day: 'numeric',
          month: 'long'
        })

      case item < new Date(2024, 1, 29):
        return new Date(2024, 1, 28).toLocaleString('ru-RU', {
          day: 'numeric',
          month: 'long'
        })

      case item < new Date(2024, 2, 1):
        return new Date(2024, 1, 29).toLocaleString('ru-RU', {
          day: 'numeric',
          month: 'long'
        })

      case item < new Date(2024, 2, 13):
        return new Date(2024, 2, 12).toLocaleString('ru-RU', {
          day: 'numeric',
          month: 'long'
        })

      case item < new Date(2024, 2, 20):
        return new Date(2024, 2, 19).toLocaleString('ru-RU', {
          day: 'numeric',
          month: 'long'
        })

      case item < new Date(2024, 2, 27):
        return new Date(2024, 2, 26).toLocaleString('ru-RU', {
          day: 'numeric',
          month: 'long'
        })
    }
  }

  return selectorDate(dateItem)
}

export default setDateOfEnrollment
