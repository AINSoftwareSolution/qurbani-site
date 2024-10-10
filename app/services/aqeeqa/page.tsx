"use client";
    
import React, { useState } from 'react';
import Image from 'next/image';
import { AqeeqaImg, BoyImg, GirlImg } from '@/app/utilis/Images';

const Aqeeqa = () =>{
    
  const [selectedAmount, setSelectedAmount] = useState<string>('200');
  const [customAmount, setCustomAmount] = useState<string>('');
  const [quantity, setQuantity] = useState<number | ''>('');

  const handleAmountChange = (amount: string) => {
    setSelectedAmount(amount);
    if (amount !== 'others') {
      setCustomAmount('');
    }
  };
    return (
        <div>
             <div className="relative bg-green-900 text-white mb-8 overflow-hidden h-60 w-full">
      
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 z-10">
        <h2 className="text-4xl font-bold mb-2">Aqeeqa</h2>
        <p className="text-xl">Learn more about our mission and work.</p>
      </div>
      
      <div className="absolute inset-0 opacity-40">
        {/* <Image
          src={AboutImg}
          alt="About Banner"
          layout="fill"
          objectFit="cover"
          className="object-cover"
        /> */}
      </div>
    </div>

    <div className="bg-gray-200">
      <div className="container mx-auto p-6">
        <div className="flex justify-between gap-8 max-w-6xl mx-auto">
          
          {/* Left Column: Text */}
          <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
            <h4 className="text-3xl font-bold mb-4 text-center">About Aqeeqah</h4>
            <p className="text-gray-700 mb-4">
              Aqeeqah is a symbolic Islamic sacrifice performed in gratitude for the birth of a child. It involves the slaughter of an animal and is typically done on the 7th day after the birth of the baby.
            </p>
            <p className="text-gray-700">
              By donating, you can support this tradition, whether it's for a boy or a girl, and help provide for those in need.
            </p>
          </div>

          {/* Right Column: Form */}
          <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
            <h4 className="text-2xl font-bold mb-4 text-center">Aqeeqah Donation</h4>

            <div className="mb-6">
              <div className="flex justify-between items-center">
                <p className={`${selectedAmount === '200' ? 'block' : 'hidden'} font-bold text-gray-800`}>$200 - Boy</p>
                <p className={`${selectedAmount === '100' ? 'block' : 'hidden'} font-bold text-gray-800`}>$100 - Girl</p>
                <p className={`${selectedAmount === 'others' ? 'block' : 'hidden'} font-bold text-gray-800`}>
                  You have selected Other Amount.
                </p>
              </div>

              {/* Donation Amount Options */}
              <div className="flex justify-center space-x-4 mt-4">
                {['200', '100', 'others'].map((amount) => (
                  <label key={amount} className="cursor-pointer">
                    <input
                      type="radio"
                      name="amount"
                      value={amount}
                      checked={selectedAmount === amount}
                      onChange={() => handleAmountChange(amount)}
                      className="hidden"
                    />
                    <span
                      className={`px-4 py-2 rounded-lg border ${
                        selectedAmount === amount ? 'bg-yellow-500 text-white' : 'bg-gray-200'
                      }`}
                    >
                      {amount === 'others' ? 'Others' : `$${amount}`}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Custom Amount Input */}
            {selectedAmount === 'others' && (
              <div className="mb-6">
                <input
                  type="number"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  placeholder="Enter Custom Amount"
                  min="5"
                  className="w-full p-2 border rounded-lg"
                />
              </div>
            )}

            {/* Quantity Input */}
            <div className="mb-6">
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                placeholder="Enter Quantity"
                min="1"
                className="w-full p-2 border rounded-lg"
              />
            </div>

            {/* Donate Button */}
            <div className="text-center">
              <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg shadow-lg">
                <span className="fa fa-usd mr-2" aria-hidden="true"></span>DONATE NOW
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>

{/* Section congrat */}
<div className="bg-green-900 py-12">
  <div className="text-center">
    <h2 className="text-4xl font-bold mb-2 ">MashaAllah, congratulations on the birth <br/> of your
new baby girl or boy!
</h2>
  </div>
  <div className="flex flex-wrap justify-center">
    <div className="w-full md:w-1/3 xl:w-1/3 p-6">
      <Image src={BoyImg} alt="" className="mx-auto w-36 h-36 mb-4 rounded-full border-2 border-gray-200" />
      <h3 className="text-2xl text-center text-yellow-400 mb-2">Boy</h3>
      <h3 className="text-2xl text-center text-yellow-400 mt-2">$200</h3>
      <div className="text-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded-full" id="209,0">Donate Now</button>
      </div>
    </div>
    <div className="w-full md:w-1/3 xl:w-1/3 p-6">
      <Image src={GirlImg} alt="" className="mx-auto w-36 h-36 mb-4 rounded-full border-2 border-gray-200" />
      <h3 className="text-2xl text-center text-yellow-400 mb-2">Girl</h3>
      <h3 className="text-2xl text-center text-yellow-400 mt-2">$100</h3>
      <div className="text-center">
        <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 mt-4 rounded-full" id="210,0">Donate Now</button>
      </div>
    </div>
  </div>
</div>
{/* congrat section end  */}

{/* About Foundation for Aqeeqah start */}
<div className="relative text-white  overflow-hidden h-auto w-full py-12 bg-gray-100">
  <div className="container mx-auto p-4 ">
    <div className="flex flex-wrap items-center">
      {/* Text Content */}
      <div className="w-full md:w-1/2 pr-4 pl-4 mt-8">
        <h1 className="text-3xl font-bold mb-5 text-black">
          Your Aqeeqah with my Foundation
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed">
          At My Foundation, your Aqeeqah is an amana (a trust) that we take
          seriously. Each Aqeeqah is considered sacred, and strict halal
          guidelines are followed. Every Aqeeqah amana will take place within a
          week of your donation. The meat will provide 75 meals for a girl's
          Aqeeqah and 150 meals for a boy's Aqeeqah to those in need. All
          sacrifices occur in Somalia and Ethiopia. Amoud promises to deliver
          meals to the vulnerable and orphans, increasing your blessings.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 pl-4 mt-8">
        <Image
          src={AqeeqaImg}
          alt="Aqeeqah Foundation"
          className="w-full h-80 object-cover rounded-lg"
        />
      </div>
    </div>
  </div>
</div>

{/* About Foundation Aqeeqah end */}
        </div>
    )
}
export default Aqeeqa; 