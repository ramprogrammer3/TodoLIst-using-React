
import React, { Component } from 'react'

export default class TodoListItem extends Component {

    
  state = {
    itemName : "",
    todoItem : []
  }
  inputChange = (e) =>{
    this.setState({itemName : e.target.value})
  }
 addItem = () =>{
  let listItem = [...this.state.todoItem]
  listItem.push(this.state.itemName)
  this.setState({todoItem : listItem, itemName : ""})
 }
 deleteItem = (index) =>{
  let listItem = [...this.state.todoItem]
  listItem.splice(index,1);
  this.setState({todoItem : listItem});
 }
 updateItemName = (e,i) =>{
  let listItem = [...this.state.todoItem]
  listItem.splice(i,1,e.target.value)
  this.setState({todoItem : listItem})
 }
  render() {
    return (
      <div><h1>Todo list</h1>
      <input type="text" placeholder='Enter item name' onChange={this.inputChange} value = {this.state.itemName} />
      <button onClick={this.addItem}>Add item</button>
      <div >
        {this.state.todoItem.map((item,i) =>{
          return <div className='todocard' key={i}>
            <h3> {item} </h3>
            <button onClick={() =>{
              this.deleteItem(i)
            }}>Delete Item</button>
            <input type="text" placeholder='update item name'
            onChange={(e) =>{this.updateItemName(e,i)}} />
          </div> 
        })}
      </div>
      <br /><br />
      {JSON.stringify(this.state)}</div>
    )
  }
}
