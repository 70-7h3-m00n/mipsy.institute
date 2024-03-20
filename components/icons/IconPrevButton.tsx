import stls from '@/styles/components/icons/IconPrevButton.module.sass'
import classNames from 'classnames'

const IconPrevButton = ({fourtyPx=false, fourtyPxViolet=false}) => {
  return (
    <span className={classNames({
      [stls.container]: true,
      [stls.fourtyPx]: fourtyPx,
      [stls.fourtyPxViolet]: fourtyPxViolet
    })}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='45'
        height='45'
        viewBox='0 0 45 45'
        fill='none'>
        <circle
          cx='20.5882'
          cy='20.5882'
          r='21.1765'
          transform='matrix(-1 0 0 1 43 2)'
          stroke='#F87E1B'
          strokeWidth='1.17647'
        />
        <line
          x1='3.765625'
          y1='23.06743'
          x2='25.5303'
          y2='23.06743'
          stroke='#F87E1B'
          strokeWidth='0.990629'
        />
        <line
          x1='2.577034'
          y1='23.10474'
          x2='9.69242'
          y2='20.17487'
          stroke='#F87E1B'
          strokeWidth='0.990629'
        />
        <line
          y1='-0.495315'
          x2='7.69499'
          y2='-0.495315'
          transform='matrix(-0.824678 -0.38075 -0.38075 0.924678 8.875 26.49243)'
          stroke='#F87E1B'
          strokeWidth='0.990629'
        />
      </svg>
    </span>
  )
}

export default IconPrevButton
