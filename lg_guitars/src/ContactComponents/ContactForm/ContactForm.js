// Component for Contact Form

import "./ContactForm.css";
import { FaGuitar } from "react-icons/fa";

function ContactForm() {
  return (
    <section className="contact-form">
      <div className="container">
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-recaptcha="true"
        >
          <div className="inputs">
            <input type="text" placeholder="Name" name="name" />
            <input type="text" placeholder="Subject" name="subject" />
            <input type="email" placeholder="Email" name="email" />
            <input type="text" placeholder="Phone" name="phone" />
            <textarea
              type="text"
              placeholder="Leave Message"
              name="message"
            ></textarea>
            <div>
              <div data-netlify-recaptcha="true"></div>
            </div>
          </div>
          <button type="submit" className="btn form-btn">
            <i>
              <FaGuitar />
            </i>{" "}
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
