import stls from '@/styles/components/icons/IconContact.module.sass'
import IconProps from '@/types/interfaces/DropDownMenuIconInterface'
import classNames from 'classnames'
import React from 'react'

const IconDropDownDocuments: React.FC<IconProps> = ({
  onClick,
  onMouseEnter,
  onMouseLeave,
  small = false,
  selected = false,
  className
}) => {
  const iconClasses = classNames(
    stls.container,
    { [stls.small]: small, [stls.selected]: selected },
    className
  )
  return (
    <div
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      className={iconClasses}>
      <svg
        // width='13'
        // height='17'
        viewBox='0 0 13 17'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M10.1579 7.92345C10.2394 7.83908 10.2845 7.72607 10.2835 7.60877C10.2824 7.49147 10.2354 7.37926 10.1524 7.29632C10.0695 7.21337 9.95729 7.16632 9.83999 7.1653C9.72269 7.16428 9.60968 7.20937 9.52531 7.29087L6.26262 10.5536L4.78942 9.08036C4.70504 8.99886 4.59204 8.95377 4.47474 8.95479C4.35744 8.95581 4.24523 9.00286 4.16228 9.08581C4.07934 9.16875 4.03229 9.28096 4.03127 9.39826C4.03025 9.51556 4.07534 9.62857 4.15683 9.71294L6.26262 11.8187L10.1579 7.92345Z'
          fill='white'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M12.5299 4.47373V13.8686C12.5299 14.2245 12.3885 14.5659 12.1368 14.8176C11.8851 15.0693 11.5437 15.2107 11.1878 15.2107H3.13509C2.77913 15.2107 2.43776 15.0693 2.18607 14.8176C1.93437 14.5659 1.79297 14.2245 1.79297 13.8686V1.34212C1.79297 0.986166 1.93437 0.644793 2.18607 0.393097C2.43776 0.141401 2.77913 0 3.13509 0H8.05619L12.5299 4.47373ZM8.05619 4.9211C7.93754 4.9211 7.82374 4.87397 7.73985 4.79007C7.65595 4.70617 7.60881 4.59238 7.60881 4.47373V0.894745H3.13509C3.01644 0.894745 2.90264 0.941879 2.81875 1.02578C2.73485 1.10968 2.68771 1.22347 2.68771 1.34212V13.8686C2.68771 13.9872 2.73485 14.101 2.81875 14.1849C2.90264 14.2688 3.01644 14.3159 3.13509 14.3159H11.1878C11.3064 14.3159 11.4202 14.2688 11.5041 14.1849C11.588 14.101 11.6352 13.9872 11.6352 13.8686V4.9211H8.05619ZM8.50356 1.71254L10.8174 4.02635H8.50356V1.71254Z'
          fill='white'
        />
        <path
          d='M0.894745 2.68286V14.7619C0.894745 15.1179 1.03615 15.4592 1.28784 15.7109C1.53954 15.9626 1.88091 16.104 2.23686 16.104H10.7369V16.9988H2.23686C1.64361 16.9988 1.07466 16.7631 0.655162 16.3436C0.235669 15.9241 0 15.3552 0 14.7619V2.68286H0.894745Z'
          fill='white'
        />
      </svg>
    </div>
  )
}

export default IconDropDownDocuments
