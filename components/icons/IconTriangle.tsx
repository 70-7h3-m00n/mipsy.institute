import styles from '@/styles/components/icons/IconTriangle.module.sass'

export default function IconTriangle() {
  return (
    <span>
      <svg className={styles.svg}
        width='7'
        height='4'
        viewBox='0 0 7 4'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path d='M0.5 0.5L6.5 0.5L3.77273 3.5L0.5 0.5Z' fill='#6F01C6' />
      </svg>
    </span>
  )
}
