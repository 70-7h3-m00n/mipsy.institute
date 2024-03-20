import stls from '@/styles/pages/about/Title.module.sass'
import MipInfo from '@/components/sections/AboutMip/MipInfo'
import MipFoto from './MipFoto'
import Wrapper from '@/components/layout/Wrapper'
export default function AboutMip() {
  return (
    <div className={stls.fon}>
      <Wrapper>
        <div className={stls.bg}>
          <div className={stls.infoContainer}>
            <MipInfo />
          </div>
          <div className={stls.photoContainer}>
            <MipFoto />
          </div>
        </div>
      </Wrapper>
    </div>
  )
}
