import { TypeLibPrograms } from '@/types/index'
import { FC } from 'react'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { routes, company } from '@/config/index'
import { getStudyFields } from '@/helpers/index'
import { SeoOrganizationJsonLd } from '@/components/seo'
import { useRouter } from 'next/router'
import getSeoTitle from '../funcs/getSeoTitle'
import getSeoDescription from '../funcs/getSeoDescription'

type TSeoPagesProgram = {
  ofType?: 'course' | 'profession'
  curProgramsStudyFieldSlug?: string
  programs: TypeLibPrograms | null
}

const SeoPagesPrograms: FC<TSeoPagesProgram> = ({
  ofType,
  curProgramsStudyFieldSlug,
  programs
}) => {
  const { asPath } = useRouter()
  

  const studyFields = getStudyFields(programs)
  const studyFieldLabel =
    studyFields.filter(
      studyField => studyField.slug === curProgramsStudyFieldSlug
    )[0]?.label || 'Программы'

    console.log(studyFields)

  const seoParams = {
    title: getSeoTitle(ofType, curProgramsStudyFieldSlug, studyFieldLabel),
    desc: getSeoDescription(ofType, curProgramsStudyFieldSlug, studyFieldLabel),
      // ofType === 'course'
      //   ? 'Онлайн-курсы по психологии для начинающих в Московском Институте Психологии ✔ Повышение квалификации и дистанционное обучение на психолога с сертификатом с нуля ✔ Скидка 30%'
      //   : ofType === 'profession'
      //   ? 'Дистанционные программы профпереподготовки от онлайн-института МИП для психологов ✔ Диплом ФРДО ✔ Удобный формат обучения с ведущими экспертами-практиками.'
      //   : 'Онлайн-курсы по психологии для психологов любого уровня в Московском Институте Психологии ✔ Дистанционное образование с получением диплома ФРДО / сертификата ✔ Скидка 30%'

    // canonical: `${routes.front.root}${asPath}`
    canonical: asPath.includes('dietologiya') ? `${routes.front.root}/professions/dietologiya-i-nutriciologiya` : `${routes.front.root}${asPath}`,
    
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
          site_name: company.name,
          
        }}
      />
      <SeoOrganizationJsonLd />
    </>
  )
}

export default SeoPagesPrograms
