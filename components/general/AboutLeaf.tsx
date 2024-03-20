import stls from '@/styles/components/general/AboutLeaf.module.sass'

const AboutLeaf = () => {
  return (
    <div className={stls.container}>
      <h2 className={stls.title}>Об институте</h2>
      <p className={stls.p}>
        Московский Институт Психологии за современный подход в образовании
      </p>
      <p className={stls.p}>
        Наша цель - создать комфортную среду обучения и предоставить слушателям
        самые актуальные и полезные теоретические и практические знания на
        программах профессиональной переподготовки, повышений квалификации и
        курсах Life
      </p>
      <p className={stls.lastP}>
        Мы собрали{' '}
        <span className={stls.highlight}>
          большое количество преподавателей-практиков
        </span>
        , которые являются настоящими экспертами в области психологии
      </p>
    </div>
  )
}

export default AboutLeaf
