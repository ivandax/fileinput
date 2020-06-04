import React, { useState } from 'react';
import './App.css';

import ImageInput from './components/ImageInput';

import placeholder from './images/placeholder.png'

function App() {

  //initially, no file is set.
  const [myFile, setFile] = useState({url: ''});

  const handleSubmit = () => {
    //here you should decide what to do with your image.
    console.log(`Trying to submit... ${myFile ? 'File' : "No file"}`);
  }

  //this will be passed as props to retrieve file.
  const getFile = (file) => {
    file && setFile(file) //once successful, set the image on state.
  }

  return (
    <div className="App">
      <img src={myFile.url ? myFile.url : placeholder} alt="preview"/>
      <ImageInput getFile={getFile}/>
      <button onClick={handleSubmit}>Submit</button>  
    </div>
  );
}

export default App;
