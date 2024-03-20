import stls from '@/styles/components/imgs/teachers/ImgTeacher3.module.sass'
import Image from 'next/image'
import pic from '@/public/assets/imgs/teachers/teacher-3.jpg'

const ImgTeacher3 = ({ name, width = 0, height = 0 }) => {
  return (
    <div className={stls.container}>
      <Image
        src={pic}
        alt={name}
        className={stls.img}
        width={width !== 0 && width}
        height={height !== 0 && height}
        placeholder='blur'
      />
    </div>
  )
}

export default ImgTeacher3
