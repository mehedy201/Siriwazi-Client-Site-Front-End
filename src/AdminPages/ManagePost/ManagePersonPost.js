import { Empty, Input, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import PersonCard from '../../SheardComponents/PersonCard/PersonCard';
import { toast } from 'react-toastify';

const ManagePersonPost = () => {

    const [identityName, setIdentityName] = useState('')
    const [personData, setPersonData] = useState([])
    const [forFilter, setFilter] = useState([]);
    const [idFilter, setIdFilter] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/personData')
        .then(res => res.json())
        .then(data => {
            setPersonData(data)
            setFilter(data)
        })
    }, [])


    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure to Delete');
        if(proceed){
            const url = `http://localhost:5000/personData/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                const remain = personData.filter(item => item._id !== id);
                console.log(data, personData);
                setPersonData(remain);
                toast('Delete')
            })
        }
    }

    return (
        <div>
            <div className='mb-6 xl:max-w-[1140px] lg:max-w-[90%] md:max-w-[90%] sm:max-w-[90%] w-[95%] mx-auto mt-2 md:p-8 shadow'>
                <p className='font-bold bg-[#2eab27] py-2 px-4 text-white'>Filter All</p>
                <div className='md:flex justify-between'>
                    <div className='flex-1 md:pr-12'>
                        <p className='font-bold mb-1 mt-2'>Search by Select Identity Name</p>
                        <Select
                            placeholder="Please Select One"
                            style={{
                              width: '100%',
                            }}
                            size='large'
                            required 
                            onChange={e => {
                                setIdentityName(e);
                                setPersonData(forFilter.filter(data =>data.identityName === e ))
                                setIdFilter(forFilter.filter(data =>data.identityName === e ))
                            }}
                            options={[
                              { value: 'Phone/Mobile',label: ' Phone/Mobile', },
                              { value: 'Car Registration',label: ' Car Registration', },
                              { value: 'National ID',label: 'National ID', },
                              { value: 'Passport',label: 'Passport', },
                              { value: 'Driving License ',label: 'Driving License ', },
                              { value: 'Bank Account',label: 'Bank Account', },
                            ]}
                        />
                    </div>
                    <div className='flex-1'>
                        <p  className='font-bold mb-1 mt-2'>{identityName} {identityName? <span>No: Search</span> : ''}</p>
                        {identityName? <Input 
                                            size='large' 
                                            onChange={e => {
                                                const filter = idFilter.filter(data => data.identityNo.includes(e.target.value))
                                                setPersonData(filter)
                                            }} 
                                            placeholder={`Type ${identityName} No:`} /> : ''}
                    </div>
                </div>
            </div>
            <div className='mb-12 xl:max-w-[1140px] lg:max-w-[90%] md:max-w-[90%] sm:max-w-[90%] w-[95%] mx-auto mt-2'>
                <div className='mb-1'><span className='font-bold text-green-700'>Result</span>: <span className='font-bold border px-2'>{personData.length}</span></div>
                <div style={{height: '30rem'}} className='overflow-auto p-6 border'>
                    {
                       personData.length !== 0 ? personData.map(data => <PersonCard key={data._id} data={data} handleDelete={handleDelete} />) : <div className='mt-12'><Empty/></div>
                    }
                </div>
            </div>
        </div>
    );
};

export default ManagePersonPost;