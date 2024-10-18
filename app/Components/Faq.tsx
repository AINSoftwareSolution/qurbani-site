'use client';
import React, { useState } from 'react';
import { accordionData } from '../utilis/data';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleAccordionClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-green-900 ">
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-5 text-center text-white mt-4">Frequently Asked Question</h1>
      <div className="flex justify-end mt-12 mx-8">
        <div className="accordion-group w-full"> 
          {accordionData.map((item, index) => (
            <div key={item.id} className="accordion mb-4">
              <button
                className={`accordion-toggle flex justify-between items-center w-full p-4 bg-white border border-gray-300 rounded-lg ${
                  activeIndex === index ? 'active' : ''
                }`}
                onClick={() => handleAccordionClick(index)}
              >
                <h5 className="text-left">{item.title}</h5>
                <svg
                  className={`text-gray-500 transition duration-500 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
              {activeIndex === index && (
                <div className="accordion-content px-4 py-2 bg-gray-100 rounded-lg">
                  <p className="text-base text-gray-900 leading-6">{item.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Faq;
