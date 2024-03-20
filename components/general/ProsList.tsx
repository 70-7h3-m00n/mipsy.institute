import stls from '@/styles/components/general/ProsList.module.sass'
import { pros } from '@/data/index'
import { IconCircleCheck } from '@/components/icons'

const ProsList = () => {
  return (
    <div className={stls.container}>
      <ul className={stls.pros}>
        {pros.map((pro, idx) => (
          <li key={`${pro}-${idx}`} className={stls.pro}>
            <div className={stls.icon}>
              <IconCircleCheck onMain />
            </div>
            <span className={stls.text}>{pro}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProsList
