

const ProfileCard=(prop)=>{
    return(
        <>
        <div classNameName="card" style={{width:"360px"}}>
    <img classNameName="card-img-top" src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt="Card" style={{width:"100%"}} />
    <div classNameName="card-body">
      <h4 classNameName="card-title" style={{color:prop.details.color}}>{prop.details.name}</h4>
      <p classNameName="card-text">{prop.details.designation}</p>
      <p classNameName="card-text">{prop.details.salary}</p>

      <a href="#d" classNameName="btn btn-primary">See Profile</a>
    </div>
  </div>
  </>
    )
} 
export default ProfileCard