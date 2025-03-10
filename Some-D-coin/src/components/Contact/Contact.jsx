import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <>
      <div className="some-container">
        <div className="contact-container">
          <div className="contact">
            <h1>Contact Form</h1>
            <form action="">

              <div class="form-control">
                <input type="text" required />
                <label>
                  <span >F</span>
                  <span >u</span>
                  <span >l</span>
                  <span >l</span>
                  <span >n</span>
                  <span>a</span>
                  <span >m</span>
                  <span >e</span>
                </label>
              </div>

              <div class="form-control">
                <input type="text" required />
                <label>
                  <span >E</span>
                  <span >m</span>
                  <span >a</span>
                  <span >i</span>
                  <span >l</span>
                </label>
              </div>


              <label htmlFor="">Comment or message</label>
              <textarea name="message" id="message" required></textarea>

              <input type="button" value="Submit" id="submit-btn" />
            </form>
          </div>

          <div className="pic">
            <div className="main">
              <div className="blob"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
