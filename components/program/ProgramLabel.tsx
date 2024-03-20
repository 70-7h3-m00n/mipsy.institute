import stls from '@/styles/components/program/ProgramLabel.module.sass'
import { ContextStaticProps } from '@/context/index'
import { useContext } from 'react'

const ProgramLabel = () => {
  const { program } = useContext(ContextStaticProps)

  return (
    <div className={stls.container}>
      <p className={stls.p}>{program?.typeLabel}</p>
    </div>
  )
}

export default ProgramLabel
