import stls from '@/styles/components/btns/BtnProgramsField.module.sass'
import { useState } from 'react'
import classNames from 'classnames'
import { useContext } from 'react'
import { ContextStaticProps } from '@/context/index'
import { IconMoreThan } from '@/components/icons'
import PopupFields from '@/components/popups/PopupFields'

const BtnProgramsField = ({ ofType = null }) => {
  const { studyFields, curProgramsStudyFieldSlug } =
    useContext(ContextStaticProps)

  const [isOpen, setIsOpen] = useState(false)

  const handleFieldsPopup = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={stls.container}>
      <button className={stls.btn} onClick={handleFieldsPopup}>
        <span>
          {!curProgramsStudyFieldSlug
            ? 'Все направления'
            : studyFields.map(studyField =>
                studyField.slug === curProgramsStudyFieldSlug
                  ? studyField.label
                  : ''
              )}
        </span>
        <IconMoreThan cnu />
      </button>
      <div
        className={classNames({
          [stls.popup]: true,
          [stls.isOpen]: isOpen
        })}>
        <PopupFields close={handleFieldsPopup} ofType={ofType} />
      </div>
    </div>
  )
}

export default BtnProgramsField
