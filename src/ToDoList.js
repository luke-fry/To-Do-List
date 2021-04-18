import React from 'react'
import Header from './components/Header/Header.component'
import AddItemForm from './components/AddItemForm/AddItemForm.component'
import ListBlock from './components/ListBlock/ListBlock.component'
import Footer from './components/Footer/Footer.component'

class ToDoList extends React.Component {
  constructor() {
    super();
    this.state = {
      showAddItemForm: false,
      toDoList: [
        {
          id: 1,
          item: "Buy Coffee",
          checked: true
        },
        {
          id: 2,
          item: "Buy Milk",
          checked: false
        },
        {
          id: 3,
          item: "Make Coffee",
          checked: false
        }
      ]
    };
  }

  updateListItem = (id) => {
    const { toDoList} = this.state;

    // Get specific object based on id parameter
    const obj = toDoList.find(item => item.id === id);

    // Field to be updated
    const temp_checked = !obj.checked;

    /**
     * Update toDoList
     * Preserve current list,
     * update checked with temp_checked
     */
    this.setState(prevState => ({
      toDoList: prevState.toDoList.map(
        item => item.id === id? { ...item, checked: temp_checked }: item
      )
    }))
  }

  displayAddItemForm = () => {
    const { showAddItemForm } = this.state;
    this.setState({showAddItemForm: !showAddItemForm});
  }

  addItem = (e) => {
    console.log(e)
  }
  
  render() {
    return (
      <div className="ToDoList">
        <Header showForm={this.displayAddItemForm} />
        {this.state.showAddItemForm && <AddItemForm onAdd={this.addItem}/>}
        <ListBlock toDoList={this.state.toDoList} updateListItem={this.updateListItem} />
        <Footer />
      </div>
    )
  }
}

export default ToDoList;
