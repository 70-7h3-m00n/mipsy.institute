import stls from '@/styles/components/cards/CardReview.module.sass'
import truncate from 'truncate'
import Popup from 'reactjs-popup'
import { BtnText } from '@/components/btns'
import { PopupReview } from '@/components/popups'
import { useEffect, useState } from 'react'

const CardReview = ({ title, photo, name, occupation, story }) => {
  const [cut, setCut] = useState(355)
  const [isFull, setIsFull] = useState(false)
  const [threePoints, setThreePoints] = useState(false)
  const fullStory = story?.length

  const cutHandler = () => {
    setThreePoints(false)
    setCut(fullStory)
    setIsFull(true)
  }

  const shortHandler = () => {
    setCut(370)
    setIsFull(false)
  }
  useEffect(() => {
    fullStory > cut && setThreePoints(true)
  }, [ cut, fullStory, isFull])
  return (
    <div className={stls.container}>
      <div className={stls.upperContainer}>
        <div className={stls.img}>{photo}</div>
      <div className={stls.content}>
        <p className={stls.title} title={title}>
          {truncate(title, 65)}
        </p>
        <div className={stls.text}>
          <p className={stls.name}>{name}</p>
          <p className={stls.occupation}>{occupation}</p>
        </div>
      </div>
      </div>
      <div className={isFull ? `${stls.fullBottom}` : `${stls.bottom}`}>
        <p className={stls.story}>{story.slice(0,cut)}{threePoints ? (<span>...</span>) : ('')}</p>
        {story?.length > cut && 
        (<p className={stls.moreText} onClick={cutHandler}>Читать полностью</p>)}
        {isFull && cut === story?.length && <p onClick={shortHandler} className={stls.moreText}>Скрыть историю</p>}
      </div>
    </div>
  )
}

export default CardReview
