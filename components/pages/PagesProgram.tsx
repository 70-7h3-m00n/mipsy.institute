import {
  HeroProgram,
  Opportunities,
  Desc,
  HowProcessGoes,
  WhatYouWillLearn,
  ForWhom,
  YourDiploma,
  BriefProgramContents,
  FullProgram,
  YourResume,
  Cta,
  Teachers,
  HelpWithEmployment,
  YourFutureJob,
  StudyCost,
  Faq,
  PageNavigation,
  Reviews,
} from '@/components/sections'
import list from '@/data/general/list'
import { discount } from '@/data/price'
import { sortBasedOnNumericOrder, sortReviewsCreatedAtASC } from '@/helpers/index'
import stls from '@/styles/components/sections/HowProcessGoes.module.sass'
import { TypeLibReviews } from '@/types/index'
import { useEffect, useRef, useState } from 'react'
import ButtonToTop from '../sections/ButtonToTop'
import ProgramOverview from '../sections/ProgramOverview'
import RequestsCard from '../sections/RequestsCard'
import listOnCourses from '@/data/general/listOnCourses'
import WhyYouShouldStartPsychology from '../sections/WhyYouShouldStartPsychology'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import WhyYouShouldStartPsychologyDesktop from '../sections/WhyYouShouldStartPsychologyDesktop'

interface Breadcrumb {
  label: string;
  path: string;
}

type PagesProgramType = {
  ofType: 'course' | 'profession',
  reviews: TypeLibReviews,
  programOverview: string,
  breadcrumbs: Breadcrumb[],
  slug:string
}

const PagesProgram = ({ ofType = null, reviews, programOverview, breadcrumbs, slug }: PagesProgramType) => {
  const processRef = useRef(null)
  const diplomaRef = useRef(null)
  const planRef = useRef(null)
  const teachersRef = useRef(null)
  const resumeRef = useRef(null)
  const costRef = useRef(null)
  const reviewsRef = useRef(null)
  const faqRef = useRef(null)

  const [showDescription, setShowDescription] = useState(true)

  const toggleOverview = () => {
    setShowDescription(!showDescription);
  };

  const reviewsSorted = sortBasedOnNumericOrder({
    reviews: sortReviewsCreatedAtASC({ reviews })
  })

  const subtitle = 
    <>
      <p className={stls.leftTitle}>
        Обучение осуществляется по заочной форме с применением
        дистанционных<span className={stls.star}>*</span> технологий. Лекции, общение, тестирование проходят
        в онлайн формате через образовательную платформу
      </p>
    </>

  const checkSlug = [
    'pedagog-psiholog',
    'nejropsiholog'
  ]

  const isDesktopLayout = useBetterMediaQuery('(min-width: 769px)')

  
  return (
    <>
    <ButtonToTop />
      <HeroProgram breadcrumbs={breadcrumbs} />
      <PageNavigation 
      ofType={ofType}
      processRef={processRef} 
      diplomaRef={diplomaRef}
      planRef={planRef}
      teachersRef={teachersRef}
      resumeRef={resumeRef}
      costRef={costRef}
      reviewsRef={reviewsRef}
      faqRef={faqRef}/>
      {isDesktopLayout &&<WhyYouShouldStartPsychologyDesktop toggleOverview={toggleOverview} showDescription={showDescription} programOverview={programOverview} />} 
      {!isDesktopLayout && <WhyYouShouldStartPsychology programOverview={programOverview} toggleOverview={toggleOverview} showDescription={showDescription}/>}
      {programOverview && <ProgramOverview showDescription={showDescription} toggleOverview={toggleOverview}/>}

      {checkSlug.includes(slug) ? (
        <>
        
      <WhatYouWillLearn title={'Чему вы научитесь'}  />
      <ForWhom />
        </>
      ) : (
        <>
        <ForWhom />
      <WhatYouWillLearn title={'Чему вы научитесь'}  />
      </>
      )}
      <HowProcessGoes processRef={processRef} list={ofType === 'course'? listOnCourses : list} subtitle={subtitle} />
      <YourDiploma diplomaRef={diplomaRef} ofType={ofType} />
      <BriefProgramContents planRef={planRef} />
      <FullProgram />
      <Teachers teachersRef={teachersRef} title={'Преподаватели программы'} />
      {ofType !== 'course' && <YourResume resumeRef={resumeRef} />}
      <RequestsCard />
      
      <Cta
        title={'Начните обучаться со скидкой'}
        desc={`Забронируйте программу по спеццене — со скидкой ${discount.substring(
          1
        )}`}
        cta='reserve'
      />

      <StudyCost costRef={costRef} />
      <Reviews reviewsRef={reviewsRef} reviews={reviewsSorted} />
      <Faq faqRef={faqRef}/>
      
    </>
  )
}

export default PagesProgram
