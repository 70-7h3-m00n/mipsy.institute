import stls from '@/styles/components/imgs/general/HandsOnMain.module.sass'
import Image from 'next/image'
import pic from '@/public/assets/imgs/general/handsOnMain.png'

const HandsOnMain = ({ width = 594, height = 677 }) => {
  return (
    <div className={stls.container}>
      <Image
        src={pic}
        alt='hands on main'
        className={stls.img}
        width={width !== 0 && width}
        height={height !== 0 && height}
        placeholder='blur'
        quality={100}
      />
    </div>
  )
}

export default HandsOnMain