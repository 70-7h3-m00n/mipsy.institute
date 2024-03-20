import stls from '@/styles/components/general/ProsCircle.module.sass'
import { IconLogoAlt, IconBgCircle } from '@/components/icons'

const ProsCircle = () => {
  return (
    <div className={stls.container}>
      <IconBgCircle />
      <div className={stls.center}>
        <IconLogoAlt responsive />
      </div>
      <div className={stls.top}>
        <h3 className={stls.subTitle}>ТОП 5</h3>
        <p className={stls.p}>
          Входим в пятерку лучших по направлению &quot;психология&quot;
        </p>
      </div>
      <div className={stls.right}>
        <h3 className={stls.subTitle}>160 000</h3>
        <p className={stls.p}>минут видео-лекций студийного качества</p>
      </div>
      <div className={stls.bottom}>
        <h3 className={stls.subTitle}>2500+</h3>
        <p className={stls.p}>Студентов уже обучили</p>
      </div>
      <div className={stls.left}>
        <h3 className={stls.subTitle}>Более 70</h3>
        <p className={stls.p}>Преподавателей- практиков</p>
      </div>
    </div>
  )
}

export default ProsCircle
