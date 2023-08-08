
import { useQuery } from 'react-query';
import Loading from '../../../Shared/Loading';
import RevCard from './RevCard';
import React from "react";
import axiosInstance from '../../../../utils/axiosInstance';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Pagination, Navigation } from "swiper";
// import required modules
const Review = () => {
  const { isLoading, error, data: reviews } = useQuery('repoData', async () => {
    const response = await axiosInstance.get('/reviews');
    return response.data;
  });

  if (isLoading) return <Loading></Loading>;

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">What our Client says about us?</h1>
            <div className="h-1 w-20 bg-primary rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Every Client is very important to us. Please Dont't hesitate to share your thoughts.</p>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper mb-3"
        >
          {reviews.map((rev, index) => (
            <SwiperSlide key={index}>
              <RevCard rev={rev} key={rev._id}></RevCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Review;