import React, { useState, useRef } from 'react';

import './ImageInput.css';

const ImageInput = ({getFile}) => {

    const [message, setMessage] = useState(''); //to visually update status
    const myInput = useRef();

    const handleChange = () => {
        setMessage(''); //reset message;
        const file = myInput.current.files[0];
        if(file){
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                getFile({ //returns it to parent.
                    url: reader.result
                })
                setMessage("File uploaded.")
            };
        } else{
            setMessage("File not added.")
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