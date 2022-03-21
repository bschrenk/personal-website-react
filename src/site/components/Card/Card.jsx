import React from "react";
import './Card.scss';

function Card({ title, barText, barBox, children }) {
    return (
        <div className="cardOuter">
            <h3>{title}</h3>
            <p className="cardDate">{barBox}</p>
            <h4 className="cardHead">{barText}</h4>
            {children}
        </div>
    );
}

export default Card;