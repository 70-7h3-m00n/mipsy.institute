import stls from '@/styles/components/general/StudyFieldSlugFilter.module.sass'
import classNames from 'classnames'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'

interface PropsFilter {
  studyField: string
  studyFieldSlug: string
}

const StudyFieldSlugFilter = ({
  props,
  slug,
  setSelectedField,
  selectedField
}: {
  props: PropsFilter[]
  slug: string
  selectedField: {
    studyField: string | string[]
    studyFieldSlug: string | string[]
  }
  setSelectedField: Dispatch<
    SetStateAction<{
      studyFieldSlug: string | string[]
      studyField: string | string[]
    }>
  >
}) => {

  const [fieldInLocalStore, setFieldInLocalStore] = useState('')
  let uniqueCategories = [
    ...new Set(props?.map(seminar => seminar.studyFieldSlug))
  ]
  const uniqueCategoriesWithField = uniqueCategories.map(slug => ({
    studyFieldSlug: slug,
    studyField:
      props.find(seminar => seminar.studyFieldSlug === slug)?.studyField || ''
  }))
  
  const firstEl = [{ studyFieldSlug: '', studyField: 'Все cтатьи' }]

  let cat = firstEl.concat(uniqueCategoriesWithField)

  const handleFilter = el => {
    const selectedSlug = el
    localStorage.setItem('selectedField', selectedSlug.studyField);
    localStorage.setItem('selectedFieldSlug', selectedSlug.studyFieldSlug);
    setSelectedField(selectedSlug)
  }

  return (
    <div>
      <div className={stls.container}>
        {cat?.map(el => (
          <p
            onClick={() => handleFilter(el)}
            className={classNames({
              [stls.category]: true,
              [stls.active]: el.studyFieldSlug === selectedField.studyFieldSlug
            })}
            key={el.studyField}>
            {el.studyField}
          </p>
        ))}
      </div>
    </div>
  )
}

export default StudyFieldSlugFilter
