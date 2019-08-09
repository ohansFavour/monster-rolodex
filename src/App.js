import React , {Component} from 'react';
import CardList from "./components/card-list/card-list.component"
import {SearchBox} from "./components/search-box/search-box.component"
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state={
      monsters:[],
      searchField:""
    }
    
  }
    handleChange=(event)=>{
     this.setState({
        searchField: event.target.value 
        })
    }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users=> this.setState({
      monsters: users
    })
    )
    
  }
  render(){
    const {monsters, searchField} = this.state;
    const filteredMonsters= monsters.filter(monster=>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return(
      <div className="App">
         <h1>Monster Rolexo</h1>
         <SearchBox
         placeholder="search for monster"
         handleChange= {this.handleChange}
         />
      <CardList monsters={filteredMonsters}/>
     { filteredMonsters.length < 1? <h2>NO MATCHES!</h2>: ""}
      
      
      {/* The second input to this.setState method is a callback function */}
      {/* {each time the setState is called, the render func is re- rendered}  */}
     </div>
     
     
    );
  }

}

export default App;
