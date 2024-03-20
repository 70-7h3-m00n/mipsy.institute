import stls from '@/styles/components/imgs/diplomas/ImgDiploma.module.sass'
import Image from 'next/image'
import pic from '@/public/assets/imgs/diplomas/diploma.jpg'

const ImgDiploma = ({ width = null, height = null }) => {
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

export default ImgDiploma
