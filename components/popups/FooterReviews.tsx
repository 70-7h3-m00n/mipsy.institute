import stls from '@/styles/components/popups/FooterReviews.module.sass'
import { FormAlpha } from '@/components/forms'
import { BtnClose } from '@/components/btns'
import Link from 'next/link'

const FooterReviews = ({children, href}) => {
  return (
    <div className={stls.container}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
      
    </div>
  )
}

export default FooterReviews