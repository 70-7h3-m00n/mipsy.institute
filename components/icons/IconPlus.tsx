import stls from '@/styles/components/icons/IconPlus.module.sass'

const IconPlus = () => {
  return (
    <span className={stls.container}>
      <svg viewBox='0 0 39 39' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <title>Открыть</title>
        <circle cx='19.5' cy='19.5' r='19.5' fill='#FBF4FF' />
        <line x1='19.5' y1='13' x2='19.5' y2='26' stroke='#6F01C6' />
        <line x1='26' y1='19.5' x2='13' y2='19.5' stroke='#6F01C6' />
      </svg>
    </span>
  )
}

export default IconPlus
