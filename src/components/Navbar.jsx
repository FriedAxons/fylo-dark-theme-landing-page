const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="icon">
        <img src="/images/logo.svg" alt="Logo" />
      </div>
      <div className="navButtons">
        <button className="navButton">Features</button>
        <button className="navButton">Team</button>
        <button className="navButton">Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
