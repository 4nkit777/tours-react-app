import React from 'react';
import Tour from './Tour';

export default function Tours({ tours, removeTour }) {
    return (
        <section className='container text-center mt-5'>
            <div>
                <h2 className='mb-5'>Our Tours</h2>

            </div>
            <div>
                {tours.map((tour) => {
                    return <Tour key={tour.id} {...tour} removeTourProp={removeTour} />
                })}
            </div>
        </section>
    );
}