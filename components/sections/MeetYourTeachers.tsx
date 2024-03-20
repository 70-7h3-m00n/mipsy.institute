import stls from '@/styles/components/sections/MeetYourTeachers.module.sass'
import parse from 'html-react-parser'
import { getImageHeight } from '@/helpers/index'
import Wrapper from '@/components/layout/Wrapper'
import PopupTrigger from '@/components/general/PopupTrigger'
import { ImgTeacher } from '@/components/imgs'

const MeetYourTeachers = ({ teachers }) => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <h1 className={stls.title}>Познакомьтесь с вашими наставниками</h1>
        <ul className={stls.teachers}>
          {teachers &&
            teachers.map(teacher => (
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
          <PopupTrigger btn='alpha' cta='getFullList' />
        </div>
      </Wrapper>
    </section>
  )
}

export default MeetYourTeachers
