type TypePageJournalPathsQuery = {
  readonly blogs:
    | {
        studyFieldSlug: string | null
        slug: string | null
      }[]
    | null
}

export default TypePageJournalPathsQuery