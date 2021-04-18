import { useState } from 'react'

import './AddItemForm.styles.scss'

const AddItemForm = ({ onAdd }) => {
    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
    
        if (!text) {
            alert('Please add a task')
            return
        }

        onAdd(text);

        setText('');
    }

    return (
        <div className='add-item-form'>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="todo">To Do</label>
                    <input type="text" name="todo" placeholder="e.g. Buy Milk, Go to dentist" value={text} onChange={(e) => setText(e.target.value)} />
                </div>

                <input type="submit" value="Add Item" className="btn btn-secondary" />
            </form>
        </div>
    )
}
export default AddItemForm;