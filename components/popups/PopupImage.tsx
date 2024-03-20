import stls from '@/styles/components/popups/PopupImage.module.sass'
import { BtnClose } from '@/components/btns'

const PopupImage = ({ image, close }) => {
  return (
    <span className={stls.container}>
      <span className={stls.close}>
        <BtnClose onClick={close} />
      </span>
      <span className={stls.image}>{image}</span>
    </span>
  )
}

export default PopupImage
