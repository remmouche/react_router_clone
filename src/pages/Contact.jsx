import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  
	const navigate = useNavigate()
	return (
    <div>
      <h1>Contact</h1>
	  <div className="contact_buttons">
		<button onClick={()=> navigate('info')}>Info</button>
		<button onClick={()=> navigate('form')}>Contact</button>
	  </div>
    </div>
  );
};

export default Contact;
