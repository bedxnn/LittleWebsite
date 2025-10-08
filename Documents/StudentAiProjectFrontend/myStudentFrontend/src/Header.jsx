import williamPenn from './images/billy.png';
import dsu from './images/dsu.png'

function Header(){
    return(
        <header>
            <h1 id ="name"> Hi, l'm Bedan 👋 </h1>
            <div className = "info">
             <p></p>
             </div >
             <div className = "about_me"> 
                <h3 id = "about_position">About </h3>
               
                    <p>
I’m a Computer Science major at Delaware State University, passionate about making projects like websites and software. <span style ={{fontWeight: "bold"}}>I’m currently looking for internship opportunities. </span>On my free time i like to play sports like soccer.
            
                </p>
                    </div>


 <section  className= "penndiv"> 


<h3 id = "education"> Education  </h3>
 <img id = "penn" src={williamPenn} alt = "william penn"/>
 <p id="highschool-text"> William penn Highschool </p>
 <p id = "penn-date">Aug 2019 - Jun 2023</p>

 
 <div className='dsu'>
   <p id = "dsu-word">Delaware State University</p>
   <img id ="dsu-image" src = {dsu} alt = "Delaware State University"/>
   <p id = "dsu-date"> Aug - 2023 - May 2027 </p>

 </div>


          

         </section>


        </header>

    );

}
export default Header;