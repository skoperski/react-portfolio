export const Navbar = () => {
  return (
    <div className="nav-div">
      <div className="wrapper">
        <nav className="nav-bar">
          <div className="nav-container">
            <a href="" className="nav-brand">
              moja firma
            </a>
            <div className="nav-links">
              <ul className="nav-list">
                <li>
                  <a className="nav-link" href="#about">
                    o nas
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#offer">
                    oferta
                  </a>
                </li>
                <li className="nav-contact">
                  <a className="nav-link nav-contact-disable" href="">
                    kontakt
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
