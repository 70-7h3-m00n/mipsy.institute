import stls from '@/styles/components/sections/Programs.module.sass'
import { useContext } from 'react'
import { useRouter } from 'next/router'
import cn from 'classnames'
import { filterProgramsByStudyField } from '@/helpers/index'
import Wrapper from '@/components/layout/Wrapper'
import ProgramsFilters from '@/components/layout/ProgramsFilters'
import { ContextStaticProps } from '@/context/index'
import Courses from '@/components/programs/Courses'
import Professions from '@/components/programs/Professions'
import SearchMobile from '../general/SearchMobile'
import { useMediaQuery } from 'react-responsive'

type ProgramsType = {
  ofType?: 'course' | 'profession'
  withTitle?: boolean
  withBtn?: boolean
  withQty?: boolean
  threerow?: boolean
  withFilters?: boolean
  max?: number
  onMain?: boolean
}

const Programs = ({
  ofType,
  withTitle = false,
  withBtn = false,
  withQty = false,
  threerow = false,
  withFilters = false,
  max,
  onMain = false
}: ProgramsType) => {
  const {
    courses,
    professions,
    curProgramsStudyFieldSlug,
    filteredPrograms,
    searchTerm
  } = useContext(ContextStaticProps)

  const router = useRouter()

  const coursesFiltered =
    curProgramsStudyFieldSlug &&
    filterProgramsByStudyField({
      programs: courses,
      studyFieldSlug: curProgramsStudyFieldSlug
    })

  const professionsFiltered =
    curProgramsStudyFieldSlug &&
    filterProgramsByStudyField({
      programs: professions,
      studyFieldSlug: curProgramsStudyFieldSlug
    })

    const targetTitles = [
      "Психолог-консультант",
      "Психолог-диетолог. Нутрициолог",
      "Когнитивно-поведенческий психотерапевт",
      "Практический психолог с доп. квалификацией Психолог-психотерапевт",
      "Клинический психолог",
      "Детский психолог",
      "Психосоматика и телесная психотерапия",
      "Гештальт-терапевт"
    ];
  
    const rearrangeArray = (professions, targetTitles) => {
      const resultArray = [];
      const remainingArray = [];
    
      for (const item of professions) {
        if (targetTitles.includes(item.title)) {
          resultArray.push(item);
        } else {
          remainingArray.push(item);
        }
      }
    
      return resultArray.concat(remainingArray);
    };

  const data = {
    courses: curProgramsStudyFieldSlug ? coursesFiltered : courses,
    professions: curProgramsStudyFieldSlug ? professionsFiltered : rearrangeArray(professions, targetTitles)
  }

  // useEffect(() => {
  //   ofType === 'course' &&
  //     data.courses.length === 0 &&
  //     router.replace(routes.front.courses)
  //   ofType === 'profession' &&
  //     data.professions.length === 0 &&
  //     router.replace(routes.front.professions)
  // }, [])

  const filteredProgramsIds = filteredPrograms.map(item => item.id)

  let filteredData = {
    courses: data.courses.filter(item => {
      let include = false
      filteredProgramsIds.forEach(id => {
        if (item.id === id) include = true
      })
      if (include) return item
    }),
    professions: data.professions.filter(item => {
      let include = false
      filteredProgramsIds.forEach(id => {
        if (item.id === id) include = true
      })
      if (include) return item
    })
  }

  const isMobileTabletLayout = useMediaQuery({ query: '(max-width: 768px)' })

  if (max) {
    data.courses = data.courses.filter((item, idx) => idx < max)
    data.professions =data.professions.filter((item, idx) => idx < max)
    
  }
  // if (isMobileTabletLayout) {
  //   data.courses = data.courses.filter((item, idx) => idx < 3)
  // }
  return (
    <section
      className={cn({
        [stls.container]: true,
        [stls.withFilters]: withFilters
      })}>
      <Wrapper>
        {withFilters && (
          <div className={stls.filters}>
            <ProgramsFilters ofType={ofType} />
          </div>
        )}
        <div className={stls.content}>
        <SearchMobile />
          {withTitle && <h2 className={stls.title}>Наши программы</h2>}
          <div className={stls.programs}>
            {ofType === 'profession' &&
              (searchTerm
                ? filteredData.professions &&
                  filteredData.professions.length > 0
                : data.professions && data.professions.length > 0) && (
                <div className={stls.professions}>
                  <Professions
                    biggerTitle={!withTitle}
                    withBtn={withBtn}
                    professions={
                      searchTerm ? filteredData.professions : data.professions
                    }
                    withQty={withQty}
                    threerow={threerow}
                  />
                </div>
              )}
            {ofType === 'course' &&
              (searchTerm
                ? filteredData.courses && filteredData.courses.length > 0
                : data.courses && data.courses.length > 0) && (
                <div className={stls.courses}>
                  <Courses
                    biggerTitle={!withTitle}
                    withBtn={withBtn}
                    courses={searchTerm ? filteredData.courses : data.courses}
                    withQty={withQty}
                    threerow={threerow}
                  />
                </div>
              )}
            {!ofType &&
              (searchTerm
                ? filteredData.professions &&
                  filteredData.professions.length > 0
                : data.professions && data.professions.length > 0) && (
                <div className={stls.professions}>
                  <Professions
                    biggerTitle={!withTitle}
                    withBtn={withBtn}
                    professions={
                      searchTerm ? filteredData.professions : data.professions
                    }
                    withQty={withQty}
                    threerow={threerow}
                  />
                </div>
              )}
            {!ofType &&
              (searchTerm
                ? filteredData.courses && filteredData.courses.length > 0
                : data.courses && data.courses.length > 0) && (
                <div className={stls.courses}>
                  <Courses
                    biggerTitle={!withTitle}
                    withBtn={withBtn}
                    courses={searchTerm ? filteredData.courses : data.courses}
                    withQty={withQty}
                    threerow={threerow}
                  />
                </div>
              )}

            {searchTerm &&
              filteredData.courses.length === 0 &&
              filteredData.professions.length === 0 && (
                <>Кажется, что по вашему запросу ничего не нашлось</>
              )}
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default Programs
