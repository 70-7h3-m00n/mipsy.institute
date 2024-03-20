import { TypePageProgramPaths, TypePageProgramPathsQuery } from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'

const getStaticPathsPageProgram = async ({
  type
}: {
  type?: 'Course' | 'Profession'
}): Promise<{
  paths: TypePageProgramPaths
  fallback: boolean | 'blocking'
}> => {
  const res = await apolloClient.query<TypePageProgramPathsQuery>({
    query: gql`
      query GetStaticPathsPageProgram($type: String) {
        programs(where: { type: $type }) {
          studyFieldSlug
          type
          slug
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
            studyFieldSlug: program?.studyFieldSlug || 'studyFieldSlug',
            slug: program?.slug || 'program'
          }
        }))
      )
    ) || [{ params: { studyFieldSlug: 'studyFieldSlug', slug: 'program' } }],
    fallback: 'blocking'
  }
}

export default getStaticPathsPageProgram
