import stls from '@/styles/components/imgs/programs/courses/Tass.module.sass'
import Image from 'next/image'
import pic from '@/public/assets/imgs/programs/courses/tass.jpg'

const Tass = ({ width = 0, height = 0 }) => {
  return (
    <div className={stls.container}>
      <Image
        src={pic}
        alt='Тасс'
        className={stls.img}
        width={width !== 0 && width}
        height={height !== 0 && height}
        placeholder='blur'
      />
    </div>
  )
}

export default Tass
