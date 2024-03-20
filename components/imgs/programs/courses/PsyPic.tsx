import stls from '@/styles/components/imgs/programs/courses/PsyPic.module.sass'
import Image from 'next/image'
import pic from '@/public/assets/imgs/programs/courses/psyPicPng.png'

const PsyPic = ({ width = 0, height = 0 }) => {
  return (
    <div className={stls.container}>
      <Image
        src={pic}
        alt='Psychology'
        className={stls.img}
        width={width !== 0 && width}
        height={height !== 0 && height}
        placeholder='blur'
      />
    </div>
  )
}

export default PsyPic