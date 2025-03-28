import React from 'react';

const Country = ({ country }) => {
    // console.log(country.independent)
    return (
        <div className='border-1 p-3 flex flex-col justify-between bg-slate-400 drop-shadow-xl'>
            <div>
                <img className='h-30' src={country.flags.png} alt="" />
                <h2 className='mt-5 text-xl font-bold'>Country Name: {country.name.common}</h2>
                <h2 className='text-xl font-bold btn'>Independent: {country.independent ? 'Yes' : 'Not'}</h2>
            </div>
            <button className='mt-5 bg-blue-200 p-3 rounded-xm text-xl font-bold cursor-pointer hover:shadow active:translate-y-[2px] transition-transform'>
                Visit
            </button>
        </div>
    );
};

export default Country;