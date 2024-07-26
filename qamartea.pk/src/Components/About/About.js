import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-neutralSnow text-neutralStone">
      {/* Hero Section */}
      <section className="bg-primaryBlue text-secondaryIvory py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl">We are dedicated to delivering the best service</p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-primaryBlue">Our Mission</h2>
          <p className="text-xl mb-4">To provide excellent service and improve the lives of our customers.</p>
          <p className="text-xl">We aim to be the best in our industry through continuous improvement and innovation.</p>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-neutralCloud py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-primaryBlue">Our Team</h2>
          <div className="flex justify-center space-x-8">
            {/* Team Member 1 */}
            <div className="max-w-xs bg-secondaryIvory rounded-lg shadow-lg p-6">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 1"
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">John Doe</h3>
              <p className="text-primaryBlue">CEO</p>
            </div>
            {/* Team Member 2 */}
            <div className="max-w-xs bg-secondaryIvory rounded-lg shadow-lg p-6">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 2"
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">Jane Smith</h3>
              <p className="text-primaryBlue">CTO</p>
            </div>
            {/* Team Member 3 */}
            <div className="max-w-xs bg-secondaryIvory rounded-lg shadow-lg p-6">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 3"
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">Alice Johnson</h3>
              <p className="text-primaryBlue">CFO</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-primaryBlue">Contact Us</h2>
          <p className="text-xl mb-4">Feel free to reach out to us for any inquiries or questions.</p>
          <p className="text-xl">Email: contact@ourcompany.com</p>
          <p className="text-xl">Phone: (123) 456-7890</p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
