import React from 'react';
import './SuggestedBusinesses.css';

const SuggestedBusinesses = ({ name, image, desc }) => {
  return (
    <div className='flex d-flex flex-col col-md-12 col-sm-0 box-props justify-content-start mb-2' style={{ width: "350px", height: "40px" }}>
      <div className="image">
        <img src={image} alt="" style={{ height: "90%", width: "90%",marginLeft:"5px" }} />
      </div>
      <div className="details">
        <p style={{marginLeft:"5px"}}>{name}</p>
        {/* <p>{desc}</p> */}
      </div>
    </div>
  );
}

export default SuggestedBusinesses;
