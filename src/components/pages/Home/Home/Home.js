import React from 'react';
import PageTitle from '../../../Shared/PageTitle';
import Banner from '../Banner/Banner'
import WhyUs from '../WhyUs/WhyUs';
import Buy from '../Buy/Buy';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
const Home = () => {
    return (
        <>
         <PageTitle title="Home"></PageTitle>
          <Banner></Banner>
          <Buy></Buy>
          <WhyUs></WhyUs>
          <BusinessSummary></BusinessSummary>
          
        </>
    );
};

export default Home;