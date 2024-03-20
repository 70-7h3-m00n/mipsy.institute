import stls from '@/styles/components/general/TagOrange.module.sass'

const TagOrange = ({children}) => {
  return (
    <div className={stls.container}>
      {children}
    </div>
  )
}

export default TagOrange
