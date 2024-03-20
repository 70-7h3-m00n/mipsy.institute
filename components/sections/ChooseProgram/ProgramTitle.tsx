import IconHorizontalOrnament from '@/components/icons/IconHorizontalOrnament'
import styles from '@/styles/components/sections/ChooseProgram.module.sass'

export default function ProgramTitle() {
  return (
    <>
    <div className={styles.top}>
      <span className={styles.pinkRound}>65 программ</span>
      <span className={styles.spnn}>по <span className={styles.violetText}>7-ми</span> востребованным направлениям</span>
    </div>
    <div className={styles.horizontalOrnament}>
      <IconHorizontalOrnament />
    </div>
    <div className={styles.title}>
        <h1>Подберите то, что подойдет именно вам</h1>
        </div>
    </>
  )
}
