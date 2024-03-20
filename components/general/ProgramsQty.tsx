import stls from '@/styles/components/general/ProgramsQty.module.sass'
import {
  getCasesRuCourseString,
  getCasesRuProfessionString
} from '@/helpers/index'
import classNames from 'classnames'

type ProgramsQtuType = {
  qty: number
  ofType: 'profession' | 'course'
  dye?: string
}

const ProgramsQty = ({
  qty = 0,
  ofType = 'course',
  dye = 'bgbeta'
}: ProgramsQtuType) => {
  return (
    <div className={stls.container}>
      <div className={classNames({ [stls.qty]: true, [stls[dye]]: true })}>
        {qty}
      </div>{' '}
      <span className={stls.text}>
        {ofType === 'profession'
          ? getCasesRuProfessionString(qty)
          : ofType === 'course'
          ? getCasesRuCourseString(qty)
          : ''}
      </span>
    </div>
  )
}

export default ProgramsQty
