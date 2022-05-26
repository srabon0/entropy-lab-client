import React, { useState } from "react";
import bannerImg from "../../../../assets/landing1.png";
import { Link } from 'react-scroll';
const Banner = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div class="hero min-h-screen bg-base-100">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img
          className="md:w-2/4"
          src={bannerImg}
          alt="banner img for shingping"
        />
        <div className="md:w-2/4">
          <h1 class="text-5xl font-bold text-primary">Welcome To EntropyLab</h1>
          <p class="py-6">
          EntropyLab Bangladesh is an A to Z Scientific Lab Equipment seller and supplier in Bangladesh. It’s also a scientific store, stockist, wholesaler, procurement provider, retailer of health, safety, surgical, scientific laboratory and testing Products for schools, colleges, and industries. EntropyLab provides the complete product solution of laboratory equipment, lab consumable materials, and safety products. Here we sell Weight Scales, 
          </p>
          
          <Link onClick={handleClick} class="btn btn-primary hover:btn-secondary"  to='products' smooth={true} duration={500}>
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
