import React from 'react'
import ListItem from '../ListItem/ListItem.component'

const ListBlock = ({toDoList, updateListItem}) => {
    return (
        <div className="todolist">
            { toDoList.map((listItem, index) => (
                <ListItem key={index} listItemIndex={index} listItem={listItem} updateListItem={updateListItem} />
            ))}
            
        </div>
    )
}
export default ListBlock;