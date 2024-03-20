import stls from '@/styles/components/icons/IconPrevButton.module.sass'
import classNames from 'classnames'

const IconNextButton = ({fourtyPx=false, fourtyPxViolet=false}) => {
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
          y1='-0.495315'
          x2='22.7647'
          y2='-0.495315'
          transform='matrix(-1 0 0 1 42 23.8)'
          stroke='#F87E1B'
          strokeWidth='0.990629'
        />
        <line
          y1='-0.595315'
          x2='7.69499'
          y2='-0.445315'
          transform='matrix(-0.924678 -0.38075 -0.38075 0.924678 41.7 24)'
          
          stroke='#F87E1B'
          strokeWidth='0.990629'
        />
        <line
          x1='14.8364'
          y1='26.03443'
          x2='21.9518'
          y2='23.18456'
          transform='translate(19.8)'
          stroke='#F87E1B'
          strokeWidth='0.990629'
        />
      </svg>
    </span>
  )
}

export default IconNextButton
