import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectCube  } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-cube';
const Carousel = () => {
  return (
    <>
      <Swiper
        modules={[Navigation, Autoplay, EffectCube ]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={true}
        effect="cube"
  cubeEffect={{
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <img src='/images/swiper1.jpg' alt='Slide 1' style={{ width: '100%', height: '700px', objectFit: 'cover' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/images/swiper2.jpg' alt='Slide 1' style={{ width: '100%', height: '700px', objectFit: 'cover' }} />
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <img src='/images/swiper1.jpg' alt='Slide 1' style={{ width: '100%', height: '700px', objectFit: 'cover' }} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default Carousel;
