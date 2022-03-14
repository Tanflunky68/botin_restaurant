/* import { Component } from 'react'; */
import { useState,useEffect } from 'react';
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';
import logo from './logo.svg';
import './App.css';

const App = ()=> {

  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonster] = useState(monsters);
  
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) =>  response.json())
    .then((users) => setMonsters(users));
  }, [])

  useEffect(() => { 
    const newFilteredMonsters = monsters.filter((monsters)=>{
      return monsters.name.toLocaleLowerCase().includes(searchField);
    });
    
    setFilteredMonster(newFilteredMonsters);

  },[monsters,searchField])

  
  const onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    setSearchField(searchField);
  }



  return (
    <div className="App">
      <h1 className='app-title'>Monster rolodex</h1>
      <SearchBox onChangeHandler = {onSearchChange} placeholder = 'search monster' className='monster-search-box'/>
      <CardList monsters={filteredMonsters}/>
    </div>
  );

}

/* 
class App extends Component{

  constructor() {
    super();

    this.state = {
      monsters:[],
      searchField: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) =>  response.json())
      .then((users)=>this.setState(()=>{
          return {monsters:users}
      })
    );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
       this.setState (()=> {
         return {searchField};
    });
  }


  render() {

    const {monsters,searchField} = this.state;
    const {onSearchChange} = this;
    const filteredMonsters = this.state.monsters.filter((monsters)=>{
      return monsters.name.toLocaleLowerCase().includes(this.state.searchField);
    });


    return <div className="App">
      <h1 className='app-title'>Monster rolodex</h1>
      <SearchBox onChangeHandler = {onSearchChange} placeholder = 'search monster' className='monster-search-box'/>
      <CardList monsters={filteredMonsters}/>
    </div>;
  }
 
}
*/
export default App;
