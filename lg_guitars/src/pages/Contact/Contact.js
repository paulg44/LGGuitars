// Component for Contact Page

import NavBar from "../../Components/NavBar/NavBar";
import ContactHeader from "../../ContactComponents/ContactHeader/ContactHeader";
import ContactForm from "../../ContactComponents/ContactForm/ContactForm";
import Footer from "../../Components/Footer/Footer";

function Contact() {
  return (
    <div>
      <NavBar />
      <ContactHeader />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Contact;
