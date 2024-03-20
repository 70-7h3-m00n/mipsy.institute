import stls from '@/styles/components/layout/Wrapper.module.sass'
import classNames from 'classnames'

const Wrapper = ({ children }) => {
  return <div className={stls.container}>{children}</div>
}

export default Wrapper
