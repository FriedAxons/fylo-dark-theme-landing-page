import Button from "./Button";

const EmailSignup = () => {
  return (
    <div className="email-signup-container">
      <h1>Get early access today</h1>
      <p>
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>
      <form className="form">
        <input type="email" id="email" placeholder="email@example.com" />
        <Button text="Get Started For Free" />
      </form>
    </div>
  );
};

export default EmailSignup;
