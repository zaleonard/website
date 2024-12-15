import pic from '../assets/headshot.png'
import "../css/ProfileCard.css"

function ProfileCard(){
    const redirectToAboutMe = () =>{
        window.location.href = '/aboutme'
    }
    
    return(
        <div className="card" onClick={redirectToAboutMe}>
            <img className = "card-image" src ={pic} width ={200} height = {200} alt="picture"></img>
            <p className= "card-text">
                Hello, I'm <b>Zachary Leonard</b> and I am an aspiring Data
                 Scientist/Software Engineer.
                <br/><br/>
                  My profession is a Senior Scientist specializing in Chemistry,
                   but I have a passion for
                 programming that has lead me to pursue a career change.
            </p>
        </div>
    );
}

export default ProfileCard