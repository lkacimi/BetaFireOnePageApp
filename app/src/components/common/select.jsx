import React from "react";

const Select = ({name, label, options, error, ...rest}) => {
    return (
        <div>
            <div className="form-group">
                <strong><label htmlFor={name}>{label}</label></strong>
                <select name={name} id={name} {...rest} className="form-control">
                    <option value=""/>
                    {options.map(option => (
                        <option key={option.id} value={option.id}>
                            {option.name}
                        </option>
                    ))}
                </select>
            </div>
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
};

export default Select;
