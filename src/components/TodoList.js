import React from 'react';
import TodoDetails from './TodoDetails';
import { useSelector, useDispatch } from 'react-redux';


const TodoList = () => {
    const { items } = useSelector(state => state.items) || []
    let newItems = items.sort((a, b) => b.completed - a.completed)// Sorting object onthe basis of complleted state
    return (
        <div className='row  d-flex  custom-list mr-2 ml-2'>
            {
                newItems.map((item, index) => {
                    item.index = index;
                    return <TodoDetails  {...item} />
                })
            }
        </div>
    )
}


export default TodoList;