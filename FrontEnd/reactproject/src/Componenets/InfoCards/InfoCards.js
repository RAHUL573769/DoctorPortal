import React from 'react';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
import SingleCard from './SingleCard';

const InfoCards = () => {


    const cardData=[

        {
            id:1,
            name:'Opening Hours',
            icon:clock,
            bgClass:"bg-primary"
        },
        {
            id:2,
            name:'Opening Hours',
            icon:marker,
            bgClass:"bg-accent"
        },
        {
            id:3,
            name:'Opening Hours',
            icon:phone,
            bgClass:"bg-primary"
        },
    ]
    return (


        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                cardData.map(card=><SingleCard card={card}></SingleCard>)
            }
        </div>
    );
};

export default InfoCards;