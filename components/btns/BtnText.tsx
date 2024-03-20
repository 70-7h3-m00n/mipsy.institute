import stls from '@/styles/components/btns/BtnText.module.sass'
import CtaText from '@/components/general/CtaText'
import classNames from 'classnames'

const BtnText = ({
  text = '',
  cbeta = true,
  cnu = false,
  ctheta = false,
  dimmer = false,
  arrowBottom = false
}) => {
  if (cnu === true || ctheta === true) cbeta = false
  return (
    <button
      className={classNames({
        [stls.container]: true,
        [stls.cbeta]: cbeta,
        [stls.cnu]: cnu,
        [stls.ctheta]: ctheta,
        [stls.dimmer]: dimmer
      })}>
      <CtaText
        text={text}
        cbeta={cbeta}
        cnu={cnu}
        ctheta={ctheta}
        dimmer={dimmer}
        arrowBottom={arrowBottom}
      />
    </button>
  )
}

export default BtnText
