import stls from '@/styles/components/icons/IconAtom.module.sass'
import classNames from 'classnames'

const IconAtom = ({
  small = false,
  regular = false,
  large = false,
  responsive = false,
  cnu = false,
  crho = false,
  calpha = false,
  barelyVisible = false,
  slightlyVisible = false,
  withCircles = false
}) => {
  return (
    <span
      className={classNames({
        [stls.container]: true,
        [stls.small]: small,
        [stls.regular]: regular,
        [stls.large]: large,
        [stls.responsive]: responsive,
        [stls.cnu]: cnu,
        [stls.crho]: crho,
        [stls.calpha]: calpha,
        [stls.barelyVisible]: barelyVisible,
        [stls.slightlyVisible]: slightlyVisible
      })}>
      <svg viewBox='0 0 216 174' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <title>Атом</title>
        <g>
          <path
            d='M194.536 136.6C191.719 141.479 186.653 144.804 179.821 146.599C172.986 148.395 164.421 148.647 154.688 147.405C135.225 144.921 111.192 136.473 87.2189 122.632C63.2462 108.791 43.9136 92.2022 32.0303 76.5882C26.088 68.7803 22.0239 61.2367 20.1616 54.4198C18.2999 47.6054 18.6468 41.5563 21.464 36.6768C24.2812 31.7973 29.3465 28.4722 36.1787 26.6773C43.0135 24.8817 51.5785 24.6295 61.3115 25.8718C80.7752 28.356 104.808 36.8039 128.781 50.6446C152.754 64.4852 172.086 81.0745 183.97 96.6884C189.912 104.496 193.976 112.04 195.838 118.857C197.7 125.671 197.353 131.72 194.536 136.6Z'
            stroke='white'
          />
        </g>
        <g>
          <path
            d='M194.536 36.6766C197.353 41.556 197.7 47.6052 195.838 54.4196C193.976 61.2365 189.912 68.7801 183.97 76.588C172.086 92.2019 152.754 108.791 128.781 122.632C104.808 136.472 80.7752 144.92 61.3115 147.405C51.5785 148.647 43.0135 148.395 36.1787 146.599C29.3465 144.804 24.2812 141.479 21.464 136.6C18.6469 131.72 18.2999 125.671 20.1616 118.857C22.0239 112.04 26.088 104.496 32.0303 96.6882C43.9137 81.0743 63.2463 64.485 87.2189 50.6443C111.192 36.8037 135.225 28.3558 154.688 25.8715C164.421 24.6292 172.986 24.8815 179.821 26.6771C186.653 28.472 191.719 31.7971 194.536 36.6766Z'
            stroke='white'
          />
          {withCircles && (
            <>
              <circle cx='205' cy='132' r='11' fill='#F87E1B' />
              <circle cx='21' cy='130' r='10' fill='#6F01C6' />
              <circle cx='40' cy='87' r='3' fill='#F87E1B' />
            </>
          )}
        </g>
      </svg>
    </span>
  )
}

export default IconAtom
