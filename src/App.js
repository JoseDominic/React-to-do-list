import React from 'react';
import ToDoList from './components/ToDoList';
import './components/layout/Header';
import Header from './components/layout/Header';
import About from './components/pages/About';
import uuid from 'uuid'; //used to generate random ids for testing
import {BrowserRouter as Router,Route} from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  //state can be used to define values for a component
  state = {
    todos:[
        
    ]
}

  markComplete = (id) => {
    this.setState({
      todos:this.state.todos.map((todo) => {
        if(todo.id===id){
          todo.finished=!todo.finished;
        }
        return todo;
      })
    })
  }

  delItem = (id) => {
    //... is called spread operator.Used to copy values instead of refering to array
    this.setState({
      todos:[...this.state.todos.filter((todo) => todo.id!==id)
    ]})
  }

  addToDo = (title) => {
    //console.log(title);
    const newToDo = {
      id:uuid.v4(),
      title,
      finished:false
    };
    this.setState({
      todos:[...this.state.todos,newToDo]
    })
  }

  render(){
    return (
      //BrowserRouter(Router) and Route is used to define different routes 
      <Router>
        <div className="container">
          <Header/>
          <Route exact path='/' render={
            props => (
            <ToDoList todos={this.state.todos}
            markComplete={this.markComplete}
            addToDo={this.addToDo}
              delItem={this.delItem}/>
          )} />

          <Route exact path='/about' component={About}></Route>
          
        </div>
      </Router>
  );
  
}

}

export default App;
