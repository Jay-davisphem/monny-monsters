import { useState, useEffect, Component } from "react";
import {Routes, BrowserRouter as Router, Route} from 'react-router-dom'
import "./App.css";
import { CardList } from "./components/card-list/CardList";
import {Card} from './components/user-profile/UserProfile'
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
      <a href='/'><h1 style={{cursor: 'pointer'}} >Monny Monster</h1></a>
      <Router>
        <Routes>
          <Route path='' element={<>
      <SearchBox onChange={handleChange} />
            <CardList monsters={filteredMonsters} /></>} />
          <Route path='monsters/:monsterId' element={monsters[0]?<Card monsters={monsters}/>: <h3 style={{fontSize: '30px'}}>Empty</h3>} />
          <Route path='*' element={<h3 style={{fontSize: '30px'}}>Not Found</h3>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
