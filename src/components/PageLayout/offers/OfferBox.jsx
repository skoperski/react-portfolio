export const OfferBox = ({ name, isNew }) => {
  return isNew ? (
    <li className="box">
      {name}
      <p>(nowość)</p>
      <div className="box-decoration"></div>
    </li>
  ) : (
    <li className="box">{name}</li>
  );
};
