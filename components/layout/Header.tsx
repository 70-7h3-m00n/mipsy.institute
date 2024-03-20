import stls from '@/styles/components/layout/Header.module.sass'
import { useEffect, useContext } from 'react'
import Link from 'next/link'
import { routes, company } from '@/config/index'
import { handleSwipedEvt } from '@/helpers/index'
import MenuContext from '@/context/menu/menuContext'
import Wrapper from '@/components/layout/Wrapper'
import MenuMobile from '@/components/layout/MenuMobile'
import Logo from '@/components/general/Logo'
import BtnPhone from '@/components/btns/BtnPhone'
import BtnHumburger from '@/components/btns/BtnHumburger'
import { BtnFields } from '@/components/btns'
import IconsDropDown from '../dropdown/IconsDropDown'
import SearchProgramsDropDown from '../dropdown/SearchProgramsDropDown'
import { useRouter } from 'next/router'


const Header = () => {
  const { menuIsOpen, openMenu, closeMenu, toggleMenu } =
    useContext(MenuContext)

  useEffect(() => {
    handleSwipedEvt({ menuIsOpen, closeMenu })
  }, [menuIsOpen, closeMenu])
  const router = useRouter()
  return (
    <header className={stls.container}>
      <MenuMobile />
      <Wrapper>
        {/* <div className={stls.top}> */}
          {router.route === '/' ? (
            <div className={stls.top}>
            <div className={stls.topleft}>
            <Link href={routes.front.legal}>
              <a className={stls.linkInfo}>
                Сведения об образовательной организации
              </a>
            </Link>
          </div>
          </div>
          ) : (
            ''
          )}
        {/* </div> */}
        <div className={stls.row}>
          <Logo atHeader />
          <div className={stls.btns}>
            <BtnPhone />
            <BtnHumburger />
          </div>
          <div className={stls.btnFields}>
            <BtnFields />
          </div>
          <SearchProgramsDropDown />
          <IconsDropDown />
        </div>
      </Wrapper>
    </header>
  )
}

export default Header
