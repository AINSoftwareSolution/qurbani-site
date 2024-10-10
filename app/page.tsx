import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Image from "next/image";
import { BuffaloImg, GoatImg, IntroductionImg } from "./utilis/Images";
import Link from "next/link";
import Faq from "./Components/Faq";

  
const Home = () => {


  return (   
    <div>
     <section className="relative w-full bg-gray-200 d ark:bg-gray-900 overflow-hidden ptablet:max-h-[1100px]">
     <div className="relative container inset-0 mx-auto px-2 py-8 lg:px-12 lg:py-4 flex items-center z-10 min-h-screen">
       <div className="w-full">
         <div className="grid grid-cols-12 gap-6">
           {/* Text Section */}
           <div className="col-span-12 md:col-span-7 h-full flex items-center">
             <div className="w-full text-center md:text-left">
               <h1 className="font-sans font-light text-4xl md:text-5xl lg:text-7xl leading-none text-muted-800 dark:text-white">
                 Online Booking Qurbani 
               </h1>
               <p className="font-sans text-base md:text-lg text-muted-500 dark:text-white my-4 mb-4">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ex ea
                 difficultate illae fallaciloquae, ut ait adipiscing elit.
               </p>
             </div>
           </div> 
         </div>
       </div>
     </div>
   </section>

{/* Donation section start */}
   <div className=" bg-green-900">
   <div className="container mx-auto p-4 pt-8">
  <div className="bg-center py-8">
    <div className="text-center ">
      <h1 className="text-3xl font-bold">Qurbani / Udhiya Donation 2024</h1>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
      {/* <!-- Ox / Buffalo Section --> */}
      <div className="text-center">
        <h2 className="text-2xl font-bold">Ox / Buffalo Qurbani</h2>
        <div className="mt-4 ">
          <Link href="https://donation.hidaya.org/donation.aspx?projectId=23" target="_blank">
            <Image 
              src={BuffaloImg}
              alt="Ox / Buffalo Qurbani"
              className="w-full h-80 mx-auto rounded-lg transition-transform duration-300 hover:scale-105" 
            />
          </Link>
        </div>
        <h4 className="mt-4 text-xl font-semibold text-black ">
          <Link href="https://donation.hidaya.org/donation.aspx?projectId=23" target="_blank">$80 for a share in an ox/buffalo (7 shares per animal)</Link>
        </h4>
        <div className="mt-4 text-center">
          <Link href="https://donation.hidaya.org/donation.aspx?projectId=23" 
             target="_blank" 
             className="bg-blue-500 text-black text-lg py-3 px-5 rounded hover:bg-blue-600">
            Donate
          </Link>
        </div>
      </div>
      {/* 
      <!-- Goat / Sheep Section --> */}
      <div className="text-center">
        <h2 className="text-2xl font-bold">Goat / Sheep Qurbani</h2>
        <div className="mt-4">
          <Link href="https://donation.hidaya.org/donation.aspx?projectId=24" target="_blank">
            <Image
              src={GoatImg}
              alt="Goat / Sheep Qurbani"
              className="w-full h-80 max-auto rounded-lg transition-transform duration-300 hover:scale-105" 
            />
          </Link>
        </div>
        <h4 className="mt-4 text-xl font-semibold">
          <Link href="https://donation.hidaya.org/donation.aspx?projectId=24" target="_blank">$160 for a goat/sheep (1 share)</Link>
        </h4>
        <div className="mt-4 text-center">
          <Link href="https://donation.hidaya.org/donation.aspx?projectId=24" 
             target="_blank" 
             className="bg-blue-500 text-black text-lg py-3 px-5 rounded hover:bg-blue-600">
            Donate
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
{/* Donation section end */}

{/* Introduction section start */}
<div className="container mx-auto p-4 pt-8 mb-8">
  <div className="flex flex-wrap situation-wrap mb-12">
    <div className="w-1/2 col-left pr-4">
      <div className="text-4xl font-bold mt-4 mb-5 section-head">
        <h1 className="text-4xl font-bold mt-4 mb-5">Introduction</h1>
      </div>
      <div className="text-lg text-wrap">
        <p className="text-xl text-gray-700 leading-relaxed">
          Qurbani is a great Sunnah of Ibrahim (AS) and the dearest deed to Allah (SWT). 
          As you are preparing to commemorate Prophet Ibrahim (AS) dedication through Qurbani on this Eid-ul-Adha. 
          Alkhidmat urges you to remember millions of underprivileged and undernourished families in Pakistan who eagerly await Eid-ul-Adha throughout the whole year to eat nutritious meat. 
          Alkhidmat Foundation Pakistan is doing Qurbani Fi Sabeel Lillah to distribute nutritious meat to millions of underprivileged and undernourished Pakistanis on this Eid-ul-Adha. 
          This year, Alkhidmat is also doing Qurbani specifically for the oppressed Palestinian families in Gaza. 
          Take advantage of Alkhidmat online Qurbani Fi Sabeel Lillah
        </p>
      </div>
    </div>
    <div className="w-1/2 col-right video-section pl-4">
      <div className="w-full h-full mt-4 mb-5">
        <Image src={IntroductionImg} alt="Introduction" className="w-full h-full object-cover rounded-lg" />
      </div>
    </div>
  </div>
</div>
{/* introduction section end  */}

{/* Ways to Donate  section start */}
<section className=" mt-5 mb-5 bg-green-900 ">
<div className="container mx-auto p-4 mt-4 mb-5">
  <div className="flex flex-col">
    <div className="section-head mb-8 mt-4">
      <h2 className="text-4xl font-bold text-center">Ways to Donate Qurbani</h2>
    </div>
    <div className="card-wrapper flex flex-nowrap justify-center gap-8">
      {/* First card */}
      <div className="card w-full lg:w-1/3 p-8 shadow-lg rounded-md bg-white flex flex-col justify-between h-full mb-8">
        <div className="card-head mb-3">
          <h2 className="text-2xl font-bold text-center">Donate Qurbani Online</h2>
        </div>
        <div className="card-text text-gray-600 text-lg mb-5">
          <p>You can donate Qurbani online using any Visa or MasterCard. Donation through Jazzcash is also available.</p>
        </div>
        <div className="card-footer mt-4">
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-lg font-bold w-full py-4 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Donate Qurbani Online
          </button>         
        </div>
      </div>
      {/* Second card */}
      <div className="card w-full lg:w-1/3 p-8 shadow-lg rounded-md bg-white flex flex-col justify-between h-full">
        <div className="card-head mb-3">
          <h3 className="text-2xl font-bold text-center">Bank Transfer</h3>
        </div>
        <div className="card-text text-gray-600 text-lg mb-5">
          <p>Direct deposits or transfers can be made into our accounts at any of the banks. Select your preferred bank from the list.</p>
        </div>
        <div className="card-footer mt-4">
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-lg font-bold w-full py-4 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            View Bank List
          </button>
        </div>
      </div>
      {/* Third card */}
      <div className="card w-full lg:w-1/3 p-8 shadow-lg rounded-md bg-white flex flex-col justify-between h-full">
        <div className="card-head mb-3">
          <h3 className="text-2xl font-bold text-center">Doorstep Collection</h3>
        </div>
        <div className="card-text text-gray-600 text-lg mb-5">
          <p>You can donate through cheques or bank drafts, simply call at 0000000000 and our representative will collect it.</p>
        </div>
        <div className="card-footer mt-4">
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-lg font-bold w-full py-4 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Pickup Cash
          </button>
        </div>
      </div>
    </div>
  </div>
  </div>
</section>
{/* Donate section end  */}

{/* why donate with me start */}
<section className="flex flex-col py-10">
  <div className="container mx-auto p-4">
    <div className="section-head mb-4">
      <h2 className="text-3xl font-bold mb-5 text-center">Why donate Qurbani With me </h2>
      <p className="text-lg">Support this Foundation's Qurbani campaign to alleviate hunger among the needy. Your generous donation will provide nutritious meat to impoverished families, orphan children, and homeless individuals. For many of them, Eid-ul-Adha is the only occasion to savor meat throughout the year. Join us in making a meaningful impact and spreading joy this Eid-ul-Adha by donating to Alkhidmat Foundation's Qurbani program.</p>
    </div>
    <div className="qurbani-donate-tabs flex flex-wrap justify-center">
      <ul className="tab-list left flex flex-col mr-4 text-xl">
        <li className="tablinks active py-2 px-4">Hassle-free transparent service</li>
        <li className="tablinks py-2 px-4">Healthy and fit animal</li>
        <li className="tablinks py-2 px-4">Shariah-Compliant</li>
      </ul>
      <div className="qurbani-donate-tabs-img mx-4">
        {/* <img src="/images/qurbani-images/hustle-free-transparent.jpg" alt="hustle-free-transparent" className="w-full"> */}
      </div>
      <ul className="tab-list right flex flex-col ml-4 text-xl">
        <li className="tablinks py-2 px-4">Hygienic process</li>
        <li className="tablinks py-2 px-4">Distribution to most deserving</li>
        <li className="tablinks py-2 px-4">Professional butchers</li>
      </ul>
    </div>
  </div>
</section>
{/* why donate with me end */}

<Faq />

   </div>
    
  );
}
export default Home;