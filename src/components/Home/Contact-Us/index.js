import React from "react";
import "./index.scss";
const ContactUs = () => (
  <React.Fragment>
    <section className="contact-us  section-sm" data-scroll-index="3">
      <h2 className="primary text-center">
        Tap every user attribution in real-time with Trackier
      </h2>
      <div className="d-flex justify-content-center">
        <a
          href="https://trackier.com/request-demo/"
          target="_blank"
          rel="noreferrer"
          className="button_primary me-2"
        >
          <b> REQUEST DEMO</b>
        </a>
        <a
          href="https://trackier.com/free-trial/"
          target="_blank"
          rel="noreferrer"
          className="button_primary button_secondary"
        >
          <b> FREE TRIAL</b>
        </a>
      </div>
    </section>
  </React.Fragment>
);
export default ContactUs;
