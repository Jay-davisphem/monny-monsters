import { useState, useEffect, Component } from "react";

import "./App.css";
import { CardList } from "./components/card-list/CardList";
import { SearchBox } from "./components/search/SearchBox";
function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    console.info(searchField);
  }, [searchField]);

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );
  return (
    <div className="App">
      <p className='bio'>Made with love by <a href='https://davisphem.me'>davisphem</a></p>
      <h1>Monny Monster</h1>
      <SearchBox onChange={handleChange} />
      <CardList monsters={filteredMonsters} />
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
