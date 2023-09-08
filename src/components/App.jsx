import { Route, Routes } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Home } from "./Home";
import { TestingThings } from "./TestingThings/TestingThings";
import { PageLayout } from "./PageLayout/PageLayout";
import { CurrencyConverter } from "./CurrencyConverter/CurrencyConverter";
import { HomeBudget } from "./HomeBudget/HomeBudget";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homebudget" element={<HomeBudget />} />
        <Route path="/currencyconverter" element={<CurrencyConverter />} />
        <Route path="/pagelayout" element={<PageLayout />} />
        <Route path="/testingthings" element={<TestingThings />} />
      </Routes>
    </>
  );
}

export default App;
