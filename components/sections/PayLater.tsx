import stls from '@/styles/components/sections/PayLater.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import { IconDoc } from '../icons'
import IconDocCircle from '../icons/IconDocCircle'
import IconThinArrow from '../icons/IconThinArrow'
import IconCircleStar from '../icons/IconCircleStar'
import IconBrain from '../icons/IconBrain'
import IconWallet from '../icons/IconWallet'
import IconNotice from '../icons/IconNotice'

const PayLater = () => {

  const list = [{
    id: 1,
    icon: <IconDocCircle />,
    text: <span>Оформите договор на обучение 
    в рассрочку 
    <span className={stls.boldText}> без переплат</span></span>
  }, {
    id: 2,
    icon: <IconBrain/>,
    text: <span><span className={stls.boldText}>Начните <br /> обучение </span>
    и получайте <br /> обратную связь</span>
  },{
    id: 3,
    icon: <IconWallet/>,
    text: <span>Вносите <span className={stls.boldText}>первый платёж спустя месяц,</span> убедившись 
    в качестве программы</span>
  }, {
    id: 4,
    icon: <IconNotice />,
    text: <span><span className={stls.boldText}>Продолжаете обучение </span><br />
    в комфортном <br /> темпе</span>
  }]
  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.titleWithIcon}>
          
          <h2>Обучайтесь сейчас –платите потом</h2>
          <div className={stls.circle}>
            <IconCircleStar />
          </div>
          
        </div>
        
        <p className={stls.payMonth}>Первый платёж только через месяц</p>
        <div className={stls.content}>
          {list.map((el, id) => (
            <div key={el.id} className={stls.contentBlock}>
              <div className={stls.arrow}>
              <IconThinArrow/>
              </div>
              
              <div className={stls.num}>
                <p>{id + 1}</p>
              </div>
              <div className={stls.text}>
                <div className={stls.docIcon}>
                  {el.icon}
                </div>
                
                <p>{el.text}</p>
              </div>
              
            </div>
          ))}
          

        </div>
      </Wrapper>
    </section>
  )
}

export default PayLater
