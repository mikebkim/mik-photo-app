import React from "react";
// import React, { useState } from "react";
import { ContactPageWrap } from "./Contact.Page";

const ContactPage = () => {
  // const [nameInput, setNameInput] = useState("");

  return (
    <ContactPageWrap>
      <div className="ContactPage">
        <div className="header"></div>
        <div className="contact">
          <form>
            <div className="name-input">Coming soon...</div>
          </form>
        </div>
      </div>
    </ContactPageWrap>
  );
};

export default ContactPage;
