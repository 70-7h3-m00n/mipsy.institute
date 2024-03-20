import React from 'react'
import stls from '@/styles/components/dropdownMenu/DocumentsSection.module.sass'
import classNames from 'classnames'
import Link from 'next/link'
import routes from '@/config/routes'

interface Icon1Props {
  className?: string
  selected?: boolean
}

const DocumentsSection: React.FC<Icon1Props> = ({
  className,
  selected = false
}) => {
  const infoClasses = classNames(
    stls.container,
    { [stls.selected]: selected },
    className
  )
  return (
    <div className={infoClasses}>
      <div className={stls.wrapper}>
        <p>Сведения об образовательной</p>
        <p>организации</p>

        <Link href={routes.front.legal}>
          <a className={stls.btn} href={routes.front.legal}>
            Ознакомиться
          </a>
        </Link>
      </div>
    </div>
  )
}

export default DocumentsSection
