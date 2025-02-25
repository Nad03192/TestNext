"use client";
import { useState } from "react";
import Image from "next/image";

export default function Form() {
      const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
      });
      const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const validateForm = () => {
        const newErrors = { name: "", email: "", message: "" };
        let isValid = true;
    
        if (!formData.name) {
          newErrors.name = "Name is required";
          isValid = false;
        }
    
        if (!formData.email) {
          newErrors.email = "Email is required";
          isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = "Please enter a valid email address";
          isValid = false;
        }
    
        if (!formData.message) {
          newErrors.message = "Message is required";
          isValid = false;
        }
    
        setErrors(newErrors);
        return isValid;
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
        
         console.log("Form submitted:", formData);
         formData.email="";
         formData.message="";
         formData.name="";
        }
      };
    
  return (
    <>
     <section  className=" flex items-center justify-center bg-blue-100 dark:bg-gray-500   px-4 pt-20 pb-20">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-20">Contact Us</h2>
          <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md max-w-lg mx-auto text-left">
  <div className="mb-4">
    <label className="text-m font-semibold text-gray-600 dark:text-white">Name</label>
    <input
      type="text"
      name="name"
      value={formData.name || ""}
      onChange={handleChange}
      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
    />
    {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
  </div>

  <div className="mb-4">
    <label className="text-m font-semibold text-gray-600 dark:text-white">Email</label>
    <input
      type="email"
      name="email"
      value={formData.email || ""}
      onChange={handleChange}
      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
    />
    {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
  </div>

  <div className="mb-4">
    <label className="text-m font-semibold text-gray-600 dark:text-white">Message</label>
    <textarea
      name="message"
      value={formData.message || ""}
      onChange={handleChange}
      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
    />
    {errors.message && <p className="text-red-500 text-sm mt-2">{errors.message}</p>}
  </div>

  {/* Centered Submit Button */}
  <div className="flex justify-center">
    <button
      type="submit"
      className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
    >
      Submit
    </button>
  </div>
</form>

        </div>
      </section>
    </>
  );
}
