import stls from '@/styles/components/imgs/programs/courses/Bbc.module.sass'
import Image from 'next/image'
import pic from '@/public/assets/imgs/programs/courses/bbc.png'

const Bbc = ({ width = 0, height = 0 }) => {
  return (
    <div className={stls.container}>
      <Image
        src={pic}
        alt='BBC'
        className={stls.img}
        width={width !== 0 && width}
        height={height !== 0 && height}
        placeholder='blur'
      />
    </div>
  )
}

export default Bbc