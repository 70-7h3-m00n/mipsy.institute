import { GetStaticProps, NextPage } from 'next'
import { TypePageReviewsProps } from '@/types/index'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import {
  sortBasedOnNumericOrder,
  sortUniqueReviewsCreatedAtASC
} from '@/helpers/index'
import { routes, company } from '@/config/index'
import { handleGetStaticProps } from '@/lib/index'
import { useHandleContextStaticProps } from '@/hooks/index'
import Reviews from '@/components/sections/Reviews'
import { SeoOrganizationJsonLd } from '@/components/seo'
import ReviewList from '@/components/sections/Reviews/ReviewList'

const ReviewsPage: NextPage<TypePageReviewsProps> = ({ programs, reviews, uniqueReviews }) => {
  useHandleContextStaticProps({ programs })

  const reviewsSorted = sortBasedOnNumericOrder({
    reviews: sortUniqueReviewsCreatedAtASC({ uniqueReviews })
  })


  const seoParams = {
    title: `Отзывы и статьи наших студентов | ${company.desc} | ${company.name}
    `,
    desc: truncate(
      `${reviewsSorted[reviewsSorted.length - 1].title}, ${
        reviewsSorted[reviewsSorted.length - 1].name
      } | ${reviewsSorted[reviewsSorted.length - 2].title}, ${
        reviewsSorted[reviewsSorted.length - 2].name
      }`,
      120
    ),
    canonical: `${routes.front.root}${routes.front.reviews}`
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
      {/* <Reviews standalone reviews={reviewsSorted} /> */}
      <ReviewList reviews={reviewsSorted} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () =>
  await handleGetStaticProps({ page: routes.front.reviews })

export default ReviewsPage
