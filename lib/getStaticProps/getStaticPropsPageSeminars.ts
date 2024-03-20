import {
  TypeGeneralGetStaticPropsContext,
  TypePageProgramsProps,
  TypePageProgramsPropsQuery,
  TypePageSeminarsProps,
  TypePageSeminarsPropsQuery
} from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'
import { revalidate } from '@/config/index'

const getStaticPropsPageSeminars = async ({
  context
}: TypeGeneralGetStaticPropsContext): Promise<{
  props: TypePageSeminarsProps
  revalidate: number | boolean
}> => {
  const res = await apolloClient.query<TypePageSeminarsPropsQuery>({
    query: gql`
      query GetStaticPropsPageSeminars {
        events {
          id
          title
          slug
          studyField
          studyFieldSlug
          date
          text
          tickets_quantity
          price
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

export default getStaticPropsPageSeminars
