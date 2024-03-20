import stls from '@/styles/components/sections/Diplomas.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import DiplomaExpandableItem from '@/components/general/DiplomaExpandableItem'
import {
  ImgDiploma,
  ImgDiplomaAlt,
  ImgSupplement,
  ImgCertificate,
  ImgCertificateAlt
} from '@/components/imgs'

const Diplomas = () => {
  const list = [
    {
      title: 'Профессия',
      diplomas: [
        {
          image: <ImgDiploma />,
          title: 'Диплом института'
        },
        { image: <ImgDiplomaAlt />, title: 'Диплом установленного образца' },
        { image: <ImgSupplement />, title: 'Саплемент' }
      ]
    },
    {
      title: 'Курс',
      diplomas: [
        {
          image: <ImgCertificate />,
          title: 'Сертификат института'
        },
        {
          image: <ImgCertificateAlt />,
          title: 'Удостоверение института'
        }
      ]
    }
  ]
  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>
          Выдаваемые дипломы <br />и сертификаты
        </h2>
        <p className={stls.p}>
          Мы производим обучение на основании государственной лицензии №041363
          от 14.04.21 (Номер в электронном реестре лицензий - Л035-01298-77/00180046). После окончания обучения в Московском Институте
          Психологии Вы получите диплом о профессиональной переподготовке
          установленного образца Государством с присвоением соответствующей
          квалификацией, дополнительный диплом от МИПа в формате А4 и
          международный диплом Supplement, которые можно добавить в портфолио
          психолога или предоставить работодателю
        </p>
        <ul className={stls.list}>
          {list.map((item, idx) => (
            <DiplomaExpandableItem
              key={item.title + idx}
              title={item.title}
              diplomas={item.diplomas}
              idx={idx}
            />
          ))}
        </ul>
      </Wrapper>
    </section>
  )
}

export default Diplomas
