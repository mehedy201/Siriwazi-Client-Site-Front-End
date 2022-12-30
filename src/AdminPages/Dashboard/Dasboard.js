import React from 'react';

const Dasboard = () => {
    return (
        <div className='pr-2'>
            <div className='md:grid grid-cols-3 gap-4'>
                <div className='bg-[#8f0909] p-3'>
                    <p className='for_font_family text-white font-bold text-xl border-b'>Total Post About Person</p>
                    <p className='for_font_family text-white font-bold text-xl mt-2'>100 </p>
                </div>
                <div className='bg-[#8f0909] p-3'>
                    <p className='for_font_family text-white font-bold text-xl border-b'>Total Post About Organizatin</p>
                    <p className='for_font_family text-white font-bold text-xl mt-2'>100 </p>
                </div>
                <div className='bg-[#8f0909] p-3'>
                    <p className='for_font_family text-white font-bold text-xl border-b'>Total Post About Product/Service</p>
                    <p className='for_font_family text-white font-bold text-xl mt-2'>100 </p>
                </div>
            </div>
        </div>
    );
};

export default Dasboard;