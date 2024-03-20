import stls from '@/styles/components/sections/AboutList.module.sass'



const AboutList = () => {
  const list = [
    {title:'2 500 ', desc:'Студентов уже обучили'},
    {title:'', desc:''},
    {title:'ТОП 5', desc:'Входим в пятерку лучших институтов  по направлению психология'},
    {title:'15 лет ', desc:'На рынке образования'},
    {title:'Более 70', desc:'преподавателей - практиков'},
    {title:'160 000 минут', desc:'видео - лекций студийного качества'},
  ]
  return (
    <div className={stls.container}>
      {list.map(el => (
        <div className={stls.item} key={el.title}>
          <span className={stls.filter}></span>
          <p className={stls.title}>{el.title}</p>
          <p className={stls.desc}>{el.desc}</p>
        </div>
      ))}
    </div>
  )
}

export default AboutList