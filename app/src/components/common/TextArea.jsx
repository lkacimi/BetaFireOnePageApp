import React from "react";

const TextArea = ({name, label, error, ...rest}) => {
    return (
        <div>
            <div className="form-group">
                <strong><label htmlFor={name}>{label}</label></strong>
                <textarea {...rest} name={name} id={name} className="form-control"></textarea>
            </div>
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
};

export default TextArea;