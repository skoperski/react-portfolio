import { OfferBox } from "./OfferBox";

const offers = [
  { name: "Oferta 1", isNew: true },
  { name: "Oferta 2", isNew: false },
  { name: "Oferta 3", isNew: false },
  { name: "Oferta 4", isNew: false },
  { name: "Oferta 5", isNew: false },
  { name: "Oferta 6", isNew: false },
];

export const Offers = () => {
  return (
    <section className="offer" id="offer">
      <div className="wrapper">
        <h1 className="offer-h1">Czym zajmuje się nasza firma?</h1>
        <ul className="boxes">
          {offers.map(({ name, isNew }, index) => {
            return <OfferBox name={name} isNew={isNew} key={index} />;
          })}
        </ul>
      </div>
    </section>
  );
};
