import stls from '@/styles/components/sections/CheckLicense.module.sass'
import { routes } from '@/config/index'
import Wrapper from '@/components/layout/Wrapper'
import { BtnAlpha } from '@/components/btns'
import { ImgFullProgram1 } from '@/components/imgs'
import IconSpiral from '../icons/IconSpiral'
import IconSmallSpiral from '../icons/IconSmallSpiral'

const CheckLicense = () => {
  return (
    <div className={stls.container}>
      <Wrapper>
        <div className={stls.wrapper}>
          <div className={stls.icon}>
            <IconSpiral />
          </div>
          <div className={stls.smallSpiral}>
            <IconSmallSpiral />
          </div>
            <div className={stls.img}>
            <ImgFullProgram1 />
            </div>
          
          <div>
            <div className={stls.text}>
              <h3 className={stls.title}>Проверьте лицензии</h3>
              <p className={stls.p}>
                Вы можете проверить действующие лицензии на сайте РОСОБРНАДЗОРА
              </p>
            </div>
            <div className={stls.btn}>
              <BtnAlpha
                text='Проверить'
                href={routes.external.license}
                target='_blank'
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default CheckLicense
