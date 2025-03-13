//import Image from 'next/image';
import Link from 'next/link';
import {goToGithub} from '../utils/helpers';




const Hero: React.FC = () => {
  return (
    <section className="bg-#FDF0D5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Hi, I'm <span className="text-blue-600">Peter-Karl Jackson</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">
            Software Engineer 
            <button onClick={goToGithub}>
            <img 
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" 
            alt="GitHub" 
            className="ml-2 w-10 h-10 fixed top-4 right-4 cursor-pointer" />
            
            </button>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Just a guy who loves solving, building, and testing software :)
          </p>
          <div className="flex space-x-4">
            <Link href="#projects">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                View My Work
              </button>
            </Link>
            <Link href="#contact">
              <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                Contact Me
              </button>
            </Link>
          </div>
        </div>





        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
          {/*<div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg"> */}
            {/* Replace with your image */}
            {/*<Image
              src="/profile-placeholder.jpg"
              alt="Your Name"
              layout="fill"
              objectFit="cover"
              priority
            /> */}
          {/*</div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;