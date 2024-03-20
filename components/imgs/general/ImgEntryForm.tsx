import stls from '@/styles/components/imgs/general/ImgEntryForm.module.sass'
import Image from 'next/image'
import pic from '@/public/assets/imgs/general/entryForm.svg'

const ImgEntryForm = () => {
  return (
    <div className={stls.container}>
      <Image src={pic} alt='hands on main' />
    </div>
  )
}

export default ImgEntryForm
