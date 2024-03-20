import { useRef, useState, useEffect } from 'react'
import stls from '@/styles/components/sections/PageNavigation.module.sass'
import Wrapper from '@/components/layout/Wrapper'

const PageNavigation = ({ofType = null,processRef, diplomaRef, planRef, teachersRef, costRef, reviewsRef, resumeRef, faqRef}) => {
  const [activeSection, setActiveSection] = useState('')
  const navigationRef = useRef(null)
  const pointRef = useRef(null)
  const prevNavTop = useRef(0)
  const [stickyNav, setStickyNav] = useState(false)

  const sectionRefs = {
    process: processRef,
    diploma: diplomaRef,
    plan: planRef,
    teachers: teachersRef,
    resume: resumeRef,
    cost: costRef,
    reviews: reviewsRef,
    faq: faqRef,
  }

  const handleScrollToSection = section => {
    sectionRefs[section].current.scrollIntoView({ behavior: 'smooth' })
  }

  const handleScroll = () => {
    if (pointRef.current.getBoundingClientRect().y < -70) {
      setStickyNav(true)
    } else {
      setStickyNav(false)
      
      prevNavTop.current = 0
    }

    for (const [section, ref] of Object.entries(sectionRefs)) {
      if (ref.current && ref.current.getBoundingClientRect().top <= 53) {
          setActiveSection(section)
        
      } else if(!stickyNav) {
        setActiveSection('')
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [stickyNav])

  return (
    <section className={stls.container}>
      <Wrapper>
        
        <div className={stls.point} ref={pointRef}></div>
        <div
          className={`${stls.navigation} ${stickyNav ? stls.whiteLetters : ''}`}
          ref={navigationRef}>
          <ul>
            <li>
              <p
                className={activeSection === 'process' ? stls.active : ''}
                onClick={() => handleScrollToSection('process')}>
                Процесс обучения
              </p>
            </li>
            <li>
              <p
                className={activeSection === 'diploma' ? stls.active : ''}
                onClick={() => handleScrollToSection('diploma')}>
                Диплом
              </p>
            </li>
            <li>
              <p
                className={activeSection === 'plan' ? stls.active : ''}
                onClick={() => handleScrollToSection('plan')}>
                Учебный план
              </p>
            </li>
            <li>
              <p
                className={activeSection === 'teachers' ? stls.active : ''}
                onClick={() => handleScrollToSection('teachers')}>
                Преподаватели
              </p>
            </li>
            {ofType === 'profession' && (
              <li>
              <p
                className={activeSection === 'resume' ? stls.active : ''}
                onClick={() => handleScrollToSection('resume')}>
                Навыки
              </p>
            </li>
            )}
            
            <li>
              <p
                className={activeSection === 'cost' ? stls.active : ''}
                onClick={() => handleScrollToSection('cost')}>
                Стоимость
              </p>
            </li>
            <li>
              <p
                className={activeSection === 'reviews' ? stls.active : ''}
                onClick={() => handleScrollToSection('reviews')}>
                Отзывы
              </p>
            </li>
            <li>
              <p
                className={activeSection === 'faq' ? stls.active : ''}
                onClick={() => handleScrollToSection('faq')}>
                FAQ
              </p>
            </li>
          </ul>
        </div>
        <div
          className={`${stls.navigation} ${stickyNav ? stls.sticky : stls.hidden}`}
          ref={navigationRef}>
          <ul>
            <li>
              <p
                className={activeSection === 'process' ? stls.active : ''}
                onClick={() => handleScrollToSection('process')}>
                Процесс обучения
              </p>
            </li>
            <li>
              <p
                className={activeSection === 'diploma' ? stls.active : ''}
                onClick={() => handleScrollToSection('diploma')}>
                Диплом
              </p>
            </li>
            <li>
              <p
                className={activeSection === 'plan' ? stls.active : ''}
                onClick={() => handleScrollToSection('plan')}>
                Учебный план
              </p>
            </li>
            <li>
              <p
                className={activeSection === 'teachers' ? stls.active : ''}
                onClick={() => handleScrollToSection('teachers')}>
                Преподаватели
              </p>
            </li>
            {ofType === 'profession' && (
              <li>
              <p
                className={activeSection === 'resume' ? stls.active : ''}
                onClick={() => handleScrollToSection('resume')}>
                Навыки
              </p>
            </li>
            )}
            
            <li>
              <p
                className={activeSection === 'cost' ? stls.active : ''}
                onClick={() => handleScrollToSection('cost')}>
                Стоимость
              </p>
            </li>
            <li>
              <p
                className={activeSection === 'reviews' ? stls.active : ''}
                onClick={() => handleScrollToSection('reviews')}>
                Отзывы
              </p>
            </li>
            <li>
              <p
                className={activeSection === 'faq' ? stls.active : ''}
                onClick={() => handleScrollToSection('faq')}>
                FAQ
              </p>
            </li>
          </ul>
        </div>
      </Wrapper>
      </section>
  )
}

export default PageNavigation
