import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';



export default function ConfirmModal(props) {

    const [name, setName] = useState();

    const del = () => {
        if (props.todo.name === name) {
            setName('');
            props.closeModal();
            props.todoRemove(props.todo)
        } else {
            setName('');
        }
    };

    return (
        <Modal {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header>
                <Modal.Title>Delete Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>Enter <strong>"{props.todo.name}"</strong> to remove ToDo</div>
                <input type="text" class="form-control" id="nameToDo" value={name} onChange={(e) => setName(e.target.value)} />
            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-danger" disabled={name !== props.todo.name} onClick={() => del()}>
                    Delete
          </button>
                <button className="btn btn-secondary" onClick={() => props.closeModal()}>
                    Close
          </button>
            </Modal.Footer>


        </Modal>
    )
}
