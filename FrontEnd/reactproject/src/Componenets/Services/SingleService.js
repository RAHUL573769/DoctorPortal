import React from 'react';

const SingleService = (props) => {



    const {id,name,img,bgClass}=props.service;
    console.log(props.service)
    return (
        <div>
          <div className={`card w-96 bg-base-100 md:card-side shadow-xl ${bgClass}`}>
  <figure><img src={img}/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>

    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>  
        </div>
    );
};

export default SingleService;