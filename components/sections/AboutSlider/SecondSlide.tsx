import stls from '@/styles/components/sections/AboutSlider/SecondSlide.module.sass'

type AboutType = {
  standalone?: boolean
}

const SecondSlide = () => {
  return (
    <div className={stls.container}>
      <p className={stls.title}>Наша главная цель –</p>
      <p className={stls.first}>дать возможность каждому получить новую профессию в удобном формате дистанционно. Сформировать сообщество высококвалифицированных специалистов, владеющих современными техниками консультирования.</p>
      <p className={stls.second}>Программы института включают в себя насыщенный теоретический и объемный практический блоки. В процессе системного обучения вы не только получите научную базу, но и научитесь эффективно применять полученные навыки и искусно использовать весь психологический инструментарий в работе с клиентами</p>
    </div>
  )
}

export default SecondSlide