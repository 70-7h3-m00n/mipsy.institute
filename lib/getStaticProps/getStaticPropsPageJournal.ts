import {
  TypeGeneralGetStaticPropsContext,
  TypePageProgramsProps,
  TypePageProgramsPropsQuery
} from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'
import { revalidate } from '@/config/index'
import TypePageJournalProps from '@/types/page/journal/props/TypePageJournalProps'
import TypePageJournalPropsQuery from '@/types/page/journal/query/TypePageJournalPropsQuery'

const getStaticPropsPageJournal = async ({
  context
}: TypeGeneralGetStaticPropsContext): Promise<{
  props: TypePageJournalProps
  revalidate: number | boolean
}> => {
  const studyFieldSlug = context?.params?.studyFieldSlug?.toString() || null
  const slug = context?.params?.slug?.toString() || null

  try {
    const res = await apolloClient.query<TypePageJournalPropsQuery>({
      query: gql`
        query GetStaticPropsPageJournal(
          $slug: String!
        ) {
          blog: blogs(where: { slug: $slug}) {
            id
            title
            slug
            studyFieldSlug
            studyField
            subtitle
            readTime
            date
            picture {
              url
              width
              height
            }
            blogs {
            date
            picture {
              width
              height
              url
              }
            slug
            studyField
            studyFieldSlug
            subtitle
            title
            }
            blogAuthor {
              name
              position
              portrait {
                url
                width
                height
              }
            }
            teacher {
              name
              position
              achievements
              portraitForBlog {
                url
                width
                height
              }
              portrait {
                url
                width
                height
              }
            }
            article {
              __typename
              ... on ComponentBlogTextImageBlock {
                text
                image {
                  url
                  width
                  height
                }
              }
              __typename
              ... on ComponentBlogSubtitle {
                subtitle
                subtitleSlug
                color {
                  name
                  code
                }
              }
              __typename
              ... on ComponentBlogBigSizeText {
                text
                textColor {
                  code
                }
              }
              __typename
              ... on ComponentBlogFullColoredTextBlock {
                text
                textColor {
                  name
                  code
                }
              }
              __typename
              ... on ComponentBlogList {
                listItem {
                  id
                  text
                  icon {
                    code
                  }
                }
              }
              __typename
              ... on ComponentBlogListWithTitle {
                icon {
                  code
                }
                item {
                  id
                  title
                  text
                  icon {
                    code
                  }
                }
              }
              ... on ComponentBlogSingleImageBlock {
                alternativeText
                picture {
                    url
                    width
                    height
                  }
              }
              ... on ComponentBlogCommentBlock {
                text
                lineColor {
                  code
                }
              }
              __typename
              ... on ComponentBlogTextBlockWithBackground {
                text
                backgroundColor {
                  name
                  code
                }
                borderColor {
                  name
                  code
                }
                textColor {
                  name
                  code
                }
              }
              
              __typename
              ... on ComponentBlogListWithBackgroundAndTitle {
                title
                backgroundColor {
                  name
                  code
                }
                lineColor {
                  name
                  code
                }
                icon {
                  code
                }
                item {
                  id
                  text
                  icon {
                    code
                  }
                  
                }
              }
              __typename
              ... on ComponentBlogRelatedPrograms {
                title
                textItem {
                  id
                  text
                }
                programs {
                  id
                  title
                  slug
                  studyFieldSlug
                  type
                  heroPicture {
                    url
                    width
                    height
                  }
                }
                borderColor {
                  code
                }
              }
              __typename
              ... on ComponentBlogTeacherComment {
                specialization
                comment
                borderColor {
                  code
                }
                teacher {
                  name
                  specialization
                  portrait {
                    url
                    width
                    height
                  }
                }
              }
            }
          }
        }
      `,
      variables: {
        slug,
        // studyFieldSlug
      }
    })
    return {
      props: {
        blog: res?.data?.blog?.[0] || null
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

export default getStaticPropsPageJournal
