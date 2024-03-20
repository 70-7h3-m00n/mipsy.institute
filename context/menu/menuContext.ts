import { createContext } from 'react'

const menuContext = createContext({
  menuIsOpen: false,
  openMenu: () => {},
  closeMenu: () => {},
  toggleMenu: () => {}
})

export default menuContext
