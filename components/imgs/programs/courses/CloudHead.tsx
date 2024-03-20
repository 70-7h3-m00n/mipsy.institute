import stls from '@/styles/components/imgs/programs/CloudHead.module.sass'
import Image from 'next/image'
import pic from '@/public/assets/imgs/programs/courses/cloudHead.png'

const CloudHead = ({ width = 0, height = 0 }) => {
  return (
    <div className={stls.container}>
      <Image
        src={pic}
        alt='Курс 1'
        className={stls.img}
        width={width !== 0 && width}
        height={height !== 0 && height}
        placeholder='blur'
      />
    </div>
  )
}

export default CloudHead