import React from "react";
import "./index.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faKey,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons'
import {
  faGoogle,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons'

const Modal = ({ setOpenModal }) => {
  return (
    // <div className="modalBackground">
      <div className="modalContainer">
        {/* <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div> */}
        <div className="modalheader">
          Login
        </div>
        <div className="body">
        <form action="/">
       
              <label id="icon"><FontAwesomeIcon icon={faEnvelope} color="white" /></label>
              <input type="text" name="email"  className="modalformbox" placeholder="Email" required/>
              <label id="icon"><FontAwesomeIcon icon={faKey} color="white" /></label>
              <input type="password" name="name" className="modalformbox" placeholder="Password" required/>

              <div className="viasocial">
                Login via Social<br/>
            <a href="/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGoogle} color="#4d4d4e" className="anchor-icon"/>
            </a>
            &nbsp; &nbsp;&nbsp;&nbsp;
            <a href="/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faFacebook} color="#4d4d4e" className="anchor-icon" />
            </a>
            </div>


              
          <p className="signup_p">Forget password, <a href="#">click here</a>.</p>
          <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>&nbsp; &nbsp; &nbsp;
          <button className="submitlogin">Login</button>
        </div>

          </form>
        </div>
     
        </div>
   
    // </div>
  );
}

export default Modal;
