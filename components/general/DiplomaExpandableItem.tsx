import stls from '@/styles/components/general/DiplomaExpandableItem.module.sass'
import { useState } from 'react'
import classNames from 'classnames'
import Popup from 'reactjs-popup'
import { IconDoc, IconMinus, IconPlus } from '@/components/icons'
import { PopupImage } from '@/components/popups'

const DiplomaExpandableItem = ({ title, diplomas, idx }) => {
  const [isOpen, setOpen] = useState(idx === 0 ? true : false)

  return (
    <li
      className={classNames({ [stls.container]: true, [stls.isOpen]: isOpen })}>
      <button className={stls.title} onClick={() => setOpen(!isOpen)}>
        <span className={stls.icon}>
          {isOpen ? <IconMinus /> : <IconPlus />}
        </span>
        <span className={classNames({ [stls.pTitle]: true, [stls.bold]: isOpen })}>
          {title}
        </span>
      </button>
      <div className={stls.diplomas}>
        <ul className={stls.list}>
          {diplomas &&
            diplomas.map((diploma, idx) => (
              <li key={diploma.title + idx} className={stls.item}>
                <Popup
                  trigger={
                    <button className={stls.trigger}>
                      <span className={stls.img}>{diploma.image}</span>
                      <span className={stls.label}>
                        <span className={stls.labelIcon}>
                          <IconDoc />
                        </span>
                        <span className={stls.diplomaTitle}>
                          {diploma.title}
                        </span>
                      </span>
                    </button>
                  }
                  className='DiplomaExpandableItem__popup'
                  modal
                  nested>
                  {close => <PopupImage image={diploma.image} close={close} />}
                </Popup>
              </li>
            ))}
        </ul>
      </div>
    </li>
  )
}

export default DiplomaExpandableItem
