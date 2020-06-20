
import React from 'react';
import { useDispatch } from 'react-redux';
import itemAction from '../actions/item.action';
import 'font-awesome/css/font-awesome.min.css';

const TodoDetails = (props) => {
    const dispatch = useDispatch()

    const toggleTaskCompleted = (index) => {
        dispatch(itemAction.updateItemStatus(index))
    }
    return (
        <>
            <div className='col-lg-3 col-md-3 col-sm-12 col-xs-12 mt-3 mb-3'>
                <div className="card" >
                    <div className={props.completed ? 'card-body custom-card-success wave' : 'card-body custom-card-warning wave'} onClick={() => { toggleTaskCompleted(props.index) }}>
                        <p className='  mb-2'><b>Item Name: </b> &nbsp;&nbsp;{props.item}</p>
                        <p className='  mb-2'><b>Comment: </b>&nbsp;&nbsp; {props.comment}</p>
                        <p className='  mb-2'><b>Status: </b>&nbsp;&nbsp; {props.completed ? 'Completed' : 'Pending'}</p>
                    </div>
                </div>
            </div>
        </>
    )
}


export default TodoDetails;
