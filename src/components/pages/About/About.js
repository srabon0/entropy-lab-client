import React from "react";

import devimg from "../../../assets/dev.jpg";
const About = () => {
  return (
    <div class="container px-6 py-16 mx-auto">
      <div class="lg:flex">
        <div class="w-full lg:w-1/2">
          <div class="lg:max-w-lg">
            <h1 class="text-2xl font-semibold text-accent capitalize lg:text-2xl">
              About Me
            </h1>
            <h1 class="text-3xl mt-3 font-semibold text-gray-800 capitalize lg:text-4xl">
              <span class="underline decoration-blue-500">
                MD Amam Uddin Srabon
              </span>{" "}
            </h1>

            <div class="my-2 p-2 bg-gray-100 rounded-lg">
                    <div class="w-full">
                        <h1 class="font-semibold text-primary">Education</h1>
                        <h2 class="font-semibold text-gray-700" >BSc. Computer Science and Engineering</h2>
                        <h5 class="font-semibold text-gray-700"> March, 2017 - present </h5>
                        <h2 class="font-semibold text-gray-700" >Tejgaon College,Dhaka</h2>

                    </div>
                </div>


            <p class="text-gray-500">I'm a front-end developer experienced in building and maintaining web pages. Determined and productive web developer with a passion for creative solutions. Proficient in JavaScript, HTML, CSS and React Js. Dedicated to learning additional technologies and coding languages.</p>

            
          </div>
          <a href="https://srabon.netlify.app/" class="btn mr-3 btn-sm px-4 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
        Contact Me
    </a>
    <a href="https://drive.google.com/file/d/1BJW3V49CgKfUoZW9ZvPY1oy16azdfp_8/view?usp=sharing" class="btn btn-sm px-4 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
        Download Resume
    </a>
        </div>

        <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
          <img
            class="w-full md:w-4/6 md:h-auto h-full rounded-lg shadow-lg shadow-accent lg:max-w-2xl"
            src={devimg}
            alt="md amam uddin srabon.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
