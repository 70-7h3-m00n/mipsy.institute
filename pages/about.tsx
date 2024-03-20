import { GetStaticProps, NextPage } from 'next'
import { TypeLibTeachers, TypePageTeachersProps } from '@/types/index'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { routes, company } from '@/config/index'
import { handleGetStaticProps } from '@/lib/index'
import { useHandleContextStaticProps } from '@/hooks/index'
import { SeoOrganizationJsonLd } from '@/components/seo'
import AboutMip from '@/components/sections/AboutMip/AboutMip'
import WhoIsOurSpeakers from '@/components/sections/WhoIsOurSpeakers/WhoIsOurSpeakers'
import ChooseProgram from '@/components/sections/ChooseProgram/ChooseProgram'
import { ActiveLicenses } from '@/components/sections'
import { sortBasedOnNumericOrder } from '../helpers'
import TeachersFiles from '@/components/sections/TeachersLineUp/TeachersFiles'
import AboutPageContactForm from '@/components/sections/AboutPageContactForm'
import { useContext } from 'react'
import { ContextStaticProps } from '../context'

const AboutPage: NextPage<TypePageTeachersProps> = ({ programs, teachers }) => {
  useHandleContextStaticProps({ programs })

  const teachersSorted: TypeLibTeachers = sortBasedOnNumericOrder({ teachers })

  const seoParams = {
    title: `Об институте | ${company.desc} | ${company.name}
    `,
    desc: truncate(company.about, 120),
    canonical: `${routes.front.root}${routes.front.about}`

  }

  
  const {
    courses,
    professions,
  } = useContext(ContextStaticProps)
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
      <AboutMip />
      <WhoIsOurSpeakers />
      <TeachersFiles teachers={teachersSorted} />
      <ChooseProgram />
      <ActiveLicenses />
      <AboutPageContactForm />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () =>
  await handleGetStaticProps({ page: routes.front.teachers })

export default AboutPage
