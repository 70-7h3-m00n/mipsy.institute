import stls from '@/styles/components/btns/BtnEta.module.sass'

const BtnEta = ({ text = '' }) => {
  return <button className={stls.container}>{text}</button>
}

export default BtnEta
