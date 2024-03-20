import stls from '@/styles/components/articles/ArticleRelatedBlogs.module.sass'
import SlugCard from '../cards/SlugCard'

type ArticleRelatedBlogsType = {
  blogs: {
    date: string
    id: string
    picture: {
      height: string
      width: string
      url: string
    }
    slug: string
    studyField: string
    studyFieldSlug: string
    subtitle: string
    title: string
  }[]
}

const ArticleRelatedBlogs = ({ blogs }: ArticleRelatedBlogsType) => {
  return (
    <div className={stls.container}>
      <h2 className={stls.titleRel}>Читайте также:</h2>
      <div className={stls.slugContainer}>
        {blogs.map(el => (
          <SlugCard slug='journal' key={el.slug} item={el} />
        ))}
      </div>
    </div>
  )
}

export default ArticleRelatedBlogs
