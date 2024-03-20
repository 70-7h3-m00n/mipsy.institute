import stls from '@/styles/components/imgs/newYearStickyBottom/Iwatch.module.sass'
import Image from 'next/image'
import pic from '@/public/assets/imgs/newYearSticky/iWatch.png'

const Iwatch = ({ width = 210, height = 150 }) => {
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

export default Iwatch