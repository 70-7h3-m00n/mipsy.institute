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
  // https://www.mipsy.institute/professions/konsultirovanie/psiholog-konsultant

  // https://www.mipsy.institute/professions/psihoterapiya/psihosomatika-i-telesnaya-psihoterapiya

  const isPsyCons = '/professions/konsultirovanie/psiholog-konsultant'

  const isPsySomatic =
    '/professions/psihoterapiya/psihosomatika-i-telesnaya-psihoterapiya'
  const isShowTikTokAnalytics =
    router.asPath === isPsyCons || router.asPath === isPsySomatic
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
      {prod && (
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
      )}

      <Script
        id='metrika'
        dangerouslySetInnerHTML={{
          __html: `
    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();
    for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

    ym(97560795, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
    });
  `
        }}
      />
      <noscript>
        <div>
          <img
            src='https://mc.yandex.ru/watch/97560795'
            style={{ position: 'absolute', left: '-9999px' }}
            alt=''
          />
        </div>
      </noscript>

      <Script
        id='gtag-initialization'
        strategy='beforeInteractive'
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-PVE1C7ZRLM');
    gtag('config', 'AW-822792302');`
        }}
      />

      <Script
        id='gtag-send-conversion-contact'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `function gtagSendEvent(url) {
      var callback = function () {
        if (typeof url === 'string') {
          window.location = url;
        }
      };
      gtag('event', 'conversion_event_contact', {
        'event_callback': callback,
        'event_timeout': 2000,
        // <event_parameters>
      });
      return false;
    }`
        }}
      />

      <Script
        id='gtag-send-conversion-submit-lead-form'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `function gtagSendEvent(url) {
      var callback = function () {
        if (typeof url === 'string') {
          window.location = url;
        }
      };
      gtag('event', 'conversion_event_submit_lead_form', {
        'event_callback': callback,
        'event_timeout': 2000,
        // <event_parameters>
      });
      return false;
    }`
        }}
      />

      {/* {isShowTikTokAnalytics && ( */}
        <Script
          id='TiktokAnalytics'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `!function (w, d, t) {
  w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(
var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script")
;n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};


  ttq.load('CT28G0JC77UANHJ2L52G');
  ttq.page();
}(window, document, 'ttq');`
          }}
        />
      {/* )} */}
      <Script
        id='pixelAnalytic'
        strategy='beforeInteractive'
        dangerouslySetInnerHTML={{
          __html: `
    !function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '932137408247744');
fbq('track', 'PageView');
    `
        }}
      />
      <noscript>
        <img
          height='1'
          width='1'
          style={{ display: 'none' }}
          src='https://www.facebook.com/tr?id=932137408247744&ev=PageView&noscript=1'
        />
      </noscript>
    </>
  )
}

export default MyApp
