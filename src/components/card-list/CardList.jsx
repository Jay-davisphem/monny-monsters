import { Card } from "../card/Card";
import WithSpinner from '../with-spinner/WithSpinner'
import "./card-list.css";
import {useNavigate} from 'react-router-dom'
export const CardList = WithSpinner(({ monsters }) => {
  const navigate = useNavigate()
  return (
    <div className="card-list">
      {monsters.map((monster) => (
        <Card key={monster.id} monster={monster} onClick={() => navigate(`/monsters/${monster.id}`)}/>
      ))}
    </div>
  );
})
