const Hero = () => {
  return (
    // Main section with white background and vertical padding
    <section className="bg-white py-12 md:py-16">
      {/* Container with max width and horizontal padding */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        {/* Content wrapper with full width */}
        <div className="w-full text-center">
          {/* Fixed-height container for the name to prevent layout shift */}
          <div className="h-16 mb-2 flex items-center justify-center">
            {/* Heading with responsive font sizes */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              {/* Name with gradient text effect */}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                Peter-Karl Jackson
              </span>
            </h1>
          </div>
          
          {/* Fixed-height container for the title to prevent layout shift */}
          <div className="h-12 mb-6 flex items-center justify-center">
            {/* Subtitle with typewriter effect */}
            <h2 id="swe" className="text-2xl md:text-3xl text-gray-700">
              
              Software Engineer
            </h2>
          </div>
          
          {/* Image container (if needed) */}
          <div className="mt-8 flex justify-center">
            {/* Your image can go here */}
            {/* Commented out for now */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;