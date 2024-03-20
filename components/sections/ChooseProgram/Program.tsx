import PopupProgram from '@/components/popups/PopupProgram'
import routes from '@/config/routes'
import { ContextStaticProps } from '@/context/index'
import filterProgramsByStudyField from '@/helpers/filterProgramsByStudyField'
import styles from '@/styles/components/sections/ChooseProgram/Program.module.sass'
import Link from 'next/link'
import { useContext, useState } from 'react'
import Popup from 'reactjs-popup'
import classNames from 'classnames'
import ProgramMobile from './ProgramMobile'
import IconTriangle from '@/components/icons/IconTriangle'

const Program = ({ setHoveredSlug, slug, label, href, ofType, index, setOpenListIndex, openListIndex }) => {
  // const handleMouseEnter = () => {
  //   setHoveredSlug(slug)
  // }

  const {
    courses,
    professions,
  } = useContext(ContextStaticProps)

  // const [openCardIndex, setOpenCardIndex] = useState(-1);

  const coursesFiltered =
    slug &&
    filterProgramsByStudyField({
      programs: courses,
      studyFieldSlug: slug
    })

  const professionsFiltered =
    slug &&
    filterProgramsByStudyField({
      programs: professions,
      studyFieldSlug: slug
    })


  const contentStyle = {
    background: '#ffffff',
    paddingLeft: '50px',
    width: '525px',
    paddingRight: '100px',
    paddingTop: '40px',
    paddingBottom: '9px',
    border: '1px solid #6F01C6'
  }
  

  return (
    <>
      <div className={styles.desktopPopup}>
      <Popup
          trigger={open => (
            <div
            className={styles.item}>
              <span>{label}</span>
              <div className={styles.iconDesktop}>
                <IconTriangle />
              </div>
            </div>
          )}
          {...{ contentStyle }}
          on={'hover'}
          position={index < 4  ? 'right center' : 'left center'}
          offsetY={index == 0 ? -15 : index == 4 ? -15 : 0}
          offsetX={index < 4  ? -80 : 20}
          mouseLeaveDelay={200}
          mouseEnterDelay={200}
          
          arrowStyle={{
            stroke: '#6F01C6'
          }}>
          {ofType === 'course'
            ? coursesFiltered
                .filter((el, i) => i < 4)
                .map((program, i) => (
                  <PopupProgram
                    href={`${href}/${program.slug}`}
                    key={`${href}-${program.id}`}
                    program={program}
                  />
                ))
            : professionsFiltered
                .filter((el, i) => i < 4)
                .map((program, i) => (
                  <PopupProgram
                    href={`${href}/${program.slug}`}
                    key={`${href}-${program.id}`}
                    program={program}
                  />
                ))}
          {ofType === null ? (
            <Link href={`${routes.front.programs}/${slug}`}>
              <a className={styles.viewAll}>Смотреть все </a>
            </Link>
          ) : (
            <Link href={href}>
              <a className={styles.viewAll}>Смотреть все </a>
            </Link>
          )}
        </Popup>
      </div>

      {/* для мобилок */}
    <ProgramMobile professionsFiltered={professionsFiltered} coursesFiltered={coursesFiltered} label={label} ofType={ofType} href={href} slug={slug} index={index} openListIndex={openListIndex} setOpenListIndex={setOpenListIndex} />
    </>
  )
}

export default Program;
