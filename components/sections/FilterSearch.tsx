import stls from '@/styles/components/sections/FilterSearch.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import { BtnSearch, BtnFilter } from '@/components/btns'

const FilterSearch = () => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.btns}>
          <div className={stls.btn}>
            <BtnFilter />
          </div>
          <div className={stls.btn}>
            <BtnSearch />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default FilterSearch
