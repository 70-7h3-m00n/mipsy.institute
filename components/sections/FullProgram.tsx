import stls from '@/styles/components/sections/FullProgram.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import { ImgFullProgram1 } from '@/components/imgs'
import PopupTrigger from '@/components/general/PopupTrigger'

const FullProgram = () => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.wrapper}>
          <div className={stls.img}>
            <ImgFullProgram1 />
          </div>
          <div className={stls.text}>
            <h2 className={stls.title}>Вопрос по программе</h2>
            <p className={stls.p}>
              Остались вопросы по программе или конкретному модулю? Напишите нам в форме обратной связи.
            </p>
          </div>
          <div className={stls.btn}>
            <PopupTrigger btn='alpha' cta='programQuestion' />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default FullProgram
