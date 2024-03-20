import stls from '@/styles/components/imgs/diplomas/ImgSupplement.module.sass'
import Image from 'next/image'
import pic from '@/public/assets/imgs/diplomas/supplement.jpg'

const ImgSupplement = ({ width = null, height = null }) => {
  return (
    <div className={stls.container}>
      <Image
        src={pic}
        alt='Диплом'
        className={stls.img}
        width={width}
        height={height}
        placeholder='blur'
      />
    </div>
  )
}

export default ImgSupplement
