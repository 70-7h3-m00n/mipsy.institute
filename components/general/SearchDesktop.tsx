import stls from '@/styles/components/general/SearchDesktop.module.sass'
import { IconArrowRight, IconSearchAlt } from '@/components/icons'
import { useContext } from 'react'
import { ContextStaticProps } from '@/context/index'

type handleSearch = {
  e: any
  setSearchTerm: any
  programs: any[]
}

const SearchDesktop = () => {
  const { programs, setSearchTerm, setFilteredPrograms } =
    useContext(ContextStaticProps)

  // TODO: figure out better types
  const handleOnChange = (e: any) => {
    const searchTerm = e.target.value || null
    setSearchTerm(searchTerm)

    if (searchTerm) {
      setFilteredPrograms([
        ...programs.filter(item =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      ])
    }
  }

  return (
    <div className={stls.container}>
      <input
        type='text'
        id='search'
        name='search'
        placeholder='Поиск программы'
        className={stls.input}
        onChange={handleOnChange}
      />
      <div className={stls.icon}>
        <IconArrowRight />
      </div>
    </div>
  )
}

export default SearchDesktop
