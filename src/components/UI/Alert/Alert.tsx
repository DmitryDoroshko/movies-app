import React from "react";

type AlertProps = {
    title: string;
}

const Alert = ({title}: AlertProps) => {
    return (<div className="notification is-warning">
        <strong>{title}</strong>
    </div>)
}

export default Alert;