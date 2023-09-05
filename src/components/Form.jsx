import { useState } from "react";

function Form() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    fName: false,
    lName: false,
    email: false,
    password: false,
  });

  const emailValidation =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const strValidation = /^.{3,}$/;

  const handleChange = (event) => {
    setState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!strValidation.test(state.firstName)) {
      setError((error) => ({
        ...error,
        fName: !error.fName,
      }));
    }
    if (!strValidation.test(state.lastName)) {
      setError((error) => ({
        ...error,
        lName: !error.lName,
      }));
    }
    if (!strValidation.test(state.password)) {
      setError((error) => ({
        ...error,
        password: !error.password,
      }));
    }
    if (!emailValidation.test(state.email)) {
      setError((error) => ({
        ...error,
        email: !error.email,
      }));
    }

    console.log(error);
  };

  return (
    <div className="FormBox">
      <div className="FormBox-Trial">
        <p>
          <span>Try it free 7 days</span> then $20/mo. thereafter
        </p>
      </div>

      <form
        action="#"
        method="POST"
        className="FormBox-Form"
        onSubmit={handleSubmit}
      >
        <label htmlFor="f-name" className={error.fName ? "error" : ""}>
          <input
            type="text"
            name="firstName"
            id="f-name"
            placeholder="first name"
            onChange={handleChange}
            value={state.firstName}
          />
          {error.fName && (
            <p className="FormBox-Form-error">First Name cannot be empty</p>
          )}
        </label>
        <label htmlFor="l-name" className={error.lName ? "error" : ""}>
          <input
            type="text"
            name="lastName"
            id="l-name"
            placeholder="last name"
            onChange={handleChange}
            value={state.lastName}
          />
          {error.lName && (
            <p className="FormBox-Form-error">Last Name cannot be empty</p>
          )}
        </label>
        <label htmlFor="email" className={error.email ? "error" : ""}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email address"
            onChange={handleChange}
            value={state.email}
          />
          {error.email && (
            <p className="FormBox-Form-error">
              Looks like this is not an email
            </p>
          )}
        </label>
        <label htmlFor="password" className={error.password ? "error" : ""}>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            onChange={handleChange}
            value={state.password}
          />
          {error.password && (
            <p className="FormBox-Form-error">Password cannot be empty</p>
          )}
        </label>
        <input
          type="submit"
          className="FormBox-Form-Btn"
          value="claim your free trial"
        />
        <p className="FormBox-Form-Terms">
          By clicking the button, you are agreeing to our
          <a href="#">Terms and Services</a>
        </p>
      </form>
    </div>
  );
}
export default Form;
