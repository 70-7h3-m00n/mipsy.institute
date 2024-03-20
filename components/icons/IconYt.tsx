import stls from '@/styles/components/icons/IconYt.module.sass'
import classNames from 'classnames'

const IconYt = ({inContacts=false}) => {
  return (
    <span className={classNames({
      [stls.container]: true,
      [stls.red]: inContacts,
    })}>
      <svg viewBox='0 0 16 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <title>YouTube</title>
        <path
          d='M12.4818 0.852051H3.5178C2.0058 0.852051 0.799805 2.07605 0.799805 3.57005V8.41205C0.799805 9.92405 2.0238 11.1301 3.5178 11.1301H12.4818C13.9938 11.1301 15.1998 9.90605 15.1998 8.41205V3.57005C15.1998 2.07605 13.9758 0.852051 12.4818 0.852051ZM6.1098 8.21405V3.78605L9.8898 6.00005L6.1098 8.21405Z'
          fill=''
        />
      </svg>
    </span>
  )
}

export default IconYt
