import stls from '@/styles/components/icons/IconDirrection.module.sass'
import classNames from 'classnames'

const IconDirrection = () => {
  return (
    <span
      className={classNames({
        [stls.container]: true,
      })}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='45'
        height='23'
        viewBox='0 0 45 23'
        fill='none'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M11.25 11.4844L0 0.484375L0 22.4844L11.25 11.4844ZM22.5 11.4844L11.25 0.484375V11.4844V22.4844L22.5 11.4844ZM33.75 11.4844L22.5 0.484375V11.4844V22.4844L33.75 11.4844ZM33.75 11.4844V0.484375L45 11.4844L33.75 22.4844V11.4844Z'
          fill='#6F01C6'
        />
      </svg>
    </span>
  )
}

export default IconDirrection
