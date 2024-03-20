import stls from '@/styles/components/cards/CardTeacher.module.sass'

const CardTeacher = ({ portrait, name, specialization, achievements }) => {
  return (
    <article className={stls.container}>
      <div className={stls.innerContainer}>

      
      <div className={stls.portrait}>{portrait}</div>
      <div className={stls.content}>
        <h3 className={stls.name}>{name}</h3>
        <p className={stls.specialization}>{specialization}</p>
        <p className={stls.achievements}>{achievements}</p>
      </div>
      </div>
    </article>
  )
}

export default CardTeacher
