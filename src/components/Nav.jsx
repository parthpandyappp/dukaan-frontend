import logo from "../assets/images/logo.png";

const Nav = () => {
  return (
    <nav className="nav-container container">
      <div className="nav-align">
        <span className="logo-main">
          <img src={logo} alt="dukaan-logo" className="logo-img" />
        </span>
        <h3>dukaan</h3>
      </div>
      <div className="nav-align gap-1">
        <p>Signin</p>
        <button className="btn-primary">Dukaan for PC</button>
      </div>
    </nav>
  );
};

export { Nav };
