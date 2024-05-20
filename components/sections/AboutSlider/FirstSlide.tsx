import TagOrange from '@/components/general/TagOrange'
import TagWhite from '@/components/general/TagWhite'
import stls from '@/styles/components/sections/AboutSlider/FirstSlide.module.sass'

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
      <p className={stls.first}><strong style={{"fontWeight": 500}}>Мы – за удобство и практичность!</strong> Поэтому обучение проходит в удобной дистанционной форме с применением современных технологий.</p>
      <p className={stls.second}><strong style={{"fontWeight": 500}}>Мы – за качество! </strong>Поэтому большинство наших преподавателей имеют серьезный опыт научной и практической деятельности в области психологии и способны поделиться со студентами самыми актуальными знаниями.</p>
    </div>
  )
}

export default FirstSlide
