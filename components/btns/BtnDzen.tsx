import stls from '@/styles/components/btns/BtnDzen.module.sass'
import { IconFb } from '@/components/icons'
import classNames from 'classnames'
import routes from '@/config/routes'
import Dzen from '../imgs/general/Dzen'

const BtnDzen = () => {
  return (
    <a
      className={stls.container}
      href={routes.external.dzen}
      target='_blank'
      rel='noopener noreferrer'
      aria-label='Dzen'>
      <Dzen />
    </a>
  )
}

export default BtnDzen