const FormBoot = () => {
  return (
      <>
          <form action="/action_page.php">
              <div className="form-group">
                  <label htmlFor="email">Email address:</label>
                  <input type="email" className="form-control" />
              </div>
              <div className="form-group">
                  <label htmlFor="pwd">Password:</label>
                  <input type="password" className="form-control" id="pwd" />
              </div>
              <div className="checkbox">
                  <label><input type="checkbox" /> Remember me</label>
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
          </form>
      </>
  );
};

export default FormBoot;
