import React from "react";
import Image from "next/image";
import { BuffaloImg, GoatImg, IntroductionImg, DonateImg, BannerImg } from "./utilis/Images";
import Link from "next/link";
import Faq from "./Components/Faq";


const Home = () => {
  return (
    <>
      <section className="relative w-full ptablet:max-h-[1100px]">
        <div
          className="relative mx-auto flex items-center justify-center min-h-screen bg-cover bg-center"
          style={{
            backgroundImage: `url(${BannerImg.src})`,
            backgroundSize: 'cover', // Ensures the image covers the section
            backgroundPosition: 'center', // Centers the image
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30"></div>

          <div className="relative w-full flex items-center justify-center bg-opacity-70">
            {/* Text Section */}
            <div className="text-center relative z-10 max-w-3xl p-4 md:p-8">
              <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl leading-tight text-white font-bold">
                Online Booking Qurbani and Aqeeqah
              </h1>
              <p className="font-sans text-base sm:text-lg md:text-xl text-white my-4">
                Experience a seamless and fulfilling process for your Qurbani and Aqeeqah needs.
              </p>
              <div className="flex justify-center items-center gap-4 md:gap-8 mt-6">
                <Link
                  href="/services/aqeeqa"
                  className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200  font-bold rounded-lg text-sm md:text-md px-6 py-2.5 transition-transform transform hover:scale-105 text-center"
                >
                  <span className="flex items-center">
                    Qurbani
                  </span>
                </Link>
                <Link
                  href="/services/aqeeqa"
                  className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl 
                  focus:ring-4 focus:outline-none focus:ring-green-200  font-bold rounded-lg text-sm md:text-md 
                  px-6 py-2.5 transition-transform transform hover:scale-105 text-center">
                  <span className="flex items-center">
                    Aqeeqah
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Donation section start */}
      <div className="bg-green-900">
        <div className="container mx-auto p-4 ">
          <div className="py-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-center text-white">
              Qurbani / Udhiya Donation 2024
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 mx-8">
              {/* Ox / Buffalo Section */}
              <div className="text-center">
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  Ox / Buffalo Qurbani
                </h2>
                <div className="mt-4">
                  <Link href="https://donation.hidaya.org/donation.aspx?projectId=23" target="_blank">
                    <Image
                      src={BuffaloImg}
                      alt="Ox / Buffalo Qurbani"
                      className="w-full h-64 sm:h-80 mx-auto rounded-lg transition-transform duration-300 hover:scale-105"
                    />
                  </Link>
                </div>
                <h4 className="px-4 py-2 mt-4 text-lg sm:text-xl font-semibold text-white">
                  <Link href="https://donation.hidaya.org/donation.aspx?projectId=23" target="_blank">
                    $80 for a share in an ox/buffalo (7 shares per animal)
                  </Link>
                </h4>
                <div className="mt-4 text-center">
                  <button
                    type="button"
                    className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200  font-bold rounded-lg text-md px-8 py-2.5 text-center mb-2"
                  >
                    Donate Now
                  </button>
                </div>
              </div>
              {/* Goat / Sheep Section */}
              <div className="text-center">
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  Goat / Sheep Qurbani
                </h2>
                <div className="mt-4">
                  <Link href="https://donation.hidaya.org/donation.aspx?projectId=24" target="_blank">
                    <Image
                      src={GoatImg}
                      alt="Goat / Sheep Qurbani"
                      className="w-full h-64 sm:h-80 mx-auto rounded-lg transition-transform duration-300 hover:scale-105"
                    />
                  </Link>
                </div>
                <h4 className="px-4 py-2 mt-4 text-lg sm:text-xl font-semibold text-white">
                  <Link href="https://donation.hidaya.org/donation.aspx?projectId=24" target="_blank">
                    $160 for a goat/sheep (1 share)
                  </Link>
                </h4>
                <div className="mt-4 text-center">
                  <button
                    type="button"
                    className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200  font-bold rounded-lg text-md px-8 py-2.5 text-center mb-2"
                  >
                    Donate Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Donation section end */}

      {/* Introduction section start */}
      <div className="container mx-auto p-4 pt-8 mb-8">
  <div className="flex flex-col md:flex-row situation-wrap mb-12 mx-8">
    {/* Left Column: Text Section */}
    <div className="w-full md:w-1/2 col-left mb-8 md:mb-0">
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
          Take advantage of Alkhidmat online Qurbani Fi Sabeel Lillah.
        </p>
      </div>
    </div>

    {/* Right Column: Image Section */}
    <div className="w-full md:w-1/2 col-right video-section pl-0 md:pl-4 mt-8 md:mt-0">
      <div className="w-full h-auto mt-4 mb-5">
        <Image 
          src={IntroductionImg} 
          alt="Introduction" 
          className="w-full h-auto object-contain rounded-lg"
        />
      </div>
    </div>
  </div>
</div>



      {/* introduction section end  */}

      {/* Ways to Donate  section start */}
      <section className="mt-5 mb-5 bg-green-900">
        <div className="container mx-auto p-4 mt-4 mb-5">
          <div className="flex flex-col">
            <div className="section-head mb-8 mt-4">
              <h2 className="text-4xl font-bold text-center text-white">Ways to Donate Qurbani</h2>
            </div>
            {/* Wrapper for cards */}
            <div className="card-wrapper flex-col lg:flex-row flex flex-nowrap center gap-8 mx-8 mb-8 ">
              {/* First card */}
              <div className="card w-full md:w-1/3 p-6 shadow-lg rounded-md bg-white flex flex-col justify-between h-full transition-transform duration-300 hover:scale-105 ">
                <div className="card-head mb-3">
                  <h2 className="text-2xl font-bold text-center">Donate Qurbani Online</h2>
                </div>
                <div className="card-text text-gray-600 text-lg mb-5">
                  <p>You can donate Qurbani online using any Visa or MasterCard. Donation through Jazzcash is also available.</p>
                </div>
                <div className="card-footer mt-4">
                  <button type="button" className="text-white bg-gradient-to-br text-lg font-bold w-full py-4 from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200  rounded-lg text-center">
                    Donate Qurbani Online
                  </button>
                </div>
              </div>
              {/* Second card */}
              <div className="card w-full md:w-1/3 p-6 shadow-lg rounded-md bg-white flex flex-col justify-between h-full transition-transform duration-300 hover:scale-105">
                <div className="card-head mb-3">
                  <h3 className="text-2xl font-bold text-center">Bank Transfer</h3>
                </div>
                <div className="card-text text-gray-600 text-lg mb-5">
                  <p>Direct deposits or transfers can be made into our accounts at any of the banks. Select your preferred bank from the list.</p>
                </div>
                <div className="card-footer mt-4">
                  <button type="button" className="text-white bg-gradient-to-br text-lg font-bold w-full py-4 from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200  rounded-lg text-center">
                    View Bank List
                  </button>
                </div>
              </div>
              {/* Third card */}
              <div className="card w-full md:w-1/3 p-6 shadow-lg rounded-md bg-white flex flex-col justify-between h-full transition-transform duration-300 hover:scale-105">
                <div className="card-head mb-3">
                  <h3 className="text-2xl font-bold text-center">Doorstep Collection</h3>
                </div>
                <div className="card-text text-gray-600 text-lg mb-5">
                  <p>You can donate through cheques or bank drafts, simply call at 0000000000 and our representative will collect it.</p>
                </div>
                <div className="card-footer mt-4">
                  <button type="button" className="text-white bg-gradient-to-br text-lg font-bold w-full py-4 from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200  rounded-lg text-center">
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
            <h2 className="text-2xl md:text-3xl font-bold mb-5 text-center">
              Why Donate Qurbani With Us
            </h2>
            <p className="text-base md:text-lg text-center md:text-left mx-8">
              Support this Foundation &apos; s Qurbani campaign to alleviate hunger among the needy. Your generous donation will provide nutritious meat to impoverished families, orphan children, and homeless individuals. For many of them, Eid-ul-Adha is the only occasion to savor meat throughout the year. Join us in making a meaningful impact and spreading joy this Eid-ul-Adha by donating to our Qurbani program.
            </p>
          </div>
          <div className="qurbani-donate-tabs flex flex-col md:flex-row items-center md:items-start justify-center">
            {/* Left List */}
            <ul className="tab-list left flex flex-col md:mr-4 py-8 md:py-16 text-lg md:text-xl list-disc">
              <li className="py-2 px-2">Hassle-free transparent service</li>
              <li className="py-2 px-2">Healthy and fit animal</li>
              <li className="py-2 px-2">Shariah-Compliant</li>
            </ul>

            {/* Image */}
            <div className="qurbani-donate-tabs-img mx-4 py-8 md:py-0 transition-transform duration-300 hover:scale-105   ">
              <Image
                src={DonateImg}
                alt="donate- qurbani"
                className="w-[300px] md:w-[400px] rounded-lg pr-3"
              />
            </div>

            {/* Right List */}
            <ul className="tab-list right flex flex-col md:ml-4 py-8 md:py-16 text-lg md:text-xl list-disc">
              <li className="py-2 px-2">Hygienic process</li>
              <li className="py-2 px-2">Distribution to most deserving</li>
              <li className="py-2 px-2">Professional butchers</li>
            </ul>
          </div>
        </div>
      </section>
      {/* why donate with me end */}

      <Faq />

    </>

  );
}
export default Home;