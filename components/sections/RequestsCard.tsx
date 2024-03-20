import stls from '@/styles/components/sections/RequestsYouWillFace.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import RequestsYouWillFace from './RequestsYouWillFace'
import { ContextStaticProps } from '@/context/index'
import { useContext } from 'react'


const RequestsCard = () => {
  // const requests = [
  //   {title: 'Выгорание', description: 'Выгорание- Состояние физического и психического истощения, возникшее в ответ на эмоциональное перенапряжение при работе с людьми.' 
  //   },
  //   {title: 'Стресс', description: 'Состояние напряжения организма человека как защитная реакция на различные неблагоприятные факторы (холод, голодание, физические и психические травмы и т.д)'},
  //   {title: 'Тревожность', description: 'Склонность человека часто переживать сильную тревогу по относительно малым поводам'},
  //   {title: 'Терапия семьи', description: 'Работа с семейными запросами, такими как: наладить отношения между супругами, скорректировать детско-родительские отношения, помощь при разводе, укрепить брак, помощь в прохождении семейных кризисов и т.д.'},
  //   {title: 'Экзистенциальные вопросы', description: 'Вопросы о жизни и смерти, вопросы смысле, свободе, существовании.' 
  //   },
  //   {title: 'Эмоциональная регуляция', description: 'Умение самостоятельно влиять на своё эмоциональное состояние.'},
  //   {title: 'Познать себя', description: 'Стать осознаннее, понимать свои мотивы, “больные” места, знать свои сильные и слабые стороны.'},
  //   {title: 'Гармонизация отношений в семье', description: 'Умение выстроить диалог с супругом и детьми, больше доверять, коррекция привязанности и т.д.'},
  //   {title: 'Аддиктивное поведение', description: 'Один из типов девиантного поведения с формированием стремления к уходу от реальности путем искусственного изменения своего психического состояния посредством приема некоторых веществ или постоянной фиксации внимания на определенных видах деятельности.'},
  // ]
  const {  program } = useContext(ContextStaticProps)
  
  const requests = program?.requests
  return (
    <>
    {requests?.length > 0  && (
      <section className={stls.section}>
      <Wrapper>
        <h2 className={stls.title}>По итогу курса Вы будете работать с запросами:</h2>
      <div className={stls.cardList}>
      {requests.map((request, index) => (
        <RequestsYouWillFace key={index} title={request.title} description={request.description} index={index} />
      ))}
    </div>
      </Wrapper>
    </section>
    )}
    </>
  )
}

export default RequestsCard
