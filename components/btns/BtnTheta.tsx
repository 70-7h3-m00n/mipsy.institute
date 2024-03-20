import stls from '@/styles/components/btns/BtnTheta.module.sass'

const BtnTheta = ({ text = '' }) => {
  return <button className={stls.container}>{text}</button>
}

export default BtnTheta
