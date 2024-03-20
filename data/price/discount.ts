import { discountNum } from '@/data/price'

const discount: string = `-${discountNum}%`
// const discount: string = `-30%`

if (!discount.startsWith('-')) {
  throw new Error("Discount should be a string that starts with '-'")
}
export default discount
