import stls from '@/styles/components/btns/BtnEpsilon.module.sass'

const BtnEpsilon = ({ text = '' }) => {
  return <button className={stls.container}>{text}</button>
}

export default BtnEpsilon
