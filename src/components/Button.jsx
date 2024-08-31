const Button = ({ text, size }) => {
  return (
    <button type="submit" className={`button ${size}`}>
      {text}
    </button>
  );
};

export default Button;
