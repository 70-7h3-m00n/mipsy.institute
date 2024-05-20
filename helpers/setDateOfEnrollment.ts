const setDateOfEnrollment = (): string => {
  const dateItem = new Date()
  const selectorDate = item => {
    switch (true) {
      case item < new Date(2024, 4, 23):
        return new Date(2024, 4, 22).toLocaleString('ru-RU', {
          day: 'numeric',
          month: 'long'
        })

      case item < new Date(2024, 4, 30):
        return new Date(2024, 4, 29).toLocaleString('ru-RU', {
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

    }
  }

  return selectorDate(dateItem)
}

export default setDateOfEnrollment
