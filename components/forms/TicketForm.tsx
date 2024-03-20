import stls from '@/styles/components/forms/FormAlpha.module.sass'
import { useRouter } from 'next/router'
import { useState, useEffect, useContext } from 'react'
import Popup from 'reactjs-popup'
import { useForm } from 'react-hook-form'
import hitContactRoute from '@/components/funcs/hitContactRoute'
import { BtnAlpha, BtnBeta } from '@/components/btns'
import classNames from 'classnames'
import { PopupLoading, PopupThankyou } from '@/components/popups'
import { getCookie } from 'cookies-next'
import routes from '@/config/routes'
import ipCheckFunc from '../funcs/ipCheckFunc'
import { ContextStaticProps } from '@/context/index'


type FormValues = {
  name: string
  phone: string
  email: string
  promocode: string
  question: string
  leadPage: string
}

const TicketForm = ({
  cta = 'Подобрать программу',
  blockForAmo = 'Подобрать программу',
  question = false,
  popup = false,
  atFooter = false,
  agreement = false,
  promo = false,
  inProfessions=false,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors, dirtyFields },
    getValues
  } = useForm<FormValues>({
    defaultValues: {
      name: '',
      email: '',
      phone: ''
    }
  })

  const [isDisabled, setIsDisabled] = useState(false)
  const [thanksIsOpen, setThanksIsOpen] = useState(false)
  const [isIpCheckFailed, setIsIpCheckFailed] = useState(false);
  const [loading, setLoading] = useState(false)
  const { program } = useContext(ContextStaticProps)


  useEffect(() => {
    popup && setFocus('name')
  }, [setFocus, popup])


  const router = useRouter()


  const onSubmit = async data => {
    const ipCheck = await ipCheckFunc()
    if( ipCheck === 200) {
      console.log('IP 200')
      setIsDisabled(true)
      setLoading(true)

    // handle loader
    data.leadPage = router.asPath
    const utms = JSON.parse(sessionStorage.getItem('utms'))
    data.utms = utms
    sessionStorage.removeItem('utms')
    const referer = JSON.parse(sessionStorage.getItem('referer'))
    data.referer = referer
    sessionStorage.removeItem('referer')
    const ymUid = JSON.parse(localStorage.getItem('_ym_uid'))
    data.ymUid = ymUid
    const clickId = getCookie('utm'); 
    const price = program?.price
    data.price = price

    data.blockForAmo = blockForAmo

    if (typeof clickId === 'string') {
      data.utm = JSON.parse(clickId);
    } else {
      data.utm = null; // или какое-то другое значение по умолчанию
    }


    const req = await hitContactRoute(data)

    if (req === 200) {
      setLoading(false)
      // router.push('/gratefull')
      console.log('Success')
      window.open(routes.front.gratefull, '_blank');
      setIsIpCheckFailed(false)
      // setIsDisabled(true)
      setThanksIsOpen(true)
    } else {
      console.log('err')
      setLoading(false)
      setIsIpCheckFailed(true)
    }

    } else {
      setIsIpCheckFailed(true)
      console.log(errors)
    }
    
  }

  return (
    <>
      <Popup
        open={thanksIsOpen}
        closeOnDocumentClick
        onClose={() => setThanksIsOpen(false)}>
        <PopupThankyou close={() => setThanksIsOpen(false)} />
      </Popup>

      <Popup
        open={loading}
        // closeOnDocumentClick
        onClose={() => setLoading(false)}>
        <PopupLoading />
      </Popup>
      <form
        method='post'
        className={classNames({
          [stls.containet]: true,
          [stls.atFooter]: atFooter,
          [stls.inProfessions]: inProfessions
        })}
        onSubmit={handleSubmit(data => onSubmit(data))}>
        <div className={stls.group}>
          <div className={classNames(stls.inpt, stls.name)}>
            <input
              type='text'
              aria-label='Ваше имя'
              placeholder='Ваше имя'
              disabled={isDisabled}
              {...register('name', {
                required: `*Введите ваше имя`,
                minLength: {
                  value: 2,
                  message: `*Введите ваше имя`
                },
                maxLength: {
                  value: 32,
                  message: `*Не больше 32 символов`
                }
              })}
            />
            <p className={stls.err}>{errors.name && errors.name.message}</p>
          </div>
          <div className={classNames(stls.inpt, stls.phone)}>
            <input
              type='number'
              aria-label='Ваш номер телефона'
              placeholder='Ваш телефон'
              disabled={isDisabled}
              {...register('phone', {
                required: `*Номер телефона обязателен`,
                minLength: {
                  value: 7,
                  message: `*Минимум 7 цифр`
                },
                maxLength: {
                  value: 18,
                  message: `*Не больше 18 символов`
                }
              })}
            />
            <p className={stls.err}>{errors.phone && errors.phone.message}</p>
          </div>
          <div className={classNames(stls.inpt, stls.email)}>
            <input
              type='email'
              aria-label='Ваша электронная почта'
              placeholder='Ваша электронная почта'
              disabled={isDisabled}
              {...register('email', {
                pattern: {
                  value:
                    /[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
                  message:
                    'Пожалуйста, введите корректный адрес электронной почты в формате example@mail.ru'
                }
              })}
            />
            <p className={stls.err}>{errors.email && errors.email.message}</p>
          </div>
          {promo && (
            <div className={classNames(stls.inpt, stls.promocode)}>
            <input
              type='text'
              aria-label='Промокод'
              placeholder='Промокод'
              disabled={isDisabled}
              {...register('promocode', {
                maxLength: {
                  value: 32,
                  message: `*Не больше 32 символов`
                }
              })}
            />
            <p className={stls.err}>{errors.email && errors.email.message}</p>
          </div>
          )}
          
          <input 
          type='text'
          />
          {question && (
            <div className={classNames(stls.inpt, stls.question)}>
              <textarea
                aria-label='Задайте Ваш вопрос'
                placeholder='Задайте Ваш вопрос'
                disabled={isDisabled}
                {...register('question', {
                  maxLength: {
                    value: 320,
                    message: `*Максимальная длинна вопроса 320 символов`
                  }
                })}></textarea>
              <p className={stls.err}>
                {errors.question && errors.question.message}
              </p>
            </div>
          )}

          <div className={stls.btn}>
            {atFooter ? (
              <BtnBeta text={cta} isDisabled={isDisabled} />
            ) : (
              <BtnAlpha text={cta} isDisabled={isDisabled} />
              // <BtnAlpha text={cta}  />
            )}
          </div>

          {agreement && (
            <p className={stls.agreement}>
              Нажимая кнопки на сайте Вы даете свое согласие на обработку Ваших
              персональных данных
            </p>
          )}
          {isIpCheckFailed && (
            <p className={stls.checkError}>
          Невозможно отправить форму, пожалуйста, свяжитесь с нами по номеру <a href='tel:+7-499-110-86-32'>+7 (499) 110-86-32</a> или <a className={stls.whatsUpNumber}
              target="_blank" rel="noopener noreferrer" href='https://api.whatsapp.com/send/?phone=%2B74991108632&amp;text&amp;type=phone_number&amp;app_absent=0'>Напишите в WhatsApp</a>
          </p>
          )}
          
        </div>
      </form>
    </>
  )
}

export default TicketForm
