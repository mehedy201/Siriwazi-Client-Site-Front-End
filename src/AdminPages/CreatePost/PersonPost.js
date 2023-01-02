import React from 'react';
import PersonPostComponent from '../../SheardComponents/PostComponents/PersonPostComponent';



const PersonPost = () => {
     
     const emailSentLink = '/admin-dashboard/post-sent-admin'

    return (
        <div>
            <PersonPostComponent emailSentLink={emailSentLink}/>
        </div>
    );
};

export default PersonPost;