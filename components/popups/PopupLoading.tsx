import stls from '@/styles/components/popups/PopupProgram.module.sass'
import Link from 'next/link'
import ForPopup from '../imgs/general/ForPopup'
import ProgramAdmission from '../program/ProgramAdmission'


const PopupLoading = () => {

  return (
    <div className={stls.container}>
      <p>Отправляем форму</p>
    </div>
  )
}

export default PopupLoading