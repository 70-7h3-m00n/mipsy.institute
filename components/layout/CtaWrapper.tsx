import stls from '@/styles/components/layout/CtaWrapper.module.sass'
import classNames from 'classnames'

const CtaWrapper = ({ children }) => {
  return <div className={stls.container}>{children}</div>
}

export default CtaWrapper
