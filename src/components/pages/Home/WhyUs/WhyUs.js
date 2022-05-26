import React from 'react';
import labgirl from '../../../../assets/lab.png'
const WhyUs = () => {
    return (
   
<section className="text-gray-600">
<h2 className="mt-8 text-4xl font-medium leading-none text-center">Why choose US?</h2>
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img className="object-cover object-center rounded" alt="hero" src={labgirl}/>
    </div>
    <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
				<div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700">
					<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-primary">
						<h3 className="text-xl font-semibold tracking-wide">Clean Unpolluted</h3>
						<time className="text-xs tracking-wide uppercase text-gray-400">__________</time>
						<p className="mt-3">We are proud to say that we are ISO certified company and one among the top Scientific Laboratory Instruments Manufacturers, Suppliers and Exporters.</p>
					</div>
					<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-primary">
						<h3 className="text-xl font-semibold tracking-wide">
Lasting & Long Term</h3>
						<time className="text-xs tracking-wide uppercase text-gray-400">__________</time>
						<p className="mt-3">Our products are precise and accurate for every segment of the Scientific Lab Industry.</p>
					</div>
					<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-primary">
						<h3 className="text-xl font-semibold tracking-wide">Quality</h3>
						<time className="text-xs tracking-wide uppercase text-gray-400">__________</time>
						<p className="mt-3">We offer an unmatched combination of innovative technologies, purchasing convenience and comprehensive services to our valuable consumers</p>
					</div>
				</div>
			</div>
  </div>
</section>
    );
};

export default WhyUs;





		
			
