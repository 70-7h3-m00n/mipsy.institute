import stls from '@/styles/components/sections/Hero.module.sass'
import 'reactjs-popup/dist/index.css'
import Wrapper from '@/components/layout/Wrapper'
import TwoColumns from '@/components/layout/TwoColumns'
import ProsList from '@/components/general/ProsList'
import PopupTrigger from '@/components/general/PopupTrigger'
import IconGratefullPortal from '../icons/IconGratefullPortal'
import IconHero from '../icons/IconHero'
import IconHeroWave from '../icons/IconHeroWave'

const Hero = () => {
  let hiddenGemCount = 0
  const hiddenGem = e => {
    if (hiddenGemCount < 7) {
      hiddenGemCount++
    } else {
      const el = e.currentTarget
      setTimeout(() => {
        el.classList.remove(stls.hiddenGem)
        hiddenGemCount = 0
      }, 6000)
      el.classList.add(stls.hiddenGem)
    }
  }
  return (
    <section className={stls.container}>
      <div className={stls.bg}></div>
      
      <Wrapper>
      <div className={stls.leftbg}>
      </div>
      <div className={stls.content}>
        {/* <div className={stls.icon} onClick={e => hiddenGem(e)}>
          <IconAtom regular crho />
        </div> */}
        <TwoColumns>
          <div className={stls.left}>
            <h1 className={stls.title}>Онлайн-институт психологии</h1>
            <p className={stls.desc}>
            Освойте востребованную профессию психолога или повысьте квалификацию вместе с МИП
            </p>
            <div className={stls.btns}>
              <div className={stls.btn}>
                <PopupTrigger btn='alpha' cta='signUpForCourse' />
              </div>
              <div className={stls.btn}>
                <PopupTrigger btn='beta' cta='askQuestion' />
              </div>
            </div>
          </div>
          <div className={stls.right}>
            <div className={stls.img}>
              <IconHero />
            </div>
            <div className={stls.portals}>
              <div className={stls.smallOne}>
                <IconGratefullPortal thirtyPx />
              </div>
              <div className={stls.pointShadow}>

              </div>
              <div className={stls.smallTwo}>
                <IconGratefullPortal xsmall/>
              </div>
              <div className={stls.xsmallOne}>
                <IconGratefullPortal xsmall/>
              </div>
              <div className={stls.xsmallTwo}>
                <IconGratefullPortal xsmall/>
              </div>
              <div className={stls.medium}>
                <IconGratefullPortal xsmall/>
              </div>
              <div className={stls.mediumMobile}>
                <IconGratefullPortal medium/>
              </div>
              <div className={stls.big}>
                <IconGratefullPortal medium />
              </div>
              <div className={stls.tenPx}>
                <IconGratefullPortal tenPx />
              </div>
              <div className={stls.tenPxTwo}>
                <IconGratefullPortal tenPx />
              </div>
              <div className={stls.thirtyPx}>
                <IconGratefullPortal thirtyPx />
              </div>
            </div>
            <div className={stls.mobileBtns}>

            <div className={stls.mobileBtn}>

            
            <PopupTrigger btn='alpha' cta='signUpForCourse' />
            </div>
            <div className={stls.mobileBtn}>
            <PopupTrigger btn='beta' cta='askQuestion' />
            </div>
            </div>
          </div>
          
          <div className={stls.iconWave}>
              <IconHeroWave />
            </div>
        </TwoColumns>
        <div className={stls.prosList}>
              <ProsList />
            </div>
            </div>
      </Wrapper>
    </section>
  )
}

export default Hero
