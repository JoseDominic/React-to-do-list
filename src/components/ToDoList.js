import React, { Component } from 'react'
import ToDoItem from './ToDoItem';
import AddToDo from './AddToDo';
import PropTypes from 'prop-types'; //defining structure of component props(not required but good practice)

export class ToDoList extends Component {

    
    
    render() {
        //console.log(this.props.todos);
        return (
            <div>
            <AddToDo addToDo={this.props.addToDo}/>        
            <div className="container">     
              {this.props.todos.map((todo) => (
                <ToDoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delItem={this.props.delItem}/>            
              ))}  
           </div>
           
           </div>
        )
    }
   
}

//proptypes
ToDoList.propTypes ={
    todos:PropTypes.array.isRequired        
}

export default ToDoList
