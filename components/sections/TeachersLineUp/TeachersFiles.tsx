import stls from '@/styles/components/sections/TeachersLineUp/TeachersLineUp.module.sass'
import parse from 'html-react-parser'
import { getImageHeight } from '@/helpers/index'
import Wrapper from '@/components/layout/Wrapper'
import { ImgTeacher } from '@/components/imgs'
import { BtnAlpha } from '@/components/btns'
import { useState } from 'react'

const TeachersFiles = ({ teachers }) => {
  const [value, setValue] = useState(4)

  const increaseHandler = () => {
    setValue(prev => prev + 4)
  }

  return (
    <section className={stls.container}>
      <Wrapper>
        <h1 className={stls.title}>Познакомьтесь с вашими наставниками</h1>
        <ul className={stls.teachers}>
          {teachers &&
            teachers.slice(0,value).map(teacher => (
              <li key={teacher.name} className={stls.teacher}>
                <div className={stls.img}>
                  <ImgTeacher
                    src={teacher?.portrait?.url}
                    alt={teacher?.name}
                    width={270}
                    height={getImageHeight({
                      width: 270,
                      widthInitial: teacher?.portrait?.width,
                      heightInitial: teacher?.portrait?.height
                    })}
                  />
                </div>
                <div>
                  <div className={stls.name}>{teacher.name}</div>
                  <div className={stls.bio}>{parse(teacher.achievements)}</div>
                </div>
              </li>
            ))}
        </ul>
        <div className={stls.btn}>
          <button onClick={increaseHandler}>Показать еще</button>
        </div>
      </Wrapper>
    </section>
  )
}

export default TeachersFiles
