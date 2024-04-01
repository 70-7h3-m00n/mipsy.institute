const setDateOfEnrollment = (): string => {
  const dateItem = new Date()
  const selectorDate = item => {
    switch (true) {
      case item < new Date(2024, 3, 3):
        return new Date(2024, 3, 2).toLocaleString('ru-RU', {
          day: 'numeric',
          month: 'long'
        })

      case item < new Date(2024, 3, 10):
        return new Date(2024, 3, 9).toLocaleString('ru-RU', {
          day: 'numeric',
          month: 'long'
        })

      case item < new Date(2024, 3, 17):
        return new Date(2024, 3, 16).toLocaleString('ru-RU', {
          day: 'numeric',
          month: 'long'
        })

      case item < new Date(2024, 3, 24):
        return new Date(2024, 3, 23).toLocaleString('ru-RU', {
          day: 'numeric',
          month: 'long'
        })

      case item < new Date(2024, 4, 1):
        return new Date(2024, 3, 30).toLocaleString('ru-RU', {
          day: 'numeric',
          month: 'long'
        })

    }
  }

  return selectorDate(dateItem)
}

export default setDateOfEnrollment
