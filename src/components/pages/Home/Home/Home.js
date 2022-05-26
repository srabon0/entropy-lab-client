import React from 'react';
import PageTitle from '../../../Shared/PageTitle';
import Banner from '../Banner/Banner'
import WhyUs from '../WhyUs/WhyUs';
import Buy from '../Buy/Buy';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import Products from '../Products/Products';
import Review from '../../../pages/Home/Reviews/Review';
import News from '../../News/News'
const Home = () => {
    return (
        <>
         <PageTitle title="Home"></PageTitle>
          <Banner></Banner>
          <Buy></Buy>
          <Products></Products>
          <WhyUs></WhyUs>
          <BusinessSummary></BusinessSummary>
          <Review></Review>
          <News></News>
          
        </>
    );
};

export default Home;