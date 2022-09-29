import React, { useState } from "react";
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Modal from '../Modal/'

import {
    faKey,
    faUser,
    faEnvelope,
    faPhone,
   
  } from '@fortawesome/free-solid-svg-icons'
  import {
    faGoogle,
    faFacebook,
  } from '@fortawesome/free-brands-svg-icons'



  const Signup = () =>  {

    const [modalOpen, setModalOpen] = useState(false);
    
    return (
     <>
     

    <div className="testbox">
          <h3 className="formheader">Registration</h3>
      
          <form action="/">
       
            <label id="icon"><FontAwesomeIcon icon={faUser} color="white" /></label>
            <input type="text" name="name" className="formbox" placeholder="Name" required/>
            <label id="icon" ><FontAwesomeIcon icon={faEnvelope} color="white" /></label>
            <input type="text" name="name" className="formbox" placeholder="Email" required/>
            <label id="icon"><FontAwesomeIcon icon={faPhone} color="white" /></label>
            <input type="text" name="phone" className="formbox" placeholder="Phone" required/>
            <label id="icon"><FontAwesomeIcon icon={faKey} color="white" /></label>
            <input type="password" name="name" className="formbox" placeholder="Password" required/>
            
            <div className="viasocial">
                Register via Social<br/>
            <a href="/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGoogle} color="#4d4d4e" className="anchor-icon"/>
            </a>
            &nbsp; &nbsp;&nbsp;&nbsp;
            <a href="/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faFacebook} color="#4d4d4e" className="anchor-icon" />
            </a>
            </div>
        
            <p className="signup_p">By clicking Register, you agree on our <a href="#">terms and condition</a>.</p>
            {/* <Link to="/" className="register-button">
                <font size = "3" >Register</font>
            </Link>    */}
            <button className="register-button">Register</button>
        </form>
        &nbsp;&nbsp;
        <button className="login-button" onClick={() => {setModalOpen(true);}}> Login</button>
         {modalOpen && <Modal setOpenModal={setModalOpen} />}

   </div>

  
    </>

    )
  }
export default Signup