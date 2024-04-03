import truncate from 'truncate'

const seo = {
  openGraph: {
    type: 'website',
    locale: 'ru',
    url: 'https://mipsy.institute',
    site_name: 'MIP'
  },
  // twitter: {
  //   handle: '@handle',
  //   site: '@site',
  //   cardType: 'summary_large_image',
  // },
  // defaultTitle: 'Московский Институт Психологии',
  // description: truncate(
  //   'Онлайн-институт востребованных профессий в области психологии (психоанализа, клинической психологии, бизнес-психологии, гештальт терапии, КПТ, психолого-педагогического и специального (дефектологического) направлений. Институт реализует программы дополнительного профессионального образования: повышение квалификации, профессиональной переподготовки и курсы Life',
  //   120
  // ),
  canonical: 'https://mipsy.institute',
  // dangerouslySetAllPagesToNoIndex: true,
  // dangerouslySetAllPagesToNoFollow: true,
  noindex: true,
  nofollow: true
}

export default seo
