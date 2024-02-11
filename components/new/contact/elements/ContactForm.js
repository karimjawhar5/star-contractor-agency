import React, { useState } from 'react';

function ContactForm() {
    const [sending, setSending] = useState(false);
    const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    serviceOfInterest: '',
    projectDescription: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    setSending(true);
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (data.success) {
        setSending(false);
        setStatus("Message sent successfully, you'll hear back from us soon!");
        setFormData({ fullName: '', company: '', email: '', phone: '', serviceOfInterest: '', projectDescription: '' });
      } else {
        setSending(false);
        setStatus("Failed To Send Message, Try Again Later.");
      }
    } catch (error) {
      console.error('Error occurred while submitting form:', error);
      setSending(false);
      setStatus("Failed To Send Message, Try Again Later.");
    }
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="mb-4">
        <label htmlFor="fullName" className="block text-gray-800 text-sm mb-2">Full Name<span className="text-red-500">*</span></label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Your Full Name"
          required
          className="shadow-sm appearance-none border rounded-sm w-full py-2 px-3 text-gray-800 focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="company" className="block text-gray-800 text-sm mb-2">Company<span className="text-red-500">*</span></label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Your Company"
          required
          className="shadow-sm appearance-none border rounded-sm w-full py-2 px-3 text-gray-800 focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-800 text-sm mb-2">Email<span className="text-red-500">*</span></label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="shadow-sm appearance-none border rounded-sm w-full py-2 px-3 text-gray-800 focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block text-gray-800 text-sm mb-2">Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Your Phone"
          className="shadow-sm appearance-none border rounded-sm w-full py-2 px-3 text-gray-800 focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="serviceOfInterest" className="block text-gray-800 text-sm mb-2">Service of Interest<span className="text-red-500">*</span></label>
        <select
          id="serviceOfInterest"
          name="serviceOfInterest"
          value={formData.serviceOfInterest}
          onChange={handleChange}
          required
          className="shadow-sm appearance-none border rounded-sm w-full py-2 px-3 text-gray-800 focus:outline-none"
        >
          <option value="">-- Select Service --</option>
          <option value="Web Design">Web Design</option>
          <option value="SEO">SEO</option>
          <option value="Branding">Branding</option>
          <option value="Digital Media">Digital Media</option>
          <option value="Custom Development">Custom Development</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="projectDescription" className="block text-gray-800 text-sm mb-2">Tell us about your project<span className="text-red-500">*</span></label>
        <textarea
          id="projectDescription"
          name="projectDescription"
          value={formData.projectDescription}
          onChange={handleChange}
          placeholder="Your Project Description"
          required
          className="shadow-sm appearance-none border rounded-sm w-full py-2 px-3 text-gray-800 focus:outline-none"
          style={{ resize: "none" }}
          rows={4}
        ></textarea>
      </div>
      <div className="w-full">
        {sending==false ? 
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-sm w-full"
        >
          Submit
        </button> 
        :
        <div
          type="submit"
          className="bg-orange-600 text-center text-white py-2 px-4 rounded-sm w-full"
        >
          Processing...
        </div> 
        }
        {status == "" ?<></>: <p className='text-gray-600 pt-4 text-center'> {status}</p>}
      </div>
    </form>
  );
}

export default ContactForm;
