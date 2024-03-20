import stls from '@/styles/components/sections/Opportunities.module.sass'
import Wrapper from '@/components/layout/Wrapper'

const Opportunities = () => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>
          На фоне возросшего стресса растет и спрос на услуги психологов
        </h2>
      </Wrapper>
    </section>
  )
}

export default Opportunities
