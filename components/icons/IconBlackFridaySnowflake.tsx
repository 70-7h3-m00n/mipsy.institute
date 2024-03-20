import stls from '@/styles/components/icons/IconBlackFridaySnowflake.module.sass'
import classNames from 'classnames'

const IconBlackFridaySnowflake = ({twentyPx=false}) => {
  return (
    <span className={classNames({
      [stls.container]: true,
      [stls.twentyPx]:twentyPx
    })}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='8'
        height='9'
        viewBox='0 0 8 9'
        fill='none'>
        <path
          d='M3.82071 0.652344L3.8462 4.55299L7.23712 2.62489L3.87189 4.59744L7.23712 6.56977L3.8462 4.64167L3.82071 8.54232L3.79522 4.64167L0.404297 6.56977L3.76952 4.59744L0.404297 2.62489L3.79522 4.55299L3.82071 0.652344Z'
          stroke='white'
          strokeWidth='0.631889'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </span>
  )
}

export default IconBlackFridaySnowflake
