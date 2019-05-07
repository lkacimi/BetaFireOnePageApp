import React from "react";

const Modal = ({id = 'summary-modal', title, content, onCancel, onConfirm}) => {

    return (
        <div id={id} className="modal fade" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{title}</h5>
                        <button type="button" className="close">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {content}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onCancel}>Cancel</button>
                        <button type="button" className="btn btn-primary" onClick={onConfirm}>Confirm</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;

