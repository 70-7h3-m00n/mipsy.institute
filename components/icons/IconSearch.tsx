import stls from '@/styles/components/icons/IconSearch.module.sass'

const IconSearch = () => {
  return (
    <span className={stls.container}>
      <svg viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <title>Поиск</title>
        <circle
          cx='8.80492'
          cy='8.80541'
          r='7.49047'
          stroke='#C1A5D3'
          strokeWidth='1.25'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M14.0146 14.4043L16.9513 17.3334'
          stroke='#C1A5D3'
          strokeWidth='1.25'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </span>
  )
}

export default IconSearch
