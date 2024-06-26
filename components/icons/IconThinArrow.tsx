import stls from '@/styles/components/icons/IconThinArrow.module.sass'

const IconThinArrow = () => {
  return (
    <span className={stls.container}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='201'
        height='8'
        viewBox='0 0 201 8'
        fill='none'>
        <path
          d='M200.354 4.35355C200.549 4.15829 200.549 3.84171 200.354 3.64645L197.172 0.464466C196.976 0.269204 196.66 0.269204 196.464 0.464466C196.269 0.659728 196.269 0.976311 196.464 1.17157L199.293 4L196.464 6.82843C196.269 7.02369 196.269 7.34027 196.464 7.53553C196.66 7.7308 196.976 7.7308 197.172 7.53553L200.354 4.35355ZM0 4.5H200V3.5H0V4.5Z'
          fill='#535353'
        />
      </svg>
    </span>
  )
}

export default IconThinArrow
