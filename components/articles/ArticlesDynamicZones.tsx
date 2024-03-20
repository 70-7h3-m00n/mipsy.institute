import ArticleBlogBigSizeText from './ArticleBlogBigSizeText'
import ArticleBlogCommentBlock from './ArticleBlogCommentBlock'
import ArticleBlogList from './ArticleBlogList'
import ArticleBlogListWithBackgroundAndTitle from './ArticleBlogListWithBackgroundAndTitle'
import ArticleBlogListWithTitle from './ArticleBlogListWithTitle'
import ArticleBlogRelatedPrograms from './ArticleBlogRelatedPrograms'
import ArticleBlogSingleImageBlock from './ArticleBlogSingleImageBlock'
import ArticleBlogTeacherComment from './ArticleBlogTeacherComment'
import ArticleBlogTextImageBlock from './ArticleBlogTextImageBlock'
import ArticleFullColoredTextBlock from './ArticleFullColoredTextBlock'
import ArticleSubtitle from './ArticleSubtitle'
import ArticleTextBlockWithBackground from './ArticleTextBlockWithBackground'

export default function ArticlesDynamicZones({ props }) {
  switch (props.__typename) {
    case 'ComponentBlogTextImageBlock':
      return <ArticleBlogTextImageBlock props={props} />
    case 'ComponentBlogContentBlock':
      return <p>{props.content}</p>
    case 'ComponentBlogSubtitle':
      return <ArticleSubtitle props={props} />
    case 'ComponentBlogFullColoredTextBlock':
      return <ArticleFullColoredTextBlock props={props} />
    case 'ComponentBlogTextBlockWithBackground':
      return <ArticleTextBlockWithBackground props={props} />
    case 'ComponentBlogList':
      return <ArticleBlogList props={props} />
    case 'ComponentBlogTeacherComment':
      return <ArticleBlogTeacherComment props={props} />
    case 'ComponentBlogSingleImageBlock':
      return <ArticleBlogSingleImageBlock props={props} />
    case 'ComponentBlogCommentBlock':
      return <ArticleBlogCommentBlock props={props} />
    case 'ComponentBlogListWithTitle':
      return <ArticleBlogListWithTitle props={props} />
    case 'ComponentBlogRelatedPrograms':
      return <ArticleBlogRelatedPrograms props={props} />
    case 'ComponentBlogListWithBackgroundAndTitle':
      return <ArticleBlogListWithBackgroundAndTitle props={props} />
    case 'ComponentBlogBigSizeText':
      'ArticleBlogBigSizeTexte'
      return <ArticleBlogBigSizeText props={props} />
    default:
      break
  }
}
