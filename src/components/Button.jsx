const Button = ({ text, size }) => {
  return <button className={`button ${size}`}>{text}</button>;
};

export default Button;
