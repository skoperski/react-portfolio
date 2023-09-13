import "../styles/main-home.css";

export const Home = () => {
  return (
    <div className="home-body">
      <header className="home-header">WELCOME TO MY PORTFOLIO</header>
      <main className="home-main">
        <div className="first-section home-main-border">
          <p className="home-item">Home Budget</p>
          <p className="home-item">Currency Converter</p>
          <p className="home-item">Page Layout</p>
          <p className="home-item">Testing Things</p>
        </div>
        <div className="second-section home-main-border">
          <p className="home-item">Home Budget</p>
          <p className="home-item">Currency Converter</p>
          <p className="home-item">Page Layout</p>
          <p className="home-item">Testing Things</p>
        </div>
      </main>
    </div>
  );
};
