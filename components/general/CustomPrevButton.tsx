import React from 'react'
import stls from '@/styles/components/general/CustomPrevButton.module.sass'
import IconPrevButton from '@/components/icons/IconPrevButton'
import classNames from 'classnames'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'

const CustomPrevButton = ({
  reviewPrevBtn = false,
  happyStudents = false,
  teachers=false,
  left = 0,
  top = 0,
  showOnMobile = false,
  mobileTop = 0,
  mobileLeft = 0
}) => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')
  return (
    <div
      style={{
        transform: `translate(${isMobileAndTabletLayout ? mobileLeft : left}px, ${isMobileAndTabletLayout ? mobileTop : top}px)`,
        opacity: isMobileAndTabletLayout && !showOnMobile ? 0 : 1
      }}
      className={classNames({
        [stls.containerPrev]: true,
        [stls.reviewPrevBtn]: reviewPrevBtn,
        [stls.happyStudentsPrevBtn]: happyStudents ,
        [stls.teachersPrevBtn]: teachers
      })}>
      <button className='custom-prev-button'>
        <IconPrevButton />
      </button>
    </div>
  )
}

export default CustomPrevButton
