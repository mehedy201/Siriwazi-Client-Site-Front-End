import { Empty, Input, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { Country, State, City }  from 'country-state-city';
import OrganizationCard from '../../SheardComponents/PersonCard/OrganizationCard';
import { toast } from 'react-toastify';


const ManageOrganizationPost = () => {

    // const [inputCountryData, setInputCountryData] = useState('');
    const [inputStateData, setInputStateData] = useState('');
    // All Country, State and City Data State___________________________________________________
    const [code, setCode] = useState('')
    const [stateData, setStateData] = useState([]);
    const [cityData, setCityData] = useState([]);

    // Get All Country List _____________________
    const allCountry = Country.getAllCountries();


    const [organizationData, setOrganizationData] = useState([])
    const [filter1 , setFilter1] = useState([]);
    const [filter2 , setFilter2] = useState([]);
    const [filter3 , setFilter3] = useState([]);
    const [filter4 , setFilter4] = useState([]);

    useEffect(() => {
        fetch('https://database-management-mehedi.onrender.com/organizationData')
        .then(res => res.json())
        .then(data => {
            setOrganizationData(data)
            setFilter1(data)
        })
    }, [])


// Handle Delete ___________________________________________________________________________
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure to Delete');
        if(proceed){
            const url = `https://database-management-mehedi.onrender.com/organizationData/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                const remain = organizationData.filter(item => item._id !== id);
                console.log(data, organizationData);
                setOrganizationData(remain);
                toast('Delete')
            })
        }
    }
    return (
        <div>
            <div className='mb-6 xl:max-w-[1140px] lg:max-w-[90%] md:max-w-[90%] sm:max-w-[90%] w-[95%] mx-auto mt-2 md:p-8 shadow'>
                <p className='font-bold bg-[#2eab27] py-2 px-4 text-white'>Filter All</p>
                <div className='md:flex'>
                    <div className='flex-1 mr-4'>
                        <p className='font-bold mb-1 mt-2'>Search by Organization Name</p>
                        <Input size='large' onChange={e => {
                            if(filter3.length > 0 ){
                                const filter = filter3.filter(data => data.organizationName.toLowerCase().includes(e.target.value.toLowerCase()))
                                setOrganizationData(filter)
                                setFilter2(filter)
                            }
                            else{
                                const filter = filter1.filter(data => data.organizationName.toLowerCase().includes(e.target.value.toLowerCase()))
                                setOrganizationData(filter)
                                setFilter2(filter)
                            }
                        }} placeholder='Type Organization Name' />
                    </div>
                    <div className='flex-1 md:flex'>
                        <div className='md:flex-1 md:mr-3'>
                            <p className='font-bold mb-1 mt-2'><span>Country <span className='text-red-600'>*</span></span></p>
                            <Select
                                placeholder="Select Country"
                                allowClear={true}
                                style={{
                                  width: '100%',
                                }}
                                size='large'
                                onChange={ e => {
                                    const value = e.split('-');
                                    if(filter2.length > 0 ){
                                        const filter = filter2.filter(data => data.inputCountryData.includes(value[1]))
                                        setOrganizationData(filter)
                                        setFilter3(filter)
                                        console.log('filter2', filter)
                                        console.log('filter2')

                                    }
                                    else{
                                        const filter = filter1.filter(data => data.inputCountryData.toLowerCase().includes(value[1].toLowerCase()))
                                        setOrganizationData(filter)
                                        setFilter3(filter)
                                        console.log('filter1', filter3.length)
                                        console.log('filter1')
                                    }

                                    const stateList = State.getStatesOfCountry(value[0])
                                    setStateData(stateList)
                                    stateList.map(s => setCode(s.countryCode))
                                }}
                                options={
                                    allCountry?.map(country => {
                                    return  {
                                        value: country.isoCode + '-' + country.name,
                                        label: country.name,
                                      }
                                })}
                            />      
                        </div>
                        <div  className='md:flex-1 md:mr-3'>
                            <p className='font-bold mb-1 mt-2'><span>State <span className='text-red-600'>*</span></span></p>
                            <Select
                                allowClear={true}
                                placeholder="Select State"
                                style={{
                                  width: '100%',
                                }}
                                size='large'
                                onChange={e => {
                                    const value = e.split('-');
                                    const filter = filter3.filter(data => data.inputStateData.toLowerCase().includes(value[1].toLowerCase()))
                                    setOrganizationData(filter)
                                    setFilter4(filter)

                                    setInputStateData(value[1])
                                    const city = City.getCitiesOfState(code, value[0]);
                                    setCityData(city)
                                }}
                                options={
                                    stateData?.map(state => {
                                    return  {
                                        value: state.isoCode + '-' + state.name,
                                        label: state.name,
                                      }
                                })}
                            />
                        </div>
                        <div  className='md:flex-1 md:mr-3'>
                            <p className='font-bold mb-1 mt-2'><span>City <span className='text-red-600'>*</span></span></p>
                            <Select
                                placeholder= 'Select City'
                                allowClear={true}
                                style={{
                                  width: '100%',
                                }}
                                size='large'
                                onChange={e => {
                                    const filter = filter4.filter(data => data.inputCityData.toLowerCase().includes(e.toLowerCase()))
                                    setOrganizationData(filter)
                                }}
                                options={
                                    cityData?.map(city => {
                                    return  {
                                        value: city.name,
                                        label: city.name,
                                      }
                                })}
                            />
                        </div>
                    </div>
                </div>
            </div> 
            <div className='mb-12 xl:max-w-[1140px] lg:max-w-[90%] md:max-w-[90%] sm:max-w-[90%] w-[95%] mx-auto mt-2'>
                <div className='mb-1'><span className='font-bold text-green-700'>Result</span>: <span className='font-bold border px-2'>{organizationData.length}</span></div>
                <div style={{height: '30rem'}} className='overflow-auto p-6 border'>
                <table className="table table-compact w-full">
                    <thead className='for_sticky'>
                      <tr>
                        <th></th> 
                        <th className='capitalize'>Organization Name</th> 
                        <th className='capitalize'>Country</th> 
                        <th className='capitalize'>State</th> 
                        <th className='capitalize'>City</th> 
                        <th className='capitalize'>Authenticity</th> 
                        <th className='capitalize'>Posting Date</th>
                        <th className='capitalize'>Details Link</th>
                        <th className='capitalize'>Action</th>
                      </tr>
                    </thead> 
                    <tbody>
                    {
                       organizationData.length !== 0 ? organizationData.map(data => <OrganizationCard key={data._id} data={data} handleDelete={handleDelete} />) : <div className='mt-12'><Empty/></div>
                    }
                    </tbody> 
                 </table>
                    
                </div>
            </div>
        </div>
    );
};

export default ManageOrganizationPost;