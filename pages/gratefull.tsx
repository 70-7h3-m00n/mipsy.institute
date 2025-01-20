import { GetStaticProps, NextPage } from 'next'
import { TypePageDefaultProps } from '@/types/index'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { routes, company } from '@/config/index'
import { SeoOrganizationJsonLd } from '@/components/seo'
import Gratefull from '@/components/sections/Gratefull'
import { useRouter } from 'next/router'
import { AnalyticsScripts } from './scripts'

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
      <AnalyticsScripts isShowTikTokAnalytics={isShowTikTokAnalytics} />
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
