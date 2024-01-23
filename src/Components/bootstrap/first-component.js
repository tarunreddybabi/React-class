import ProfileCard from "./profile-card";

const BootstrapComponent = () => {
  const data = [
    {
      name: "Ruben",
      color: "blue",
      designation: "Developer",
      salary:"Salary-100k",
    },{
      name:"Alex",
      color: "green",
      designation: "Test Engineer",
      salary:"Salary-80k",
    },{
      name:"Ali",
      color: "orange",
      designation: "Back-end",
      salary:"Salary-85k"
    },{
      name:"Tom",
      color: "brown",
      designation: "SQL",
      salary:"Salary-89k"
    }
  ];
  return (
    <>
   
      <div className="container-fluid p-5 bg-primary text-white text-center">
        <h1>My First Bootstrap Page</h1>
        <p>Resize this responsive page to see the effect!</p>
      </div>

      <div className="container mt-5">
        <div className="row">

          {data.map((val,ind)=>(
            <div className="col-sm-4" key={ind}>
              <ProfileCard details={val} />
            </div>
          ))}
          
        </div>
      </div>
    </>
  );
};
export default BootstrapComponent;
