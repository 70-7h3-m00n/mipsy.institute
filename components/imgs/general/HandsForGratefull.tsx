import stls from '@/styles/components/imgs/general/HandsForGratefull.module.sass'
import Image from 'next/image'
import pic from '@/public/assets/imgs/general/handsForGratefull.png'

const HandsForGratefull = ({ width = 300, height = 400 }) => {
  return (
    <div className={stls.container}>
      <Image
        src={pic}
        alt='Девушка за ноутбуком обучается'
        className={stls.img}
        width={width !== 0 && width}
        height={height !== 0 && height}
        placeholder='blur'
      />
    </div>
  )
}

export default HandsForGratefull