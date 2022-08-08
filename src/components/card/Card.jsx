import "./card.css";

export const Card = ({ monster }) => {
  return (
    <div className='card-container'>
      <h1> {monster.name}</h1>
    </div>
  );
};
