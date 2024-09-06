import logo from "../src/assets/airbnb-logo.svg";

function Navbar() {
  return (
    <nav>
      <img src={logo} className="site-logo" width="50px" />
      <h1>Heading Component from Navbar</h1>
    </nav>
  );
}

export default Navbar;
