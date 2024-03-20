import stls from '@/styles/components/imgs/general/ResumeDiplomas.module.sass'
import Image from 'next/image'
import pic from '@/public/assets/imgs/general/resumeDiplomas.png'

const ResumeDiplomas = ({ width = 390, height = 290 }) => {
  return (
    <div className={stls.container}>
      <Image
        src={pic}
        alt='Дипломы после обучения'
        className={stls.img}
        width={width !== 0 && width}
        height={height !== 0 && height}
        placeholder='blur'
      />
    </div>
  )
}

export default ResumeDiplomas