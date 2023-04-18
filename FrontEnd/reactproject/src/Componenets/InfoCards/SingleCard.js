import React from 'react';

const SingleCard = (props) => {

    const{name,icon,bgClass}=props.card;
    return (
        <div>
            <div className={`m-6 rounded-2xl	p-2m card-compact w-96 bg-base-100 shadow-xl ${bgClass}`}>
  <figure><img src={icon} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default SingleCard;