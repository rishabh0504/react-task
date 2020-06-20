import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector, useDispatch } from "react-redux";
import modalAction from "../actions/modal.action";
import itemAction from "../actions/item.action";

function AddItem() {
    const { open } = useSelector((state) => state.modal);
    const [item, setItem] = useState(null)
    const [comment, setComment] = useState(null);


    const dispatch = useDispatch();

    const handleClose = () => {
        setItem('')
        setComment('')
        dispatch(modalAction.closeModal());
    };
    const saveItem = () => {
        dispatch(itemAction.addItem({ item, comment, completed: false }));
        setItem('')
        setComment('')
        dispatch(modalAction.closeModal());
    };
    const itemNameHandler = (event) => {
        setItem(event.target.value)
    }
    const itemCommentHandler = (event) => {
        setComment(event.target.value)
    }

    return (
        <>
            <div className="d-flex">
                <Modal show={open} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add New Item</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="co-lg-12 col-md-12 col-sm-12 col-xs-12 mt-3 mb-3">
                            <input
                                type="text"
                                placeholder="Item Name"
                                className="form-control"
                                value={item}
                                onChange={itemNameHandler}
                            />
                        </div>
                        <div className="co-lg-12 col-md-12 col-sm-12 col-xs-12 mb-3">
                            <textarea
                                className="form-control"
                                rows="3"
                                placeholder="Comment"
                                value={comment}
                                onChange={itemCommentHandler}
                            ></textarea>
                        </div>

                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="light" onClick={handleClose}>Cancel</Button>
                        <Button variant="primary" onClick={saveItem}>Save</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    );
}

export default AddItem;
