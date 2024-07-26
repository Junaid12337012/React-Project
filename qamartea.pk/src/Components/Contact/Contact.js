const Contact = () => {
    return (
    <section className="py-12 bg-neutralSnow">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-primaryBlue text-center mb-8">Contact Us</h2>
        <div className="max-w-3xl mx-auto bg-white p-8 shadow-lg rounded-lg">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-neutralStone font-semibold">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-4 py-2 border border-neutralCloud rounded-lg focus:ring-2 focus:ring-primaryBlue focus:outline-none" 
                placeholder="Your Name" 
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-neutralStone font-semibold">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-2 border border-neutralCloud rounded-lg focus:ring-2 focus:ring-primaryBlue focus:outline-none" 
                placeholder="Your Email" 
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-neutralStone font-semibold">Message</label>
              <textarea 
                id="message" 
                className="w-full px-4 py-2 border border-neutralCloud rounded-lg focus:ring-2 focus:ring-primaryBlue focus:outline-none" 
                rows="4" 
                placeholder="Your Message"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full px-4 py-2 bg-accentSunset hover:bg-accentAmber text-white font-semibold rounded-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact