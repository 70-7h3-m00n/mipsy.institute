import {
  TypeGeneralGetStaticPropsContext,
  TypePageDefaultProps,
  TypePageDefaultPropsQuery
} from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'
import { revalidate } from '@/config/index'

const getStaticPropsDefault = async ({
  context
}: TypeGeneralGetStaticPropsContext): Promise<{
  props: TypePageDefaultProps
  revalidate: number | boolean
}> => {
  const res = await apolloClient.query<TypePageDefaultPropsQuery>({
    query: gql`
      query GetStaticPropsDefault {
        programs {
          id
          studyField
          studyFieldSlug
          title
          slug
          typeLabel
          studyMounthsDuration
          studyHours
          index_number {
            idx
          }
        }
      }
    `
  })

  return {
    props: res.data,
    revalidate: revalidate.default
  }
}

export default getStaticPropsDefault
