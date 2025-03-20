const About = () => {
  return (
    <section id="about" className="bg-white p-3">
      {/* Main container with flex layout for two columns */}
      <div className="flex flex-col md:flex-row gap-3">
        
        {/* Left column - About section with Apple-style gradient */}
        <div className="md:w-1/2 rounded-lg overflow-hidden flex-1">
          {/* Apple-style light blue gradient background */}
          <div className="h-full py-10" style={{ 
            background: 'linear-gradient(to bottom, #C5E2FF, #DCF0FF, #EBF7FF)',
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", sans-serif'
          }}>
            <div className="px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-8" style={{ color: '#000000' }}>
                <span>About </span>
                <span style={{ fontWeight: 300, fontStyle: 'italic', color: '#4477CC' }}>Me</span>
              </h2>
              <div className="text-lg space-y-6" style={{ color: '#333333' }}>
                <p>
                  Hello! I'm Peter-Karl Jackson, a passionate software engineer based in Orlando, Florida. 
                  I enjoy building things that live on the internet, from websites to applications, 
                  and everything in between.
                </p>
                <p>
                  I recently contributed to an open-source project where I implemented a "Back to Top" 
                  button feature using React and Tailwind CSS. This experience taught me about 
                  component lifecycle, event handling, and collaborating with other developers through GitHub.
                </p>
                
                <div className="pt-6">
                  <h3 className="text-xl font-semibold mb-4" style={{ color: '#000000' }}>
                    Education
                  </h3>
                  <p>
                    Bachelor's Degree in Computer Science - University of Central Florida (2026)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right column - Skills with complementary Apple-style gradient */}
        <div className="md:w-1/2 rounded-lg overflow-hidden flex-1">
          {/* Complementary light green gradient */}
          <div className="h-full py-10" style={{ 
            background: 'linear-gradient(to bottom, #D1F2EB, #E8F8F5, #F5FEFD)',
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", sans-serif'
          }}>
            <div className="px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-6" style={{ color: '#000000' }}>
                <span>My </span>
                <span style={{ fontWeight: 300, fontStyle: 'italic', color: '#4477CC' }}>Skills</span>
              </h2>
              <div className="text-lg" style={{ color: '#333333' }}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2" style={{ color: '#000000' }}>
                      Frontend
                    </h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>React</li>
                      <li>JavaScript</li>
                      <li>HTML/CSS</li>
                      <li>Tailwind CSS</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2" style={{ color: '#000000' }}>
                      Backend
                    </h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Node.js</li>
                      <li>Express</li>
                      <li>Python</li>
                      <li>Databases</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Apple-style "Built for" tagline */}
              <div className="text-center mt-8">
                <p className="text-lg font-medium">
                  <span style={{ color: '#3478F6' }}>Built with </span>
                  <span style={{ color: '#DF5EA9' }}>Modern Technology</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default About;