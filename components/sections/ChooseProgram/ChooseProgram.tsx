import IconVerticalArrow from '@/components/icons/IconVerticalArrow'
import Wrapper from '@/components/layout/Wrapper'
import styles from '@/styles/components/sections/ChooseProgram.module.sass'
import ProgramList from './ProgramList'
import ProgramTitle from './ProgramTitle'

export default function ChooseProgram() {
  return (
    <div className={styles.fon}>
      <Wrapper>
        <div className={styles.container}>
          <div className={styles.text}>
            <ProgramTitle />
            <ProgramList />
          </div>
          <div className={styles.icon}>
            <IconVerticalArrow />
          </div>
        </div>
      </Wrapper>
    </div>
  )
}
