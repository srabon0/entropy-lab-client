import React from "react";

const Blogs = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 flex-shrink-0">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="sm:w-16 sm:h-16 w-10 h-10"
              viewBox="0 0 24 24"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-2">
              {" "}
              How will you improve the performance of a React Application?
            </h2>
            <p class="leading-relaxed text-base">
              Avoid inline style attributes,Less use o extra tag, inline
              funciton rendering should be avoided. Biding arrow function in a
              class. Unnecessary component rendering should be less. Lazy
              loading of images.etc
            </p>
          </div>
        </div>
        <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-2">
              What are the different ways to manage a state in a React
              application?
            </h2>
            <p class="leading-relaxed text-base">
              1.Local state is data we manage in one or another component. we
              can manage state in Local component using useState, UseCallback.
              <br />
              2.Global state is data we manage across multiple components. We
              manage global state using useContext, useReducer.
            </p>
            3.URL state is used when Data that exists on our URLs, including the
            pathname and query parameters.
          </div>
          <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 flex-shrink-0">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="sm:w-16 sm:h-16 w-10 h-10"
              viewBox="0 0 24 24"
            >
              <circle cx="6" cy="6" r="3"></circle>
              <circle cx="6" cy="18" r="3"></circle>
              <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
            </svg>
          </div>
        </div>
        <div class="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
          <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 flex-shrink-0">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="sm:w-16 sm:h-16 w-10 h-10"
              viewBox="0 0 24 24"
            >
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-2">
              {" "}
              How does prototypical inheritance work?
            </h2>
            <p class="leading-relaxed text-base">
              prototypical inheritance refers to the ability to access object
              properties from another object. We use a JavaScript prototype to
              add new properties and methods to an existing object constructor.
              We can then essentially tell our JS code to inherit properties
              from a prototype. Prototypical inheritance allows us to reuse the
              properties or methods from one JavaScript object to another
              through a reference pointer function. Like , all squares are
              rectangles, but not all rectangles are squares. If we think of
              this as a JS program, we could say that the rectangle is a
              prototype to the square: the square inherits all properties of a
              rectangle.
            </p>
            <br />
          </div>
        </div>
        <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-2">
              What are the different ways to manage a state in a React
              application?
            </h2>
            <p class="leading-relaxed text-base">
              The spread operator is a new addition to the set of operators in
              JavaScript ES6. It takes in an iterable (e.g an array) and expands
              it into individual elements. The spread operator is commonly used
              to make shallow copies of JS objects. Using this operator makes
              the code concise and enhances its readability.
              <br />
              1. Copying an array
              <br />
              2. Inserting the elements of one array into another
            </p>
            3. Array to arguments.
          </div>
          <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 flex-shrink-0">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="sm:w-16 sm:h-16 w-10 h-10"
              viewBox="0 0 24 24"
            >
              <circle cx="6" cy="6" r="3"></circle>
              <circle cx="6" cy="18" r="3"></circle>
              <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
            </svg>
          </div>
        </div>
        <div class="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
          <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 flex-shrink-0">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="sm:w-16 sm:h-16 w-10 h-10"
              viewBox="0 0 24 24"
            >
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-2">
              {" "}
              You have an array of products. Each product has a name, price,
              description, etc. How will you implement a search to find products
              by name?
            </h2>
            <p class="leading-relaxed text-base">
              if we want to find an item in an array we just need to use
              array.fileter() method and compare product.name with my desird
              text. Or if i want to search by a character we will have to use
              includes.
            </p>
            <br />
          </div>
        </div>

        <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-2">
              What is a unit test? Why should write unit tests?
            </h2>
            <p class="leading-relaxed text-base">
              UNIT TESTING is a type of software testing where individual units
              or components of a software are proven. The purpose is to validate
              that each unit of the software code performs as expected. Unit
              Testing is done during the development (coding phase) of an
              application by the developers. Unit Tests remove a section of code
              and validate allure propriety. A part can be an individual
              function, method, process, piece, or object. In SDLC, STLC, V
              Model, Unit testing is first level of testing done before
              integration testing. Unit testing is a WhiteBox experiment
              technique that is to say mostly acted by the developer. Though, in
              a practical world due to time crunch or hesitation of developers
              to tests, QA engineers further do part testing.
            </p>
          </div>
          <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 flex-shrink-0">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="sm:w-16 sm:h-16 w-10 h-10"
              viewBox="0 0 24 24"
            >
              <circle cx="6" cy="6" r="3"></circle>
              <circle cx="6" cy="18" r="3"></circle>
              <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
            </svg>
          </div>
        </div>

        <button class="flex mx-auto mt-20 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
          Button
        </button>
      </div>
    </section>
  );
};

export default Blogs;
