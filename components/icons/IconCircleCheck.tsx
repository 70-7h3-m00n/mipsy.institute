import stls from '@/styles/components/icons/IconCircleCheck.module.sass'
import classNames from 'classnames'

const IconCircleCheck = ({ calpha = false, inverse = false, violetRound=false, violetItems=false, 
onMain=false}) => {
  return (
    <span
      className={classNames({
        [stls.container]: true,
        [stls.calpha]: calpha,
        [stls.inverse]: inverse,
        [stls.violetRound]: violetRound,
        [stls.violetItems]: violetItems,
        [stls.onMain]: onMain
      })}>
      <svg viewBox='-1 -0.5 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <title>Галочка</title>
        <path
          d='M8.10815 10.2701L9.45951 11.6214L12.4325 8.64844'
          stroke='#F87E1B'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <rect
          x='0.5'
          y='0.5'
          width='19'
          height='19'
          rx='9.5'
          stroke='#FEF2E8'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </span>
  )
}

export default IconCircleCheck
