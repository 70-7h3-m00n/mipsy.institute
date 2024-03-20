import { GetStaticProps, NextPage } from 'next'
import { TypeLibWebinars, TypePageWebinarsProps } from '@/types/index'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { sortBasedOnNumericOrder } from '@/helpers/index'
import { routes, company } from '@/config/index'
import { handleGetStaticProps } from '@/lib/index'
// import { WebinarsAlt } from '@/components/sections'
import { useHandleContextStaticProps } from '@/hooks/index'
import { SeoOrganizationJsonLd } from '@/components/seo'
import { lazy } from 'react'
const WebinarsAlt = lazy(() => import('@/components/sections/WebinarsAlt'));

const WebinarsPage: NextPage<TypePageWebinarsProps> = ({
  programs,
  webinars
}) => {
  useHandleContextStaticProps({ programs })

  const webinarsSorted: TypeLibWebinars = sortBasedOnNumericOrder({ webinars })
  const seoParams = {
    title: `Вебинары | ${company.desc} | ${company.name}
    `,
    desc: truncate(
      `${webinarsSorted[webinarsSorted.length - 1].title}, ${
        webinarsSorted[webinarsSorted.length - 1].name
      } | ${webinarsSorted[webinarsSorted.length - 2].title}, ${
        webinarsSorted[webinarsSorted.length - 2].name
      }`,
      120
    ),
    canonical: `${routes.front.root}${routes.front.webinars}`
  }
  return (
    <>
      <NextSeo
        title={seoParams.title}
        description={seoParams.desc}
        canonical={seoParams.canonical}
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
      <WebinarsAlt webinars={webinarsSorted} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () =>
  await handleGetStaticProps({ page: routes.front.webinars })

export default WebinarsPage
