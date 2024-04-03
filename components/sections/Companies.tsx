import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import kontur from '@/public/assets/imgs/companies/kontur.png'
import naim from '@/public/assets/imgs/companies/naim.png'
import rfs from '@/public/assets/imgs/companies/rfs.png'
import zdorove from '@/public/assets/imgs/companies/zdorove.png'
import stls from '@/styles/components/sections/Companies.module.sass'
import Image from 'next/image'
import SwiperCore, { Autoplay, Pagination, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Wrapper from '../layout/Wrapper'
import 'swiper/css/scrollbar'
SwiperCore.use([Pagination, Scrollbar, Autoplay])

const Companies = () => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')

  const list = [
    {
      id: 1,
      src: kontur,
      alt: 'СКБ Контур',
      width: 200,
      height: 85,
      mobWidth: 120,
      mobHeight: 50
    },
    {
      id: 2,
      src: rfs,
      alt: 'РФС',
      width: 145,
      height: 166,
      mobWidth: 80,
      mobHeight: 92
    },
    {
      id: 4,
      src: naim,
      alt: 'НАИМ',
      width: 150,
      height: 150,
      mobWidth: 73,
      mobHeight: 73
    },
    {
      id: 3,
      src: zdorove,
      alt: 'Здоровье',
      width: 157,
      height: 107,
      mobWidth: 89,
      mobHeight: 61
    }
  ]
  return (
    <section className={stls.container}>
      <Wrapper>
        <h2>Ведущие компании доверяют обучение своих сотрудников нам</h2>
        <div className={stls.companies}>
          <Swiper
            slidesPerView={isMobileAndTabletLayout ? 2 : 4}
            spaceBetween={isMobileAndTabletLayout ? 20 : 30}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            speed={2000}
            scrollbar={{ draggable: true }}
            modules={[Scrollbar]}
            className={stls.mySwiper}>
            {list.map(block => (
              <SwiperSlide key={block.id} className={stls.slide}>
                <Image
                  src={block.src}
                  alt={block.alt}
                  className={stls.img}
                  width={isMobileAndTabletLayout ? block.mobWidth : block.width}
                  height={
                    isMobileAndTabletLayout ? block.mobHeight : block.height
                  }
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Wrapper>
    </section>
  )
}

export default Companies
