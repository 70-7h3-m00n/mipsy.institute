import { TypePageProgramPaths, TypePageProgramPathsQuery, TypePageProgramsPaths } from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'
import TypePageSeminarPathsQuery from '@/types/page/seminars/query/TypePageSeminarPathsQuery'
import TypePageSeminarPaths from '@/types/page/seminar/paths/TypePageSeminarPaths'
import TypePageJournalsPathsQuery from '@/types/page/journals/query/TypePageSeminarPathsQuery'

const getStaticPathsPageJournals = async (): Promise<{
  paths: TypePageProgramsPaths
  fallback: boolean | 'blocking'
}> => {
  const res = await apolloClient.query<TypePageJournalsPathsQuery>({
    query: gql`
      query GetStaticPathsPageSeminar {
        blogs {
          studyFieldSlug
        }
      }
    `
  })

  return {
    paths: Array.from(
      new Set(
        res.data?.blogs?.map(program => ({
          params: {
            studyFieldSlug: program?.studyFieldSlug || 'studyFieldSlug',
          }
        }))
      )
    ) || [{ params: { studyFieldSlug: 'studyFieldSlug'} }],
    fallback: 'blocking'
  }
}

export default getStaticPathsPageJournals