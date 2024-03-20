import stls from '@/styles/components/articles/ArticleAuthors.module.sass'
import CardImgWithAchievements from '../cards/CardImgWithAchievements'

type ArticleAuthorsType = {
  authors: {
    name: string
    achievements: string
    position: string
    portrait: {
      url: string
      width: string
      height: string
    }
  }[]
}

const ArticleAuthors = ({ authors }: ArticleAuthorsType) => {
  return (
    <>
      <h2>Автор и психолог статьи:</h2>
      <div className={stls.authorsList}>
        {authors.map((el, i) => (
          <CardImgWithAchievements key={i} person={el} />
        ))}
      </div>
    </>
  )
}

export default ArticleAuthors
