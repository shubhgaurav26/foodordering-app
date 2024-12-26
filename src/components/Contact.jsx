import React, { useState } from 'react';  

const Contact = () => {  
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });  
  const [isSubmitted, setIsSubmitted] = useState(false);  
  const [errors, setErrors] = useState({});  

  const handleChange = (e) => {  
    setFormData({ ...formData, [e.target.name]: e.target.value });  
  };  

  const validateForm = () => {  
    const newErrors = {};  
    if (!formData.name) newErrors.name = 'Name is required.';  
    if (!formData.email) {  
      newErrors.email = 'Email is required.';  
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {  
      newErrors.email = 'Email is invalid.';  
    }  
    if (!formData.message) newErrors.message = 'Message is required.';  
    return newErrors;  
  };  

  const handleSubmit = (e) => {  
    e.preventDefault();  
    const validationErrors = validateForm();  
    if (Object.keys(validationErrors).length === 0) {  
      console.log(formData); // Replace with your submission logic  
      setIsSubmitted(true);  
      setFormData({ name: '', email: '', message: '' });  
      setErrors({});  
    } else {  
      setErrors(validationErrors);  
    }  
  };  

  return (  
    <div className="contact-us bg-pink-50 min-h-screen py-10 px-4">  
      <div className="container mx-auto max-w-5xl bg-white rounded-lg shadow-md p-8">  
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-6">Get in Touch with Us</h2>  
        
        {isSubmitted && (  
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">  
            <strong className="font-bold">Success!</strong> Your message has been sent.  
          </div>  
        )}  

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">  
          <div>  
            <h3 className="text-xl font-semibold text-pink-600">Contact Form</h3>  
            <form onSubmit={handleSubmit} className="mt-6">  
              <div className="mb-4">  
                <label className="block text-sm font-medium text-gray-700" htmlFor="name">Name</label>  
                <input  
                  type="text"  
                  name="name"  
                  id="name"  
                  value={formData.name}  
                  onChange={handleChange}  
                  className={`mt-1 block w-full p-4 border ${  
                    errors.name ? 'border-red-500' : 'border-gray-300'  
                  } rounded-md shadow-sm focus:outline-none focus:border-pink-500`}  
                  placeholder="Your Name"  
                />  
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}  
              </div>  

              <div className="mb-4">  
                <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>  
                <input  
                  type="email"  
                  name="email"  
                  id="email"  
                  value={formData.email}  
                  onChange={handleChange}  
                  className={`mt-1 block w-full p-4 border ${  
                    errors.email ? 'border-red-500' : 'border-gray-300'  
                  } rounded-md shadow-sm focus:outline-none focus:border-pink-500`}  
                  placeholder="Your Email"  
                />  
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}  
              </div>  

              <div className="mb-4">  
                <label className="block text-sm font-medium text-gray-700" htmlFor="message">Message</label>  
                <textarea  
                  name="message"  
                  id="message"  
                  value={formData.message}  
                  onChange={handleChange}  
                  rows="4"  
                  className={`mt-1 block w-full p-4 border ${  
                    errors.message ? 'border-red-500' : 'border-gray-300'  
                  } rounded-md shadow-sm focus:outline-none focus:border-pink-500`}  
                  placeholder="Your Message"  
                ></textarea>  
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}  
              </div>  

              <button  
                type="submit"  
                className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 rounded-md transition duration-300"  
              >  
                Send Message  
              </button>  
            </form>  
          </div>  

          <div>  
            <h3 className="text-xl font-semibold text-pink-600">Our Location</h3>  
            <p className="mt-2"><strong>Email:</strong> support@example.com</p>  
            <p className="mt-2"><strong>Phone:</strong> +1 (555) 123-4567</p>  
            <p className="mt-2"><strong>Address:</strong> 123 Food St, Food City, FC 12345</p>  

            {/* Embed Google Map */}  
            <div className="mt-4">  
              <iframe  
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345073327!2d144.95373531586893!3d-37.81627957975173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f7b1e19%3A0x1f65b75f282e23!2sMelbourne%20CBD%2C%20Melbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1670000000000!5m2!1sen!2sus"  
                width="100%"  
                height="300"  
                style={{ border: 0 }}  
                allowFullScreen=""  
                loading="lazy"  
                title="Google Map Location"  
              ></iframe>  
            </div>  
          </div>  
        </div>  
      </div>  
    </div>  
  );  
};  

export default Contact;