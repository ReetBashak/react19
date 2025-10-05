// Get your environment variable here. The process.env prefix depends on your setup.
const WEB3FORMS_ACCESS_KEY = process.env.REACT_APP_WEB3FORMS_ACCESS_KEY;
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export const Contact = () => {
  // Make the function async to use await for the fetch request
  const handleFormSubmit = async (formData) => { 
    // console.log(formData.entries());
    const formInputData = Object.fromEntries(formData.entries());
    
    // 1. Add the required access_key to the form data
    const dataToSend = {
      ...formInputData,
      access_key: WEB3FORMS_ACCESS_KEY, 
    };

    try {
      // 2. Send the data to the Web3Forms API endpoint
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(dataToSend),
      });

      const json = await response.json();

      if (json.success) {
        console.log("Form submitted successfully!");
        // You might want to add code here to clear the form or show a success message to the user.
      } else {
        console.error("Submission failed:", json.message);
      }
    } catch (error) {
      console.error("An error occurred during submission:", error);
    }
  };

  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>

      <div className="contact-wrapper container">
        <form action={handleFormSubmit}>
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
            placeholder="Enter you email"
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
        </form>
      </div>
    </section>
  );
};