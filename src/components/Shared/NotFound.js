import React from 'react';
import { Link } from 'react-router-dom';
import error from "../../assets/Asset 1.png"
const NotFound = () => {
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src={error} alt="Not found img" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl">Error
				<span className="dark:text-primary text-8xl">404</span> <br /> Not Found
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12 text-primary">The url You are trying to access is blocked or broken.
				
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<Link to="/" rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-primary dark:text-gray-900">Back To Home </Link>
				
			</div>
		</div>
	</div>
</section>
    );
};

export default NotFound;