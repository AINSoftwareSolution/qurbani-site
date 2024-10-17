import Image from 'next/image';
import AboutImg from "../utilis/Images/about.jpg";

const About = () => {
  return (
    <div>
      {/* Banner Section */}
      <div className="relative bg-green-900 text-white mb-8 overflow-hidden h-60 w-full">
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 z-10">
          <h2 className="text-4xl font-bold mb-2">About Us</h2>
          <p className="text-xl">Learn more about our mission and work.</p>
        </div>
        
        <div className="absolute inset-0 opacity-40">
          <Image
            src={AboutImg}
            alt="About Banner"
            layout="fill"
            objectFit="cover"
            className="object-cover"
          />
        </div>
      </div>

      {/* About Section with Container */}
      <div className="container mx-auto p-4 mb-12">
        <div className="flex flex-wrap">
          {/* Text Content */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 ">
            <h1 className="text-4xl font-bold mb-5 mx-8">About Us</h1>
            <p className="text-xl text-gray-700 leading-relaxed mx-8">
              Foundation impacts the local and global communities by helping people help themselves through sustainable humanitarian projects while maintaining trusting relationships by relieving the suffering of the vulnerable in the East, West, and the Horn of Africa by establishing emergency relief and development programs.
              <br />
              <br />
              Each human being has their basic needs met and opportunities to develop and grow in their community while keeping their dignity intact.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 pr-8">
            <Image
              src={AboutImg}
              alt="Introduction"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
