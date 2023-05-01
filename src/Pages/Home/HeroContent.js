import React from 'react';

const HeroContent = ({newData}) => {
    
    return (
        <>
            {
                newData?.title ? <p className="text-4xl font-bold for_font_family">{newData.title}</p> : 'On Database Management, you can post and access information about other people, organizations or products and services.'
            }
            {
                newData?.text? <p className="py-6 text-justify">{newData.text}</p>: 'Are you happy with somebody, an organization, or a product/service, share your experience with the world on Database management to promote that person/organization/product? If you are not happy, share your experience so that nobody else will go through what you have experienced. In the end, it all comes to the light, so let us treat each other better'
            }
        </>
    );
};

export default HeroContent;