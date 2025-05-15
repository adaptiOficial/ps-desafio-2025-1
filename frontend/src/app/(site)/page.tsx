/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-async-client-component */
'use client'

import { useToast } from '@/components/use-toast'
import { api } from '@/services/api'
import { vehicleType } from '@/types/vehicle'
import { useEffect, useState } from 'react'
import style from './style.module.css'
import Card from '@/components/site_PS/card/card'
import Navbar from '@/components/site_PS/navbar/navbar'
import Footer from '@/components/site_PS/footer/footer'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Navigation, Pagination, EffectFlip, Autoplay } from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

export default function Home() {
  const [vehicles, setVehicles] = useState<vehicleType[] | undefined>()
  const { toast } = useToast()

  useEffect(() => {
    const requestData = async () => {
      const { response } = await api<vehicleType[]>('GET', `/vehicles`)

      if (response) {
        setVehicles(response)
      } else {
        toast({
          title: 'Veículos não encontrados',
        })
      }
    }
    requestData()
  }, [toast])

  return (
    <>
      <div className={style.page}>
        <Navbar logo="./images/logo2.svg" />
        <div className={style.carousel_wrapper}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectFlip]}
            autoplay={{ delay: 10000, waitForTransition: true }}
            speed={2000}
            loop={true}
            className={style.carousel}
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <img
                className={style.carousel_img}
                src="./images/image-1.jpeg"
                alt="imagem-1-carrossel"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className={style.carousel_img}
                src="./images/image-2.jpg"
                alt="imagem-2-carrossel"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className={style.carousel_img}
                src="./images/image-3.jpg"
                alt="imagem-3-carrossel"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className={style.wrapper}>
          <h1>Confira nosso catálogo MONSTRO:</h1>
          <div className={style.cards_wrapper}>
            {vehicles?.map((vehicle: vehicleType, index: number) => (
              <Card vehicle={vehicle} key={index} />
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}
