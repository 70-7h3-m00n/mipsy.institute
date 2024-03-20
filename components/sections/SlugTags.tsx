import stls from '@/styles/components/sections/Seminars.module.sass'
import SlugCard from '../cards/SlugCard'

type ReviewsType = {
  standalone?: boolean
  reviews: any
  reviewsRef?: any
  onMain?: boolean
}

const SlugTags = ({ props, slug, withDate = false, selectedField }) => {
  const title = slug === 'journal' ? 'Все статьи' : 'Все семинары'
  return (
    <>
      <div className={stls.seminarsContainer}>
        {/* первый слайд на всю ширину */}
        <SlugCard item={props?.[0]} slug={slug} withDate={withDate} firstCard/>
        <h2 className={stls.slugTitle}>{title}</h2>
        {props?.filter((el,i) => i > 0).map(item => (
          <SlugCard key={item.id} item={item} slug={slug} withDate={withDate} />
        ))}
      </div>
    </>
  )
}

export default SlugTags
