import { Empty, Input, Select, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { Country }  from 'country-state-city';
import PersonCard from '../../SheardComponents/PersonCard/PersonCard';
import { SearchOutlined } from '@ant-design/icons';


const SearchAboutPerson = () => {

    const allCountry = Country.getAllCountries();
    const [singleCountry, setSingleCountry] = useState('')

    const [identityName, setIdentityName] = useState('')

    const [personData, setPersonData] = useState([])
    const [nameFilter, setNameFilter] = useState([])
    const [idFilter, setIdFilter] = useState([])
    const [countryFilter, setCountryFilter] = useState([])
    const [searchSummary, setSearchSummary] = useState('')


    useEffect(() => {
        fetch('https://siriwazi-backend.onrender.com/personData')
        .then(res => res.json())
        .then(data => {
            setPersonData(data)
            setNameFilter(data)
        })
    }, [])

    let searchText;
    const handleSearch = () => {
        const afterFilterAllData = (nameFilter.filter(data =>data.identityName === identityName ))
        // setIdFilter(forFilter.filter(data =>data.identityName === identityName ))
        setPersonData(afterFilterAllData)
        
        if(singleCountry){
            const countryFilterFromName = afterFilterAllData.filter(data => data.singleCountry === singleCountry)
            setCountryFilter(countryFilterFromName)
            if(!searchSummary){
                console.log('ok')
                setPersonData(countryFilterFromName)
            }
        }
        if(searchSummary){
            console.log('no')
            const filter = countryFilter.filter(data => data.identityNo.includes(searchSummary))
            setPersonData(filter)
        }
        searchText = searchSummary;
    }



    return (
        <>
           <div className='py-4 bg-[#2eab27] border-t-2 border-white-500'>
                <div className='xl:max-w-[1140px] lg:max-w-[90%] md:max-w-[90%] sm:max-w-[90%] w-[95%] mx-auto'>
                    <div className='py-12'>
                        <p className='text-white font-bold text-4xl for_font_family'>Search About a Person</p>
                        <div className='w-100 bg-white md:w-1/2 mt-2' style={{height: '1px'}}></div>
                    </div>
                </div>
            </div> 
            <div className='mb-6 xl:max-w-[1140px] lg:max-w-[90%] md:max-w-[90%] sm:max-w-[90%] w-[95%] mx-auto mt-2 md:p-8 shadow'>
                <p className='font-bold bg-[#2eab27] py-2 px-4 text-white'>Filter All</p>
                <div className='md:flex items-end justify-between'>
                    <div className='md:pr-12'>
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
                                // setPersonData(forFilter.filter(data =>data.identityName === e ))
                                // setIdFilter(forFilter.filter(data =>data.identityName === e ))
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
                    <div className='grow'>
                        {identityName && <div className='flex justify-between gap-4'>
                                        <div className='flex-1'>
                                            <p  className='font-bold mb-1 mt-2'>Country Name</p>
                                            <Select
                                                size='large'
                                                placeholder='Select Country'
                                                style={{
                                                  width: '100%',
                                                }}
                                                onChange={e => {
                                                    setSingleCountry(e)
                                                }}
                                                options={allCountry.map(country => {
                                                    return { value: country.name, label: country.name,}
                                                })}
                                            />
                                        </div>
                                        <div className='flex-1 mr-4'>
                                            {
                                                identityName && <p  className='font-bold mb-1 mt-2'>{identityName} {identityName? <span>No: Search</span> : ''}</p>
                                            }
                                            <Input 
                                                size='large' 
                                                onChange={e => {
                                                    setSearchSummary(e.target.value)
                                                    const filter = idFilter.filter(data => data.identityNo.includes(e.target.value))
                                                    setPersonData(filter)
                                                }} 
                                                placeholder={`Type ${identityName} No:`} />
                                        </div>
                                    </div>
                         }
                    </div>
                    <div>
                        <button onClick={handleSearch} className='bg-[#2eab27] rounded-lg py-1.5 px-3 text-white font-bold'><SearchOutlined style={{fontSize: '25px'}}/> Search</button>
                    </div>
                </div>
            </div>
            <div className='mb-12 xl:max-w-[1140px] lg:max-w-[90%] md:max-w-[90%] sm:max-w-[90%] w-[95%] mx-auto mt-2'>
                <div className='flex'>
                    <div className='mb-1 mr-4'><span className='font-bold text-green-700'>Result</span>: <span className='font-bold border px-2'>{personData.length}</span></div>
                    <div>{searchText && <p className='font-bold border-b'>Search Summary: {searchText}</p>}</div>
                </div>
                <div style={{height: '30rem'}} className='overflow-auto p-6 border'>
                    {
                       personData.length !== 0 ? personData.map(data => <PersonCard key={data._id} data={data} />) : <div className='mt-12'><Empty/></div>
                    }
                </div>
            </div>
        </>
    );
};

export default SearchAboutPerson;