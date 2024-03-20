import stls from '@/styles/components/icons/IconBlackFridayStar.module.sass'
import classNames from 'classnames'

const IconBlackFridayStar = ({twentyPx=false}) => {
  return (
    <span className={classNames({
      [stls.container]: true,
      [stls.twentyPx]:twentyPx
    })}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='35'
        height='35'
        viewBox='0 0 35 35'
        fill='none'>
        <path
          d='M25.7934 0.861328L23.2465 15.7251L34.4735 25.7934L19.6095 23.2472L9.54114 34.4743L12.0874 19.6102L0.861337 9.54145L15.7244 12.0881L25.7934 0.861328Z'
          fill='#FFEA2C'
        />
      </svg>
    </span>
  )
}

export default IconBlackFridayStar
