import dukaanlogo from "../assets/images/dukaanlogo.png";

const Nav = () => {
  return (
    <nav className="nav-container container">
      <div className="nav-align">
        <span className="logo-main">
          <img src={dukaanlogo} alt="dukaan-logo" className="logo-img" />
        </span>
      </div>
      <div className="nav-align gap-1">
        <p>Signin</p>
        <button className="btn-primary">Dukaan for PC</button>
      </div>
    </nav>
  );
};

export { Nav };
