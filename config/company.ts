const company = {
  fullName:
    'Научная автономная некоммерческая организация «Московский институт психологии»',
  shortName: 'НАНО «МИП»',
  name: 'Московский Институт Психологии',
  desc: 'Онлайн-институт психологии',
  about:
    'Московский Институт Психологии за современный подход в образовании. Мы постоянно берем обратную связь от работодателей и каждый месяц адаптируем учебные программы. Это в 12 раз быстрее обновления программы обучения в государственном ВУЗе!',
  tagline:
    'Освойте востребованную профессию психолога или повысьте квалификацию вместе с нами',
  addresses: {
    default: {
      countryCode: 'RU',
      city: 'Москва',
      zip: '115419',
      street: {
        type: 'улица',
        typeShort: 'наб.',
        name: 'Шаболовка',
        door: '34, строение 2'
      },
      room: '14',
      officeNum: '4 подъезд, 1 этаж'
    },
    kz: {
      countryCode: 'KZ',
      city: 'Алматы',
      zip: '050059',
      street: {
        type: 'Проспект',
        typeShort: 'пр.',
        name: 'Аль-Фараби',
        door: '17 Блок 4Б офис 1603', // TODO: figure our better keys
        location: 'БЦ Нурлы-Тау'
      }
    }
  },
  emails: {
    default: {
      href: 'mailto:info@mip.institute',
      val: 'info@mip.institute'
    },
    kz: {
      href: 'mailto:almaty@mip.institute',
      val: 'almaty@mip.institute'
    }
  },
  phoneNumbers: {
    default: {
      city: 'Москва',
      href: 'tel:+7-499-110-86-32',
      val: '+7 (499) 110-86-32',
      contactType: 'Учебный отдел',
      areaServed: ['RU', 'KZ', 'UZ'],
      languages: ['Russian', 'Kazakh', 'Uzbek']
    },
    defaultAlt: {
      city: 'Москва',
      href: 'tel:+7-800-600-29-03',
      val: '+7 (800) 600-29-03',
      contactType: 'Учебный отдел',
      areaServed: ['RU', 'KZ', 'UZ'],
      languages: ['Russian', 'Kazakh', 'Uzbek']
    },
    //добавил для учебного отдела
    studyDivision: {
      city: 'Москва',
      href: 'tel:+7-499-110-82-11',
      val: '+7 (499) 110-82-11',
      contactType: 'Кураторский отдел',
      areaServed: ['RU', 'KZ', 'UZ'],
      languages: ['Russian', 'Kazakh', 'Uzbek']
    },
    kz: {
      city: 'Алматы',
      href: 'tel:+7-727-311-09-11',
      val: '+7 (727) 311-09-11',
      contactType: 'Учебный отдел',
      areaServed: ['RU', 'KZ', 'UZ'],
      languages: ['Russian', 'Kazakh', 'Uzbek']
    },
    kzAlt: {
      city: 'Алматы',
      href: 'tel:+7-771-766-22-20',
      val: '+7 (771) 766-22-20',
      contactType: 'Учебный отдел',
      areaServed: ['RU', 'KZ', 'UZ'],
      languages: ['Russian', 'Kazakh', 'Uzbek']
    },
    kzAlt2: {
      city: 'Алматы',
      href: 'tel:+7-771-766-22-23',
      val: '+7 (771) 766-22-23',
      contactType: 'Учебный отдел',
      areaServed: ['RU', 'KZ', 'UZ'],
      languages: ['Russian', 'Kazakh', 'Uzbek']
    }
  }
}

export default company
