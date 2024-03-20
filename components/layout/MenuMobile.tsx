import stls from '@/styles/components/layout/MenuMobile.module.sass'
import { useContext } from 'react'
import Link from 'next/link'
import cn from 'classnames'
import { routes } from '@/config/index'
import MenuContext from '@/context/menu/menuContext'
import Wrapper from '@/components/layout/Wrapper'
import PopupTrigger from '@/components/general/PopupTrigger'
import Logo from '@/components/general/Logo'
import {
  BtnClose,
  BtnPhone,
  BtnVk,
  BtnFb,
  BtnYt,
  BtnWhatsapp,
  BtnTelegram,
  BtnOk
} from '@/components/btns'
import { IconMoreThan } from '@/components/icons'
import BtnDzen from '../btns/BtnDzen'

const MenuMobile = () => {
  const { menuIsOpen, openMenu, closeMenu, toggleMenu } =
    useContext(MenuContext)

  const links = [
    {
      text: 'Направления обучения',
      href: routes.front.programs,
      withIcon: true
    },
    { text: 'Преподаватели', href: routes.front.teachers, withIcon: false },
    { text: 'Вебинары', href: routes.front.webinars, withIcon: false },
    { text: 'Отзывы', href: routes.front.reviews, withIcon: false },
    { text: 'Об институте', href: routes.front.about, withIcon: false },
    {
      text: 'Сведения об образовательной организации',
      href: routes.front.legal,
      withIcon: false
    }
  ]

  return (
    <div
      className={cn({
        [stls.container]: true,
        [stls.menuIsOpen]: menuIsOpen
      })}>
      <Wrapper>
        <div className={stls.row}>
          <Logo atHeader />
          <BtnClose />
        </div>
        <nav className={stls.nav}>
          <ul className={stls.navList}>
            {links.map((item, idx) => (
              <li key={item.text + idx} className={stls.navItem}>
                <Link href={item.href}>
                  <a onClick={closeMenu}>
                    <span>{item.text}</span>
                    {item.withIcon && <IconMoreThan small cnu />}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={stls.cta}>
          <p className={stls.divName}>Приемная комиссия:</p>
          <BtnPhone withNumber alterNumber />
          {/* <p>+7(800)600-29-03</p> */}
          <p className={stls.divName}>Кураторский отдел:</p>
          <BtnPhone studyDivision withNumber/>
          {/* <p>+7(499)110-82-11</p> */}
          
          <PopupTrigger btn='epsilon' cta='callMeBack' />
        </div>
        <p>Москва, Шаболовка улица 34с2</p>
        <div className={stls.sm}>
          <BtnVk mlzero />
          <BtnWhatsapp />
          <BtnTelegram />
          <BtnYt />
          <BtnOk />
          <BtnDzen />
          {/* <BtnFb />
          <BtnYt /> */}
        </div>
      </Wrapper>
    </div>
  )
}

export default MenuMobile
