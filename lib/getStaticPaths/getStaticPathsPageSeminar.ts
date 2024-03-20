import { TypePageProgramPaths, TypePageProgramPathsQuery } from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'
import TypePageSeminarPathsQuery from '@/types/page/seminars/query/TypePageSeminarPathsQuery'
import TypePageSeminarPaths from '@/types/page/seminar/paths/TypePageSeminarPaths'

const getStaticPathsPageSeminar = async (): Promise<{
  paths: TypePageSeminarPaths
  fallback: boolean | 'blocking'
}> => {
  const res = await apolloClient.query<TypePageSeminarPathsQuery>({
    query: gql`
      query GetStaticPathsPageSeminar {
        events {
          studyFieldSlug
          slug
        }
      }
    `
  })

  return {
    paths: Array.from(
      new Set(
        res.data?.events?.map(program => ({
          params: {
            studyFieldSlug: program?.studyFieldSlug || 'studyFieldSlug',
            slug: program?.slug || 'program'
          }
        }))
      )
    ) || [{ params: { studyFieldSlug: 'studyFieldSlug', slug: 'program' } }],
    fallback: 'blocking'
  }
}

export default getStaticPathsPageSeminar