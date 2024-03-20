import stls from '@/styles/pages/Legal.module.sass'
import { GetStaticProps, NextPage } from 'next'
import { TypePageDefaultProps } from '@/types/index'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import {
  dataDocsConstituentLeft,
  dataDocsConstituentRight,
  dataDocsGeneralLeft,
  dataDocsGeneralRight,
  dataDocsRegulationsLeft,
  dataDocsRegulationsRight
} from '@/data/index'
import { routes, company } from '@/config/index'
import { handleGetStaticProps } from '@/lib/index'
import { useHandleContextStaticProps } from '@/hooks/index'
import PageTitle from '@/components/layout/PageTitle'
import {
  ActiveLicenses,
  Diplomas,
  LegalDocs,
  LegalInfo
} from '@/components/sections'
import { SeoOrganizationJsonLd } from '@/components/seo'

const LegalPage: NextPage<TypePageDefaultProps> = ({ programs }) => {
  useHandleContextStaticProps({ programs })

  const seoParams = {
    title: `Сведения об образовательной организации | ${company.name}`,
    desc: truncate(
      `Действующие лицензии, выдаваемые дипломы
    и сертификаты, основные сведения и нормативные документы`,
      120
    ),
    canonical: `${routes.front.root}${routes.front.legal}`
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
      <PageTitle>
        Сведения <br className={stls.linebrake} /> об организации
      </PageTitle>
      <ActiveLicenses />
      <Diplomas />
      <LegalInfo />
      <LegalDocs
        title='Учредительные документы'
        listLeft={dataDocsConstituentLeft}
        listRight={dataDocsConstituentRight}
      />
      <LegalDocs
        title='Нормативные документы'
        listLeft={dataDocsRegulationsLeft}
        listRight={dataDocsRegulationsRight}
      />
      <LegalDocs
        title='Документы, приказы, положения'
        listLeft={dataDocsGeneralLeft}
        listRight={dataDocsGeneralRight}
      />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () =>
  await handleGetStaticProps({ page: routes.front.legal })

export default LegalPage
