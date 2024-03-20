function getSeoTitle(ofType, curProgramsStudyFieldSlug, studyFieldLabel) {
  switch (`${ofType}/${curProgramsStudyFieldSlug}`) {

    //detskaya-psihologiya
    case 'course/detskaya-psihologiya':
      return `${studyFieldLabel}: онлайн-курсы повышения квалификации от МИП`;
    case 'profession/detskaya-psihologiya':
      return 'Детская психология: профессиональная переподготовка онлайн'
    case 'undefined/detskaya-psihologiya':
      return 'Курсы по детской психологии онлайн | МИП'
    
    //konsultirovanie

    case 'course/konsultirovanie':
      return `Психологическое консультирование: онлайн-курсы повышения квалификации`;
    case 'profession/konsultirovanie':
      return 'Психологическое консультирование: профессиональная переподготовка онлайн'
    case 'undefined/konsultirovanie':
      return 'Курсы психологического консультирования онлайн | МИП'

      //obshaya-psihologiya

    case 'course/obshaya-psihologiya':
      return `Общая психология: дистанционные курсы повышения квалификации`;
    case 'profession/obshaya-psihologiya':
      return 'Общая психология: профессиональная переподготовка онлайн'
    case 'undefined/obshaya-psihologiya':
      return 'Курсы по общей психологии онлайн | МИП'

    //organizacionnaya-psihologiya

    case 'course/organizacionnaya-psihologiya':
      return `Организационная психология: онлайн-курсы повышения квалификации`;
    case 'profession/organizacionnaya-psihologiya':
      return 'Организационная психология: профессиональная переподготовка онлайн'
    case 'undefined/organizacionnaya-psihologiya':
      return 'Курсы по организационной психологии онлайн | МИП'

    case 'course/psihoterapiya':
      return `Психотерапия: онлайн-курсы повышения квалификации`;
    case 'profession/psihoterapiya':
      return 'Психотерапия: профессиональная переподготовка онлайн'
    case 'undefined/psihoterapiya':
      return 'Курсы обучения психотерапии онлайн | МИП'

    case 'profession/dietologiya-i-nutriciologiya':
      return 'Диетология и нутрициология: профпереподготовка онлайн'
    case 'undefined/dietologiya-i-nutriciologiya':
      return 'Диетология и нутрициология | Все направления | Московский Институт Психологии'

    case 'profession/klinicheskaya-psihologiya':
      return 'Клиническая психология: профессиональная переподготовка онлайн'
    case 'undefined/klinicheskaya-psihologiya':
      return 'Клиническая психология | Все направления | Московский Институт Психологии'

    default:
      return (
        ofType === 'course'
          ? 'Курсы повышения квалификации для психологов онлайн | МИП'
          : ofType === 'profession'
          ? 'Профессиональная переподготовка для психологов онлайн | МИП'
          : 'Курсы по психологии онлайн | Московский Институт Психологии'
      );
  }
}

export default getSeoTitle