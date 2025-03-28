import React, { useState } from 'react';
import { use } from 'react';
import Country from './Country';

const Countries = ({ fetchCountries }) => {
    const countries = use(fetchCountries)


    const [visitedCountries, setVisitedCountries] = useState([])


    const handleVisitedCountry = (country) => {
        setVisitedCountries([...visitedCountries, country])
    }

    const handleNotVisitedCountry = (country) => {
        const newVisitedCountries = visitedCountries.filter(c => c !== country)
        setVisitedCountries([...newVisitedCountries])
    }


    return (
        <div>
            <div>
                <h2 className='text-2xl font-bold'>Visiting Countries: {countries.length - 1}</h2>
                <h3 className='text-xl font-bold'>Visited so far: {visitedCountries.length}</h3>
                <ol>
                    {
                        visitedCountries.map(country => <li key={country.cca2}>{country.name.common}</li>)
                    }
                </ol>
            </div>
            <div className='grid grid-cols-4 gap-8 mt-6'>
                {
                    // countries.map(country => (country.name.common.toLowerCase()=='israel'.toLowerCase()) || <Country visitedCount={visitedCount} setVisitedCount={setVisitedCount} key={country.cca3} country={country}></Country>)
                    countries.map(country => {
                        return (country.name.common.toLowerCase() == 'israel'.toLowerCase()) ||
                            <Country
                                handleVisitedCountry={handleVisitedCountry}
                                handleNotVisitedCountry={handleNotVisitedCountry}
                                key={country.cca3}
                                country={country}>
                            </Country>
                    })
                }
            </div>
        </div>
    );
};

export default Countries;