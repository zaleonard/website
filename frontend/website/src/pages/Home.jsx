import ProfileCard from '../components/ProfileCard'

function Home(){
    return(
        <div className='home'>
            <div className='profile-card'>
                <ProfileCard />
            </div>
            <div className='technical-skills'>
                Technical skills, languages
            </div>
            <div className='project-cards'>
                Project cards
            </div>
            <div className = 'contacts'>
                contacts
            </div>
        </div>//ProfileCard, technical skills, ProjectCards
    )

};



export default Home