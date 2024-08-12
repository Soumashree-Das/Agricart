import React from 'react'
import './Contact.css'
import Swal from 'sweetalert2'
const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "ef3b0f66-758b-4aad-b80b-d2a70f16070b");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "success!",
        text: "Message Sent Successfully ",
        icon: "success"
      });
    }
  };
  return (
    <div className='contact'>
      <form onSubmit={onSubmit}>
      <h1>Contact Form</h1>
        <div className="input-box">
          <label>Full Name</label>
          <input type="text" name="name" className='feild' placeholder='Enter your name' required />
        </div>
        <div className="input-box">
          <label>Email id</label>
          <input type="email" name="email" className='feild' placeholder='Enter your email' required />
        </div>
        <div className="input-box">
          <label>Message</label>
          <textarea name="message" id="" className='feild message' placeholder='Enter your message' required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  )
}

export default Contact
