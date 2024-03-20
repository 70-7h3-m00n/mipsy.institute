import stls from '@/styles/components/btns/BtnFilter.module.sass'
import { IconFilter } from '@/components/icons'

const BtnFilter = () => {
  return (
    <button className={stls.container}>
      <IconFilter />
      <span>Фильтр</span>
    </button>
  )
}

export default BtnFilter
