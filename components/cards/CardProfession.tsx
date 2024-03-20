import stls from '@/styles/components/cards/CardProfession.module.sass'
import Link from 'next/link'
import classNames from 'classnames'
import { routes } from '@/config/index'
import ProgramStudyDuration from '@/components/program/ProgramStudyDuration'
import { IconArrowRight } from '@/components/icons'
import Image from 'next/image'

const CardProfession = ({ profession = null, threerow = false }) => {

  return (
    <Link
      href={`${routes.front.professions}/${
        profession.studyFieldSlug || 'studyfield'
      }/${profession.slug}`}>
        
      <a
        className={classNames({
          [stls.container]: true,
          [stls.threerow]: threerow,
          [stls.fourrow]: !threerow
        })}>
          {/* <Image src={profession.heroPicture.url} width={100} height={100}/> */}
        <span className={stls.type}>{profession.typeLabel}</span>
        <h4 className={stls.title}>{profession.title}</h4>
        {profession.studyMounthsDuration && (
          <div className={stls.dur}>
            <ProgramStudyDuration
              studyMounthsDuration={profession.studyMounthsDuration}
              monthsOnly
            />
          </div>
        )}
        <div className={stls.arrowRight}>
          <IconArrowRight />{' '}
        </div>
      </a>
    </Link>
  )
}

export default CardProfession
