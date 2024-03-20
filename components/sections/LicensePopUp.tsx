import stls from '@/styles/components/sections/LicensePopUp.module.sass'

import Popup from 'reactjs-popup'
import IconRusLicense from '../icons/IconRusLicense'
import { IconAtom } from '../icons'
import IconLoupe from '../icons/IconLoupe'
import { PopupImage } from '../popups'
import ImgLicence from '../imgs/legal/ImgLicence'
import License from '../imgs/legal/License'

const LicensePopUp = ({showFullText=false}) => {
  return (
    <div className={stls.btn}>
    <Popup
      trigger={
        <div className={stls.trig}>
          {/* <span className={stls.img}> */}
          <div className={!showFullText ? stls.license : stls.cuttedLicense}>
            <div className={stls.leftLicense}>
              <span className={stls.licenseTitle}>
                Образовательная
                <br />
                
                
              </span>
              <span className={stls.edu}>
                №041363
                </span>
              <div className={stls.iconRus}>
                <IconRusLicense />
              </div>
              <div className={stls.iconAtom}>
                <IconAtom />
              </div>
            </div>
            <div className={stls.rightLicense}>
              <div className={stls.card}>
                <License />
              </div>
              <div className={stls.loupe}>
                <IconLoupe />
              </div>
            </div>
          </div>
        </div>
      }
      modal
      lockScroll
      nested
      closeOnDocumentClick>
      {close => <PopupImage image={<ImgLicence />} close={close} />}
    </Popup>
    </div>
  )
}

export default LicensePopUp
