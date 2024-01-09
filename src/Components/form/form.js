


export const FormItem=()=>{
  const details={FirstName:"First Name:",LastName:"Last Name:",Mail:" E-Mail:",Gender:"Gender",Male:"Male",Female:"Female",Others:"Others",Age:"Age"}

  const {FirstName,LastName,Mail,Gender,Male,Female,Others,Age}=details
    return (
    <form>
      <h1>Form</h1>
      <label for="fname" id="name">{FirstName}</label>
      <input type="text" id="fname" class="fname"/><br/><br/>
      <label for="name">{LastName}</label>
      <input type="text" id="lname" class="lname"/><br/><br/>
      <label for="email">{Mail}</label>
      <input type="email" name="email" id="email"/><br/><br/>
      <label for="gender">{Gender}</label>
      <input type="radio" id="male" name="gender" value="male"/>
      <label for="male">{Male}</label>
      <input type="radio" id="female" name="gender" value="female"/>
      <label for="female">{Female}</label>
      <input type="radio" name="gender" id="others" value="others"/>
      <label for="others">{Others}</label><br/><br/>
      <label for="age">{Age}</label>
      <input type="number" min="1" max="100" name="age" id="age" value="age"/>
      </form>
    )
}

