import stls from '@/styles/components/cards/CardSchedule.module.sass'
import Link from 'next/link'
import cn from 'classnames'
import { routes } from '@/config/index'
import CtaText from '@/components/general/CtaText'
import ImgAllWebinars from '@/components/imgs/webinars/ImgAllWebinars'
import { IconPlayer } from '@/components/icons'

const CardSchedule = ({ mobileLayout = false }) => {
  return (
    <Link href={routes.front.webinars}>
      <a className={stls.linkContainer}>
        <article
          className={cn({
            [stls.container]: true,
            [stls.mobileLayout]: mobileLayout
          })}>
          <div className={stls.img}>
            <ImgAllWebinars />
          </div>
          <div className={stls.content}>
            <div className={stls.circle}>
              <div className={stls.icon}>
                <IconPlayer />
              </div>
            </div>
            <h3 className={stls.title}>Расписание всех&nbsp;вебинаров</h3>
            <div className={stls.btn}>
              <CtaText text='Смотреть все' cnu />
            </div>
          </div>
        </article>
      </a>
    </Link>
  )
}

export default CardSchedule
