import stls from '@/styles/components/btns/BtnGamma.module.sass'

const BtnGamma = ({ text = '' }) => {
  return <button className={stls.container}>{text}</button>
}

export default BtnGamma
