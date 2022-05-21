import React from "react";
import bannerImg from '../../../../assets/landing1.png';
const Banner = () => {
  return (
    <div class="hero min-h-screen bg-base-100">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img
        className="md:w-2/4"
          src={bannerImg}
alt="banner img for shingping"        />
        <div className="md:w-2/4">
          <h1 class="text-5xl font-bold text-primary">Welcome To EntropyLab</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button class="btn btn-primary hover:btn-secondary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
