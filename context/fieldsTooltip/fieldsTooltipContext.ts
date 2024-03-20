import { createContext } from 'react'

const fieldsTooltipContext = createContext({
  fieldsTooltipIsOpen: false,
  openFieldsTooltip: () => {},
  closeFieldsTooltip: () => {},
  toggleFieldsTooltip: () => {}
})

export default fieldsTooltipContext
