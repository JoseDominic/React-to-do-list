import React, { Component } from 'react'
import PropTypes from 'prop-types'; //defining structure of component props (not required..but good practice)

export class ToDoItem extends Component {

    getStyle = () =>{
        //console.log(this.todo);
        return(   
        {
            textDecoration:this.props.todo.finished?'line-through':'none',
            padding:'10px',
            backgroundColor:'white',
        }
        )
    }
    render() {
        const {id,title} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <ul>
                <input type='checkbox'  onChange={this.props.markComplete.bind(this,id)}></input>
                {title}
                <button className="btn btn-danger" onClick={this.props.delItem.bind(this,id)}>X</button>
                </ul>
            </div>
        )
    }
}

//proptypes
ToDoItem.propTypes ={
    todo:PropTypes.object.isRequired        
}
export default ToDoItem
