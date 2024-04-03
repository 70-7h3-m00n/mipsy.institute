import stls from '@/styles/components/sections/SalaryCounter.module.sass'
import { useState } from 'react'
import Wrapper from '../layout/Wrapper'

const SalaryCounter = () => {
  const [consultation, setConsultation] = useState(5)
  const [consultationsRange, setConsultationsRange] = useState({
    min: 1,
    max: 10
  })
  const [days, setDays] = useState(15)
  const [daysRange, setDaysRange] = useState({ min: 1, max: 31 })
  const [price, setPrice] = useState(2500)
  const [priceRange, setPriceRange] = useState({ min: 1500, max: 5000 })
  const overall = (consultation * days * price).toLocaleString('ru-RU', { minimumFractionDigits: 0, maximumFractionDigits: 2 })
  const [perMonth, setPerMonth] = useState(overall)

  const consultationHandler = e => {
    setConsultation(e.target.value)
  }

  const daysHandler = e => {
    setDays(e.target.value)
  }

  const priceHandler = e => {
    setPrice(e.target.value)
  }

  // const inputPrice = (e) => {
  //   setPrice(e.target.value)
  // }

  // const inputDays = (e) => {
  //   setPrice(e.target.value)
  // }

  // const inputConsultations = (e) => {
  //   setConsultation(e.target.value)
  // }

  return (
    <section>
      <Wrapper>
        <h2 className={stls.title}>Сколько может зарабатывать психолог?</h2>
        <p className={stls.checkSalaryText}>Рассчитайте свой ежемесячный доход с помощью калькулятора</p>
        <div className={stls.content}>
          <div className={stls.calculatorContainer}>
            <div className={stls.innerContainer}>
              <p className={stls.subtitle}>Количество консультаций в день</p>
              <input max={10} value={consultation} onChange={consultationHandler} className={stls.value}/>
              <input
                className={stls.range}
                min={consultationsRange.min}
                max={consultationsRange.max}
                type='range'
                value={consultation}
                onChange={consultationHandler}
              />
              <div className={stls.minmax}>
                <p>{consultationsRange.min}</p>
                <p>{consultationsRange.max}</p>
              </div>

              <p className={stls.subtitle}>Количество рабочих дней в месяц</p>
              <input value={days} onChange={daysHandler} className={stls.value}/>
              <input
                className={stls.range}
                min={daysRange.min}
                max={daysRange.max}
                type='range'
                value={days}
                onChange={daysHandler}
              />
              <div className={stls.minmax}>
                <p>{daysRange.min}</p>
                <p>{daysRange.max}</p>
              </div>

              <p className={stls.subtitle}>Стоимость одной консультации</p>
              <input value={price} onChange={priceHandler} className={stls.value}/>
              <input
                className={stls.range}
                step={100}
                min={priceRange.min}
                max={priceRange.max}
                type='range'
                value={price}
                onChange={priceHandler}
              />
              <div className={stls.minmax}>
                <p>{priceRange.min} ₽</p>
                <p>{priceRange.max} ₽</p>
              </div>
              <div className={stls.calcFooter}>
                <p className={stls.footerText}>
                  Вы сможете зарабатывать в месяц на психологических
                  консультациях
                </p>
                <p className={stls.fullSalary}>{overall}₽</p>
              </div>
            </div>
          </div>
          <div className={stls.cards}>
            <div className={stls.cardOne}>
              <p>*Средняя стоимость консультации выпускников МИП — <br /> 3 000 р./час</p>
            </div>
            <div className={stls.cardTwo}>
              <p>До 5 консультаций в день может проводить психолог</p>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default SalaryCounter
