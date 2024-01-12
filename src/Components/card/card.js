import "./external.css";

const Card = () => {
  return (
    <div className="card1">
      <div className="content1">
        <h2 className="m1">Mountain</h2>
        <img
          className="card-img1"
          src="https://plus.unsplash.com/premium_photo-1698405316329-fd9c43d7e11c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D"
          alt="card"
        />

        <p className="para1">
          Mountains are large landforms that rise prominently above their
          surroundings,
          <br /> typically having a peak or summit. They are a significant
          feature of the Earth's topography and can be found on every continent.
          Mountains are formed through various geological processes, including
          tectonic plate movements, volcanic activity, and erosion.
        </p>
        <button className="btn12">Download</button>
        <p className="space"></p>
      </div>
    </div>
  );
};

export default Card;
