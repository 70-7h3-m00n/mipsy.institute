import { BtnText } from '@/components/btns'
import { ImgReview } from '@/components/imgs'
import { PopupImage, PopupReview } from '@/components/popups'
import getImageHeight from '@/helpers/getImageHeight'
import styles from '@/styles/components/sections/ReviewList.module.sass'
import { MouseEvent, useState } from 'react'
import Popup from 'reactjs-popup'

export default function Review({ review }) {
  let [isHover, setIsHover] = useState(false)
  const handleMouseEvent = () => {
    setIsHover(true)
  }
  const handleLeaveEvent = () => {
    setIsHover(false)
  }
  return (
    <div
      className={styles.container}
      // onMouseEnter={handleMouseEvent}
      // onMouseLeave={handleLeaveEvent}
      >
      <div className={styles.upper}>
      <div className={styles.img}>
        

        
        <ImgReview
          src={review?.picture?.[0]?.url}
          alt={review.name}
          width={100}
          height={getImageHeight({
            width: 100,
            widthInitial: review?.picture?.[0]?.width,
            heightInitial: review?.picture?.[0]?.height
          })}
        />
      </div>
      <div className={styles.name}>
        <p>{review.title}</p>

        <p>{review.name}</p>
        <p>{review.profession}</p>
        </div>
      </div>
      <div className={styles.review}>
        <p>{review.story}</p>
        {/* <div className={styles.trigger}>
          { isHover &&
            <Popup
              trigger={
                <div>
                  <BtnText text='Читать историю' />
                </div>
              }
              modal
              nested
              onClose={() => setIsHover(prev => !prev)}>
              {close => (
                <PopupReview
                  title={review.title}
                  photo={
                    <ImgReview
                      src={review?.picture?.[0]?.url}
                      alt={review.name}
                      width={50}
                      height={getImageHeight({
                        width: 50,
                        widthInitial: review?.picture?.[0]?.width,
                        heightInitial: review?.picture?.[0]?.height
                      })}
                    />
                  }
                  name={review.name}
                  occupation={review.occupation}
                  story={review.story}
                  close={close}
                />
              )}
            </Popup>
          }
        </div> */}
      </div>
    </div>
  )
}
