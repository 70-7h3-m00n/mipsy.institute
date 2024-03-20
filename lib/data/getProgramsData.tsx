import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'

const getProgramsData = async () => {
  const GET_PROGRAMS = gql`
    query GetPrograms {
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
  try {
    const { data } = await apolloClient.query({ query: GET_PROGRAMS })
    return data.programs
  } catch (error) {
    console.error('Failed to fetch programs data:', error)
    return []
  }
}

export default getProgramsData