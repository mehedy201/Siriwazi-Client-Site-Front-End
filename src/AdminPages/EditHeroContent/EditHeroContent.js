import React, { useState } from 'react';
import EditForm from './EditForm';
import './EditHeroContent.css'

const EditHeroContent = () => {


    const [data, setData] = useState([])  

    fetch('https://database-management-mehedi.onrender.com/heroContent')
        .then(res => res.json())
        .then(data => setData(data))
    
    

    return (
        <div className='mr-2 mt-6'>
            {
                data?.map((newData, index) => <EditForm key={index} newData={newData}/>)
            }
        </div>
    );
};

export default EditHeroContent;