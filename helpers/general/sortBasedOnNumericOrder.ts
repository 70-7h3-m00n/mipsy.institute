import {
  TypeLibPrograms,
  TypeLibReviews,
  TypeLibTeachers,
  TypeLibWebinars
} from '@/types/index'

type TypeSortBasedOnNumericOrderProps = {
  programs?: TypeLibPrograms
  reviews?: TypeLibReviews
  teachers?: TypeLibTeachers
  webinars?: TypeLibWebinars
  uniqueReviews?: TypeLibReviews
}

// TODO: figure out better types
const sortBasedOnNumericOrder = ({
  programs,
  reviews,
  teachers,
  webinars,
  uniqueReviews
}: TypeSortBasedOnNumericOrderProps): any => {
  const arr = programs || reviews || teachers || webinars || uniqueReviews || []

  return [...arr].sort(
    (a, b) =>
      Number(a?.index_number?.idx || Infinity) -
      Number(b?.index_number?.idx || Infinity)
  )
}

export default sortBasedOnNumericOrder
