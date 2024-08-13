import {
  HeroProgram,
  HowProcessGoes,
  WhatYouWillLearn,
  ForWhom,
  BriefProgramContents,
  FullProgram,
  YourResume,
  Cta,
  Teachers,
  StudyCost,
  Faq,
  PageNavigation,
  Reviews,
} from '@/components/sections'
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
import { useRouter } from 'next/router'
import listOnKonsultant from '@/data/general/listOnKonsultant'
import listOnKTP from '@/data/general/listOnKTP'
import listOnMediator from '@/data/general/listOnMediator'
import listOnPsychoSomatic from '@/data/general/listOnPsychoSomatic'
import EntryForm from '../sections/EntryForm'

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

  const router = useRouter()
  let subtitle
  let list

  switch (router.query.slug) {
    case 'psiholog-konsultant':
      subtitle = (
        <p className={stls.leftTitle}>
      Слушатели обучаются в комфортной заочной форме с помощью современных дистанционных<span className={stls.star}>*</span> технологий. На образовательной платформе можно удаленно в удобное время и в любом темпе изучать материалы, проходить тесты, общаться с преподавателями и сокурсниками.
      </p>
      );
      list = listOnKonsultant;
      break;
  
    case 'kognitivno-povedencheskij-psihoterapevt':
      subtitle = (
        <p className={stls.leftTitle}>
      Процесс обучения осуществляется дистанционно в заочной<span className={stls.star}>*</span> форме через онлайн-платформу, что позволит вам учиться в удобном темпе из любой точки планеты и сочетать обучение с работой.
      </p>
      );
      list = listOnKTP; 
      break;
  
    case 'mediator':
      subtitle = (
        <p className={stls.leftTitle}>
      Вам больше не придется тратить время и деньги на дорогу в учебное заведение и рано вставать, чтобы успеть на урок.
Прослушивание лекций, прохождение тестов, общение с педагогами и другими студентами осуществляется через дистанционную
<span className={stls.star}>*</span> образовательную платформу и в удобном вам темпе.
      </p>
      );
      list = listOnMediator; 
      break;
  
    case 'psihosomatika-i-telesnaya-psihoterapiya':
      subtitle = (
        <p className={stls.leftTitle}>
      Обучение на курсах дистанционное
<span className={stls.star}>*</span>, а значит, вы сможете сами планировать свое время и ни от кого не зависеть. Цифровая образовательная платформа обеспечит доступ к методическим материалам и тестам, а также объединит участников процесса обучения для общения и обсуждения текущих вопросов.
      </p>
      );
      list = listOnPsychoSomatic; 
      break;
  
    default:
      subtitle = (
        <></>
      );
      list = ''; 
      break;
  }

  const checkSlug = [
    'pedagog-psiholog',
    'nejropsiholog'
  ]

  const isDesktopLayout = useBetterMediaQuery('(min-width: 769px)')

  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')

  return (
    <>
    <ButtonToTop />
      <HeroProgram breadcrumbs={breadcrumbs} />
      <PageNavigation 
      ofType={ofType}
      processRef={processRef} 
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
      <EntryForm pt={isMobileAndTabletLayout ? 0 : 90} pb={ isMobileAndTabletLayout ? 60 : 0}/>
      <Reviews reviewsRef={reviewsRef} reviews={reviewsSorted} />
      <Faq faqRef={faqRef}/>
      
    </>
  )
}

export default PagesProgram
