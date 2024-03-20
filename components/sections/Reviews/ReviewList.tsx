import IconSpiral from '@/components/icons/IconSpiral'
import Wrapper from '@/components/layout/Wrapper'
import styles from '@/styles/components/sections/ReviewList.module.sass'
import Review from './Review'

type ReviewsType = {
  reviews: any
}

export default function ReviewList({ reviews }: ReviewsType) {
  return (
    <Wrapper>
      
      <h1 className={styles.title}>Отзывы  наших учеников</h1>
      <p className={styles.subtitle}>Мы собрали подробные отзывы учеников, которые прослушали курс и получили профессию. Они рассказали свои истории, которые откликаются в сердцах наших преподавателей и всей команды Московского Института Психологии.</p>
    <div className={styles.box}>
      <div className={styles.icon}>
        <IconSpiral violet/>
      </div>
      {reviews.map((review, i) => (
        <Review key={i} review={review} />
      ))}
    </div>
    </Wrapper>
  )
}
