import stls from '@/styles/components/imgs/newYearStickyBottom/Phone.module.sass'
import Image from 'next/image'
import pic from '@/public/assets/imgs/newYearSticky/phone.png'

const Phone = ({ width = 120, height = 120 }) => {
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

export default Phone