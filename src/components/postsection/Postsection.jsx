import React, {useState, useRef} from 'react'
import profile from '../../img/profileImg.jpg'
import './Postsection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faImages,
  faVideo,
  faMapPin,
  faTimes,
} from '@fortawesome/free-solid-svg-icons'

const Postsection = () => {
  const [image, setImage]=useState(null)
  const imageRef = useRef();

  const onImageChange = (event) =>{
    if (event.target.files && event.target.files[0]){
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };
  return (
    <div className="postbox">
        <div className="postwrap">
          <div className='posttext'>        
          <img src={profile} />
          <input type= 'text' placeholder='Post your memes !'/>
          </div>
          <button className='fabutton'>Post</button>
        </div>
        <hr/>
    
      <div className="posticons">
        <div onClick={()=>imageRef.current.click()} style = {{cursor: 'pointer'}}><FontAwesomeIcon icon={faImages} color="var(--photo)" />Photo</div>
        <div onClick={()=>imageRef.current.click()} style = {{cursor: 'pointer'}}><FontAwesomeIcon icon={faVideo} color="var(--video)" />Video</div>
        <div style = {{cursor: 'pointer'}}><FontAwesomeIcon icon={faMapPin} color="var(--location)"  />Location</div>
      </div>
      <input type = "file" name="myimage" ref = {imageRef} onChange = {onImageChange} style = {{display: 'none'}}/>
      
      {image && (
      <div className="previewImage">
        <FontAwesomeIcon icon={faTimes} color="red" onClick={()=>setImage(null)}/>
        <img src={image.image} alt="" />
      </div>
      )}
    </div>
  )
}

export default Postsection