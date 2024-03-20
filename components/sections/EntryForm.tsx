import { FormAlpha } from '@/components/forms'
import Wrapper from '@/components/layout/Wrapper'
import stls from '@/styles/components/sections/EntryForm.module.sass'
import IconGratefullPortal from '@/components/icons/IconGratefullPortal'
import Horn from '@/components/imgs/general/Horn'
import ImgEntryForm from '@/components/imgs/general/ImgEntryForm'
import TwoColumns from '@/components/layout/TwoColumns'

const EntryForm = () => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>Заявка на поступление</h2>
        <div className={stls.content}>
          <div className={stls.smallOne}>
            <IconGratefullPortal xsmall />
          </div>
          <div className={stls.smallTwo}>
            <IconGratefullPortal xsmall />
          </div>
          <div className={stls.smallThree}>
            <IconGratefullPortal tenPx />
          </div>
          <div className={stls.medium}>
            <IconGratefullPortal thirtyPx />
          </div>
          <div className={stls.mediumTwo}>
            <IconGratefullPortal thirtyPx />
          </div>
          <div className={stls.big}>
            <IconGratefullPortal fiftyPx />
          </div>
          <TwoColumns>
            <div className={stls.imgContainer}>
              <div id={stls.entryText}>
                <div id={stls.header}>Подберем программу под ваш запрос</div>
                <div id={stls.description}>
                  Остались вопросы или не можете определиться с курсом? Оставьте
                  свои контакты, сотрудник приёмной комиссии с вами свяжется и
                  проконсультирует
                </div>
                <ImgEntryForm />
              </div>
            </div>
            <div className={stls.form}>
              <FormAlpha inProfessions promo cta='Записаться' />
            </div>
            <Horn />
          </TwoColumns>
        </div>
      </Wrapper>
    </section>
  )
}

export default EntryForm
