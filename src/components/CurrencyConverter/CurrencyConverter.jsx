import { Currencies } from "./Currencies";
import { Header } from "./Header";
import "../../styles/currency-converter.css";

export const CurrencyConverter = () => {
  return (
    <>
      <div className="converter-body">
        <Header />
        <section className="converter__wrapper" id="section">
          <Currencies />
        </section>
      </div>
    </>
  );
};
