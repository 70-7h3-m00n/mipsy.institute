import stls from '@/styles/components/sections/Faq.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import FaqAnswer from '@/components/general/FaqAnswer'
import { ContextStaticProps } from '@/context/index'
import { useContext } from 'react'
import { getListItemsInnerHtml, getParagraphInnerHtml } from '@/helpers/index'
import PopupTrigger from '@/components/general/PopupTrigger'
import parse from 'html-react-parser'
import { convertMdToHtml } from '@/helpers/index'
import marked from 'marked'

const Faq = ({faqRef=null}) => {
  const { program } = useContext(ContextStaticProps)

  let list =
    program?.qnas?.length &&
    program.qnas.map((qna, idx) => ({
      question: qna.question,
      answer: qna.answer
    }))
    const listOnMain = [
      {question:'Какой график обучения в институте? Получится ли совмещать его с работой?', answer: 'Да. Вы можете учиться в любое время дня без отрыва от семьи и основной занятости. Вы получите специальность в онлайн-формате не выходя из дома'},
      {question:'Смогу ли я вести частную практику после обучения в МИП?', answer: 'Да. Мы предоставим вам все необходимое для получения профессионального психологического образования и старта карьеры — знания и диплом'},
      {question:'Нужно ли медицинское образование для поступления по программам вашего института?', answer: 'Нет. Психолог — не врач. Он не проводит сложные терапии, не назначает стационарное или медикаментозное лечение '},
      {question:'Какие в MIP есть варианты оплаты?', answer: 'Вы можете оплатить полную стоимость сразу или воспользоваться рассрочкой от банка партнера.'},
      {question:'Какие документы я получу после окончания обучения?', answer: 'После прохождения курсов выдается диплом о профессиональной переподготовке или удостоверение о повышении квалификации установленного образца. Это официальный документ, который вносится в реестр ФРДО. Его можно проверить на сайте Рособрнадзора.В дополнении также выдается диплом или сертификат Московского института психологии в формате А4 для личного портфолио.'},
    ]

    if(!list) {
      list = listOnMain
    }

  return (
    <section ref={faqRef} className={stls.container}>
      <Wrapper>
        <div className={stls.heading}>
          {' '}
          <h2 className={stls.title}>Часто задаваемые вопросы</h2>
          <div className={stls.laptopdesktop}>
            <p className={stls.p}>
              У Вас есть вопросы? Оставьте заявку! <br />И мы перезвоним Вам!
            </p>
            <div className={stls.btn}>
            <PopupTrigger btn='zeta' cta='askQuestion' />
            </div>
            
          </div>
        </div>

        <div className={stls.content}>
          <ul className={stls.list}>
            {list &&
              list.map(({ question, answer }, idx) => (
                <FaqAnswer
                  key={question + idx}
                  question={question}
                  answer={answer}
                />
              ))}
          </ul>
          <div className={stls.phonetablet}>
            <p className={stls.p}>
              У Вас есть вопросы? Оставьте заявку! И мы перезвоним Вам!
            </p>
          </div>
        </div>
        <div className={stls.phonetablet}>
          <PopupTrigger btn='zeta' cta='askQuestion' />
        </div>
      </Wrapper>
    </section>
  )
}

export default Faq
