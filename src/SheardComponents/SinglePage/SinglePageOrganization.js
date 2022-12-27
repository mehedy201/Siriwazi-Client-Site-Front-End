import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TimeAgo from 'javascript-time-ago'
// // English Time______________________________
import en from 'javascript-time-ago/locale/en'

TimeAgo.addLocale(en);

const SinglePageOrganization = () => {
    const {id} = useParams('')

    // Create formatter (English)._______________________________
    const timeAgo = new TimeAgo('en-US')


    const [data, setData ] =useState([])
 
    useEffect(() => {
        fetch(`http://localhost:5000/organizationData/${id}`)
            .then(res => res.json())
            .then(data => setData(data))
    },[])

    return (
        <div className='xl:max-w-[1140px] lg:max-w-[90%] md:max-w-[90%] sm:max-w-[90%] w-[95%] mx-auto my-8'>
            <div className='py-8 for_shadow_css mb-4 p-4 rounded-lg'>
                <p className='font-bold text-4xl for_font_family'>Full Details About an Organization</p>
                <div className='w-100 bg-[#d4d4d4] md:w-1/2 mt-2' style={{height: '1px'}}></div>
            </div>
            <div className='md:flex sm:flex justify-between'>
                <p className='text-2xl font-bold'>Organization Name: {data.organizationName}</p>
                {
                    data?.postingTime && <span className='text-sm px-2 py-1 m-0 bg-slate-50'>{timeAgo.format(data.postingTime - 60 * 1000)}</span>
                }
            </div>
            <div className="mb-2">
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
                data?.discribeWithCheck? 
                    data.discribeWithCheck.map((check, index) => <span key={index} className='border pt-0.5 pb-1 px-4 mr-2 rounded-lg'>{check}</span>)
                : ''
            }
            {/* ________________________________  */}
            <p className='text-xl font-semibold mt-4'>Details About {data.organizationName}</p> 
            {/* ________________________________  */}
            {
                data?.discription? <p>{data.discription}</p>
                : data?.discriptionMore? <p>{data.discriptionMore}</p>
                : ''
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
            <p className='text-xl font-semibold mt-4'>Details About More {data.organizationName}</p> 
            {/* ________________________________  */}
            {
                data?.discriptionMore ? <p>{data.discriptionMore}</p> : 'No Data'
            }
        </div>
    );
};

export default SinglePageOrganization;