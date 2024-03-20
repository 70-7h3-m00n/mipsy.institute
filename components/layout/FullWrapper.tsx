import stls from '@/styles/components/layout/FullWrapper.module.sass'
import classNames from 'classnames'

const FullWrapper = ({ children }) => {
  return <div className={stls.container}>{children}</div>
}

export default FullWrapper