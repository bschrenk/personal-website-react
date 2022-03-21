import React from 'react';
import './Chip.scss';

function Chip({text}) {
    return ( 
        <span className='chip'>{text}</span>
     );
}

export default Chip;