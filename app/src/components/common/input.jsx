import React from "react";

const Input = ({name, label, error, ...rest}) => {
    return (
        <div>
            <div className="form-group">
                <strong><label htmlFor={name}>{label}</label></strong>
                <input {...rest} name={name} id={name} className="form-control"/>
            </div>
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
};

export default Input;
