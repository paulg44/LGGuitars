// Component for Contact Header

import "./ContactHeader.css";

function ContactHeader() {
  return (
    <div className="contact-header">
      <h2 className="section-title" data-testid="contact-header">
        <span className="text-third">C</span>ontact
      </h2>
      <p className="text-secondary">
        For more information or to discuss your needs, please fill out the form
        below and we will contact you as soon as possible. Many thanks for
        taking the time to visit our website.
      </p>
    </div>
  );
}

export default ContactHeader;
