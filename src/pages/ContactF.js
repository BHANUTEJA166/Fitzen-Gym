import React from 'react';
import SendEnquiryF from '../features/enquiries/SendEnquiryF';

const ContactF = () => {
  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">Contact Us</h2>

      <div className="row mb-5">
        <div className="col-md-6 mb-4">
          <h5>📍 Address</h5>
          <p>
            FitZen Wellness Center,<br />
            2nd Floor, Lotus Plaza,<br />
            Banjara Hills, Hyderabad, Telangana - 500034
          </p>
        </div>

        <div className="col-md-6 mb-4">
          <h5>📞 Phone</h5>
          <p>
            +91 7330846473<br />
          </p>
        </div>

        <div className="col-md-6 mb-4">
          <h5>✉️ Email</h5>
          <p>
            contact@fitzenwellness.in<br />
            support@fitzenwellness.in
          </p>
        </div>

        <div className="col-md-6 mb-4">
          <h5>🕒 Hours</h5>
          <p>
            Mon – Sat: 6:00 AM – 9:00 PM<br />
            Sunday: 7:00 AM – 12:00 PM
          </p>
        </div>
      </div>

      <hr />

      <div className="text-center mt-5">
        <h4>Leave us a message</h4>
        <p>You can reach out by filling the form below. We usually respond within 24 hours.</p>
        
        <div className="mt-4">
          {<SendEnquiryF/>}
        </div>
      </div>
    </div>
  );
};

export default ContactF;

