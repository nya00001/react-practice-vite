import PropTypes from 'prop-types'; 

function UserGreeting(props) {

    const WelcomeMessage = <h1 className="welcome">Welcome {props.username}</h1>;
    const LoginMessage = <h1 className="login">Please Login</h1>;
    return(props.isLoggedIn ? WelcomeMessage : LoginMessage);
}

UserGreeting.propTypes = {
    username: PropTypes.string.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
}

UserGreeting.defaultProps = {
    username: "Guest",
    isLoggedIn: false,
}

export default UserGreeting