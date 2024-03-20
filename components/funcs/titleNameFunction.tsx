const titleName = item => {
  switch (item) {
    case '/courses':
      return <>Курсы повышения квалификации для психологов</>
    case '/professions':
      return (
        <>
          Психология. <br /> Профессиональная переподготовка
        </>
      )
    case '/professions/detskaya-psihologiya':
      return (
        <>
          Детская психология. <br /> Профессиональная переподготовка
        </>
      )
    case '/professions/dietologiya-i-nutriciologiya':
      return (
        <>
          Диетология и нутрициология. <br /> Профессиональная переподготовка
        </>
      )
    case '/professions/klinicheskaya-psihologiya':
      return (
        <>
          Клиническая психология. <br /> Профессиональная переподготовка
        </>
      )
    case '/professions/konsultirovanie':
      return (
        <>
          Психологическое консультирование. <br /> Профессиональная
          переподготовка
        </>
      )
    case '/professions/obshaya-psihologiya':
      return (
        <>
          Общая психология. <br /> Профессиональная переподготовка
        </>
      )
    case '/professions/organizacionnaya-psihologiya':
      return (
        <>
          Организационная психология. <br /> Профессиональная переподготовка
        </>
      )
    case '/professions/psihoterapiya':
      return (
        <>
          Психотерапия. <br /> Профессиональная переподготовка
        </>
      )
    case '/programs':
      return <>Курсы психологии</>
    case '/programs/detskaya-psihologiya':
      return <>Курсы по детской психологии</>
    case '/programs/konsultirovanie':
      return <>Курсы психологического консультирования</>
    case '/programs/obshaya-psihologiya':
      return <>Курсы по общей психологии</>
    case '/programs/organizacionnaya-psihologiya':
      return <>Курсы по организационной психологии</>
    case '/programs/psihoterapiya':
      return <>Курсы психотерапии</>
    case '/courses/detskaya-psihologiya':
      return (
        <>
          Детская психология. <br /> Повышение квалификации
        </>
      )
    case '/courses/konsultirovanie':
      return (
        <>
          Психологическое консультирование. <br /> Повышение квалификации
        </>
      )
    case '/courses/obshaya-psihologiya':
      return (
        <>
          Общая психология. <br /> Повышение квалификации
        </>
      )
    case '/courses/organizacionnaya-psihologiya':
      return (
        <>
          Организационная психология. <br /> Повышение квалификации
        </>
      )
    case '/courses/psihoterapiya':
      return (
        <>
          Психологическое консультирование. <br /> Повышение квалификации
        </>
      )
      case '/programs/dietologiya-i-nutriciologiya':
      return (
        <>
          Курсы<br />по диетологии и нутрициологии
        </>
      )
      case '/programs/klinicheskaya-psihologiya':
      return (
        <>
          Курсы <br /> клинической психологии
        </>
      )
    default:
      return 'Программа'
  }
}

export default titleName
