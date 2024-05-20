import stls from '@/styles/components/sections/AboutSlider/SecondSlide.module.sass'

type AboutType = {
  standalone?: boolean
}

const SecondSlide = () => {
  return (
    <div className={stls.container}>
      <p className={stls.title}>Мы – за надежность!</p>
      <p className={stls.first}> Поэтому большинство наших преподавателей имеют серьезный опыт научной и практической деятельности в области психологии и способны поделиться со студентами самыми актуальными знаниями.</p>
      <p className={stls.second}><strong style={{"fontWeight": 500}}>Мы – за ваш успех!</strong> Поэтому все наши программы соответствуют образовательным стандартам, включают не только теорию, но и объемный практический блок, чтобы после окончания обучения наши выпускники сразу и уверенно могли применять полученные знания в работе.</p>
    </div>
  )
}

export default SecondSlide