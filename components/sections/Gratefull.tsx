import stls from '@/styles/components/sections/Gratefull.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import TwoColumns from '../layout/TwoColumns'
import ThanksForApplication from './ThanksForApplication'
import JoinTgChannel from './JoinTgChannel'

const Gratefull = () => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <TwoColumns>
          <ThanksForApplication />
          <JoinTgChannel />
        </TwoColumns>
      </Wrapper>
    </section>
  )
}

export default Gratefull
