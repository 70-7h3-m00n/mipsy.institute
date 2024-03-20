import { routes } from '@/config/index'

// type TypeGeneralRoutesFront = {
//   root: 'http://localhost:3000' | 'https://mip.institute'
//   home: '/'
//   programs: '/programs'
//   professions: '/professions'
//   courses: '/courses'
//   program: '/programs/studyField/slug'
//   webinars: '/webinars'
//   teachers: '/teachers'
//   about: '/about'
//   reviews: '/reviews'
//   legal: '/legal'
//   payment: '/payment'
//   contact: '/contact'
//   docs: '/docs'
//   docsConstituent: '/docs/constituent'
//   docsRegulations: 'docs/regulations'
//   docsGeneral: '/docs/general'
//   assetsImgsIconsManifestIcon512: '/assets/imgs/icons/manifest-icon-512.png'
//   policiesPrivacy: '/policies/privacy.pdf'
//   policiesTerms: '/policies/terms.pdf'
// }

type TypeGeneralRoutesFront = typeof routes

export default TypeGeneralRoutesFront
