import {
  TypeGeneralRoutesFront,
  TypeGeneralGetStaticPropsContext,
  TypePageDefaultProps,
  TypePageHomeProps,
  TypePageReviewsProps,
  TypePageTeachersProps,
  TypePageWebinarsProps,
  TypePageProgramsProps,
  TypePageProgramProps,
  TypePageSeminarsProps
} from '@/types/index'
import { routes, revalidate } from '@/config/index'
import {
  getStaticPropsPageHome,
  getStaticPropsPageReviews,
  getStaticPropsDefault,
  getStaticPropsPageTeachers,
  getStaticPropsPageWebinars,
  getStaticPropsPagePrograms,
  getStaticPropsPageProgram
} from '@/lib/index'
import TypePageJournalProps from '@/types/page/journal/props/TypePageJournalProps'
import getStaticPropsPageJournal from '../getStaticProps/getStaticPropsPageJournal'
import getStaticPropsPageSeminars from '../getStaticProps/getStaticPropsPageSeminars'
import getStaticPropsPageSeminar from '../getStaticProps/getStaticPropsPageSeminar'
import TypePageSeminarProps from '@/types/page/seminar/props/TypePageSeminarProps'
import getStaticPropsPageJournals from '../getStaticProps/GetStaticPropsPageJournals'

type TypeHandleGetStaticPropsProps = {
  page: TypeGeneralRoutesFront[keyof TypeGeneralRoutesFront]
  type?: string | null
} & TypeGeneralGetStaticPropsContext

const handleGetStaticProps = async ({
  page,
  type,
  context
}: TypeHandleGetStaticPropsProps): Promise<{
  props:
    | TypePageDefaultProps
    | TypePageHomeProps
    | TypePageReviewsProps
    | TypePageTeachersProps
    | TypePageWebinarsProps
    | TypePageProgramsProps
    | TypePageProgramProps
    | TypePageJournalProps
    | TypePageSeminarsProps
    | TypePageSeminarProps
    | {}
  revalidate: number | boolean
}> => {
  try {
    switch (page) {
      case routes.front.about:
        return await getStaticPropsDefault({ context })

      case routes.front.contact:
        return await getStaticPropsDefault({ context })

      case routes.front.home:
        return await getStaticPropsPageHome({ context })

      case routes.front.legal:
        return await getStaticPropsDefault({ context })

      case routes.front.payment:
        return await getStaticPropsDefault({ context })

        case routes.front.gratefull:
          return await getStaticPropsDefault({ context })

      case routes.front.reviews:
        return await getStaticPropsPageReviews({ context })

      case routes.front.teachers:
        return await getStaticPropsPageTeachers({ context })

      case routes.front.webinars:
        return await getStaticPropsPageWebinars({ context })

      case routes.front.programs:
        return await getStaticPropsPagePrograms({ context })

      case routes.front.program:
        return await getStaticPropsPageProgram({ context, type })

      case routes.front.journals:
        return await getStaticPropsPageJournals({ context })

      case routes.front.journal:
        return await getStaticPropsPageJournal({ context })

      case routes.front.seminars:
        return await getStaticPropsPageSeminars({ context })

        case routes.front.seminar:
          return await getStaticPropsPageSeminar({ context })

      default:
        return {
          props: {},
          revalidate: revalidate.default
        }
    }
  } catch (err) {
    console.log('catch static props',err)
    return {
      props: {},
      revalidate: revalidate.default
    }
  }
}

export default handleGetStaticProps
