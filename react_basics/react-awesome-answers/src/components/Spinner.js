import React from 'react';
import "./Spinner.css"

export default function Spinner(props) {
    return (
        <div className="spinnerContainer" style={{ display: props.show ? "block" : "none" }}>
            <div className="loader">Loading...</div>
        </div>
    )
}
