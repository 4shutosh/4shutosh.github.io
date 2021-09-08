import React from 'react'

function ExpItem(props) {
    return (
        <div className="year-section">
            <div className="year">
                {props.year}
            </div>
            <div className="big">
                <div className="company">
                    {props.title}
                </div>
                <div className="profile">
                    {props.profile}
                </div>
                <div className="body">
                    {props.body}
                </div>
            </div>
        </div>
    );
}

export default ExpItem;
