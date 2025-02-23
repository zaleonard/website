import '../css/AboutMe.css'
import background from '../assets/background.png'


function AboutMe() {
    return(
        <div className='aboutme'>
            <div className='banner'>
                <img className = "banner-image" src ={background}  alt="banner"></img>
            </div>
        </div>
    )
}

export default AboutMe