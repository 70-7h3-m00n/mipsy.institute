import { TypePageProgramPaths, TypePageProgramPathsQuery } from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'
import TypePageSeminarPathsQuery from '@/types/page/seminars/query/TypePageSeminarPathsQuery'
import TypePageSeminarsPaths from '@/types/page/seminar/paths/TypePageSeminarsPaths'


const getStaticPathsPageSeminars = async (): Promise<{
  paths: TypePageSeminarsPaths
  fallback: boolean | 'blocking'
}> => {
  const res = await apolloClient.query<TypePageSeminarPathsQuery>({
    query: gql`
      query GetStaticPathsPageSeminar {
        events {
          studyFieldSlug
        }
      }
    `
  })

  return {
    paths: Array.from(
      new Set(
        res.data?.events?.map(program => ({
          params: {
            studyFieldSlug: program?.studyFieldSlug || 'studyFieldSlug'
          }
        }))
      )
    ) || [{ params: { studyFieldSlug: 'studyFieldSlug' } }],
    fallback: 'blocking'
  }
}

export default getStaticPathsPageSeminars