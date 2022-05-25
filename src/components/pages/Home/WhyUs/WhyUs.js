import React from 'react';
import labgirl from '../../../../assets/lab.png'
const WhyUs = () => {
    return (
   
<section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="hero" src={labgirl}/>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl font-bold text-3xl mb-4 font-medium text-primary">Before they sold out
        <br class="hidden lg:inline-block" />You need To be hurry.
      </h1>
      <p class="mb-8 leading-relaxed">EntropyLab manufactures scientific laboratory equipment and compounding pharmacy airflow products providing personnel, product, and environmental protection in critical research environments throughout the world.

EntropyLab's inspiration has provided life science, drug discovery, pharmacy, and biomedical/microbiology laboratory professionals with laboratory equipment including biosafety cabinets, co2 incubators, ultralow freezers, animal research equipment, restricted access barrier systems, and more.</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-secondary rounded text-lg">Button</button>
      </div>
    </div>
  </div>
</section>
    );
};

export default WhyUs;