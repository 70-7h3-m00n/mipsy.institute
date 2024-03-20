import stls from '@/styles/components/btns/BtnField.module.sass'
import Link from 'next/link'
import FieldsTooltipContext from '@/context/fieldsTooltip/fieldsTooltipContext'
import { ContextStaticProps } from '@/context/index'
import { useContext } from 'react'
import classNames from 'classnames'

const BtnField = ({ href=null, aside = false, slug = null, children, smallText=false , mainFields=false, orang=false}) => {
  const { closeFieldsTooltip } = useContext(FieldsTooltipContext)
  const { curProgramsStudyFieldSlug } = useContext(ContextStaticProps)

  return (
    <Link href={href}>
      <a
        className={classNames({
          [stls.mainFields]:mainFields,
          [stls.container]: true,
          [stls.tooltip]: !aside && !smallText,
          [stls.aside]: aside,
          [stls.active]:
            aside &&
            (slug === curProgramsStudyFieldSlug ||
              (!slug && !curProgramsStudyFieldSlug)),
          [stls.smallText]: smallText,
          [stls.orang]: orang,
        })}
        onClick={!aside && closeFieldsTooltip}>
        {children}
      </a>
    </Link>
  )
}

export default BtnField
