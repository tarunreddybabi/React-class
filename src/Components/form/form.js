import React, { useState } from 'react';

export const FormItem = () => {
  const details = {
    FirstName: "First Name:",
    LastName: "Last Name:",
    Mail: " E-Mail:",
    Gender: "Gender",
    Male: "Male",
    Female: "Female",
    Others: "Others",
    Age: "Age",
  };

  const { FirstName, LastName, Mail, Gender, Male, Female, Others, Age } = details;

  // State variables for controlled components
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');

  return (
    <form>
      <h1>Form</h1>
      <label htmlFor="fname">{FirstName}</label>
      <input
        type="text"
        className="fname"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <br />
      <br />
      <label htmlFor="name">{LastName}</label>
      <input
        type="text"
        id="lname"
        className="lname"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <br />
      <br />
      <label htmlFor="email">{Mail}</label>
      <input
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />
      <label htmlFor="gender">{Gender}</label>
      <input
        type="radio"
        id="male"
        name="gender"
        value="male"
        checked={gender === 'male'}
        onChange={() => setGender('male')}
      />
      <label htmlFor="male">{Male}</label>
      <input
        type="radio"
        id="female"
        name="gender"
        value="female"
        checked={gender === 'female'}
        onChange={() => setGender('female')}
      />
      <label htmlFor="female">{Female}</label>
      <input
        type="radio"
        name="gender"
        id="others"
        value="others"
        checked={gender === 'others'}
        onChange={() => setGender('others')}
      />
      <label htmlFor="others">{Others}</label>
      <br />
      <br />
      <label htmlFor="age">{Age}</label>
      <input
        type="number"
        min="1"
        max="100"
        name="age1"
        id="age1"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
    </form>
  );
};
