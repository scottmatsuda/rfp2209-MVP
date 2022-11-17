import React from 'react';
import axios from 'axios';

const BioView = ({setPreview, setBio, setArt, shortBio}) => {

  const sendBio = () => {
    console.log('shortBio', shortBio);
    axios.post('http://localhost:3000/bio', shortBio)
      .then(setBio(false))
      .then(setArt(false))
      .then((result) => {
        console.log('successful post request from client', result);
      })
      .catch((error) => {
        console.log('error adding inmate from client', error)
      })
  }

  const editBio = () => {
    setPreview(false);
  }

  return (
    <>
      <div style={{border: "0.5px solid red"}}>
        <div className="flexbox-container">
          <div>
            <>
            <img src={shortBio.photo} alt="profile pic"/>
            </>
          </div>
          <div className="bio-data">
            <h2>
              {shortBio.firstName}&nbsp;{shortBio.lastName}
            </h2>
            &nbsp;
            <h2>
              {shortBio.location}
            </h2>
            &nbsp;
            <h2>
              {shortBio.offense}
            </h2>
          </div>
        </div>
        <div className="below-pic">
          <h3>
            {shortBio.body}
          </h3>
          &nbsp;
          <h3>
            {shortBio.funFacts}
          </h3>
        </div>
      </div>
      <div className="flexbox-container">
        <button onClick={editBio}>
          Edit
        </button>
        &nbsp;
        <button onClick={sendBio}>
          Submit
        </button>
      </div>
    </>
  );
};

export default BioView;