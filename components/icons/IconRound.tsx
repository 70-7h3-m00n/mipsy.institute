import stls from '@/styles/components/icons/IconRound.module.sass'
import classNames from 'classnames'

export default function IconRound({ calpha = false }) {
  return (
    <span
      className={classNames({
        [stls.container]: true,
        [stls.calpha]: calpha
      })}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='37'
        height='37'
        viewBox='0 0 37 37'
        fill='none'>
        <path
          d='M15 19L17.5 21.5L23 16'
          stroke='#F87E1B'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <rect
          x='0.5'
          y='0.5'
          width='36'
          height='36'
          rx='18'
          stroke='#FFCA9E'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </span>
  )
}
