import stls from '@/styles/components/general/PopupTrigger.module.sass'
import Popup from 'reactjs-popup'
import { PopupCta } from '@/components/popups'
import {
  BtnAlpha,
  BtnBeta,
  BtnGamma,
  BtnDelta,
  BtnEpsilon,
  BtnZeta,
  BtnEta,
  BtnText,
  BtnTheta
} from '@/components/btns'

type PopupTriggerType = {
  btn:
    | 'alpha'
    | 'beta'
    | 'gamma'
    | 'delta'
    | 'epsilon'
    | 'zeta'
    | 'eta'
    | 'theta'
    | 'text'
  cta:
    | 'askQuestion'
    | 'callMeBack'
    | 'signUpForCourse'
    | 'signUpForProfession'
    | 'signUp'
    | 'chooseProgram'
    | 'learnAboutUs'
    | 'submitApplication'
    | 'getFullProgram'
    | 'reserve'
    | 'learnAboutTeachers'
    | 'help'
    | 'getFullList'
    | 'seeAllWebinars'
    | 'learnMore'
    | 'consultMe'
    | 'programQuestion'
    | '2for1'
    | 'buyTicket'
    | 'participate'
}

const PopupTrigger = ({ btn, cta }: PopupTriggerType) => {
  const promo = cta === 'signUpForCourse' || cta === 'signUpForProfession' || cta === 'submitApplication' || cta === 'chooseProgram' || cta === 'reserve' || cta === 'buyTicket';
  const question = cta === 'askQuestion' || cta === 'programQuestion'

  const strs = {
    trigger:
      cta === 'askQuestion'
        ? 'Задать вопрос'
        : cta === 'callMeBack'
        ? 'Обратный звонок'
        : cta === 'signUpForCourse'
        ? 'Записаться на курс'
        : cta === 'signUpForProfession'
        ? 'Записаться на курс'
        : cta === 'signUp'
        ? 'Записаться'
        : cta === 'chooseProgram'
        ? 'Подобрать программу'
        : cta === 'learnAboutUs'
        ? 'Узнать об институте'
        : cta === 'submitApplication'
        ? 'Оставить заявку'
        : cta === 'getFullProgram'
        ? 'Получить полную программу'
        : cta === 'reserve'
        ? 'Забронировать'
        : cta === 'learnAboutTeachers'
        ? 'Узнать всех'
        : cta === 'help'
        ? 'Помощь'
        : cta === 'getFullList'
        ? 'Запросить полный список'
        : cta === 'seeAllWebinars'
        ? 'Смотреть все вебинары'
        : cta === 'learnMore'
        ? 'Подробнее'
        : cta === 'consultMe'
        ? 'Хочу консультацию'
        : cta === 'programQuestion'
        ? 'Вопрос по программе'
        : cta === '2for1'
        ? 'Получить 2 по цене 1'
        : cta === 'buyTicket'
        ? 'Купить билет'
        : cta === 'participate'
        ? 'Участвовать'
        : '',
    title:
      cta === 'askQuestion'
        ? 'Задать вопрос'
        : cta === 'callMeBack'
        ? 'Обратный звонок'
        : cta === 'signUpForCourse'
        ? 'Записаться на курс'
        : cta === 'signUpForProfession'
        ? 'Записаться на курс'
        : cta === 'signUp'
        ? 'Записаться'
        : cta === 'chooseProgram'
        ? 'Подобрать программу'
        : cta === 'learnAboutUs'
        ? 'Узнать об институте'
        : cta === 'submitApplication'
        ? 'Оставить заявку'
        : cta === 'getFullProgram'
        ? 'Получить полную программу'
        : cta === 'reserve'
        ? 'Забронировать'
        : cta === 'learnAboutTeachers'
        ? 'Узнать всех'
        : cta === 'help'
        ? 'Помощь'
        : cta === 'getFullList'
        ? 'Запросить полный список'
        : cta === 'seeAllWebinars'
        ? 'Смотреть все вебинары'
        : cta === 'learnMore'
        ? 'Узнать подробнее'
        : cta === 'consultMe'
        ? 'Хочу консультацию'
        : cta ==='programQuestion'
        ? 'Вопрос по программе'
        : cta === '2for1'
        ? 'Оставить заявку'
        : cta === 'buyTicket'
        ? 'Оставить заявку'
        : cta === 'participate'
        ? 'Узнайте как поучаствовать в акции'
        : '',
    desc:
      cta === 'askQuestion' ? (
        <>
          У Вас есть вопросы? Оставьте заявку!{' '}
          <br className={stls.phonetablet} /> И сотрудник приемной комиссии свяжется с вами, чтобы рассказать все подробности
        </>
      ) : cta === 'callMeBack' ? (
        <>
          У Вас есть вопросы? Оставьте заявку!{' '}
          <br className={stls.phonetablet} /> И сотрудник приемной комиссии свяжется с вами, чтобы рассказать все подробности
        </>
      ) : cta === 'signUpForCourse' ? (
        <>
          У Вас есть вопросы? Оставьте заявку!{' '}
          <br className={stls.phonetablet} /> И сотрудник приемной комиссии свяжется с вами, чтобы рассказать все подробности
        </>
      ) : cta === 'signUpForProfession' ? (
        <>
          У Вас есть вопросы? Оставьте заявку!{' '}
          <br className={stls.phonetablet} /> И сотрудник приемной комиссии свяжется с вами, чтобы рассказать все подробности
        </>
      ) : cta === 'signUp' ? (
        <>
          У Вас есть вопросы? Оставьте заявку!{' '}
          <br className={stls.phonetablet} /> И сотрудник приемной комиссии свяжется с вами, чтобы рассказать все подробности
        </>
      ) : cta === 'chooseProgram' ? (
        <>
          У Вас есть вопросы? Оставьте заявку!{' '}
          <br className={stls.phonetablet} /> И сотрудник приемной комиссии свяжется с вами, чтобы рассказать все подробности
        </>
      ) : cta === 'learnAboutUs' ? (
        <>
          У Вас есть вопросы? Оставьте заявку!{' '}
          <br className={stls.phonetablet} /> И сотрудник приемной комиссии свяжется с вами, чтобы рассказать все подробности
        </>
      ) : cta === 'submitApplication' ? (
        <>
          У Вас есть вопросы? Оставьте заявку!{' '}
          <br className={stls.phonetablet} /> И сотрудник приемной комиссии свяжется с вами, чтобы рассказать все подробности
        </>
      ) : cta === 'getFullProgram' ? (
        <>
          Заполните форму.{' '}
          <br className={stls.phonetablet} />  И получите полную программу!
        </>
      ): cta === 'reserve' ? (
        <>
          {/* У Вас есть вопросы? Оставьте заявку!{' '}
          <br className={stls.phonetablet} /> И сотрудник приемной комиссии свяжется с вами, чтобы рассказать все подробности */}
        </>
      ) : cta === 'learnAboutTeachers' ? (
        <>
          У Вас есть вопросы? Оставьте заявку!{' '}
          <br className={stls.phonetablet} /> И сотрудник приемной комиссии свяжется с вами, чтобы рассказать все подробности
        </>
      ) : cta === 'help' ? (
        <>
          Оставьте заявку, мы свяжемся с Вами в рабочие часы, ответим на Ваши
          вопросы и решим проблему
        </>
      ) : cta === 'getFullList' ? (
        <>
          Оставьте заявку, мы свяжемся с Вами в рабочие часы и предоставим
          полный список преподавателей
        </>
      ) : cta === 'seeAllWebinars' ? (
        <>
          Оставьте заявку, мы свяжемся с Вами в рабочие часы и предоставим
          полный список вебинаров
        </>
      ) : cta === 'learnMore' ? (
        <>
          Оставьте заявку, мы свяжемся с Вами в рабочие часы и расскажем
          подробнее о вебинаре
        </>
      ) : cta === 'consultMe' ? (
        <>
          У Вас есть вопросы? Оставьте заявку!{' '}
          <br className={stls.phonetablet} /> И сотрудник приемной комиссии свяжется с вами, чтобы рассказать все подробности
        </>
      ) :
      cta === 'programQuestion' ? (
        <>
          У вас появились вопросы по программе или конкретному модулю?{' '}
          <br className={stls.phonetablet} /> Напишите нам в форме обратной связи
        </>
      ) :
      cta === '2for1' ? (
        <>
          Оставьте заявку!{' '}
          <br className={stls.phonetablet} /> И сотрудник приемной комиссии свяжется с вами, чтобы рассказать все подробности
        </>
      ) :
      cta === 'buyTicket' ? (
        <>
          Оставьте заявку!{' '}
          <br className={stls.phonetablet} /> И сотрудник приемной комиссии свяжется с вами, чтобы рассказать все подробности
        </>
      ) : 
      cta === 'participate' ? (
        <>
          Оставьте заявку и сотрудник приемной комиссии свяжется с вами, чтобы рассказать все условия акции!
        </>
      ) :
      (
        ''
      ),
    cta:
      cta === 'askQuestion'
        ? 'Задать вопрос'
        : cta === 'callMeBack'
        ? 'Обратный звонок'
        : cta === 'signUpForCourse'
        ? 'Записаться на курс'
        : cta === 'signUpForProfession'
        ? 'Записаться на курс'
        : cta === 'signUp'
        ? 'Записаться'
        : cta === 'chooseProgram'
        ? 'Подобрать программу'
        : cta === 'learnAboutUs'
        ? 'Узнать об институте'
        : cta === 'submitApplication'
        ? 'Оставить заявку'
        : cta === 'getFullProgram'
        ? 'Получить программу'
        : cta === 'reserve'
        ? 'Забронировать'
        : cta === 'learnAboutTeachers'
        ? 'Узнать всех'
        : cta === 'help'
        ? 'Оставить заявку'
        : cta === 'getFullList'
        ? 'Оставить заявку'
        : cta === 'seeAllWebinars'
        ? 'Оставить заявку'
        : cta === 'learnMore'
        ? 'Узнать подробнее'
        : cta === 'consultMe'
        ? 'Получить консультацию'
        : cta === 'programQuestion'
        ? 'Задать вопрос'
        : cta === '2for1'
        ? 'Оставить заявку'
        : cta === 'buyTicket'
        ? 'Выбрать билеты'
        : cta === 'participate'
        ? 'Участвовать'
        : '',
      blockForAmo:
        cta === 'askQuestion'
          ? 'Задать вопрос'
          : cta === 'callMeBack'
          ? 'Обратный звонок'
          : cta === 'signUpForCourse'
          ? 'Записаться на курс'
          : cta === 'signUpForProfession'
          ? 'Записаться на курс'
          : cta === 'signUp'
          ? 'Записаться'
          : cta === 'chooseProgram'
          ? 'Подобрать программу'
          : cta === 'learnAboutUs'
          ? 'Узнать об институте'
          : cta === 'submitApplication'
          ? 'Оставить заявку'
          : cta === 'getFullProgram'
          ? 'Получить программу'
          : cta === 'reserve'
          ? 'Забронировать'
          : cta === 'learnAboutTeachers'
          ? 'Узнать всех преподавателей'
          : cta === 'help'
          ? 'Оставить заявку'
          : cta === 'getFullList'
          ? 'Оставить заявку'
          : cta === 'seeAllWebinars'
          ? 'Смотреть вебинары'
          : cta === 'learnMore'
          ? 'Узнать подробнее'
          : cta === 'consultMe'
          ? 'Получить консультацию'
          : cta === 'programQuestion'
          ? 'Вопрос по программе'
          : cta === '2for1'
          ? 'Баннер 2 по цене одного'
          : cta === 'participate'
          ? 'Участвовать'
          : ''
  }

  return (
    <Popup
      trigger={
        <div>
          {btn === 'alpha' ? (
            <BtnAlpha text={strs.trigger} />
          ) : btn === 'beta' ? (
            <BtnBeta text={strs.trigger} />
          ) : btn === 'gamma' ? (
            <BtnGamma text={strs.trigger} />
          ) : btn === 'delta' ? (
            <BtnDelta text={strs.trigger} />
          ) : btn === 'epsilon' ? (
            <BtnEpsilon text={strs.trigger} />
          ) : btn === 'zeta' ? (
            <BtnZeta text={strs.trigger} />
          ) : btn === 'eta' ? (
            <BtnEta text={strs.trigger} />
          ) : btn === 'theta' ? (
            <BtnTheta text={strs.trigger} />
          ) : btn === 'text' ? (
            <BtnText text={strs.trigger} ctheta />
          ) : (
            ''
          )}
        </div>
      }
      modal
      nested>
      {close => (
        <PopupCta
          promo={promo}
          title={strs.title}
          desc={strs.desc}
          cta={strs.cta}
          question={question}
          close={close}
          blockForAmo={strs.blockForAmo}
        />
      )}
    </Popup>
  )
}

export default PopupTrigger
