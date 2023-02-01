import { Input, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { Country, State, City }  from 'country-state-city';
import ProductServiceCard from '../../SheardComponents/PersonCard/ProductServiceCard';
import { SearchOutlined } from '@ant-design/icons';
import EmptyComponent from '../../SheardComponents/EmptyComponent';




const SearchAboutProductService = () => {

    const [inputCountryData, setInputCountryData] = useState('');
    const [inputStateData, setInputStateData] = useState('');
    const [inputCityData, setInputCityData] = useState('');
    // All Country, State and City Data State___________________________________________________
    const [code, setCode] = useState('')
    const [stateData, setStateData] = useState([]);
    const [cityData, setCityData] = useState([]);
    const [searchSummary, setSearchSummary] = useState('')
    const [searchText, setSearchText] = useState('')

    // Get All Country List _____________________
    const allCountry = Country.getAllCountries();

    const [productServiceData, setProductServiceData] = useState([]);

    const [filter1 , setFilter1] = useState([]);
    useEffect(() => {
        fetch('https://siriwazi-backend.onrender.com/product-service')
        .then(res => res.json())
        .then(data => {
            setProductServiceData(data)
            setFilter1(data)
        })
    }, [])

    const handleSearch = () => {
        if(searchSummary){
            const filter2 = filter1.filter(data =>  data.productServiceName.toLowerCase() === searchSummary.toLowerCase())
            if(inputCountryData){
                const filter3 = filter2.filter(data => data.inputCountryData === inputCountryData)
                     setProductServiceData(filter3)
                if(inputStateData){
                    const filter4 = filter3.filter(data => data.inputStateData === inputStateData)
                    setProductServiceData(filter4)
                    if(inputCityData){
                        const filter5 = filter4.filter(data => data.inputCityData === inputCityData)
                        setProductServiceData(filter5)
                    }
                }
                else{
                    setProductServiceData(filter3)
                }
            }
            else{
                setProductServiceData(filter2)
            }
            setSearchText(searchSummary)
        }
        if(!searchSummary && inputCountryData){
             const filter6 = filter1.filter(data => data.inputCountryData === inputCountryData);
             setProductServiceData(filter6)
             if(inputStateData){
                 const filter7 = filter6.filter(data => data.inputStateData === inputStateData)
                 setProductServiceData(filter7)
                 if(inputCityData){
                     const filter8 = filter7.filter(data => data.inputCityData === inputCityData)
                     setProductServiceData(filter8)
                 }
             }
             else{
                 setProductServiceData(filter6)
             }
        }
    }
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
            <div className='mb-6 xl:max-w-[1140px] lg:max-w-[90%] md:max-w-[90%] sm:max-w-[90%] w-[95%] mx-auto mt-2 md:p-8 shadow'>
                <p className='font-bold bg-[#2eab27] py-2 px-4 text-white'>Filter All</p>
                <div className='md:flex items-end'>
                    <div className='mr-4'>
                        <p className='font-bold mb-1 mt-2'>Search by Product/Service Name</p>
                        <Input size='large' onChange={e => {
                            setSearchSummary(e.target.value)
                        }} placeholder='Type Organization Name' />
                    </div>
                    <div className='grow md:flex'>
                        <div className='md:flex-1 md:mr-3'>
                            <p className='font-bold mb-1 mt-2'>Country</p>
                            <Select
                                placeholder="Select Country"
                                allowClear={true}
                                style={{
                                  width: '100%',
                                }}
                                size='large'
                                onChange={e => {
                                    const value = e.split('-');
                                    setInputCountryData(value[1]);
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
                            <p className='font-bold mb-1 mt-2'>State</p>
                            <Select
                                placeholder="Select State"
                                allowClear={true}
                                style={{
                                  width: '100%',
                                }}
                                size='large'
                                onChange={e => {
                                    const value = e.split('-');
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
                            <p className='font-bold mb-1 mt-2'>City</p>
                            <Select
                                placeholder= 'Select City'
                                allowClear={true}
                                style={{
                                  width: '100%',
                                }}
                                size='large'
                                onChange={e => {
                                    setInputCityData(e)
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
                    <div>
                        <button onClick={handleSearch} className='bg-[#2eab27] rounded-lg py-1.5 px-3 text-white font-bold'><SearchOutlined style={{fontSize: '25px'}}/> Search</button>
                    </div>
                </div>
            </div> 
            <div className='mb-12 xl:max-w-[1140px] lg:max-w-[90%] md:max-w-[90%] sm:max-w-[90%] w-[95%] mx-auto mt-2'>
                <div className='flex'>
                    <div className='mb-1'><span className='font-bold text-green-700'>Result</span>: <span className='font-bold border px-2'>{productServiceData.length}</span></div>
                    <div>{searchText && <p className='font-bold border-b'>Search Summary: {searchText}</p>}</div>
                </div>
                <div style={{height: '30rem'}} className='overflow-auto p-6 border'>
                <table className="table table-compact w-full">
                    <thead className='for_sticky'>
                      <tr>
                        <th></th> 
                        <th className='capitalize'>Product/Service Name</th> 
                        <th className='capitalize'>Country</th> 
                        <th className='capitalize'>State</th> 
                        <th className='capitalize'>City</th>  
                        <th className='capitalize'>Authenticity</th> 
                        <th className='capitalize'>Posting Date</th> 
                        <th className='capitalize'>Details Link</th> 
                      </tr>
                    </thead> 
                    <tbody>
                    {
                       productServiceData.length !== 0 ? productServiceData.map(data => <ProductServiceCard key={data._id} data={data} />) : <div className='mt-12'><EmptyComponent/></div>
                    }
                    </tbody> 
                 </table>
                    
                </div>
            </div>
        </>
    );
};

export default SearchAboutProductService;