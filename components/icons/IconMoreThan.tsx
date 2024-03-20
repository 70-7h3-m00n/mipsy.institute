import stls from '@/styles/components/icons/IconMoreThan.module.sass'
import classNames from 'classnames'

const IconMoreThan = ({
  small = false,
  cbeta = true,
  cnu = false,
  ctheta = false,
  dimmer = false
}) => {
  if (cnu === true) cbeta = false
  return (
    <span
      className={classNames({
        [stls.container]: true,
        [stls.small]: small,
        [stls.cbeta]: cbeta,
        [stls.cnu]: cnu,
        [stls.ctheta]: ctheta,
        [stls.dimmer]: dimmer
      })}>
      <svg viewBox='0 0 6 9' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <title>Далее</title>
        <path
          d='M1 0.5L5 4.5L1 8.5'
          stroke='#F87E1B'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </span>
  )
}

export default IconMoreThan
