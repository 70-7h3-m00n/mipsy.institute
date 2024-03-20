import stls from '@/styles/components/sections/Directions.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import { useState } from 'react'
import ProgramList from './ChooseProgram/ProgramList'
import DirectionsSelector from './DirectionsSelector'
import TagOrange from '../general/TagOrange'
import IconForBottomDirections from '../icons/IconForBottomDirections'

const Directions = () => {

  const [currentType, setCurrentType] = useState('profession')

  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.fullContainer}>
          <div className={stls.content}>
            <div className={stls.heading}>
              <h2 className={stls.title}>Направления</h2>
              <div className={stls.tag}>
                <TagOrange>Выбор</TagOrange>
              </div>

            </div>
            <div className={stls.flexContainer}>
              <DirectionsSelector currentType={currentType} setCurrentType={setCurrentType} />
              <ProgramList currentType={currentType} ofType={currentType === 'course' ? 'course' : currentType === 'profession' ? 'profession' : null} />
            </div>
            <div className={stls.flexContainerMobile}>
              <DirectionsSelector currentType={currentType} setCurrentType={setCurrentType} />
            </div>
          </div>
          
        </div>
        
      </Wrapper>
      <div className={stls.icon}>
            <IconForBottomDirections />
          </div>
    </section>
  )
}

export default Directions
