import stls from '@/styles/components/icons/IconBgCircle.module.sass'

const IconBgCircle = () => {
  return (
    <span className={stls.container}>
      <svg viewBox='0 0 365 365' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <rect width='365' height='365' rx='182.5' fill='#F87E1B' />
      </svg>
    </span>
  )
}

export default IconBgCircle
