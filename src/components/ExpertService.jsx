import React from 'react';
import { FaRegLightbulb, FaArrowRight } from 'react-icons/fa';
import AnimatedBackground from './AnimatedBackground';
import { useNavigate } from 'react-router-dom';

const ExpertService = () => {
  const navigate=useNavigate();
  const handleExploreServices=()=>{
    navigate('/plans');
  }
  return (
    <div className="relative py-16 sm:px-6 md:px-12 overflow-hidden">
      <AnimatedBackground />

      <div className="min-h-screen w-full  p-6 sm:p-8 md:p-12 text-center bg-[#f5f5f5]">
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal mb-6 sm:mb-8 leading-tight relative">
  <FaRegLightbulb className="inline-block text-pink-500 mr-3 font-[sans] animate-pulse" />
  <span className="text-gray-600">
    Looking for Expert Services?
  </span> 
  
</h2>




<p className="text-base sm:text-lg text-gray-700 mb-8 sm:mb-10 leading-relaxed font-normal">
  <strong className="text-gray-700">
    Fast, Easy & Hassle-Free!
  </strong> 
  <br />
  At 
  <span className="text-purple-500 font-semibold">
    Tax Hummer
  </span>, we go 
  <span className="text-gray-700">
    beyond software
  </span> – our expert services ensure smooth and  <a></a>
  <span className="text-purple-500">
    stress-free tax compliance.
  </span>
</p>







        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 text-left">
          {/* ITR Filing Assistance */}
          <div className=" bg-white p-6 sm:p-8 border-l-4 border-purple-500 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 rounded-xl shadow-md hover:bg-purple-50">
            <div className="flex items-center space-x-3 mb-3 sm:mb-4">
              <img src="itr.webp" alt="ITR Filing" className="w-8 h-8 object-contain" />
              <h3 className="text-2xl sm:text-3xl font-semibold text-purple-800">ITR Filing Assistance</h3>
            </div>
            <div className="ml-6 sm:ml-8 space-y-3 text-sm sm:text-base text-gray-500">
              <div className="flex items-center">
                <span className="w-3 h-3 mr-3 rounded-full bg-purple-600"></span>
                Expert-guided filing for Salaried, Self-Employed, NRIs, & Capital Gains.
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 mr-3 rounded-full bg-purple-600"></span>
                Maximize deductions & avoid penalties with 100% accuracy.
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 mr-3 rounded-full bg-purple-600"></span>
                File your ITR quickly with AI-powered assistance.
              </div>
            </div>
          </div>

          {/* GST Filing Made Simple */}
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md border-l-4 border-pink-500 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:bg-pink-50">
            <div className="flex items-center space-x-3 mb-3 sm:mb-4">
              <img src="gst.webp" alt="GST Filing" className="w-8 h-8 object-contain" />
              <h3 className="text-2xl sm:text-3xl font-semibold text-pink-800">GST Filing Made Simple</h3>
            </div>
            <div className="ml-6 sm:ml-8 space-y-3 text-sm sm:text-base text-gray-600">
              <div className="flex items-center">
                <span className="w-3 h-3 mr-3 rounded-full bg-pink-600"></span>
                Hassle-free GST return filing for businesses of all sizes.
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 mr-3 rounded-full bg-pink-600"></span>
                Stay compliant & avoid late fees with timely filings.
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 mr-3 rounded-full bg-pink-600"></span>
                Expert support for accurate calculations & reporting.
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <p className="mt-8 sm:mt-10 text-lg sm:text-xl font-semibold text-purple-700">
          File with confidence — <span className="text-pink-500">Let the experts handle it!</span>
        </p>

        <button className="mt-6 sm:mt-8 inline-flex items-center justify-center bg-purple-600 hover:bg-purple-500 text-white text-base sm:text-lg font-bold py-2 sm:py-3 px-6 sm:px-9  shadow-lg transform transition-all duration-300 hover:scale-110 cursor-pointer" onClick={handleExploreServices}>
          Explore Our Services <FaArrowRight className="ml-3" />
        </button>
      </div>
    </div>
  );
};

export default ExpertService;
