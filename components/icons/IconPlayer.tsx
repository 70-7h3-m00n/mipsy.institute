import stls from '@/styles/components/icons/IconPlayer.module.sass'

const IconPlayer = () => {
  return (
    <span className={stls.container}>
      <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <title>Плей</title>
        <path
          d='M21 0H3C1.35 0 0 1.35 0 3V21C0 22.65 1.35 24 3 24H21C22.65 24 24 22.65 24 21V3C24 1.35 22.65 0 21 0ZM22 21C22 21.55 21.55 22 21 22H3C2.45 22 2 21.55 2 21V3C2 2.45 2.45 2 3 2H21C21.55 2 22 2.45 22 3V21ZM17.53 11.15L9.53 6.15C9.22 5.96 8.83 5.95 8.52 6.12C8.2 6.3 8 6.64 8 7V17C8 17.36 8.2 17.7 8.52 17.88C8.67 17.96 8.83 18 9 18C9.18 18 9.37 17.95 9.53 17.85L17.53 12.85C17.82 12.66 18 12.34 18 12C18 11.66 17.82 11.34 17.53 11.15ZM10 15.2V8.8L15 12L10 15.2Z'
          fill='#fff'
        />
      </svg>
    </span>
  )
}

export default IconPlayer
