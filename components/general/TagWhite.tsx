import stls from '@/styles/components/general/TagWhite.module.sass'

const TagWhite = ({children}) => {
  return (
    <div className={stls.container}>
      {children}
    </div>
  )
}

export default TagWhite
