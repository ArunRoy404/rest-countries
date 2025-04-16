import React, { useState } from 'react';
import { use } from 'react';
import Country from './Country';

const Countries = ({ fetchCountries }) => {
    const countries = use(fetchCountries)
    
    const [visitedCountries, setVisitedCountries] = useState([])

    const handleVisitedCountries = (country) =>{
        setVisitedCountries([...visitedCountries, country])    
    }

    const handleNotVisitedCountries = (country) =>{
        const newVisitedCountries = visitedCountries.filter(c=> c.cca3!=country.cca3)
        setVisitedCountries(newVisitedCountries)
    }
    


    return (
        <div className='h-[80vh]'>
            <div>
                <h2 className='text-2xl font-bold'>Visiting Countries: {countries.length - 1}</h2>
                <h3 className='text-xl font-bold'>Visited so far: </h3>

            </div>

            {/* container  */}
            <div className='grid grid-cols-4 gap-2'>
                <div>
                    {/* visited container */}
                    <div className='h-[30vh] mt-5 overflow-auto'>
                        <ol className='list-decimal pl-7 mt-1 h-full'>
                            {
                                visitedCountries.map(country=> <li className='font-bold' key={country.cca2} >{country.name.common}</li>)
                            }
                        </ol>
                    </div>

                    {/* flag container  */}
                    <div className='h-[40ch] mt-5 overflow-auto'>
                        <div className='flex flex-wrap gap-2'>
                            {
                                visitedCountries.map((country, index)=><img key={index} className='h-10' src={country.flags.png}></img>)
                            }
                        </div>
                    </div>
                </div>

                {/* country container  */}
                <div className='h-[70vh] col-span-3 grid grid-cols-3 gap-8 mt-6 border p-3 overflow-auto'>
                    {
                        // countries.map(country => (country.name.common.toLowerCase()=='israel'.toLowerCase()) || <Country visitedCount={visitedCount} setVisitedCount={setVisitedCount} key={country.cca3} country={country}></Country>)
                        countries.map(country => {
                            return (country.name.common.toLowerCase() == 'israel'.toLowerCase()) ||
                                <Country
                                    handleVisitedCountries={handleVisitedCountries}
                                    handleNotVisitedCountries={handleNotVisitedCountries}
                                    key={country.cca3}
                                    country={country}>
                                </Country>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Countries;