import stls from '@/styles/components/icons/IconDocCircle.module.sass'

const IconDocCircle = () => {
  return (
    <span className={stls.container}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='25'
        height='25'
        viewBox='0 0 25 25'
        fill='none'>
        <rect x='0.5' y='0.5' width='24' height='24' rx='12' fill='#6F01C6' />
        <rect
          x='0.5'
          y='0.5'
          width='24'
          height='24'
          rx='12'
          stroke='#6F01C6'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M17.4286 11.2857H14V7.85714H8.85714V18.1429H17.4286V11.2857ZM17.0737 10.4286L14.8571 8.212V10.4286H17.0737ZM8.42857 7H14.8571L18.2857 10.4286V18.5714C18.2857 18.6851 18.2406 18.7941 18.1602 18.8745C18.0798 18.9548 17.9708 19 17.8571 19H8.42857C8.31491 19 8.2059 18.9548 8.12553 18.8745C8.04515 18.7941 8 18.6851 8 18.5714V7.42857C8 7.31491 8.04515 7.2059 8.12553 7.12553C8.2059 7.04515 8.31491 7 8.42857 7ZM10.5714 13H15.7143V13.8571H10.5714V13ZM10.5714 10.4286H12.7143V11.2857H10.5714V10.4286ZM10.5714 15.5714H15.7143V16.4286H10.5714V15.5714Z'
          fill='white'
        />
      </svg>
    </span>
  )
}

export default IconDocCircle
