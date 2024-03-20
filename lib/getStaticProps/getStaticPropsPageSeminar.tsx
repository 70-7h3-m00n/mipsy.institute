import {
  TypeGeneralGetStaticPropsContext,
  TypePageProgramProps
} from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'
import { revalidate } from '@/config/index'
import TypePageSeminarProps from '@/types/page/seminar/props/TypePageSeminarProps'
import TypePageSeminarPropsQuery from '@/types/page/seminar/query/TypePageSeminarPropsQuery'

const getStaticPropsPageSeminar = async ({
  context
}: TypeGeneralGetStaticPropsContext): Promise<{
  props: TypePageSeminarProps
  revalidate: number | boolean
}> => {
  const studyFieldSlug = context?.params?.studyFieldSlug?.toString() || null
  const slug = context?.params?.slug?.toString() || null

  try {
    const res = await apolloClient.query<TypePageSeminarPropsQuery>({
      query: gql`
        query GetStaticPropsPageSeminar(
          $slug: String!
          $studyFieldSlug: String!
        ) {
          seminar: events(
            where: { slug: $slug, studyFieldSlug: $studyFieldSlug }
          ) {
            id
            title
            slug
            studyFieldSlug
            text
            tickets_quantity
            price
            date

          }
        }
      `,
      variables: {
        slug,
        studyFieldSlug
      }
    })

    return {
      props: {
        seminar: res?.data?.seminar?.[0] || null
      },
      revalidate: revalidate.default
    }
  } catch (error) {
    console.error('Ошибка запроса:', error)
    console.error('Статус код:', error.statusCode)
    console.error('Результат:', error.result)
    console.log('errrrrrr', error.networkError.result)
    return error
  }
}

export default getStaticPropsPageSeminar
