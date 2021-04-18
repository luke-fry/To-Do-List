import React from 'react'
import './ListItem.styles.scss'

const ListItem = ({listItemIndex, listItem, updateListItem}) => {
    return (
        <div className={listItem.checked ? 'todolist__item checked' : 'todolist__item'} onClick={() => updateListItem(listItem.id)} >
            <h1>{listItem.item}</h1>
            <div>
                <input type="checkbox" name="itemdone" checked={listItem.checked} onChange={() => updateListItem(listItem.id)} />
            </div>
        </div>
    )
}
export default ListItem;