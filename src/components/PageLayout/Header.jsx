export const Header = () => {
  return (
    <header>
      <div className="header-div">
        <img
          src="https://images.unsplash.com/photo-1653924136342-fe13fe61b804?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2075&q=80"
          alt="city"
        />
      </div>
      <div className="header-img-cover"></div>
      <div className="wrapper">
        <div className="header-img-content">
          <div className="header-content">
            <h1 className="header-h1">
              Nasza firma oferuje najwyższej jakości produkty.
            </h1>
            <h2 className="header-h2">Nie wierz nam na słowo - sprawdź</h2>
            <a href="#offer" className="header-btn">
              <div>oferta</div>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
