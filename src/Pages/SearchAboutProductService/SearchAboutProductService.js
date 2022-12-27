import { Input, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { Country, State, City }  from 'country-state-city';
import ProductServiceCard from '../../SheardComponents/PersonCard/ProductServiceCard';



const SearchAboutProductService = () => {

    const [inputCountryData, setInputCountryData] = useState('');
    const [inputStateData, setInputStateData] = useState('');
    const [inputCityData, setInputCityData] = useState('');
    // All Country, State and City Data State___________________________________________________
    const [code, setCode] = useState('')
    const [stateData, setStateData] = useState([]);
    const [cityData, setCityData] = useState([]);

    // Get All Country List _____________________
    const allCountry = Country.getAllCountries();

    const [productServiceData, setProductServiceData] = useState([]);

    const [filter1 , setFilter1] = useState([]);
    const [filter2 , setFilter2] = useState([]);
    const [filter3 , setFilter3] = useState([]);
    const [filter4 , setFilter4] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/product-service')
        .then(res => res.json())
        .then(data => {
            setProductServiceData(data)
            setFilter1(data)
        })
    }, [])
    // console.log(productServiceName)
    console.log(filter3)
    return (
        <>
            <div className='py-4 bg-[#2eab27] border-t-2 border-white-500'>
                <div className='xl:max-w-[1140px] lg:max-w-[90%] md:max-w-[90%] sm:max-w-[90%] w-[95%] mx-auto'>
                    <div className='py-12'>
                        <p className='text-white font-bold text-4xl for_font_family'>Search About a Product/Service</p>
                        <div className='w-100 bg-white md:w-1/2 mt-2' style={{height: '1px'}}></div>
                    </div>
                </div>
            </div>
            <div className='mb-12 xl:max-w-[1140px] lg:max-w-[90%] md:max-w-[90%] sm:max-w-[90%] w-[95%] mx-auto mt-2 md:p-8 shadow'>
                <p className='font-bold bg-[#2eab27] py-2 px-4 text-white'>Filter All</p>
                <div className='md:flex'>
                    <div className='flex-1 mr-4'>
                        <p className='font-bold mb-1 mt-2'>Search by Product/Service Name</p>
                        <Input size='large' onChange={e => {
                            if(filter3.length > 0 ){
                                const filter = filter3.filter(data => data.productServiceName.toLowerCase().includes(e.target.value.toLowerCase()))
                                setProductServiceData(filter)
                                setFilter2(filter)
                            }
                            else{
                                const filter = filter1.filter(data => data.productServiceName.toLowerCase().includes(e.target.value.toLowerCase()))
                                setProductServiceData(filter)
                                setFilter2(filter)
                            }
                        }} placeholder='Type Organization Name' />
                    </div>
                    <div className='flex-1 md:flex'>
                        <div className='md:flex-1 md:mr-3'>
                            <p className='font-bold mb-1 mt-2'><span>Country <span className='text-red-600'>*</span></span></p>
                            <Select
                                placeholder="Select Country"
                                style={{
                                  width: '100%',
                                }}
                                size='large'
                                onChange={e => {
                                    const value = e.split('-');
                                    setInputCountryData(value[1]);

                                    if(filter2.length > 0 ){
                                        const filter = filter2.filter(data => data.inputCountryData.includes(value[1]))
                                        setProductServiceData(filter)
                                        setFilter3(filter)
                                    }
                                    else{
                                        const filter = filter1.filter(data => data.inputCountryData.toLowerCase().includes(value[1].toLowerCase()))
                                        setProductServiceData(filter)
                                        setFilter3(filter)
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
                                placeholder="Select State"
                                style={{
                                  width: '100%',
                                }}
                                size='large'
                                onChange={e => {
                                    const value = e.split('-');
                                    const filter = filter3.filter(data => data.inputStateData.toLowerCase().includes(value[1].toLowerCase()))
                                    setProductServiceData(filter)
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
                                style={{
                                  width: '100%',
                                }}
                                size='large'
                                onChange={e => {
                                    setInputCityData(e)
                                    const filter = filter4.filter(data => data.inputCityData.toLowerCase().includes(e.toLowerCase()))
                                    setProductServiceData(filter)
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
                {
                   productServiceData.map(data => <ProductServiceCard key={data._id} data={data} />) 
                }
            </div>
        </>
    );
};

export default SearchAboutProductService;