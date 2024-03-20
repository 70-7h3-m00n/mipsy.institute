import stls from '@/styles/components/icons/IconArrowUpRound.module.sass'

const IconArrowUpRound = () => {
  return (
    <span className={stls.container}>
      <svg
        width='64'
        height='64'
        viewBox='0 0 68 68'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <rect x='1' y='1' width='66' height='66' rx='33' stroke='#FFD7B6' />
        <path
          d='M34.7071 25.2929C34.3166 24.9024 33.6834 24.9024 33.2929 25.2929L26.9289 31.6569C26.5384 32.0474 26.5384 32.6805 26.9289 33.0711C27.3195 33.4616 27.9526 33.4616 28.3431 33.0711L34 27.4142L39.6569 33.0711C40.0474 33.4616 40.6805 33.4616 41.0711 33.0711C41.4616 32.6805 41.4616 32.0474 41.0711 31.6569L34.7071 25.2929ZM35 42L35 26L33 26L33 42L35 42Z'
          fill='#F87E1B'
        />
      </svg>
    </span>
  )
}

export default IconArrowUpRound
