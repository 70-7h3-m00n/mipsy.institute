import stls from '@/styles/components/btns/BtnPhone.module.sass'
import cn from 'classnames'
import { company } from '@/config/index'
import { IconPhone } from '@/components/icons'

const BtnPhone = ({ withNumber = false, alterNumber = false, studyDivision = false}) => {
  return (
    <>
    {studyDivision ? (
      <a
      href={company.phoneNumbers.studyDivision.href}
      className={cn({
        [stls.container]: true,
        [stls.withNumber]: withNumber
      })}
      aria-label='Позвонить'>
      <IconPhone small={withNumber} />{' '}
      {withNumber && company.phoneNumbers.studyDivision.val}
    </a>
    ) : (
      <>
      <a
      href={company.phoneNumbers.default.href}
      className={cn({
        [stls.container]: true,
        [stls.withNumber]: withNumber
      })}
      aria-label='Позвонить'>
      <IconPhone small={withNumber} />{' '}
      {withNumber && company.phoneNumbers.default.val}
    </a>
    <>
    {alterNumber && (<a
    href={company.phoneNumbers.defaultAlt.href}
    className={cn({
      [stls.container]: true,
      [stls.withNumber]: withNumber
    })}
    aria-label='Позвонить'>
    <IconPhone small={withNumber} />{' '}
    {withNumber && company.phoneNumbers.defaultAlt.val}
  </a>)}
  </>
  </>
    )}
    
  </>
  )
}

export default BtnPhone
