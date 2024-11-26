import React from "react";

const ContactForm = () => {
  return (
    <div>
      <form className="form">
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="email" placeholder="email" />
        <textarea name="" id=""></textarea>
        <button>Send Form</button>
      </form>
    </div>
  );
};

export default ContactForm;
