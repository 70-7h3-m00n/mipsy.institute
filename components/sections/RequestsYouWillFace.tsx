import stls from '@/styles/components/sections/RequestsYouWillFace.module.sass'
import { useEffect, useState } from 'react'
import IconRound from '../icons/IconRound'

const RequestsYouWillFace = ({ title, description, index }) => {
  const [isFlipped, setFlipped] = useState(false)
  const handleCardClick = () => {
    setFlipped(!isFlipped)
  }

  useEffect(() => {
    if (index === 0) {
        setFlipped(true);
    }
  }, [index]);

  return (
    <div
      className={`${stls.card} ${isFlipped ? stls.flipped : ''}`}
      onClick={handleCardClick}>
        {/* <IconCheck  calpha/> */}
      <div className={stls.front}>
        <IconRound/>
        <p>{title}</p>
      </div>
      <div className={stls.back}>
        <IconRound />
        <p>{description}</p>
      </div>
    </div>
  )
}

export default RequestsYouWillFace
