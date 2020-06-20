import React, { useState } from 'react';
import Header from './Header';
import TodoList from './TodoList';
import AddItem from './AddItem';

import { useSelector, useDispatch } from 'react-redux'
import modalAction from '../actions/modal.action';


const Dashboard = () => {
    const { open } = useSelector(state => state.modal)
    const dispatch = useDispatch()

    const handleShow = () => {
        dispatch(modalAction.openModal())
    }
    return (
        <div>
            <Header />
            <TodoList />
            <div className='row d-flex mt-5 justify-content-center'>
                <button type="button" className="btn btn-success" onClick={handleShow}>Add Items</button>
            </div>
            <AddItem />
        </div>
    )
}


export default Dashboard;