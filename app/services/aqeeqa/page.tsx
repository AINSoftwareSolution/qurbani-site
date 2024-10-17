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
        <div className="flex justify-between gap-8 max-w-8xl mx-4">
          
          {/* Left Column: Text */}
          <div className="w-full md:w-1/2 bg-white p-8 rounded-md shadow-lg  ">
            <h4 className="text-3xl font-bold mb-4 text-center">About Aqeeqah</h4>
            <p className="text-gray-700 mb-4">
              Aqeeqah is a symbolic Islamic sacrifice performed in gratitude for the birth of a child. It involves the slaughter of an animal and is typically done on the 7th day after the birth of the baby.
            </p>
            <p className="text-gray-700">
              By donating, you can support this tradition, whether it "&apos;" s for a boy or a girl, and help provide for those in need.
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
              
              <button type="button" className="text-white bg-gradient-to-br text-lg font-bold w-80 py-3 me-2 mb-2 from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800  rounded-lg text-center"> 
              <span className="fa fa-usd mr-2" aria-hidden="true"></span> View Bank List</button>

            </div>
          </div>

        </div>
      </div>
    </div>

{/* Section congrat */}
<div className="bg-green-900 py-12">
  <div className="text-center">
    <h2 className="text-4xl font-bold mb-2 text-white ">MashaAllah, congratulations on the birth <br/> of your
new baby girl or boy!
</h2>
  </div>
  <div className="flex flex-wrap justify-center">
    <div className="w-full md:w-1/3 xl:w-1/3 p-6">
      <Image src={BoyImg} alt="" className="mx-auto w-36 h-36 mb-4 rounded-full border-2 border-gray-200" />
      <h3 className="text-2xl text-center text-yellow-400 mb-2">Boy</h3>
      <h3 className="text-2xl text-center text-yellow-400 mt-2">$200</h3>
      <div className="text-center">
      <button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 mt-3 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Qurbani</button>
      </div>
    </div>
    <div className="w-full md:w-1/3 xl:w-1/3 p-6">
      <Image src={GirlImg} alt="" className="mx-auto w-36 h-36 mb-4 rounded-full border-2 border-gray-200" />
      <h3 className="text-2xl text-center text-yellow-400 mb-2">Girl</h3>
      <h3 className="text-2xl text-center text-yellow-400 mt-2">$100</h3>
      <div className="text-center">
      <button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 mt-3 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Qurbani</button>
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
        <h1 className="text-3xl font-bold mb-5 text-black mx-4">
          Your Aqeeqah with my Foundation
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mx-4">
          At My Foundation, your Aqeeqah is an amana (a trust) that we take
          seriously. Each Aqeeqah is considered sacred, and strict halal
          guidelines are followed. Every Aqeeqah amana will take place within a
          week of your donation. The meat will provide 75 meals for a girl"&apos;"s
          Aqeeqah and 150 meals for a boy "&apos;"s Aqeeqah to those in need. All
          sacrifices occur in Somalia and Ethiopia. Amoud promises to deliver
          meals to the vulnerable and orphans, increasing your blessings.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 pl-4 mt-8 pr-4">
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
 
 {/* About Aqeeqah start */}
 <div className="bg-green-900 text-white py-12">
  <div className="container mx-auto text-center">
    <h1 className="text-3xl font-bold mb-5">What is Aqeeqah?</h1>  
  </div>
  <div className="text-xl text-gray-100 leading-relaxed text-center mx-8">
    <p>
      When a child is born, it is part of the Sunnah of the Prophet Muhammad (peace be upon him) to perform an Aqeeqah. This act expresses gratitude to Allah (SWT) for the blessing of a newborn child by sacrificing livestock, such as goats or sheep. The Aqeeqah is traditionally performed on the seventh day after a baby "&apos;" s birth, though there is no issue in doing it at a later time.
    </p>
    <p className="mt-4">
      The Prophet Muhammad (peace be upon him) performed Aqeeqah for newborns as an act of protection and gratitude. According to the Sunnah, one animal is sacrificed for the birth of a baby girl, and two animals are sacrificed for a baby boy. The Prophet also provided an Aqeeqah for his two grandsons, Imam al-Hasan and Imam al-Husain.
    </p>
  </div>
</div>
 {/* About Aqeeqah End  */}

 {/* Importance of Aqeeqah start */}
 <div className="bg-white textwhite text-center py-12">
  <div className="container mx-auto text-center">
    <h1  className="text-3xl font-bold mb-5">Importance of Aqeeqah</h1>
  </div>
  <div className="text-xl text-gray-900 leading-relaxed text-center mx-12">
    <p>At My Foundation, we are dedicated to serving and supporting the most vulnerable in the Horn of Africa. There are millions in this region who endure poverty, drought, malnutrition, and even starvation. Through your Aqeeqah donation, you not only provide families with a nutritious meal but also give them the opportunity to share in the celebration of a new life and to make duaa for you and your baby. The reward of this beloved Sunnah benefits so many.

</p>
    </div>

 </div>
 {/* importance of aqeeqah end  */}
        </div>
    )
}

export default Aqeeqa; 