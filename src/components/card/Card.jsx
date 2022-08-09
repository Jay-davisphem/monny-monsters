import "./card.css";

export const Card = ({ monster }) => {
  return (
    <div className="card-container">
      <img
        alt={`monster${monster.id}`}
        src={`https://robohash.org/${monster.id}?set=set2&size=120x120`}
      />
      <h2> {monster.name}</h2>
      <p>{monster.email}</p>
    </div>
  );
};
