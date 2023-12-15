import React, { useState } from "react";
import { ContactPageWrap } from "./Contact.Page";

const ContactPage = () => {
  const [nameInput, setNameInput] = useState("");

  return (
    <ContactPageWrap>
      <div className="ContactPage">
        <div className="header">CONTACT</div>
        <div className="contact">
          <form>
            <div className="name-input">
              <input
                className="name"
                placeholder="Name"
                type="text"
                name="name"
              />
            </div>
          </form>
        </div>
      </div>
    </ContactPageWrap>
  );
};

export default ContactPage;
