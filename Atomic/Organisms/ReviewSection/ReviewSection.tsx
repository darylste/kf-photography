import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Review, Spacer, Text } from '@atomic';
import cn from 'classnames';
import React, { useRef, useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperCore } from 'swiper/types';

import styles from './ReviewSection.module.scss';

const reviewProps = {
  text: "The best agency we've worked with so far. They understand our product and are able to add new features with a great focus",
  authorName: 'Luana Peixoto',
  authorImg:
    'https://raw.githubusercontent.com/darylste/kf-photography/dc63d21424f69ef98ebbcc587b38e6e913426331/public/assets/random-user.jpeg',
};

const ReviewSection: React.FC = () => {
  const swiperRef = useRef<SwiperCore>();

  const [isPrevActive, setIsPrevAcvtive] = useState(false);
  const [isNextActive, setIsNextAcvtive] = useState(true);

  const numberOfSlides = 3;

  return (
    <section className={styles.section}>
      <div className={styles.left}>
        <Text varient='h3'>What our clients say about us</Text>
        <Text varient='body1'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
        </Text>
      </div>
      <div className={styles.right}>
        <Swiper
          style={{ position: 'relative' }}
          className={styles.swiper}
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={swiper => {
            if (
              swiper.activeIndex > 0 &&
              swiper.activeIndex < numberOfSlides - 1
            ) {
              setIsNextAcvtive(true);
              setIsPrevAcvtive(true);
            }
          }}
          onReachBeginning={() => {
            setIsPrevAcvtive(false);
          }}
          onReachEnd={() => {
            setIsNextAcvtive(false);
          }}
          onBeforeInit={swiper => (swiperRef.current = swiper)}
        >
          <SwiperSlide>
            <Review {...reviewProps} />
          </SwiperSlide>

          <SwiperSlide>
            <Review {...reviewProps} />
          </SwiperSlide>

          <SwiperSlide>
            <Review {...reviewProps} />
          </SwiperSlide>
        </Swiper>
        <div className={styles.carouselControls}>
          <div
            className={cn(
              styles.prev,
              isPrevActive
                ? `${styles.controlActive}`
                : `${styles.controlDisabled}`,
            )}
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <MdKeyboardArrowLeft size={24} />
          </div>
          <Spacer left='3xs' />
          <div
            className={cn(
              styles.next,
              isNextActive
                ? `${styles.controlActive}`
                : `${styles.controlDisabled}`,
            )}
            onClick={() => swiperRef.current?.slideNext()}
          >
            <MdKeyboardArrowRight size={24} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
