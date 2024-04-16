import Router from 'next/router'
import { useEffect, useState } from 'react'
import Script from 'next/script'
import MenuState from '@/context/menu/MenuState'
import FieldsTooltipState from '@/context/fieldsTooltip/FieldsTooltipState'
import { ContextStaticProps } from '@/context/index'
import TagManager from 'react-gtm-module'
import { DefaultSeo, LogoJsonLd } from 'next-seo'
import SEO from '../seo.config'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import {
  filterProgramsByType,
  getStudyFields,
  sortBasedOnNumericOrder
} from '@/helpers/index'
import { prod, gtmId, routes } from '@/config/index'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '@/styles/app.sass'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import StickyBottom from '@/components/layout/StickyBottom'
import client from '@/lib/apolloClient'
import { getCookie, setCookie, getCookies } from 'cookies-next'
import { ApolloProvider } from '@apollo/client'

const MyApp = ({ Component, pageProps, router }) => {
  const getDefaultStateProps = pageProps => {
    const program = pageProps.program || null
    const programs =
      sortBasedOnNumericOrder({ programs: pageProps.programs }) || []
    const courses =
      programs?.length > 0
        ? filterProgramsByType({ programs, type: 'course' })
        : []
    const professions =
      programs?.length > 0
        ? filterProgramsByType({ programs, type: 'profession' })
        : []
    const blogs = pageProps.seminars
    const seminar = pageProps.seminar || null
    const studyFields = programs?.length > 0 ? getStudyFields(programs) : []

    const studyFieldsProfessions =
      programs?.length > 0 ? getStudyFields(professions) : []

    const studyFieldsCourses =
      programs?.length > 0 ? getStudyFields(courses) : []

    const curProgramsType = pageProps.curProgramsType || null
    const curProgramsStudyFieldSlug = pageProps.studyFieldSlug || null
    const reviews = pageProps.reviews
    const searchTerm = pageProps.searchTerm || null

    const filteredPrograms = pageProps.filteredPrograms || []

    return {
      program,
      programs,
      reviews,
      courses,
      professions,
      studyFields,
      studyFieldsProfessions,
      studyFieldsCourses,
      curProgramsType,
      curProgramsStudyFieldSlug,
      searchTerm,
      filteredPrograms,
      blogs,
      seminar
    }
  }

  const defaultStateProps = getDefaultStateProps(pageProps)

  const [program, setProgram] = useState(defaultStateProps.program)
  const [programs, setPrograms] = useState(defaultStateProps.programs)
  const [courses, setCourses] = useState(defaultStateProps.courses)
  const [reviews, setReviews] = useState(defaultStateProps.reviews)
  const [professions, setProfessions] = useState(defaultStateProps.professions)
  const [studyFields, setStudyFields] = useState(defaultStateProps.studyFields)

  const [studyFieldsProfessions, setStudyFieldsProfessions] = useState(
    defaultStateProps.studyFieldsProfessions
  )
  const [studyFieldsCourses, setStudyFieldsCourses] = useState(
    defaultStateProps.studyFieldsCourses
  )
  const [curProgramsType, setCurProgramsType] = useState(
    defaultStateProps.curProgramsType
  )
  const [curProgramsStudyFieldSlug, setCurProgramsStudyFieldSlug] = useState(
    defaultStateProps.curProgramsStudyFieldSlug
  )
  const [searchTerm, setSearchTerm] = useState(defaultStateProps.searchTerm)
  const [filteredPrograms, setFilteredPrograms] = useState(
    defaultStateProps.filteredPrograms
  )

  const [blogs, setBlogs] = useState(defaultStateProps.blogs)
  const [seminar, setSeminar] = useState(defaultStateProps.seminar)
  const updateTicketsQuantity = newQuantity => {
    setSeminar(prevSeminar => ({
      ...prevSeminar,
      tickets_quantity: newQuantity
    }))
  }

  const [loading, setLoading] = useState(false)
  //cookie for edPartners
  useEffect(() => {
    const utmCookie = getCookie('utm')
    let arr
    if (typeof utmCookie === 'string') {
      arr = JSON.parse(utmCookie)
    }
    const urlUtmsArr = router.asPath.split('?')[1]

    // переписываем куку если отличается сурс от того, что был до этого
    if (urlUtmsArr) {
      const urlUtmsArr = router.asPath.split('?')[1]
      let utms = {}
      urlUtmsArr &&
        urlUtmsArr.split('&').forEach(utm => {
          const [key, value] = utm.split('=')
          utms[key] = decodeURIComponent(value) // Декодирование URL-кодированной строки
        })

      setCookie('utm', JSON.stringify(utms), { maxAge: 7776000 })
    }
  }, [router.query])

  //cookie for edPartners
  // ?utm_source=yandex_alexej&utm_medium=cpc&utm_campaign=компания&utm_content=[Поиск] Логопед с доп. квалификацией - GZ / RF / CPC&utm_term=ключ
  // ?utm_source=yandex-Feed&utm_medium=free&utm_campaign=psychology&utm_content=professions
  // ?utm_source=edpartners&utm_medium=cpa&utm_campaign=affiliate&cl_uid=7a61af20124c1918ac49130334cd03c8

  useEffect(() => {
    // TagManager.initialize({ gtmId, dataLayerName: 'dataLayer' })

    let utms = JSON.parse(sessionStorage.getItem('utms')) || {}
    let utmsAreEmpty = false

    for (const key in utms) {
      if (utms.hasOwnProperty(key)) {
        utmsAreEmpty = true
        break
      }
    }

    if (!utmsAreEmpty) {
      const urlUtmsArr = router.asPath.split('?')[1]

      urlUtmsArr &&
        urlUtmsArr.split('&').forEach(utm => {
          utms[utm.split('=')[0]] = utm.split('=')[1]
        })
      sessionStorage.setItem('utms', JSON.stringify(utms))
    }

    const referer = sessionStorage.getItem('referrer')
    if (!referer) {
      sessionStorage.setItem('referer', JSON.stringify(document.referrer))
    }

    NProgress.configure({
      showSpinner: false
    })

    const start = () => {
      NProgress.start()
      setLoading(true)
    }
    const end = () => {
      NProgress.done()
      setLoading(false)
    }
    Router.events.on('routeChangeStart', start)
    Router.events.on('routeChangeComplete', end)
    Router.events.on('routeChangeError', end)
    return () => {
      Router.events.off('routeChangeStart', start)
      Router.events.off('routeChangeComplete', end)
      Router.events.off('routeChangeError', end)
    }
  }, [])

  if (prod) {
    console.log = () => {}
  }

  return (
    <>
      <DefaultSeo {...SEO} />
      <LogoJsonLd
        logo={`${routes.front.root}${routes.front.assetsImgsIconsManifestIcon512}`}
        url={routes.front.root}
      />
      <ContextStaticProps.Provider
        value={{
          program,
          programs,
          courses,
          reviews,
          professions,
          studyFields,
          studyFieldsProfessions,
          studyFieldsCourses,
          curProgramsType,
          curProgramsStudyFieldSlug,
          searchTerm,
          filteredPrograms,
          blogs,
          setBlogs,
          seminar,
          setSeminar,
          updateTicketsQuantity,
          setProgram,
          setPrograms,
          setCourses,
          setProfessions,
          setStudyFields,
          setStudyFieldsProfessions,
          setStudyFieldsCourses,
          setCurProgramsType,
          setCurProgramsStudyFieldSlug,
          setSearchTerm,
          setFilteredPrograms
        }}>
        <MenuState>
          <FieldsTooltipState>
            <Header />
            <main>
              <ApolloProvider client={client}>
                <Component {...pageProps} />
                {/* <div className="js-whatsapp-message-container" style={{display:"none"}}>Обязательно отправьте это сообщение и дождитесь ответа. Ваш номер обращения: {roistat_visit}</div> */}
              </ApolloProvider>
            </main>
            <StickyBottom />
            <Footer />
          </FieldsTooltipState>
        </MenuState>
      </ContextStaticProps.Provider>

      <Script src='/assets/js/vendors/swiped-events.min.js' />
      {/* <Script
        type='text/javascript'
        id='advcakeAsync'
        src='/assets/js/vendors/advCake.js'
      /> */}
      {/* {prod && ( */}
        <>
          <Script
            id='roistat counter'
            dangerouslySetInnerHTML={{
              __html: `
            (function(w, d, s, h, id) {
              w.roistatProjectId = id; w.roistatHost = h;
              var p = d.location.protocol == "https:" ? "https://" : "http://";
              var u = /^.*roistat_visit=[^;]+(.*)?$/.test(d.cookie) ? "/dist/module.js" : "/api/site/1.0/"+id+"/init?referrer="+encodeURIComponent(d.location.href);
              var js = d.createElement(s); js.charset="UTF-8"; js.async = 1; js.src = p+h+u; var js2 = d.getElementsByTagName(s)[0]; js2.parentNode.insertBefore(js, js2);
            })(window, document, 'script', 'cloud.roistat.com', '5504efcdd803f95c53cf52800d65f41b');
          `
            }}
          />

          {/* <Script async src='/assets/js/vendors/roistatWA.js' /> */}
        </>
      {/* )} */}
{/* 
      <Script
        id='edpartners_scaletrk'
        dangerouslySetInnerHTML={{
          __html: `
        function sclClickPixelFn() {
          const url = new URL(document.location.href).searchParams;
          if (url.get('a')) {
              const availableParams = ['aff_click_id', 'sub_id1', 'sub_id2', 'sub_id3', 'sub_id4', 'sub_id5', 'aff_param1', 'aff_param2', 'aff_param3', 'aff_param4', 'aff_param5', 'idfa', 'gaid'];
              const t = new URL('https://edpartners.scaletrk.com/click');
              const r = t.searchParams;
              console.log(url);
              r.append('a', url.get('a'));
              r.append('o', url.get('o'));
              r.append('return', 'click_id');
              if (availableParams?.length > 0) {
                  availableParams.forEach((key) => {
                      const value = url.get(key);
                      if (value) {
                          r.append(key, value);
                      }
                  });
              }
              fetch(t.href).then((e) => e.json()).then((e) => {
                  const c = e.click_id;
                  if (c) {
                      const expiration = 864e5 * 90;
                      const o = new Date(Date.now() + expiration);
                      document.cookie = 'cl_uid=' + c + ';expires=' + o;
                      document.cookie = 'utm_source=' + url.get('utm_source') + ';expires=' + o;
                  }
              });
          }
      }
      sclClickPixelFn();
          `
        }}
      />
      <Script
        id='vk script'
        dangerouslySetInnerHTML={{
          __html: `var _tmr = window._tmr || (window._tmr = []);
        _tmr.push({id: "3477294", type: "pageView", start: (new Date()).getTime()});
        (function (d, w, id) {
          if (d.getElementById(id)) return;
          var ts = d.createElement("script"); ts.type = "text/javascript"; ts.async = true; ts.id = id;
          ts.src = "https://top-fwz1.mail.ru/js/code.js";
          var f = function () {var s = d.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ts, s);};
          if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); }
        })(document, window, "tmr-code");`
        }}
      />
      <Script
        id='WA AMO script'
        src='https://cdn.gnzs.ru/blablachat/scripts/roistat-whatsapp.js'
      />
      <Script
        id='WA AMO second script'
        dangerouslySetInnerHTML={{
          __html: `window.addEventListener('DOMContentLoaded', function () {
            new GnzsRoiStatClass().init()
          })`
        }}
      />

      <noscript>
        <div>
          <img
            src='https://top-fwz1.mail.ru/counter?id=3477294;js=na'
            style={{ position: 'absolute', left: '-9999px' }}
            alt='Top.Mail.Ru'
          />
        </div>
      </noscript>  */}
      <Script
        id='GTM first script'
        src='https://www.googletagmanager.com/gtag/js?id=G-PVE1C7ZRLM'
      />
      <Script
        id='GTM second script'
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-PVE1C7ZRLM');
          gtag('config', 'AW-11307234082');`
        }}
      />
    </>
  )
}

export default MyApp
