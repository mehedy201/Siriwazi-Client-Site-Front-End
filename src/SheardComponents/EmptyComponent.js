import React from 'react';
import emptyImage from '../Images/images (1).png'

const EmptyComponent = () => {
    return (
        <div className='flex justify-center'>
            <div>
                <img style={{height: '200px', width: 'auto'}} src={emptyImage} alt="" />
                <p className='font-bold for_font_family'>No available data at the moment, please be the first to post</p>
            </div>
        </div>
    );
};

export default EmptyComponent;