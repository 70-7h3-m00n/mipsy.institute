import stls from '@/styles/components/icons/IconNewYearCircle.module.sass'
import classNames from 'classnames'

const IconNewYearCircle = ({small=false}) => {
  return (
    <span className={classNames({ [stls.container]: true, [stls.small]: small })}>
      <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
  <path d="M4.52503 0.0180208C-1.26039 -0.444246 -1.53703 8.13626 3.91918 8.59853C9.62778 9.08869 10.4911 0.317968 4.52503 0.0180208Z" fill="#6B68C6"/>
</svg>
    </span>
  )
}

export default IconNewYearCircle