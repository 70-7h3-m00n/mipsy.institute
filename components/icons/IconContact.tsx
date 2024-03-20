import stls from '@/styles/components/icons/IconContact.module.sass'
import IconProps from '@/types/interfaces/DropDownMenuIconInterface';
import classNames from 'classnames'
import React from 'react'

const IconContact: React.FC<IconProps> = ({ onClick,onMouseEnter, onMouseLeave, small = false, selected = false, className }) => {

  const iconClasses = classNames(stls.container, { [stls.small]: small, [stls.selected]: selected }, className);
  return (
    <span
    onMouseLeave={onMouseLeave}
    onMouseEnter={onMouseEnter}
      onClick={onClick}
      className={iconClasses}>
      <svg
        width='23'
        height='23'
        viewBox='0 0 23 23'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M4.03008 0.0152866C4.08578 0.0152866 4.14216 0.0152866 4.19786 0.0152866C5.16024 0.0166268 5.42332 0.202242 5.76425 1.09347C6.32397 2.55561 6.86623 4.02513 7.46151 5.4732C7.76553 6.21298 7.43601 6.77854 7.07159 7.33539C6.76758 7.79976 6.39511 8.22125 6.03606 8.6481C5.6703 9.08366 5.62265 9.33628 5.89177 9.82813C7.27696 12.3604 9.11113 14.4799 11.6218 15.9595C12.2627 16.3374 12.9412 16.6537 13.6143 16.9733C14.0526 17.1817 14.3291 17.1094 14.6143 16.7381C15.2116 15.9602 15.8029 15.1768 16.3827 14.3854C16.7028 13.9479 16.9652 13.8286 17.4699 14.0531C18.2129 14.3834 18.9424 14.7459 19.6658 15.1172C20.488 15.5393 21.296 15.9896 22.1134 16.4212C22.4369 16.5921 22.5631 16.8507 22.5631 17.2112C22.5624 18.0569 22.4107 18.8764 22.1114 19.6597C21.7591 20.5811 20.9987 21.1447 20.2047 21.6573C18.5994 22.6933 16.8599 22.777 15.0955 22.2296C12.658 21.4737 10.3574 20.4237 8.34941 18.8054C6.80315 17.5597 5.38641 16.1799 4.2039 14.5905C3.19453 13.2335 2.22477 11.8371 1.36171 10.3843C0.45972 8.86588 -0.0590553 7.19601 0.00537226 5.39413C0.0731554 3.49106 0.80736 1.87815 2.16168 0.54533C2.68381 0.0320382 3.34151 -0.038991 4.03008 0.0152866Z'
          fill='white'
        />
      </svg>
    </span>
  )
}

export default IconContact
