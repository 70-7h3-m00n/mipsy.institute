import stls from '@/styles/components/imgs/general/Horn.module.sass'
import Image from 'next/image'
import pic from '@/public/assets/imgs/general/horn.png'

const Horn = ({ width = 569, height = 317 }) => {
  return (
    <div className={stls.container}>
      <Image
        src={pic}
        alt='Горн'
        className={stls.img}
        width={width !== 0 && width}
        height={height !== 0 && height}
        placeholder='blur'
      />
    </div>
  )
}

export default Horn
