import React from 'react';

const Event = ({event}) => {
    console.log(event);

    const handleDelete = (id) =>{

    }

    return (
        <div className="col-md-3">
            <img style={{height:'250px'}} src={event.imageUrl} alt=""/>
            <h3>{event.name} <button onClick={() => handleDelete(event._id)}>Delete</button></h3>
        </div>
    );
};

export default Event;