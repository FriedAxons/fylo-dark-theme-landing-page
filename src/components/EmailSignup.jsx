import { useState } from "react";
import Button from "./Button";

const EmailSignup = () => {
  // State to store the email input value
  const [email, setEmail] = useState("");

  // State to control the visibility of the error message
  const [error, setError] = useState(false);

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload

    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email) || email.trim() === "") {
      // If email is invalid, set error state to true
      setError(true);
    } else {
      // If the error is valid, hide the error message and handle form submission
      setError(false);
      console.log("Form submitted with email:", email);
    }
  };

  return (
    <div className="email-signup-container">
      <h1>Get early access today</h1>
      <p>
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          id="email"
          placeholder="email@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="emailInput"
        />
        {error && (
          <p className={"error-message visible"}>
            Please enter a valid email address
          </p>
        )}
        <Button text="Get Started For Free" size="smallerButton" />
      </form>
    </div>
  );
};

export default EmailSignup;
