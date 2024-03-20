import stls from '@/styles/components/program/ProgramCost.module.sass'
import { ContextStaticProps } from '@/context/index'
import { useContext } from 'react'
import toNumberWithSpaces from '@/helpers/toNumberWithSpaces'
import { discountNum } from '@/data/price'
import PopupTrigger from '../general/PopupTrigger'
import classNames from 'classnames'

const ProgramCost = ({ withPerMonth = false }) => {
  const { program } = useContext(ContextStaticProps)

  const price = (program && program.price) || 0
  const discount = (program && program.discount) || discountNum

  const rprice =
    Math.round(Math.ceil((price / (100 - discount)) * 100) / 1000) * 1000

  const perMonthPrice = Math.round(Math.round(price && +price / 12) / 100) * 100
  const perMonthPriceRegular =
    Math.round(Math.round(rprice && +rprice / 12) / 100) * 100

  return (
    <div className={stls.container}>
      {withPerMonth && (
        <div className={stls.content}>
          
          <div className={stls.spanLine}>
          <p className={stls.costMonth}>Обучение можно оплатить сразу или воспользоваться <b>рассрочкой*</b></p>
          {/* <div className={stls.topFlexMonth}> */}
          <span className={stls.discount}>
            <span className={stls.bold}>
              {toNumberWithSpaces(perMonthPrice)}
            </span>{' '}
            <span className={stls.bold}>&#8381;/мес</span>
          </span>
          
          {/* <span className={stls.regular}>
            <span className={stls.bold}>
              {toNumberWithSpaces(perMonthPriceRegular)}
            </span>{' '}
            <span className={stls.light}>&#8381;</span>
          </span> */}
          {/* </div> */}
          <p className={stls.loan}>*Беспроцентная рассрочка на 12 месяцев от TINKOFF</p>
          </div>
          <div className={stls.spanLine}>
          <p className={stls.fullPrice}>Стоимость программы за весь курс:</p>
          <div className={stls.flexMonth}>
          <span className={stls.discount}>
            <span className={stls.full}>
              {toNumberWithSpaces(price)}
            </span>{' '}
            <span className={stls.fullLight}>&#8381;</span>
          </span>{' '}
          <span className={stls.regular}>
            <span className={stls.bold}>
              {toNumberWithSpaces(rprice)}
            </span>{' '}
            <span className={stls.light}>&#8381;</span>
          </span>
          </div>
          </div>
          <div className={stls.btns}>
          <div
                className={classNames({
                  [stls.btnquestion]: true
                })}>
                <PopupTrigger btn='zeta' cta='askQuestion' />
              </div>
              <p>Записаться на курс или получить бесплатную консультацию</p>
              <div className={stls.askQuestion}>
              <PopupTrigger btn='alpha' cta='signUp' />
              </div>
              
              </div>
              
        </div>
      )}
    </div>
  )
}

export default ProgramCost
