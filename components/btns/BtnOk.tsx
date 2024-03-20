import stls from '@/styles/components/btns/BtnOk.module.sass'
import { routes } from '@/config/index'
import { IconOk } from '@/components/icons'
import classNames from 'classnames'

const BtnOk = ({ dark = false }) => {
  return (
    <a
      className={classNames({ [stls.container]: true, [stls.dark]: dark })}
      href={routes.external.ok}
      target='_blank'
      rel='noopener noreferrer'
      aria-label='Одноклассники'>
      <IconOk />
    </a>
  )
}

export default BtnOk
