import React from 'react';
import { use } from 'react';
import Country from './Country';

const Countries = ({ fetchCountries }) => {
    const countries = use(fetchCountries)
    return (
        <div>
            <div>
                <h2 className='text-2xl font-bold'>Visiting Countries: {countries.length}</h2>
            </div>
            <div className='grid grid-cols-3 gap-8 mt-6'>
                {
                    countries.map(country => (country.name.common.toLowerCase()=='israel'.toLowerCase()) || <Country key={country.cca3} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;