import stls from '@/styles/components/icons/IconCurveLineReview.module.sass'
import classNames from 'classnames'

const IconCurveLineReview = ({height=241, width=517, left=0}) => {
  return (
    <span
      className={classNames({
        [stls.container]: true
      })}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={width}
        height={height}
        viewBox={`${left} 0 ${width} ${height}`}
        fill='#FBF4FF'>
        <path
          id='my_path'
          d='M-15 238C-15 238 2.53666 130.085 51.6589 90.2328C106.632 45.6342 168.181 108.638 230.641 62.3621C293.1 16.0862 305.697 82.3448 403.849 62.3621C502 42.3793 502 -6 502 -6'
          stroke='#6F01C6'
          strokeWidth='25'
        />
        <text>
          <textPath
            className={stls.text}
            startOffset='10px'
            method='stretch'
            // textAnchor='end'
            baselineShift='-4px'
            style={{ fontWeight: 500 }}
            href='#my_path'>
              <animate attributeName="startOffset" from="-70px" to="61px" begin="0s" dur="40s" repeatCount="indefinite"></animate>
            рейтинг отзывы рейтинг отзывы рейтинг отзывы рейтинг отзывы рейтинг
            отзывы рейтинг отзывы рейтинг отзывы рейтинг отзывы 
          </textPath>
        </text>
      </svg>
    </span>
  )
}

export default IconCurveLineReview
