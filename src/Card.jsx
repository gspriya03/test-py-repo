import profile from './assets/profile.jpeg'
function Card(){
    return(
        <div className="card">
            <img className = "card-image" src={profile} alt="profile picture"/>
            <h2 className="car-title">Card Title</h2>
            <p className="card-text">Card Description</p>
        </div>
    )
}
export default Card;