import stls from '@/styles/components/sections/ThanksForApplication.module.sass'
import IconArrowLeft from '../icons/IconArrowLeft'
import { IconArrowRight } from '../icons'
import IconGratefullPortal from '../icons/IconGratefullPortal'

const ThanksForApplication = () => {
  return (
    <section className={stls.container}>
      <div className={stls.insideContainer}>
        <div className={stls.upperPortalSmall}>
          <IconGratefullPortal medium />
        </div>
        <div className={stls.bottomPortalSmall}>
          <IconGratefullPortal medium />
        </div>
        <div className={stls.bottomPortal}>
          <IconGratefullPortal />
        </div>

        <div className={stls.toHome} onClick={() => {
            window.location.href = '/'
          }}>
          <div className={stls.icon}>
            <IconArrowLeft />
          </div>
          <span className={stls.homespanage}>вернуться на главную</span>
        </div>

        <div className={stls.label}>
          <p>Поздравляем!</p>
        </div>
        <h1 className={stls.title}>Спасибо за заявку</h1>
        <div className={stls.iconArrow}>
          <IconArrowRight />
        </div>
        <div className={stls.content}>
          <p>
            <span>Ваши данные переданы в приемную комиссию,</span> специалист по
            поступлению скоро позвонит вам, а пока… нам есть, что вам сказать
            перед тем, как вы примете окончательное решение стать человеком,
            который будет помогать другим людям.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ThanksForApplication
