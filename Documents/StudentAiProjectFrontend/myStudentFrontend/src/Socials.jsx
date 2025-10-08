import linkledin from  './images/linkelidin.png';
import git from './images/git.png';

function Socials() {
  return (
   
  
   <div className = "social-box">
    <p id = "soc">Socials</p>
    <a href = "https://www.linkedin.com/in/bedan-gitau">
    <img id="linnk" src={linkledin}  />
    </a>
    <a href = "https://github.com/Bedxnn">
    <img id="git" src={git}  />
    
    </a>
    </div>
  )
}

export default Socials
