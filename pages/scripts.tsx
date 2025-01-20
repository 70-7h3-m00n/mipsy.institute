import Script from 'next/script'

export const AnalyticsScripts = ({
  isShowTikTokAnalytics
}: {
  isShowTikTokAnalytics: boolean
}) => {
  return (
    <>
      {/* Проверка инициализации TikTok Analytics */}
      <Script
        id='tiktok-analytics-main'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `!function (w, d, t) {
              w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(
              var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script")
              ;n.type="text/javascript",n.async=!0;
              n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};
        
            ttq.load('CT28G0JC77UANHJ2L52G');
            ttq.page();
            }(window, document, 'ttq');`
        }}
      />
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
    </>
  )
}
