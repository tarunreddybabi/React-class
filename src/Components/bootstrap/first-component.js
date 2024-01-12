import Card from "../card/card";

const BootstrapComponent = () => {
  return (
    <>
      <div class="container-fluid p-5 bg-primary text-white text-center">
        <h1>My First Bootstrap Page</h1>
        <p>Resize this responsive page to see the effect!</p>
      </div>

      <div class="container mt-5">
        <div class="row">
          <div class="col-sm-4">
            <Card />
          </div>
          <div className="col-sm-4">
            <Card />
          </div>
          <div class="col-sm-4">
            <Card />
          </div>
        </div>
      </div>
    </>
  );
};
export default BootstrapComponent;
