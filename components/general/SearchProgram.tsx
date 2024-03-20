import fieldsTooltipContext from '@/context/fieldsTooltip/fieldsTooltipContext'
import convertEnglishToRussian from '@/helpers/convertEnglishToRussian'
import getProgramsData from '@/lib/data/getProgramsData'
import { useContext, useEffect, useRef, useState } from 'react'
import CardTooltip from '../cards/CardTooltip'
import StudyFields from './StudyFields'
import stls from '@/styles/components/general/SearchProgram.module.sass'
import { BtnField } from '../btns'
import { IconSearchAlt } from '../icons'

export default function SearchProgram() {
  const { fieldsTooltipIsOpen, toggleFieldsTooltip, closeFieldsTooltip } =
    useContext(fieldsTooltipContext)

  const [searchQuery, setSearchQuery] = useState('')
  const [filteredPrograms, setFilteredPrograms] = useState([])
  const [programs, setPrograms] = useState([])

  useEffect(() => {
    const fetchPrograms = async () => {
      const allPrograms = await getProgramsData()
      setPrograms(allPrograms)
    }
    fetchPrograms()
  }, [])

  useEffect(() => {
    const filtered = programs.filter(program => {
      const programTitle = convertEnglishToRussian(program.title.toLowerCase())
      const query = convertEnglishToRussian(searchQuery.toLowerCase())
      return programTitle.includes(query)
    })
    setFilteredPrograms(filtered)
  }, [programs, searchQuery])

  const clickHandler = () => {
    setSearchQuery('')
    closeFieldsTooltip
  }

  const [isProgramsVisible, setIsProgramsVisible] = useState(false)

  const onFocusHandler = () => {
    setIsProgramsVisible(true)
  }

  const onBlurHandler = () => {
    setTimeout(() => {
      setSearchQuery('')
      setIsProgramsVisible(false)
    }, 100)
  }

  const programsRef = useRef(null)

  return (
    <div>
      {/* <button onClick={toggleFieldsTooltip}> */}
      <div className={stls.inputLoupe}>
        <input
          className={stls.searchInput}
          ref={programsRef}
          type='text'
          name='search'
          placeholder='Поиск'
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <div className={stls.icon}>
          <IconSearchAlt />
        </div>
      </div>
      {/* {btnShow && !searchQuery && <StudyFields />} */}
      {/* </button> */}
      {/* <div className={stls.card}> */}
      {isProgramsVisible && (
        <div className={stls.programs}>
          {filteredPrograms?.slice(0, 4).map((el, i) => (
            <>
              <CardTooltip profession={el} clickHandler={clickHandler} />
            </>
          ))}
          {filteredPrograms.length == 0 && (
            <>
              <p>К сожалению по вашему запросу ничего не найдено</p>
              <div className={stls.allPrograms}>
                <BtnField href='/programs'>
                  Ознакомиться со всеми направлениями
                </BtnField>
              </div>
            </>
          )}
        </div>
      )}
    </div>
    // </div>
  )
}
