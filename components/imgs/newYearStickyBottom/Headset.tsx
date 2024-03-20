import stls from '@/styles/components/imgs/newYearStickyBottom/Headset.module.sass'
import Image from 'next/image'
import pic from '@/public/assets/imgs/newYearSticky/headset.png'

const Headset = ({ width = 290, height = 280 }) => {
  return (
    <div className={stls.container}>
      <Image
        src={pic}
        alt='dzen icon'
        className={stls.img}
        width={width !== 0 && width}
        height={height !== 0 && height}
        // placeholder='blur'
        // layout='fill'
        quality={100}
      />
    </div>
  )
}

export default Headset