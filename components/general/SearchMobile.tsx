import convertEnglishToRussian from '@/helpers/convertEnglishToRussian'
import getProgramsData from '@/lib/data/getProgramsData'
import styles from '@/styles/components/general/SearchMobile.module.sass'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import CardTooltip from '../cards/CardTooltip'
import { IconSearchAlt } from '../icons'
import StudyFields from './StudyFields'

export default function SearchMobile() {
  const [showModal, setShowModal] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const modalRef = useRef<HTMLInputElement>(null)
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setShowModal(true)
  };

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

  const handleOutsideClick = useCallback((event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShowModal(false);
      setSearchQuery('');
    }
  }, [modalRef, showModal]);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleInputClick = () => {
    setShowModal(true);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const clickHandler = () => {
    setSearchQuery('')
    setShowModal(false)
  }

  

  return (
    <div className={styles.box}>
    <div className={styles.container}>
      <input
      ref={inputRef}
      name='search'
      onFocus={handleFocus}
      onChange={handleInputChange}
      value={searchQuery}
      placeholder='Поиск' 
      onClick={handleInputClick}/>
      <div className={styles.icon}>
        <IconSearchAlt />
      </div>
    </div>
    {showModal && 
      <div ref={modalRef} className={styles.modal}>
        
        {(searchQuery && filteredPrograms.length > 0)  && (
            <h1 className={styles.searchResults}>Результаты поиска</h1>
          )}
          {filteredPrograms.length === 0 && searchQuery && (
            <div className={styles.notFound}>
              <p className={styles.sorryText}>К сожалению, по вашему запросу ничего не найдено, но вы можете ознакомиться с другими нашими направлениями:</p>
            </div>
          )}
          <div onClick={clickHandler} className={styles.menuButtons}>
        {(!searchQuery || filteredPrograms.length === 0) && <StudyFields smallText flexend />}
        </div>
        <div className={styles.card}>
            {searchQuery &&
              filteredPrograms?.slice(0, 4).map((el, i) => (
                <React.Fragment key={el.id}>
                  <CardTooltip  profession={el} 
                  clickHandler={clickHandler}
                  />
                </React.Fragment>
              ))}
          </div>
          
      </div>}
    
    </div>
  )
}
