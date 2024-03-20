import stls from '@/styles/components/general/CtaText.module.sass'
import classNames from 'classnames'
import { IconMoreThan } from '@/components/icons'

const CtaText = ({
  text,
  cbeta = false,
  cnu = false,
  ctheta = false,
  dimmer = false,
  arrowBottom = false
}) => {
  return (
    <span
      className={classNames({
        [stls.container]: true,
        [stls.cbeta]: cbeta,
        [stls.cnu]: cnu,
        [stls.ctheta]: ctheta,
        [stls.dimmer]: dimmer,
        [stls.arrowBottom]: arrowBottom
      })}>
      <span className={stls.text}>{text}</span>{' '}
      <span className={stls.icon}>
        <IconMoreThan cbeta={cbeta} cnu={cnu} ctheta={ctheta} dimmer={dimmer} />
      </span>
    </span>
  )
}

export default CtaText
