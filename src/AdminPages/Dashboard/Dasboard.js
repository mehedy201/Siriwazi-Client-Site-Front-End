import { Spin } from 'antd';
import React, { useEffect, useState } from 'react';

const Dasboard = () => {
    // Person Data 
    let loading;
    const [persondData, setPersonData] = useState([])
    useEffect(() => {
        fetch('https://siriwazi-backend.onrender.com/personData')
        .then(res => res.json())
        .then(data => {
            setPersonData(data)
        })
    }, [])
    // Person Data 
    const [organizationData, setOrganizationData] = useState([])
    useEffect(() => {
        fetch('https://siriwazi-backend.onrender.com/organizationData')
        .then(res => res.json())
        .then(data => {
            setOrganizationData(data)
        })
    }, [])
    // Person Data 
    const [productService, setProductService] = useState([])
    useEffect(() => {
        fetch('https://siriwazi-backend.onrender.com/product-service')
        .then(res => res.json())
        .then(data => {
            setProductService(data)
        })
    }, [])
    return (
        <div className='h-screen pr-2 mt-4'>
            <div className='md:grid grid-cols-3 gap-4'>
                <div className='bg-[#8f0909] p-3'>
                    <p className='for_font_family text-white font-bold text-xl border-b'>Total Post About Person</p>
                    <p className='for_font_family text-white font-bold text-xl mt-2'>{persondData.length} </p>
                </div>
                <div className='bg-[#8f0909] p-3'>
                    <p className='for_font_family text-white font-bold text-xl border-b'>Total Post About Organizatin</p>
                    <p className='for_font_family text-white font-bold text-xl mt-2'>{organizationData.length} </p>
                </div>
                <div className='bg-[#8f0909] p-3'>
                    <p className='for_font_family text-white font-bold text-xl border-b'>Total Post About Product/Service</p>
                    <p className='for_font_family text-white font-bold text-xl mt-2'>{productService.length} </p>
                </div>
            </div>
        </div>
    );
};

export default Dasboard;