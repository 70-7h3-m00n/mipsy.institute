import stls from '@/styles/components/cards/CardDistanceEducation.module.sass'
import { IconCircleCheck } from '../icons'
import classNames from 'classnames'

const CardDistanceEducation = ({ item, purpleBlock }) => {
  return (
    <div
      className={classNames({
        [stls.item]: true,
        [stls.purpleBlock]: purpleBlock
      })}>
      <IconCircleCheck distanceSection />
      <div className={stls.description}>
        <span className={stls.p}>{item}</span>
      </div>
    </div>
  )
}

export default CardDistanceEducation
