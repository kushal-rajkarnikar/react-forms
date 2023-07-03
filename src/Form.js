import React from "react";

export default function Form() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
  });

  function handleChange(event) {
    console.log(event.target.value);

    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });

    console.log(formData);
  }

  return (
    <form>
      <input
        type="text"
        placeholder="First Name"
        name="firstName"
        onChange={handleChange}
        value={formData.firstName}
      />

      <input
        type="text"
        placeholder="Last Name"
        name="lastName"
        onChange={handleChange}
        value={formData.LastName}
      />

      <input
        type="email"
        placeholder="Email Address"
        name="emailAddress"
        onChange={handleChange}
        value={formData.emailAddress}
      />
    </form>
  );
}
