import stls from '@/styles/components/btns/BtnClose.module.sass'
import { useContext } from 'react'
import MenuContext from '@/context/menu/menuContext'
import { IconClose, IconCloseCircle } from '@/components/icons'

const BtnClose = ({ onClick = null, iconCloseCircle = false }) => {
  const { closeMenu } = useContext(MenuContext)

  return (
    <button
      className={stls.container}
      onClick={onClick ? onClick : closeMenu}
      aria-label='Закрыть'>
      {iconCloseCircle ? <IconCloseCircle /> : <IconClose />}
    </button>
  )
}

export default BtnClose
