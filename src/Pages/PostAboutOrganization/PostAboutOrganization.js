import React from 'react';
import OrganizationPostComponent from '../../SheardComponents/PostComponents/OrganizationPostComponent';



const PostAboutOrganization = () => {
    
    const emailSentLink = '/post-sent'

    return (
        <>
            <div className='py-4 bg-[#8f0909] border-t-2 border-white-500'>
                <div className='xl:max-w-[1140px] lg:max-w-[90%] md:max-w-[90%] sm:max-w-[90%] w-[95%] mx-auto'>
                    <div className='py-12'>
                        <p className='text-white font-bold text-4xl for_font_family'>Post About an Organization</p>
                        <div className='w-100 bg-white md:w-1/2 mt-2' style={{height: '1px'}}></div>
                    </div>
                </div>
            </div>
            <OrganizationPostComponent emailSentLink={emailSentLink}/>
            
        </>
    );
};

export default PostAboutOrganization;