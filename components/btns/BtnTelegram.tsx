import stls from '@/styles/components/btns/BtnTelegram.module.sass'
import { routes } from '@/config/index'
import classNames from 'classnames'
import { IconTelegram } from '@/components/icons'

const BtnTelegram = ({ dark = false }) => {
  return (
    <a
      className={classNames({
        [stls.container]: true,
        [stls.dark]: dark
      })}
      href={routes.external.telegram}
      target='_blank'
      rel='noopener noreferrer'
      aria-label='Telegram'>
      <IconTelegram />
    </a>
  )
}

export default BtnTelegram
