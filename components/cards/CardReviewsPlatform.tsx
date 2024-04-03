import stls from '@/styles/components/cards/CardReviewsPlatform.module.sass'
import IconStar from '../icons/IconStar'

const CardReviewsPlatform = ({el} ) => {
  const {
    rating,
    node,
    quantity
  } = el

  return (
      <div className={stls.contentSlide}>
        <p className={stls.rating}>рейтинг</p>
        <div className={stls.ratingWithStar}>
          <IconStar isOrange />
        <p className={stls.ratingNum}>{rating}</p>
        </div>
        
        <p className={stls.quantity}>{quantity} оценок</p>
        {node}
        </div>
  )
}

export default CardReviewsPlatform
