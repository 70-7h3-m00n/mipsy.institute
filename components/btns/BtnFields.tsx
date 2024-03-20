import stls from '@/styles/components/btns/BtnFields.module.sass'
import { IconMenu } from '@/components/icons'
import { useContext, useEffect, useState } from 'react'
import classNames from 'classnames'
import FieldsTooltipContext from '@/context/fieldsTooltip/fieldsTooltipContext'
import { closeFieldsTooltipOnOuterClick } from '@/helpers/index'
import StudyFields from '@/components/general/StudyFields'
import Wrapper from '../layout/Wrapper'
// import getProgramsData from '@/lib/data/getProgramsData'
// import convertEnglishToRussian from '@/helpers/convertEnglishToRussian'
// import CardTooltip from '../cards/CardTooltip'
// import BtnField from './BtnField'
import MainStudyFields from '../general/MainStudyFields'
import { ContextStaticProps } from '@/context/index'
import { useRouter } from 'next/router'
import routes from '@/config/routes'
import StudyFieldsOnMain from '../general/StudyFieldsOnMain'

const BtnFields = () => {
  const { fieldsTooltipIsOpen, toggleFieldsTooltip, closeFieldsTooltip } =
    useContext(FieldsTooltipContext)

  useEffect(() => {
    closeFieldsTooltipOnOuterClick(closeFieldsTooltip)
  }, [])

  const [currentType, setCurrentType] = useState('')


  return (
    <Wrapper>
      <div id='btnFieldsContainer' className={stls.container}>
        <button className={stls.btn} onClick={toggleFieldsTooltip}>
          <span className={stls.icon}>
            <IconMenu />
          </span>
          <span className={stls.text}>Направления обучения</span>
        </button>
        <div
          className={classNames({
            [stls.tooltip]: true,
            [stls.isShown]: fieldsTooltipIsOpen
          })}>
          <MainStudyFields currentType={currentType} setCurrentType={setCurrentType} />
          <StudyFieldsOnMain currentType={currentType} ofType={currentType === 'course' ? 'course' : currentType === 'profession' ? 'profession' : null} orang />
        </div>
      </div>
    </Wrapper>
  )
}

export default BtnFields
