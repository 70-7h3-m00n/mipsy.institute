import stls from '@/styles/components/btns/BtnZeta.module.sass'

const BtnZeta = ({ text = '' }) => {
  return <button className={stls.container}>{text}</button>
}

export default BtnZeta
