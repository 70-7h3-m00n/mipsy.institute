import {
  TypeGeneralGetStaticPropsContext,
  TypePageProgramsProps,
  TypePageProgramsPropsQuery
} from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'
import { revalidate } from '@/config/index'

const getStaticPropsPagePrograms = async ({
  context
}: TypeGeneralGetStaticPropsContext): Promise<{
  props: TypePageProgramsProps
  revalidate: number | boolean
}> => {
  const res = await apolloClient.query<TypePageProgramsPropsQuery>({
    query: gql`
      query GetStaticPropsPagePrograms {
        programs {
          id
          title
          slug
          studyField
          studyFieldSlug
          type
          typeLabel
          studyMounthsDuration
          heroPicture {
            url
            width
            height
          }
          index_number {
            idx
          }
        }
      }
    `
  })

  return {
    props: {
      ...res.data,
      studyFieldSlug: context?.params?.studyFieldSlug?.toString() || null
    },
    revalidate: revalidate.default
  }
}

export default getStaticPropsPagePrograms
