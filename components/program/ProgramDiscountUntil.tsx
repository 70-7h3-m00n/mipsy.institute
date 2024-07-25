import getNextFriday from '@/helpers/getNextFriday'

const ProgramDiscountUntil = () => {
  return (
    <>
      до {getNextFriday(new Date())}
    </>
  )
}

export default ProgramDiscountUntil
