import profilePic from 'c:/Users/admin/Documents/imd/level4/webapp/react/my-react-app/src/assets/profile.jpg'

function Card(){

    return(

        <div className="card">
            <img className="profile-pic" src={profilePic} alt="Placeholder" />
            <h2 className='card-title'>My Card</h2>
            <p className='card-text'>This is my card. My name is Mohamed Nya</p>
        </div>
    );
}

export default Card
