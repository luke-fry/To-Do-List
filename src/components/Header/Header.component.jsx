import React from 'react'
import './Header.styles.scss'

const Header = ({showForm}) => {
    return (
        <header>
            <div className="row">
                <div className="col-6">
                    <h1>To Do Lists</h1>
                </div>
                <div className="col-6 d-flex justify-content-end">
                    <button onClick={showForm} className="btn btn-primary">Add Item</button>
                </div>
            </div>
        </header>
    )
}
export default Header;