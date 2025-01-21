import { GetStaticProps, NextPage } from 'next'
import { TypePageDefaultProps } from '@/types/index'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { routes, company } from '@/config/index'
import { SeoOrganizationJsonLd } from '@/components/seo'
import Gratefull from '@/components/sections/Gratefull'
import { useRouter } from 'next/router'
import Script from 'next/script'

const GratefullPage: NextPage<TypePageDefaultProps> = () => {
  // useHandleContextStaticProps({ programs })

  const seoParams = {
    title: `Спасибо за заявку | ${company.name}`,
    desc: truncate(
      'Есть нюансы профессии, о которых мы не пишем на сайте, заходите к нам в телеграм, пообщаемся там, ведь психолог должен обладать определенными качествами',
      120
    ),
    canonical: `${routes.front.root}${routes.front.gratefull}`
  }
  const router = useRouter()
  const prevPath = router.query.prevPath

  const isPsyCons = '/professions/konsultirovanie/psiholog-konsultant'

  const isPsySomatic =
    '/professions/psihoterapiya/psihosomatika-i-telesnaya-psihoterapiya'
  const isShowTikTokAnalytics =
    prevPath === isPsyCons || prevPath === isPsySomatic
  return (
    <>
      {/* Google Conversion Event */}
      <Script
        id='google-conversion'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `gtag('event', 'conversion', {'send_to': 'AW-822792302/ktI6CJG-0toZEO6gq4gD'})`
        }}
      />

      {isShowTikTokAnalytics && (
        <>
          {/* <AnalyticsScripts isShowTikTokAnalytics={isShowTikTokAnalytics} /> */}
          <Script
            id='tiktok-analytics-main'
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
          {/* TikTok CompleteRegistration Event */}
          <Script
            id='tiktok-complete-registration'
            strategy='afterInteractive'
            dangerouslySetInnerHTML={{
              __html: `ttq.track('CompleteRegistration')`
            }}
          />

          {/* TikTok CompletePayment Event */}
          <Script
            id='tiktok-complete-payment'
            strategy='afterInteractive'
            dangerouslySetInnerHTML={{
              __html: `ttq.track('CompletePayment')`
            }}
          />
        </>
      )}

      {/* Facebook SubmitApplication Event */}
      <Script
        id='facebook-submit-application'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `fbq('track', 'SubmitApplication');`
        }}
      />
      <NextSeo
        title={seoParams.title}
        description={seoParams.desc}
        canonical={seoParams.canonical}
        nofollow={true}
        noindex={true}
        openGraph={{
          url: seoParams.canonical,
          title: seoParams.title,
          description: seoParams.desc,
          images: [
            {
              url: `${routes.front.root}${routes.front.assetsImgsIconsManifestIcon512}`,
              width: 512,
              height: 512,
              alt: company.name,
              type: 'image/png'
            }
          ],
          site_name: company.name
        }}
      />
      <SeoOrganizationJsonLd />
      <Gratefull />
    </>
  )
}

export default GratefullPage
