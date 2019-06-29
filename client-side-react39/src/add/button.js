import React from 'react';

function Addbutton(props) {
    return (
        <div className='btn-area'>
            <div className='row'>
                <div className='col-btn'>
                    <button className='btn-add hint--right hint--rounded hint--warning' aria-label="Add Data to Table" onClick={props.addClick}><i className="fas fa-plus"></i></button>
                </div>
            </div>
        </div>
    )
}

export default Addbutton