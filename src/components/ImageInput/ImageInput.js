import React, { useState, useRef } from 'react';

import './ImageInput.css';

const ImageInput = ({getFile}) => {

    const [message, setMessage] = useState(''); //to visually update status.
    const myInput = useRef(); //the reference has to be set below.

    //this is optional and can be expanded to validate other properties of the file.
    const validate = (file) => {
        if(file){
            const acceptedExtensions = ['pdf','jpeg','jpg','gif','png']
            console.log(file.name.split(".")[file.name.split(".").length-1])
            if(acceptedExtensions.includes(file.name.split(".")[file.name.split(".").length-1].toLowerCase())){
                return true;
            } else{
                return "File extension not supported."
            };        
        } else{
            return "File not added."
        }
    };

    const handleChange = () => {
        setMessage(''); //reset message;
        const file = myInput.current.files[0];
        if(file && validate(file)===true){
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                getFile({ //returns it to parent.
                    url: reader.result
                })
                setMessage("File uploaded.")
            };
        } else{
            setMessage(validate(file)) //if false will show the message.
        }
    }

    return (
        <div className="imageInput">
            <label>Upload
                <input 
                type="file" 
                className="imageInput" 
                onChange={handleChange}
                ref={myInput}
                />
            </label>
            <span className="message">{message}</span>
        </div>
    )
}

export default ImageInput;