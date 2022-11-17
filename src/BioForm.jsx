import React, { useRef, useState } from 'react';
import BioView from './BioView.jsx';

const BioForm = ({setBio, setArt}) => {

  const firstName = useRef();
  const lastName = useRef();
  const location = useRef();
  const body = useRef();
  const offense = useRef();
  const funFacts = useRef();
  const [photo, setPhoto] = useState('');
  const [preview, setPreview] = useState(false);
  const [shortBio, setShortBio] = useState({})

  const submitHandler = (event) => {
    event.preventDefault();
    shortBio.firstName = firstName.current.value;
    shortBio.lastName = lastName.current.value;
    shortBio.location = location.current.value;
    shortBio.body = body.current.value;
    shortBio.photo = photo;
    shortBio.offense = offense.current.value;
    shortBio.funFacts = funFacts.current.value;
    console.log('shortBio', shortBio);
    setPreview(true);
  }

  // photo uploader
  const photoWidget = cloudinary.createUploadWidget(
    {
      cloudName: 'dgjzqkjh0',
      uploadPreset: 'Add Bio Form'
    },
    (error, result) => {
      if (error) {
        console.log('error uploading photo', error);
      }
      if (!error && result && result.event === 'success') {
        setPhoto(result.info.url);
      }
    }
  );

  return (
    <>
      {!preview &&
      <form className="form" onSubmit={submitHandler}>
        <div>
          <input placeholder='first name' ref={firstName} />
        </div>
        <div>
          <input placeholder='last name' ref={lastName} />
        </div>
        <div>
          <input placeholder='location' ref={location} />
        </div>
        <div>
          <textarea placeholder='brief bio' ref={body} />
        </div>
        <div>
          <input placeholder='current offense' ref={offense} />
        </div>
        <div>
          <input placeholder='fun fact' ref={funFacts} />
        </div>
        <div className="flexbox-container">
          <div className="answer-photo">
            <button className="Upload-Photos"
              onClick={(event) => {
                event.preventDefault();
                photoWidget.open();
              }}>Upload photo
            </button>
            &nbsp;
            {photo.length > 0 &&
              <img src={`${photo}`} width="70" height="100" />
            }
          <button type='submit'>Preview</button>
          </div>
        </div>
      </form>}
      {preview &&
        <BioView setBio={setBio} setPreview={setPreview} setArt={setArt} shortBio={shortBio} />
      }
    </>
  );
};

export default BioForm;



