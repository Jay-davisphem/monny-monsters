import './card-list.css'
export const CardList = ({monsters}) => {
  return <div className='card-list'>
    {monsters.map((monster) => (
          <h1 key={monster.id}> {monster.name}</h1>
        ))}
    </div>
}
