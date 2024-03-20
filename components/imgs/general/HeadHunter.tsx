import stls from '@/styles/components/imgs/general/HeadHunter.module.sass'
import Image from 'next/image'
import pic from '@/public/assets/imgs/general/hhRed.png'

const HeadHunter = ({ width = 101, height = 100 }) => {
  return (
    <div className={stls.container}>
      <Image
        src={pic}
        alt='clip'
        className={stls.img}
        width={width !== 0 && width}
        height={height !== 0 && height}
        placeholder='blur'
        quality={100}
      />
    </div>
  )
}

export default HeadHunter