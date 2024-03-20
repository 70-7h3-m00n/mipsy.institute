import stls from '@/styles/components/programs/Professions.module.sass'
import { routes } from '@/config/index'
import CardProfession from '@/components/cards/CardProfession'
import { BtnDelta } from '@/components/btns'
import classNames from 'classnames'
import ProgramsQty from '@/components/general/ProgramsQty'
import SearchProgram from '../general/SearchProgram'

type ProfessionsType = {
  biggerTitle?: boolean
  withBtn?: boolean
  courses: any[]
  withQty?: boolean
  threerow?: boolean
}

const Professions = ({
  biggerTitle = false,
  withBtn = false,
  professions = [],
  withQty = false,
  threerow = false
}) => {
  return (
    <div className={stls.container}>
      {biggerTitle ? (
        <>
        {/* <div>
          <SearchProgram />
        </div> */}
        <div className={stls.heading}>
          
          <h2
            className={classNames({
              [stls.title]: true,
              [stls.bold]: true
            })}>
            Программы профессиональной переподготовки
          </h2>
          {withQty && (
            <div className={stls.phonetablet}>
              <ProgramsQty qty={professions.length} ofType='profession' />
            </div>
          )}
        </div>
          </>
      ) : (
        <div className={stls.heading}>
          <h3 className={stls.title}>Программы профессиональной переподготовки</h3>
          {withQty && (
            <div className={stls.phonetablet}>
              <ProgramsQty qty={professions.length} ofType='profession' />
            </div>
          )}
        </div>
      )}
      <div className={stls.underheading}>
        <p className={stls.subTitle}>
          Программы профессиональной переподготовки для полного погружения в
          профессию
        </p>
        {withQty && (
          <div className={stls.laptopdesktop}>
            <ProgramsQty
              qty={professions.length}
              ofType='profession'
              dye='bgalpha'
            />
          </div>
        )}
      </div>
      <div
        className={classNames({
          [stls.professions]: true,
          [stls.threerow]: threerow
        })}>
        {professions.map((profession, idx) => (
          <CardProfession
            key={profession.title + idx}
            profession={profession}
            threerow={threerow}
          />
        ))}
      </div>
      {withBtn && (
        <div className={stls.btn}>
          <BtnDelta
            text={'Смотреть все профессии'}
            href={routes.front.professions}
          />
        </div>
      )}
    </div>
  )
}

export default Professions
