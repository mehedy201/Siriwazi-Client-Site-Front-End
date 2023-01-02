import React from 'react';
// import TimeAgo from 'javascript-time-ago'
// English Time______________________________
import en from 'javascript-time-ago/locale/en'
import { Button } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { FullscreenOutlined } from '@ant-design/icons';
import { DeleteOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

// TimeAgo.addLocale(en);

const OrganizationCard = ({data, handleDelete}) => {
    const { postingTime, trueFals, _id} = data;
        // Create formatter (English)._______________________________
    // const timeAgo = new TimeAgo('en-US')

    const navigate = useNavigate('')
    const homePageHandle = () => {
        navigate('/')
    }

    const singlePageView = (id) => {
        navigate(`/organization-details/${id}`)
    }
    return (
        <div className='p-4 mb-3'>
            <div>
                <div className='flex justify-between'>
                    <div>
                        {
                            data?.organizationName && <p className='text-xl for_font_family font-bold'>Organization Name: {data.organizationName}</p>
                        }
                        {
                            data?.discribeWithCheck? 
                            data.discribeWithCheck.map((check, index) => <p key={index} className='font-semibold pt-0.5 pb-1 px-4 mr-2 rounded-lg'>{check}</p>)
                            : ''
                        }
                    </div>
                    <div>
                        <Button onClick={() => singlePageView(_id)} style={{width: '150px'}} className='flex items-center inline mb-2 mt-2' icon={<FullscreenOutlined />}>Full Details</Button>
                        {
                            handleDelete? <Button onClick={() => handleDelete(_id)} style={{width: '150px'}} className='flex items-center inline' icon={<DeleteOutlined />}>Delete</Button>  : <Button onClick={homePageHandle} style={{width: '150px'}} className='flex items-center inline' icon={<HomeOutlined />}>Back to Home</Button>
                            
                        }
                    </div>
                </div>
                <p className='font-bold text-lg underline mt-3'>Detailed Results</p>
                <p className='font-bold underline mt-3'>Reliable</p>
                <div className='flex mt-3'>
                    {
                        data?.postingDate && <p className='mr-8'>{data.postingDate}</p>
                    }
                    {
                        data?.postingTime && <p>{postingTime}</p>
                    }
                </div>
                    {
                        data?.discriptionMore && <p className='mb-2 mt-3'>{data.discriptionMore}</p>
                    }
                <div className='md:flex sm:flex justify-around my-3'>
                    <span className='font-bold'>Place event took place- {data?.place? <span>{data.place}</span> : 'N/A'}</span>
                    <span className='font-bold'>Date it happened- {data?.date? <span>{data.date}</span> : 'N/A'}</span>
                    <span className='font-bold'> Time- {data?.time? <span>{data.time}</span> : 'N/A'}</span>
                </div>
                <p className='bg-[#EE4B2B] font-bold px-4 mt-2 py-2 rounded-lg inline'>{trueFals}</p>
            </div>
            <div className='flex justify-center'>
                <div style={{width: '60%'}} className='mt-8 h-1 bg-[#0eadc9] rounded-xl'></div>
            </div>
        </div>
    );
};

export default OrganizationCard;