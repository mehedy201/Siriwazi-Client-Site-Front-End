import React from 'react';
import OrganizationPostComponent from '../../SheardComponents/PostComponents/OrganizationPostComponent';

const OrganizationPost = () => {
     
     const emailSentLink = '/admin-dashboard/post-sent-admin'
    return (
        <div>
            <OrganizationPostComponent emailSentLink={emailSentLink}/>
        </div>
    );
};

export default OrganizationPost;