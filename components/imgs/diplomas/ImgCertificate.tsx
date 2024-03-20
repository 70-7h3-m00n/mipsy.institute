import stls from '@/styles/components/imgs/diplomas/ImgCertificate.module.sass'
import Image from 'next/image'
import pic from '@/public/assets/imgs/diplomas/certificate.jpg'

const ImgCertificate = ({ width = 0, height = 0 }) => {
  return (
    <span className={stls.container}>
      <Image
        src={pic}
        alt='Сертификат'
        className={stls.img}
        width={width !== 0 && width}
        height={height !== 0 && height}
        placeholder='blur'
      />
    </span>
  )
}

export default ImgCertificate
