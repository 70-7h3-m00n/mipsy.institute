import stls from '@/styles/components/imgs/general/ForPopup.module.sass'
import Image from 'next/image'
import pic from '@/public/assets/imgs/general/forPopup.png'
import { base64pixel } from '@/config/index'

const ForPopup = ({ src, alt, width = 135, height = 117 }) => {
  return (
    // <div className={stls.container}>
      <Image
        src={src}
        alt={alt}
        className={stls.img}
        width={width !== 0 && width}
        height={height !== 0 && height}
        placeholder='blur'
        blurDataURL={base64pixel}
        quality={100}
      />
    // {/* </div> */}
  )
}

export default ForPopup