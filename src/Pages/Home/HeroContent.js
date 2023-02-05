import { Skeleton } from 'antd';
import React from 'react';

const HeroContent = ({newData}) => {
    
    return (
        <>
            {
                newData?.title ? <p className="text-4xl font-bold for_font_family">{newData.title}</p> : ''
            }
            {
                newData?.text? <p className="py-6 text-justify">{newData.text}</p>: ''
            }
        </>
    );
};

export default HeroContent;