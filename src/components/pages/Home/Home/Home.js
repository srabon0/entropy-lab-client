import React from 'react';
import PageTitle from '../../../Shared/PageTitle';
import Banner from '../Banner/Banner'
import WhyUs from '../WhyUs/WhyUs';
const Home = () => {
    return (
        <>
         <PageTitle title="Home"></PageTitle>
          <Banner></Banner>
          <WhyUs></WhyUs>
        </>
    );
};

export default Home;