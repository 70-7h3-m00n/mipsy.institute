import stls from '@/styles/components/btns/BtnDelta.module.sass'
import Link from 'next/link'

const BtnDelta = ({ text = '', href = null }) => {
  if (!href) return <button className={stls.container}>{text}</button>
  if (href)
    return (
      <Link href={href}>
        <a className={stls.container}>{text}</a>
      </Link>
    )
}

export default BtnDelta
