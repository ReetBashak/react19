import React, { useState } from 'react';

// Using import.meta.env for Vite projects
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

export const Contact = () => {
  const [result, setResult] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault(); 
    setResult("Sending...");
    
    if (!ACCESS_KEY) {
        setResult("Error: Web3Forms Access Key is missing or not loaded.");
        console.error("VITE_WEB3FORMS_ACCESS_KEY is not defined.");
        return;
    }

    const form = event.target;
    const formData = new FormData(form);

    // CRITICAL: Must append the access key to the FormData
    formData.append("access_key", ACCESS_KEY); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      
      if (data.success) {
        setResult("Form submitted successfully! 🎉 ");
        form.reset(); 
      } else {
        console.error("Web3Forms Error:", data); 
        setResult(`Error: ${data.message || "Something went wrong."}`);
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      setResult("A network error occurred.");
    }
  };

  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>

      <div className="contact-wrapper container">
        <form onSubmit={handleFormSubmit}> 
          <input
            type="text"
            className="form-control"
            placeholder="enter your name"
            name="username" 
            required
            autoComplete="off"
          />

          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            name="email" 
            required
            autoComplete="off"
          />

          <textarea
            className="form-control"
            rows="10"
            placeholder="Enter your message"
            name="message" 
            required
            autoComplete="off"
          ></textarea>

          <button type="submit" value="send">
            Send
          </button>
          
          {/* Status message placed immediately after the button */}
          {result && <p className="form-submission-result">{result}</p>}

        </form>
      </div>
    </section>
  );
};