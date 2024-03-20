import stls from '@/styles/components/imgs/programs/courses/ImgCourse2.module.sass'
import Image from 'next/image'
import pic from '@/public/assets/imgs/programs/courses/course-2.jpg'

const ImgCourse2 = ({ width = 676, height = 0 }) => {
  return (
    <div className={stls.container}>
      <Image
        src={pic}
        alt='Курс 2'
        className={stls.img}
        width={width !== 0 && width}
        height={height !== 0 && height}
        placeholder='blur'
      />
    </div>
  )
}

export default ImgCourse2
