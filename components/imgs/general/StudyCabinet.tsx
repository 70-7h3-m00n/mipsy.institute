import stls from '@/styles/components/imgs/general/StudyCabinet.module.sass'
import Image from 'next/image'
import pic from '@/public/assets/imgs/general/studyCabinet.png'

const StudyCabinet = ({ width = 585, height = 595 }) => {
  return (
    <div className={stls.container}>
      <Image
        src={pic}
        alt='кабинет'
        className={stls.img}
        width={width !== 0 && width}
        height={height !== 0 && height}
        placeholder='blur'
      />
    </div>
  )
}

export default StudyCabinet