import stls from '@/styles/components/sections/LegalInfo.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import { company } from '@/config/index'

const LegalInfo = () => {
  const listLeft = [
    {
      title: 'Полное наименование организации:',
      content:
        'Научная автономная некоммерческая организация «Московский институт психологии»'
    },
    {
      title: 'Сокращенное наименование образовательной организации:',
      content: 'НАНО «МИП»'
    },
    {
      title: 'Ректор:',
      content: 'Столяренко Марина Ивановна'
    },
    {
      title: 'Информация о месте нахождения образовательной организации:',
      content: (
        <>
          {/* Юридический адрес: 115114, г. Москва, <br /> набережная Дербеневская,
          д.11, пом.13 <br /> */}
          Фактический адрес: {company.addresses.default.zip}, г.{' '}
          {company.addresses.default.city}, <br />{' '}
          {`${company.addresses.default.street.type} ${company.addresses.default.street.name}, д.${company.addresses.default.street.door}`}
          , {company.addresses.default.officeNum}
        </>
      )
    },
    {
      title: 'ИНН организации:',
      content: '9725041321'
    }
  ]
  const listRight = [
    {
      title:
        'Информация о режиме и графике работы образовательной организации:',
      content: 'ПН-ПТ с 10:00 до 19:00 (UTC/GTM + 3ч)'
    },
    {
      title:
        'Информация о контактных телефонах образовательной организации, об адресах электронной почты образовательной организации:',
      content: (
        <>
          Контактный телефон: {company.phoneNumbers.default.val} <br /> Адрес
          электронной почты: {company.emails.default.val}
        </>
      )
    },
    {
      title:
        'Информация о местах осуществления образовательной деятельности, в том числе не указанных в приложении к лицензии (реестре лицензий) на осуществление образовательной деятельности в соответствии с частью 4 статьи 91 Федерального закона от 29.12.2012 №273-ФЗ "Об образовании в Российской Федерации":',
      content: 'Адрес: 115419, Москва, улица Шаболовка, 34с2'
    },
    {
      title: 'ОГРН организации:',
      content: '1207700479260'
    }
  ]
  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>Основные сведения</h2>
        <div className={stls.content}>
          <ul className={stls.listLeft}>
            {listLeft.map(item => (
              <li key={item.title} className={stls.itemLeft}>
                <p className={stls.itemTitle}>{item.title}</p>
                <p className={stls.itemContent}>{item.content}</p>
              </li>
            ))}
          </ul>
          <ul className={stls.listRight}>
            {listRight.map(item => (
              <li key={item.title} className={stls.itemRight}>
                <p className={stls.itemTitle}>{item.title}</p>
                <p className={stls.itemContent}>{item.content}</p>
              </li>
            ))}
          </ul>
        </div>
      </Wrapper>
    </section>
  )
}

export default LegalInfo
