


const FormItem=()=>{
    return (
    <form>
      <h1>Form</h1>
      <label for="fname" id="name">First Name:</label>
      <input type="text" id="fname" class="fname"/><br/><br/>
      <label for="name">Last Name:</label>
      <input type="text" id="lname" class="lname"/><br/><br/>
      <label for="email">Email:</label>
      <input type="email" name="email" id="email"/><br/><br/>
      <label for="gender">Gender:</label>
      <input type="radio" id="male" name="gender" value="male"/>
      <label for="male">Male</label>
      <input type="radio" id="female" name="gender" value="female"/>
      <label for="female">Female</label>
      <input type="radio" name="gender" id="others" value="others"/>
      <label for="others">Others</label><br/><br/>
      <label for="age">Age:</label>
      <input type="number" min="1" max="100" name="age" id="age" value="age"/>
      </form>
    )
}

export default FormItem