import stls from '@/styles/components/sections/Reviews.module.sass'
import classNames from 'classnames'
import { getImageHeight } from '@/helpers/index'
import Wrapper from '@/components/layout/Wrapper'
import SwiperContainer from '@/components/general/SwiperContainer'
import CardReview from '@/components/cards/CardReview'
import { ImgReview } from '@/components/imgs'
import { useContext } from 'react'
import { ContextStaticProps } from '@/context/index'
import TagOrange from '../general/TagOrange'

type ReviewsType = {
  standalone?: boolean
  reviews: any,
  reviewsRef?: any,
  onMain?: boolean
}

const Reviews = ({ standalone = false, reviews, reviewsRef, onMain }: ReviewsType) => {
  const { program } = useContext(ContextStaticProps)
  const uniqueReviewsCount = program?.unique_reviews?.length
  if(uniqueReviewsCount > 0 ){
    reviews = program?.unique_reviews
  }
  const slides = reviews?.map((review, idx) => (
    <CardReview
      key={review.title + idx}
      title={review.title}
      photo={
        <ImgReview
          src={review?.picture?.[0]?.url}
          alt={review.name}
          width={110}
          height={getImageHeight({
            width: 110,
            widthInitial: review?.picture?.[0]?.width,
            heightInitial: review?.picture?.[0]?.height
          })}
        />
      }
      name={review.name}
      occupation={review.profession}
      story={review.story}
    />
  ))

  const desktopSwiperOptions = {
    slidesNum: 2,
    spaceBetween: 20
  }
  const laptopSwiperOptions = {
    slidesNum: 2,
    spaceBetween: 20
  }
  const tabletSwiperOptions = {
    slidesNum: 1,
    spaceBetween: 10
  }
  const mobileSwiperOptions = {
    slidesNum: 1.2,
    spaceBetween: 5
  }
  return (
    <section
      ref={reviewsRef}
      className={classNames({
        [stls.container]: true,
        [stls.standalone]: standalone
      })}>
      <Wrapper>
        {onMain && (
          <div className={stls.tag}>
            <TagOrange>
              Cлушатели
            </TagOrange>
          </div>
        )}
        {/* <p className={stls.reviewCount}>{reviews.length} отзывов</p> */}
        <h2 className={stls.title}>Отзывы наших студентов</h2>
        <p className={stls.description}>Мы собрали подробные отзывы учеников, которые прослушали курс и получили профессию. Они рассказали свои истории, которые откликаются в сердцах наших преподавателей и всей команды Московского Института Психологии.</p>
        <div className={stls.content}>
          <SwiperContainer reviewPrevBtn reviewNextBtn 
          reviews 
          slides={slides}
          desktopOptions={desktopSwiperOptions}
          laptopOptions={laptopSwiperOptions}
          tabletOptions={tabletSwiperOptions}
          mobileOptions={mobileSwiperOptions}/>
        </div>
      </Wrapper>
    </section>
  )
}

export default Reviews
