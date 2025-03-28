import React, { useState } from 'react';

const Country = ({ country, handleVisitedCountry, handleNotVisitedCountry, handleVisitedFlags, handleNotVisitedFlags}) => {
    // console.log(country)

    const [isVisited, setIsVisited] = useState(false)

    const handleVisited = () =>{
        setIsVisited(!isVisited)
        handleVisitedCountry(country)
        handleVisitedFlags(country.flags.png)
    }

    const handleNotVisited = () => {
        setIsVisited(!isVisited)
        handleNotVisitedCountry(country)
        handleNotVisitedFlags(country.flags.png)
    }

    return (
        <div className={`border-1 p-3 flex flex-col justify-between drop-shadow-xl ${isVisited? 'bg-green-300': 'bg-slate-400'}`}>
            <div>
                <img className='h-30' src={country.flags.png} alt="" />
                <h2 className='mt-5 text-xl font-bold'>Country Name: {country.name.common}</h2>
                <h2 className='text-xl font-bold btn'>Independent: {country.independent ? 'Yes' : <span className='text-red-600'>Not</span>}</h2>
            </div>
            <button onClick={(isVisited)? handleNotVisited: handleVisited} className='mt-5 bg-blue-200 p-3 rounded-xm text-xl font-bold cursor-pointer hover:shadow active:translate-y-[2px] transition-transform'>
                {(isVisited)?'Visited': 'Visit'}
            </button>
        </div>
    );
};

export default Country;