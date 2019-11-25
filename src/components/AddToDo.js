import React, { Component } from 'react'

export class AddToDo extends Component {
    state = {
        title:''
    }

    onChange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value //e.target refers to the element that called trigered onchange event
        })
    }

    onSubmit = (e) =>{
        e.preventDefault();
        this.props.addToDo(this.state.title);
        this.setState({title:''});
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
               <div className="form-group">
                   <input name="title" type="text" value={this.state.title}
                   className="form-control" 
                   onChange={this.onChange}
                   placeholder="Add to do.."></input>
               </div>
               <button type="submit" className="btn btn-secondary">Add</button>
           </form>
        )
    }
}

export default AddToDo
