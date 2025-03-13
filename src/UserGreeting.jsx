function UserGreeting(props) {
    if(props.isLoggedInt){
      return( <h2 className="welcome-message">Welcome {props.username}</h2> )
}
        return( <h2 className="login-prompt">{props.username} Please login to continue</h2> )
        /* we can use ternary operater for both if and else statement
        return(
            props.isLoggedInt ? <h2>Welcome {props.username}</h2> : <h2>Please login to continue</h2>      
        )*/
}
UserGreeting.defaultProps = {
    isLoggedInt: false,
    username: "Guest"
};
export default UserGreeting;