// components/Form.js
import React, { useState } from 'react';
import { useRouter } from 'next/router';

function Form() {
    const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
  });
  const [isloading, setIsloading] = useState(false)
  const [status, setStatus] = useState(null)
  const [statusMessage, setStatusMessage] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform form validation here
    if (!formData.fullName || !formData.email || !formData.phoneNumber) {
      alert('Please fill in all required fields');
      return;
    }

    // Send the form data to your server and handle email sending logic
    try {
      setIsloading(true)
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setIsloading(false)
        setStatus(true)
        setStatusMessage("Form submitted successfully")
        setTimeout(() => {
            router.push('/calender');
          }, 500);
      } else {
        setIsloading(false)
        setStatus(false)
        setStatusMessage("Form failed to submit, Try again later")
      }
    } catch (error) {
      setIsloading(false)
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='w-full flex flex-col text-left mt-10'>
      <div className='flex flex-col'>
        <label htmlFor="fullName" className='font-normal text-rem-sm'>Full Name</label>
        <input
        className='mt-2 bg-gray-100 font-normal text-md text-gray-950 p-2 outline-none'
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </div>
      <div className='flex flex-col'>
        <label htmlFor="email" className='font-normal text-sm mt-4'>Email</label>
        <input
        className='mt-2 bg-gray-100 font-normal text-md text-gray-950 p-2 outline-none'
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className='flex flex-col'>
        <label htmlFor="phoneNumber" className='font-normal text-sm mt-4'>Phone Number</label>
        <input
        className='mt-2 bg-gray-100 font-normal text-md text-gray-950 p-2 outline-none'
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
      </div>
      <button className="py-2 w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold mt-6" type="submit">{isloading? "SENDING...": "SUBMIT"}</button>
      {status? <p className='text-green-600 text-center mt-2 text-sm'>{statusMessage}</p> : <p className='text-red-400 text-center mt-2 text-sm'>{statusMessage}</p>}
    </form>
  );
}

export default Form;
