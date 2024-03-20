import stls from '@/styles/components/icons/IconDirrectionTg.module.sass'
import classNames from 'classnames'

const IconDirrectionTg = ({colorCode='#F87E1B', leftDirection=false, fourtyPx=false}) => {
  return (
    <span className={classNames({
      [stls.container]: true,
      [stls.leftDirection]: leftDirection,
      [stls.fourtyPx]: fourtyPx
    })}>
      <svg
        width='106'
        height='118'
        viewBox='0 0 106 128'
        fill={colorCode}
        xmlns='http://www.w3.org/2000/svg'>
        <path
          // fillRule='evenodd'
          // clipRule='evenodd'
          d='M60.9445 44.2053L105.195 32.8125L49.3863 -0.00258673L60.9445 44.2053ZM44.5982 72.0057L88.849 60.6129L60.9445 44.2053L33.04 27.7978L44.5982 72.0057ZM28.2519 99.8061L72.5027 88.4132L44.5982 72.0057L16.6937 55.5981L28.2519 99.8061ZM28.2519 99.8061L56.1563 116.214L11.9055 127.606L0.347378 83.3985L28.2519 99.8061Z'
          fill={colorCode}
        />
      </svg>
    </span>
  )
}

export default IconDirrectionTg
