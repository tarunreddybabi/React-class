

const ProfileCard=(prop)=>{
    return(
        <>
        <div className="card" style={{width:"360px"}}>
    <img className="card-img-top" src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt="Card" style={{width:"100%"}} />
    <div className="card-body">
      <h4 className="card-title" style={{color:prop.details.color}}>{prop.details.name}</h4>
      <p className="card-text">{prop.details.designation}</p>
      <p className="card-text">{prop.details.salary}</p>

      <a href="#d" className="btn btn-primary">See Profile</a>
    </div>
  </div>
  </>
    )
} 
export default ProfileCard