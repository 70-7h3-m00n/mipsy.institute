import stls from '@/styles/components/layout/TwoColumns.module.sass'
import classNames from 'classnames'

const TwoColumns = ({ children, slidable = false }) => {
  return (
    <div
      className={classNames({
        [stls.container]: true,
        [stls.slidable]: slidable
      })}>
      {children}
    </div>
  )
}

export default TwoColumns
