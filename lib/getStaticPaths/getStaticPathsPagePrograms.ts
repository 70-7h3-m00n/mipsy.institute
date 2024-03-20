import {
  TypePageProgramsPaths,
  TypePageProgramsPathsQuery
} from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'

const getStaticPathsPagePrograms = async ({
  type
}: {
  type?: 'Course' | 'Profession'
}): Promise<{
  paths: TypePageProgramsPaths
  fallback: boolean | 'blocking'
}> => {
  const res = await apolloClient.query<TypePageProgramsPathsQuery>({
    query: gql`
      query GetStaticPathsPagePrograms($type: String) {
        programs(where: { type: $type }) {
          studyFieldSlug
          type
        }
      }
    `,
    variables: {
      type
    }
  })

  return {
    paths: Array.from(
      new Set(
        res.data?.programs?.map(program => ({
          params: {
            studyFieldSlug: program?.studyFieldSlug || 'studyFieldSlug'
          }
        }))
      )
    ) || [{ params: { studyFieldSlug: 'studyFieldSlug' } }],
    fallback: 'blocking'
  }
}

export default getStaticPathsPagePrograms
