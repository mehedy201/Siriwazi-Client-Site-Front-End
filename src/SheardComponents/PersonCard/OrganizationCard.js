import React from 'react';
import TimeAgo from 'javascript-time-ago'
// English Time______________________________
import en from 'javascript-time-ago/locale/en'
import { Button } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { FullscreenOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

TimeAgo.addLocale(en);

const OrganizationCard = ({data}) => {
    const { postingTime, trueFals, _id} = data;
        // Create formatter (English)._______________________________
    const timeAgo = new TimeAgo('en-US')

    const navigate = useNavigate('')
    const homePageHandle = () => {
        navigate('/')
    }

    const singlePageView = (id) => {
        navigate(`/organization-details/${id}`)
    }
    return (
        <div className='p-4 shadow mb-3 border-t'>
            <div className='md:flex justify-between'>
                <div>
                    <div className='flex'>
                        <p className='font-bold text-xl mr-4'>{data.organizationName}</p>
                        {
                            data?.postingTime && <span className='text-sm px-2  bg-slate-50'>{timeAgo.format(postingTime - 60 * 1000)}</span>
                        }
                    </div>
                    {
                        data?.discription? <p className='mb-2'>{data.discription.slice(0, 50)}....</p> : <p className='mb-2'>{data?.discriptionMore?.slice(0, 50)}....</p>
                    }
                    <span className='bg-[#EE4B2B] text-sm font-semibold px-4 mt-2 py-1 rounded-lg inline'>{trueFals}</span>
                </div>
                <div>
                    {/* <button className='btn btn-sm bg-primary'>Preview</button> */}
                    <Button onClick={() => singlePageView(_id)} style={{width: '150px'}} className='flex items-center inline mb-2' icon={<FullscreenOutlined />}>Full Details</Button>
                    <Button onClick={homePageHandle} style={{width: '150px'}} className='flex items-center inline' icon={<HomeOutlined />}>Back to Home</Button>
                </div>
            </div>
        </div>
    );
};

export default OrganizationCard;