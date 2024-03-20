import TagOrange from '@/components/general/TagOrange'
import TagWhite from '@/components/general/TagWhite'
import stls from '@/styles/components/sections/AboutSlider/FirstSlide.module.sass'

type AboutType = {
  standalone?: boolean
}

const FirstSlide = () => {
  return (
    <div className={stls.container}>
      <div className={stls.tagWhite}>
        <TagWhite>Онлайн-институт</TagWhite>
      </div>
      <div className={stls.tagOrange}>
        <TagOrange>МИП</TagOrange>
      </div>
      <h2 className={stls.title}>Об институте</h2>
      <p className={stls.first}>Московский Институт Психологии за современный подход в образовании.</p>
      <p className={stls.second}>Онлайн-институт психологии занимается профессиональной переподготовкой по самым востребованным психологическим направлениям. Мы собрали команду из ведущих преподавателей-практиков и разработали программы обучения, отвечающие международным стандартам в сфере образования.</p>
    </div>
  )
}

export default FirstSlide
