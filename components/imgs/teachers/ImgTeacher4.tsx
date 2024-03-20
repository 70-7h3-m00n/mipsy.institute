import stls from '@/styles/components/imgs/teachers/ImgTeacher4.module.sass'
import Image from 'next/image'
import pic from '@/public/assets/imgs/teachers/teacher-4.jpg'

const ImgTeacher4 = ({ name, width = 0, height = 0 }) => {
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

export default ImgTeacher4
