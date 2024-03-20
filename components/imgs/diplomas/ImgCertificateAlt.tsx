import stls from '@/styles/components/imgs/diplomas/ImgCertificateAlt.module.sass'
import Image from 'next/image'
import pic from '@/public/assets/imgs/diplomas/certificate-alt.jpg'

const ImgCertificateAlt = ({ width = 0, height = 0 }) => {
  return (
    <span className={stls.container}>
      <Image
        src={pic}
        alt='Удостоверение'
        className={stls.img}
        width={width !== 0 && width}
        height={height !== 0 && height}
        placeholder='blur'
      />
    </span>
  )
}

export default ImgCertificateAlt
