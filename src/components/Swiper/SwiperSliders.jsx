import React from 'react';
import { Carousel } from "@material-tailwind/react";

const SwiperSliders = () => {
  return (
    <Carousel className="rounded-xl mb-[100px]">
      <img
        src="https://i.ibb.co.com/wMb5Wjf/DALL-E-2024-12-08-12-51-34-A-professional-and-visually-appealing-carousel-image-designed-for-a-visa.webp"
        className="h-[400px] w-full object-fit"
      />
    <img
      src="https://i.ibb.co.com/WyP0hbd/DALL-E-2024-12-08-12-47-59-A-professional-carousel-image-for-a-visa-navigator-website-where-users-ca.webp"
      alt="image 1"
      className="h-[400px] w-full object-fit"
    />
    <img
      src="https://i.ibb.co.com/zhNzvMx/DALL-E-2024-12-08-12-56-39-A-sleek-and-modern-banner-carousel-image-designed-for-a-website-promoting.webp"
      alt="image 3"
      className="h-[400px] w-full object-fit"
    />
  </Carousel>
  );
};

export default SwiperSliders;