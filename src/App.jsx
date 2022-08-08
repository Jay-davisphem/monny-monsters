import { useState, useEffect, Component } from "react";

import "./App.css";
import { CardList } from "./components/card-list/CardList";
function App() {
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setMonsters(users));
  }, []);

  return (
    <div className="App">
      <CardList monsters={monsters} />
    </div>
  );
}

/*class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
      ]
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({monsters: users}));
  }
  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => (
          <h1 key={monster.id}> {monster.name}</h1>
        ))}
      </div>
    );
  }
}*/
export default App;
