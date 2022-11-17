import React, { useRef, useState } from 'react';
import axios from 'axios';
import ProjectView from './ProjectView.jsx';

const ProjectForm = ({setBio, setArt}) => {

  const titleRef = useRef();
  const artistRef = useRef();
  const inmateIdRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();
  const detailsRef = useRef();
  const [project, setProject] = useState({});
  const [photos, setPhotos] = useState([]);
  const [preview, setPreview] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    project.title = titleRef.current.value
    project.artist = artistRef.current.value;
    project.inmateId = inmateIdRef.current.value;
    project.price = priceRef.current.value;
    project.description = descriptionRef.current.value;
    project.details = detailsRef.current.value;
    project.photos = photos;
    setProject(project);
    console.log('project', project);
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
        // console.log('result.info.url', result.info.url);
        setPhotos([...photos, result.info.url]);
      }
    }
  );

  return (
    <>
      {!preview &&
        <form onSubmit={submitHandler}>
          <div>
            <input placeholder='project name' ref={titleRef} />
          </div>
          <div>
            <input placeholder='artist name' ref={artistRef} />
          </div>
          <div>
            <input placeholder='inmate id' ref={inmateIdRef} />
          </div>
          <div>
            <input placeholder='asking price' ref={priceRef} />
          </div>
          <div>
            <textarea placeholder='description' ref={descriptionRef} />
          </div>
          <div>
            <textarea placeholder='details' ref={detailsRef} />
          </div>
          <div className="flexbox-container">
            <div className="answer-photo">
              {photos.length < 5 &&
                <button className="Upload-Photos"
                  onClick={(event) => {
                    event.preventDefault();
                    photoWidget.open();
                  }}>Upload photos
                </button>}
              &nbsp;
              {photos && photos.map((photo, index) => {
                return <img key={index} src={`${photo}`} width="70" height="70" />;
              })}
              {photos.length > 0 &&
            <div>
              <small>Images uploaded: {photos.length}</small>
            </div>
             }
            </div>
              <button type='submit' >Preview</button>
          </div>
        </form>
      }
      {preview &&
      <ProjectView setPreview={setPreview} setBio={setBio} setArt={setArt} project={project} />
      }
    </>
  );
};

export default ProjectForm;