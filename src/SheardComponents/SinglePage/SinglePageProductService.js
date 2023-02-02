import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const SinglePageProductService = () => {
    const {id} = useParams('')
    const [data, setData ] =useState([])
    useEffect(() => {
        fetch(`https://siriwazi-backend.onrender.com/product-service/${id}`)
            .then(res => res.json())
            .then(data => setData(data))
    },[id])
    
    return (
        <>
        <div className='py-4 bg-[#2eab27] border-t-2 border-white-500'>
            <div className='xl:max-w-[1140px] lg:max-w-[90%] md:max-w-[90%] sm:max-w-[90%] w-[95%] mx-auto'>
                <div className='py-12'>
                    <p className='text-white font-bold text-4xl for_font_family'>Full Details About {data.productServiceName}</p>
                    <div className='w-100 bg-white md:w-1/2 mt-2' style={{height: '1px'}}></div>
                </div>
            </div>
        </div> 
        <div className='xl:max-w-[1140px] lg:max-w-[90%] md:max-w-[90%] sm:max-w-[90%] w-[95%] mx-auto my-8'>
            <div className='md:flex sm:flex justify-between'>
                <p className='text-2xl font-bold'>Product/Service Name: {data.productServiceName}</p>
                <div className='mb-2'>
                    {
                        data?.postingDate && <span className='font-bold mr-3'><span className='text-slate-500'>Posted Date: </span> {data.postingDate}</span>
                    }
                    {
                        data?.postingTime && <span className='font-bold'><span className='text-slate-500'>Posted Time: </span>{data.postingTime}</span>
                    }
                </div>
            </div>
            <div className='mb-2'>
                <span className='font-bold text-sm'>Address: {data?.inputCityData}, {data?.inputStateData}, {data?.inputCountryData}</span>
            </div>
          
            {/* ______________________________ */}
            {
                data?.trueFals === 'Most likely not true' && <span className='font-semibold py-0.5 px-4 border border-red-700'>{data?.trueFals}</span>
            }
            {
                data?.trueFals === 'Most likely true' && <span className='font-semibold py-0.5 px-4 border border-green-500'>{data?.trueFals}</span>
            }
            {
                data?.trueFals === 'Maybe true' && <span className='font-semibold py-0.5 px-4 border border-amber-400'>{data?.trueFals}</span>
            }
            {/* ________________________________ */}
  
            <div className='w-100 bg-slate-300 md:w-1/2 mt-2' style={{height: '1px'}}></div>
            {/* ________________________________  */}
            <p className='font-semibold mb-2 mt-2'>Describe using Word</p>
            {
                data?.discribeWithCheck && data.discribeWithCheck.map((check, index) => <span key={index} className='border pt-0.5 pb-1 px-4 mr-2 rounded-lg'>{check}</span>)
            }
            {
                data?.companyOrganizationName && 
                <div>
                    <p className='text-xl font-semibold mt-4'>Company/Organization Name</p> 
                    <p className='text-sm fomt-bold'>{data.companyOrganizationName}</p>
                </div>
            }
            {/* ______________________________  */}
            {
                data?.date && <p className='font-semibold mb-1 mt-4'>Time of Occurrence</p>
            }
            {
                data?.date && <div><span className='font-semibold mr-2'>Date: </span><span>{data.date}</span></div>
            }
            {
                data?.time && <div><span className='font-semibold mr-2'>Time: </span><span>{data.time}</span></div>
            }
            {/* ______________________________  */}
            <p className='text-xl font-semibold mt-4'>The name of the place where it happened</p>
            {
                data?.place && <p>{data.place}</p>
            }
            <p className='text-xl font-semibold mt-4'>Details About More {data.productServiceName}</p> 
            {/* ________________________________  */}
            {
                data?.discriptionMore ? <p>{data.discriptionMore}</p> : 'No Data'
            }
        </div>
        </>
    );
};

export default SinglePageProductService;