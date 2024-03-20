import stls from '@/styles/components/imgs/diplomas/ImgDiplomaAlt.module.sass'
import Image from 'next/image'
import pic from '@/public/assets/imgs/diplomas/diploma-alt.jpg'

const ImgDiplomaAlt = ({ width = null, height = null }) => {
  return (
    <span className={stls.container}>
      <Image
        src={pic}
        alt='Диплом'
        className={stls.img}
        width={width}
        height={height}
        placeholder='blur'
      />
    </span>
  )
}

export default ImgDiplomaAlt
