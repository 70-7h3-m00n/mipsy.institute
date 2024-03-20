import stls from '@/styles/components/btns/BtnFb.module.sass'
import { IconFb } from '@/components/icons'
import classNames from 'classnames'

const BtnFb = ({ dark = false }) => {
  return (
    <button
      className={classNames({ [stls.container]: true, [stls.dark]: dark })}
      aria-label='Facebook'>
      <IconFb />
    </button>
  )
}

export default BtnFb
