import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <>
        <div className="main-container">

              <div className="contact">
                    <h1>Contact Form</h1>
                    <form action="">

                        <label htmlFor="">Full Name</label>
                        <input type="text" placeholder='Example Kumar' required/>

                        <label htmlFor="">Email</label>
                        <input type="text" placeholder='faltu@rishihood.com' required />

                        <label htmlFor="">Comment or message</label>
                        <textarea name="message" id="message" required></textarea>

                        <input type="button" value="Submit" id='submit-btn'/>

                    </form>
              </div>

              <div className="pic">
                <div className="main">
                  <div className="blob"></div>
                </div>
              </div>

        </div>
    </>
  )
}

export default Contact
