import stls from '@/styles/components/forms/NewForm.module.sass'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Popup from 'reactjs-popup'
import { useForm } from 'react-hook-form'
import hitContactRoute from '@/components/funcs/hitContactRoute'
import { BtnAlpha, BtnBeta } from '@/components/btns'
import classNames from 'classnames'
import { PopupThankyou } from '@/components/popups'
import { useMutation, gql, ApolloClient, useQuery } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'
import moment from 'moment'
import axios from 'axios'
import routes from '@/config/routes'
import { getCookie } from 'cookies-next'

const CHECK_TOKENS = gql`
  query amoTokens($title: String!) {
    amos(where: { title: $title }) {
      id
      title
      refresh
      access
      expired_in
    }
  }
`

const UPDATE_TOKEN = gql`
  mutation UpdateTokens($input: updateAmoInput!) {
    updateAmo(input: $input) {
      amo {
        id
        access
        refresh
        expired_in
      }
    }
  }
`

type FormValues = {
  name: string
  phone: string
  email: string
  promocode: string
  question: string
  leadPage: string
}

const CallMeBackForm = ({
  cta = 'Подобрать программу',
  blockForAmo = 'Подобрать программу',
  question = false,
  popup = false,
  atFooter = false,
  agreement = false
}) => {
  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors }
  } = useForm<FormValues>()

  const [isDisabled, setIsDisabled] = useState(false)
  const [thanksIsOpen, setThanksIsOpen] = useState(false)

  useEffect(() => {
    popup && setFocus('name')
  }, [setFocus, popup])

  const router = useRouter()

  const { loading, error, data } = useQuery(CHECK_TOKENS, {
    variables: { title: 'amo' }
  })

  const tokenId = data?.amos[0]?.id
  const expireTime = data?.amos[0]?.expired_in
  const access_token = data?.amos[0]?.access
  const refresh_token = data?.amos[0]?.refresh
  const nowUNIXtime = moment().unix()
  const differenceInTime = expireTime - nowUNIXtime
  console.log(data, error)

  const [updateTokens] = useMutation(UPDATE_TOKEN)

  const [serverErrorMeassage, setServerErrorMeassage] = useState('')

  const onSubmit = async formData => {
    setServerErrorMeassage('')
    console.log(differenceInTime)
    const utms = JSON.parse(sessionStorage.getItem('utms'))
    formData.utms = utms
    sessionStorage.removeItem('utms')
    formData.leadPage = router.asPath
    const referer = JSON.parse(sessionStorage.getItem('referer'))
    formData.referer = referer
    formData.differenceInTime = differenceInTime
    sessionStorage.removeItem('referer')
    const ymUid = JSON.parse(localStorage.getItem('_ym_uid'))
    formData.ymUid = ymUid
    const clickId = getCookie('utm'); 
    // console.log('clickId', clickId)

    formData.blockForAmo = blockForAmo

    if (typeof clickId === 'string') {
      formData.utm = JSON.parse(clickId);
    } else {
      formData.utm = null; // или какое-то другое значение по умолчанию
    }

    
    if (differenceInTime < 1800) {
      try {
        // отправляем запрос на обновление токенов, нам нужен из базы рефреш токен
        //
        console.log(refresh_token, 'in submit')
        const exchangeTokensResponse = await axios.post(
          `${routes.front.root}/api/amoCRMexchangeToken`,
          data?.amos[0]
        )
        console.log(exchangeTokensResponse.data)
        if (exchangeTokensResponse.status === 200) {
          // update token as time close to end
          console.log('Обновляем токен')
          const { data } = await updateTokens({
            variables: {
              input: {
                where: { id: tokenId },
                data: {
                  access: exchangeTokensResponse.data.access_token,
                  refresh: exchangeTokensResponse.data.refresh_token,
                  expired_in: nowUNIXtime + 84400
                }
              }
            }
          })
          console.log('Токены обновлены для записи Amo:', data.updateAmo)
          if (data.updateAmo.amo) {
            formData.access = data.updateAmo.amo.access
            console.log('используем новые токены', data.updateAmo.amo.access)
            try {
              const responseNewLead = await axios.post(
                `${routes.front.root}/api/checkAndCreateLead`,
                formData
              )
              if (responseNewLead.status === 200) {
                // создали юзера
                console.log('user created')
              }  
              // if(responseNewLead.status === 401){
              //   console.log(400)
              //   setServerErrorMeassage('Ошибка при создании новой заявки')
              // }
            } catch (error) {
              if (error.response.status === 400) {
                setServerErrorMeassage('400 Ошибка при создании новой заявки')
              } else {
      
                setServerErrorMeassage(`Другая ошибка при запросе на обмен токенов ${error.response.status}`)
                console.error('Не удалось обновить токены для записи Amo:', error)
              }
            }
            
          }
        } 
      } catch (error) {
        if (error.response.status === 400) {
          setServerErrorMeassage('400 ошибка при запросе на обмен токенов')
          console.log('400 ошибка, отправляем через смтп')
        } else {

          setServerErrorMeassage(`Другая ошибка при запросе на обмен токенов ${error.response.status}`)
          console.error('Не удалось обновить токены для записи Amo:', error)
        }
      }
    } else {
      console.log(differenceInTime, 'in else')
      try {
        formData.access = access_token
        const responseNewLead = await axios.post(
          `${routes.front.root}/api/checkAndCreateLead`,
          formData
        )
        console.log(responseNewLead)
      } catch (error) {
        setServerErrorMeassage('Не удалось создать лид, но время истечения токена удовлетворяет условиям')
        console.error('Не удалось создать или обновить лид', error)
      }
    }
  }
  // setIsDisabled(true)
  // setThanksIsOpen(true)
  // // handle loader
  // data.leadPage = router.asPath
  // const utms = JSON.parse(sessionStorage.getItem('utms'))
  // data.utms = utms
  // sessionStorage.removeItem('utms')
  // const referer = JSON.parse(sessionStorage.getItem('referer'))
  // data.referer = referer
  // sessionStorage.removeItem('referer')
  // const ymUid = JSON.parse(localStorage.getItem('_ym_uid'))
  // data.ymUid = ymUid

  return (
    <>
      <Popup
        open={thanksIsOpen}
        closeOnDocumentClick
        onClose={() => setThanksIsOpen(false)}>
        <PopupThankyou close={() => setThanksIsOpen(false)} />
      </Popup>
      <form
        method='post'
        className={classNames({
          [stls.containet]: true,
          [stls.atFooter]: atFooter
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
              type='tel'
              aria-label='Ваш номер телефона'
              placeholder='Ваш телефон'
              disabled={isDisabled}
              {...register('phone', {
                required: `*Номер телефона обязателен`,
                minLength: {
                  value: 5,
                  message: `*Минимум 5 цифр`
                }
              })}
            />
            <p className={stls.err}>{errors.phone && errors.phone.message}</p>
          </div>
          <div className={classNames(stls.inpt, stls.email)}>
            <input
              type='email'
              aria-label='Ваша электронная почта'
              placeholder='Введите email'
              disabled={isDisabled}
              {...register('email', {
                pattern: {
                  value:
                    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
                  message:
                    'Пожалуйста, введите корректный адрес электронной почты'
                }
              })}
            />
            <p className={stls.err}>{errors.email && errors.email.message}</p>
          </div>
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
            )}
          </div>

          {agreement && (
            <p className={stls.agreement}>
              Нажимая кнопки на сайте Вы даете свое согласие на обработку Ваших
              персональных данных
            </p>
          )}
          
        </div>
        <p>{serverErrorMeassage}</p>
      </form>
    </>
  )
}

export default CallMeBackForm
