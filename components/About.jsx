const About = () => {
    return (
    <section id="about" className="bg-white p-3">
    
      <div id="about" className="mb-3 mt-3 ml-3 mr-3 py-10 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            About Me
          </h2>
          <div className="text-lg text-gray-600 space-y-6">
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
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Education</h3>
              <p>
                Bachelor's Degree in Computer Science - University of Central Florida (2026)
              </p>
            </div>
          </div>
        </div>
        </div>
      
      </section>
    );
  };
  
  export default About;