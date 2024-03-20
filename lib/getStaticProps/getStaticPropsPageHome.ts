import {
  TypeGeneralGetStaticPropsContext,
  TypePageHomeProps,
  TypePageHomePropsQuery
} from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'
import { revalidate } from '@/config/index'

const getStaticPropsPageHome = async ({
  context
}: TypeGeneralGetStaticPropsContext): Promise<{
  props: TypePageHomeProps
  revalidate: number | boolean
}> => {
  const res = await apolloClient.query<TypePageHomePropsQuery>({
    query: gql`
      query GetStaticPropsPageHome {
        programs {
          id
          title
          slug
          studyField
          studyFieldSlug
          type
          typeLabel
          studyMounthsDuration
          studyHours
          heroPicture {
            url
            width
            height
          }
          index_number {
            idx
          }
        }
        teachers {
          id
          name
          achievements
          specialization
          portrait {
            url
            width
            height
          }
          index_number {
            idx
          }
        }
        reviews {
          id
          name
          profession
          title
          story
          createdAt
          picture {
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
    props: res.data,
    revalidate: revalidate.default
  }
}

export default getStaticPropsPageHome
