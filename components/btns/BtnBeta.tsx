import stls from '@/styles/components/btns/BtnBeta.module.sass'
import classNames from 'classnames'

const BtnBeta = ({ text = '', isDisabled = false }) => {
  return (
    <button
      className={classNames({
        [stls.container]: true,
        [stls.isDisabled]: isDisabled
      })}
      disabled={isDisabled}>
      {text}
    </button>
  )
}

export default BtnBeta
