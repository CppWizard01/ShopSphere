import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">ShopSphere</div>

      <ul className="nav-links">
        <li className="nav-item"><a href="/">Home</a></li>
        <li className="nav-item"><a href="/">Products</a></li>
        <li className="nav-item"><a href="/">About</a></li>
        <li className="nav-item"><a href="/">Contact</a></li>
      </ul>

      <div className="login">
        <button className="login-button">Login</button>
      </div>
    </nav>
  );
}

export default Navbar;
