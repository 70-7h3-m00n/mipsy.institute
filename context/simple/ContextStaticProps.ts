import { createContext, Dispatch } from 'react'

// TODO: figure out better types
const ContextStaticProps = createContext<{
  program: any
  reviews: any[]
  programs: any[]
  courses: any[]
  professions: any[]
  studyFields: any[]
  studyFieldsProfessions: any[]
  studyFieldsCourses: any[]
  curProgramsType: string | null
  curProgramsStudyFieldSlug: string | null
  searchTerm: string | null
  filteredPrograms: any[]
  blogs: any[],
  seminar: any,
  setSeminar: Dispatch<any>
  updateTicketsQuantity: (newQuantity: number) => void;
  setBlogs: Dispatch<any>
  setProgram: Dispatch<any>
  setPrograms: Dispatch<any>
  setCourses: Dispatch<any>
  setProfessions: Dispatch<any>
  setStudyFields: Dispatch<any>
  setStudyFieldsProfessions: Dispatch<any>
  setStudyFieldsCourses: Dispatch<any>
  setCurProgramsType: Dispatch<any>
  setCurProgramsStudyFieldSlug: Dispatch<any>
  setSearchTerm: Dispatch<any>
  setFilteredPrograms: Dispatch<any>
}>({
  program: null,
  reviews: [],
  programs: [],
  courses: [],
  professions: [],
  studyFields: [],
  studyFieldsProfessions: [],
  studyFieldsCourses: [],
  curProgramsType: null,
  curProgramsStudyFieldSlug: null,
  searchTerm: null,
  filteredPrograms: [],
  blogs:[],
  seminar: null,
  setSeminar: () => {},
  updateTicketsQuantity: (newQuantity) => {},
  setBlogs: () => {},
  setProgram: () => {},
  setPrograms: () => {},
  setCourses: () => {},
  setProfessions: () => {},
  setStudyFields: () => {},
  setStudyFieldsProfessions: () => {},
  setStudyFieldsCourses: () => {},
  setCurProgramsType: () => {},
  setCurProgramsStudyFieldSlug: () => {},
  setSearchTerm: () => {},
  setFilteredPrograms: () => {}
})

export default ContextStaticProps
