import stls from '@/styles/components/icons/IconDoc.module.sass'

const IconDoc = () => {
  return (
    <span className={stls.container}>
      <svg viewBox='0 0 20 26' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <title>Документ</title>
        <path
          d='M11.125 1H3.25C2.65326 1 2.08097 1.25286 1.65901 1.70294C1.23705 2.15303 1 2.76348 1 3.4V22.6C1 23.2365 1.23705 23.847 1.65901 24.2971C2.08097 24.7471 2.65326 25 3.25 25H16.75C17.3467 25 17.919 24.7471 18.341 24.2971C18.7629 23.847 19 23.2365 19 22.6V9.4L11.125 1Z'
          stroke='#F87E1B'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M11.125 1V9.4H19'
          stroke='#F87E1B'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </span>
  )
}

export default IconDoc
