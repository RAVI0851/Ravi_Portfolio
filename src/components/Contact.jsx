import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: +91,
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  return (
    <div className="flex flex-col h-[100vh] bg-[#170540] text-white gap-[2rem] items-center">
      <h1 className="underline underline-offset-[1rem] text-2xl mt-[1rem]">
        Contact
      </h1>
      <div className="flex flex-col gap-[1rem]">
        {/* My contact details */}
        <div>
          <i className="fa-solid fa-phone"></i>
          <span className="ml-[1rem]">+91 6303688641</span>
        </div>
        <div className="">
          <i className="fa-solid fa-envelope"></i>
          <span className="ml-[1rem]">naga.ravindra085@gmail.com</span>
        </div>
        <div className="">
          <i className="fa-solid fa-location-dot"></i>
          <span className="ml-[1rem]">AndraPradesh,Eluru,Chintalapudi</span>
        </div>
      </div>
      {/* Form to send email */}
      <div>
        <form
          action="https://formsubmit.co/naga.ravindra085@gmail.com"
          method="POST"
          className="max-w-[30rem] flex flex-col gap-[2rem] text-xl m-[2rem]"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Enter your Full Name"
            className="border w-full bg-[#43366A] rounded-3xl p-2 placeholder-white"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Enter your email"
            className="border w-full bg-[#43366A] rounded-3xl p-2 placeholder-white"
            onChange={handleChange}
          />
          <div className="flex gap-[1rem]">
            <input
              type='tel'
              name="phone"
              value={formData.phone}
              placeholder="Phone Number"
              className="border w-1/2 bg-[#43366A] rounded-3xl p-2 placeholder-white"
              id=""
              onChange={handleChange}
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              placeholder="Subject"
              className="border w-1/2 bg-[#43366A] rounded-3xl p-2 placeholder-white"
              onChange={handleChange}
            />
          </div>

          {/* to skip CAPTCHA */}
          <input type="hidden" name="_captcha" value="false" />

          {/* to redirect after submission
          <input
            type="hidden"
            name="_next"
            value="http://localhost:5173/thankyou"
            
          /> */}
          <textarea
            type="text"
            name="message"
            value={formData.message}
            placeholder="Enter your message here"
            className="border h-[8rem] w-full rounded-4xl bg-[#43366A] p-2 placeholder-white"
            onChange={handleChange}
          />
          <button
            type="submit"
            className="w-1/4 text-center mx-auto bg-blue-600 p-2 rounded-4xl placeholder-white"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
