import { Button, Result } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SentPostAdmin = () => {
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/admin-dashboard')
    }
    return (
        <div className='md:my-14 py-4 flex justify-center'>
            <Result
                status="success"
                title="Successfully Post Information"
                subTitle="Thanks fo Post your Valueble feadback. Please go to search option Then you get our post"
                extra={[
                  <Button onClick={handleNavigate} >Go To Dashbord</Button>,
                ]}
            />
        </div>
    );
};

export default SentPostAdmin;