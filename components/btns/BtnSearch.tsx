import stls from '@/styles/components/btns/BtnSearch.module.sass'
import { IconSearch } from '@/components/icons'

const BtnSearch = () => {
  return (
    <button className={stls.container}>
      <IconSearch />
      <span>Поиск</span>
    </button>
  )
}

export default BtnSearch
