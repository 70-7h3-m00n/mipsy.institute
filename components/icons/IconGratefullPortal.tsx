import stls from '@/styles/components/icons/IconGratefullPortal.module.sass'
import classNames from 'classnames'

const IconGratefullPortal = ({ large=false, medium=false, small=false, xsmall=false, fiftyPx=false, thirtyPx=false, isViolet=false, tenPx=false}) => {
  return (
    <span className={classNames({
      [stls.container]: true,
      [stls.isViolet]: isViolet,
      [stls.large]: large,
      [stls.medium]: medium,
      [stls.small]: small,
      [stls.xsmall]: xsmall,
      [stls.fiftyPx]: fiftyPx,
      [stls.thirtyPx]: thirtyPx,
      [stls.tenPx]: tenPx,
    })}>
      <svg
        width='75'
        height='74'
        viewBox='0 0 75 74'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M9.63143 73.6754C25.0811 53.3384 21.2149 24.3426 0.954407 8.83488C21.2601 24.3772 50.3442 20.485 65.9152 0.141879C50.4652 20.4786 54.3317 49.4746 74.5922 64.9824C54.2862 49.4398 25.2024 53.3322 9.63143 73.6754Z'
          fill='#EDD7FF'
        />
      </svg>
    </span>
  )
}

export default IconGratefullPortal
