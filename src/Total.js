import React from 'react';

function Total(props) {
    return (
    <div className="summary__total">
    <div className="summary__total__label">
    Total
    </div>
        <div className="summary__total__value">
            {props.children}
        </div>
    </div>
    );
}

export default Total;

