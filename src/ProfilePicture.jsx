import profilePic from 'c:/Users/admin/Documents/imd/level4/webapp/react/my-react-app/src/assets/profile.jpg'

function ProfilePicture(){

    const imgUrl = profilePic;

    const handleClick = (e) => e.target.style.display = 'none';

    return(

        <img onClick={(e) => handleClick(e)} className="profile-pic" src={imgUrl} alt="Placeholder" />
    )
}

export default ProfilePicture