"use client";
import React, { useState } from "react";
import { MdAddIcCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import Link from "next/link";


const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    email: "",
    message: "",
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.status === 201) {
        alert(data.message);
        setFormData({ firstName: "", lastName: "", contact: "", email: "", message: "" });
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 overflow-hidden mt-8">
      <div className="container inset-0 mx-auto px-2 lg:px-12 py-16 mt-4 font-bold text-gray-900 dark:text-white" id="contact">
        {/* <Title heading="Contact us" subheading="Reach us easily by completing the form or finding our address" /> */}
        <h2 className=" text-center mb-10 text-3xl font-black mb-3 font-bold text-gray-900 dark:text-white"> Contact us </h2>
        <h4 className=" text-center mb-10 text-sm uppercase tracking-wider font-bold text-gray-900 dark:text-white">Reach us easily by completing the form or finding our address </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-8 font-bold text-gray-900 dark:text-white">
            {/* Contact Information */}
            <div className="flex space-x-4 font-bold text-gray-900 dark:text-white">
              <div className="text-3xl"><MdAddIcCall />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#2e1760] text-gray-900 dark:text-white">Call Anytime</h2>
                <p className="text-gray-700 font-bold mb-4 text-gray-900 dark:text-white">+0000000000</p>
              </div>
            </div>
            {/* Location */}
            <div className="flex space-x-4 mb-3 text-gray-900 dark:text-white">
              <div className="text-3xl"><FaLocationDot /></div>
              <div>
                <h2 className="text-2xl font-bold text-[#2e1760] text-gray-900 dark:text-white">Location:</h2>
                <p className="text-gray-700 font-semibold mb-4 text-gray-900 dark:text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, dolore?</p>
              </div>
            </div>
            {/* Email */}
            <div className="flex space-x-4">
              <div className="text-3xl"><MdOutlineMarkEmailRead /></div>
              <div>
                <h2 className="text-2xl font-bold text-[#2e1760] text-gray-900 dark:text-white">Email Address:</h2>
                <p><Link href="mailto:daulatcars@gmail.com" className="text-blue hover:underline">examples@gmail.com</Link></p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div>
            <form className="space-y-4 text-gray-700" onSubmit={handleSubmit}>
              <div className="flex space-x-4">
                <div className="relative w-1/2">
                  <label className="block mb-1 text-gray-700 dark:text-white">First Name<span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none"
                    required
                  />
                </div>
                <div className="relative w-1/2">
                  <label className="block mb-1 text-gray-700 dark:text-white">Last Name<span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="relative w-1/2">
                  <label className="block mb-1 text-gray-700 dark:text-white">Contact<span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    placeholder="Contact"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none"
                    required
                  />
                </div>
                <div className="relative w-1/2">
                  <label className="block mb-1 text-gray-700 dark:text-white">Email<span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div className="relative w-full">
                <label className="block mb-1 text-gray-700 dark:text-white">Message<span className="text-red-500">*</span></label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your queries here!"
                  className="w-full px-4 py-5 border border-gray-300 rounded-md focus:outline-none"
                  required
                ></textarea>
              </div>

              <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Submit</button>
              </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
