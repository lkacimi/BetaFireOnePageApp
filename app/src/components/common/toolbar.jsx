import React from "react";

const ToolBar = ({title, buttons}) => {

    return <div className="btn-toolbar mb-2 mb-md-0">
        <h6 className="mr-2 mt-2">{title}</h6>
        <div className="btn-group mr-2">
            {
                buttons.map((button) => <button className={'btn btn-sm btn-outline-secondary '.concat(button.isActive ? 'active': '') }
                                                key={button.label} onClick={button.onClick} title={button.label}>
                    {button.className ? <i className={`fa ${button.className}`}></i> : null}
                    {button.label}
                </button>)
            }

        </div>
    </div>;
};

export default ToolBar;
