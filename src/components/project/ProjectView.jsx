import React from 'react';
import axios from 'axios';

const ProjectView = ({setBio, setArt, setPreview, project}) => {

  console.log('project', project);

  const sendProject = () => {
    let inmateId = project.inmateId;
    console.log('inmateId', inmateId);
    axios.post('http://localhost:3000/artwork', project)
      .then((result) => {
        console.log('result from successful post request to add artwork', result);
      })
      .then(setBio(false))
      .then(setArt(false))
      .catch((error) => {
        console.log('error sending adding project to server', error)
      })
  }

  const editProject= () => {
    setPreview(false);
  }

  return (
    <>
    <div>
      <div style={{display:"flex", justifyContent:"center"}}>
        {project.photos?.map((photo, index) => {
          return (
            <div style={{padding:"10px"}}>
              <img height="200px" width="225px" key={index} src={photo}/>
            </div>
          )})}
      </div>
      <div>
        <h2 style={{textAlign:"center"}}>
          {project.title}
        </h2>
        <h3>
          {project.artist}&nbsp;{project.inmateId}
        </h3>
        <h3>
          {project.price}
        </h3>
      </div>
    </div>
    <div>
      {project.description}
    </div>
    <div>
      {project.details}
    </div>
    <div className="flexbox-container">
      <button onClick={editProject}>
        Edit
      </button>
      &nbsp;
      <button onClick={sendProject}>
        Submit
      </button>
    </div>
    </>
  );
}

export default ProjectView;