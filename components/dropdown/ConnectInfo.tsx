import React from 'react'
import stls from '@/styles/components/dropdownMenu/ConnectInfo.module.sass'
import classNames from 'classnames'
import IconOrangeDot from '../icons/IconOrangeDot'
import PopupTrigger from '../general/PopupTrigger'

interface Icon1Props {
  className?: string
  selected?: boolean
}

const ConnectInfo: React.FC<Icon1Props> = ({ className, selected = false }) => {
  const infoClasses = classNames(
    stls.container,
    { [stls.selected]: selected },
    className
  )
  return (
    <div className={infoClasses}>
      <div className={stls.wrapper}>
        <p className={stls.title}>Приемная комиссия:</p>
        <div className={stls.iconWrapper}>
          <IconOrangeDot />
          <a className={stls.phoneNumber} href='tel:+7-499-110-86-32'>
            +7 (499) 110-86-32
          </a>
        </div>
        <div className={stls.iconWrapper}>
          <IconOrangeDot />
          <a className={stls.phoneNumber} href='tel:+7-800-600-29-03'>
            +7 (800) 600-29-03
          </a>
        </div>

        <p>Написать в 
          <a className={stls.whatsUpNumber}
              target="_blank" rel="noopener noreferrer" href='https://api.whatsapp.com/send/?phone=%2B74991108632&amp;text&amp;type=phone_number&amp;app_absent=0'> WhatsApp</a>
              </p>
        <p className={stls.title}>Кураторский отдел:</p>
        <div className={stls.iconWrapper}>
          <IconOrangeDot />
          <a className={stls.phoneNumber} href='tel:+7-499-110-82-11'>
            +7 (499) 110-82-11
          </a>
        </div>
        <p>Написать в 
          <a className={stls.whatsUpNumber}
              target="_blank" rel="noopener noreferrer" href='https://api.whatsapp.com/send/?phone=%2B74991108211&amp;text&amp;type=phone_number&amp;app_absent=0'> WhatsApp </a>
              
        </p>
        <div className={stls.callBack}>
      <PopupTrigger btn='epsilon' cta='callMeBack' />
      </div>
      </div>
      
    </div>
  )
}

export default ConnectInfo
