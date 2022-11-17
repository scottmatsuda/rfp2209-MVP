import React, {useState} from 'react';
import collage from './assets/bios/collage.png';
import BioForm from './BioForm.jsx';
import ProjectForm from './ProjectForm.jsx';

function App() {

  const [bio, setBio] = useState(false);
  const [art, setArt] = useState(false);

  const toggleBio = () => {
    setBio(true);
  }

  const toggleProject = () => {
    setArt(true);
  }

  return (
    <>
    {!bio && !art &&
      <h1 style={{backgroundImage: `url('${collage}')`,   height: '120vh', width: '240vh', backgroundRepeat: 'repeat'}} >
        Welcome to Inmate Etsy!
      </h1>}
    <div style={{position: "relative", bottom: "400px", left: "600px"}} className="flexbox-container">
      {!bio && !art && <button onClick={toggleBio}>Add Bio</button>}
      <br></br>
      &nbsp;
      {!art && !bio && <button onClick={toggleProject}>Add Project</button>}
    </div>
    {bio && <BioForm setBio={setBio} setArt={setArt}/>}
    {art && <ProjectForm setArt={setArt} setBio={setBio}/>}
    </>
  )
}

export default App;
