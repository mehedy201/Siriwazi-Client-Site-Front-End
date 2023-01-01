import { Checkbox, DatePicker, Input, Select, Spin, TimePicker } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React, { useState } from 'react';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';

const PersonPostComponent = ({emailSentLink}) => {
    // Input Select Phone or Other------------------------
    const [identityName, setIdentityName] = useState('')
    const [identityNo, setIdentityNo] = useState('')
    const [discriptionMore, setDiscriptionMore] = useState('')
    const [date, setDate] = useState([])
    const [time, setTime] = useState([])
    const [discribeWithCheck, setDiscribeWithCheck] = useState('')
    
    // Last True False Value 
    let defaultValue = 'Most likely not true'
    const [trueFals, setTrueFalse] = useState(defaultValue);
    
    // Posting Time___________________________________________
    const postingTime = Date.now();
    
    
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault()
        setLoading(true)
        const data = {identityName, identityNo, discriptionMore, date, time, discribeWithCheck, trueFals, postingTime};
        fetch('https://siriwazi-backend.onrender.com/personData', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => {
            res.json();
        })
        .then(data => {
            setLoading(false)
            navigate(emailSentLink)
        })
    }



    return (
        <div className='mb-12 xl:max-w-[1140px] lg:max-w-[90%] md:max-w-[90%] sm:max-w-[90%] w-[95%] mx-auto md:p-12 shadow'>
                <form onSubmit={handleSubmit} className='p-6 md:p-12 shadow'>
                    <p className='font-bold text-2xl for_font_family mb-4'>Create Your Post</p>
                    <div className='w-100 bg-red-200 md:w-1/2 mb-4' style={{height: '1px'}}></div>
                    <div className='md:flex justify-between'>
                        <div className='flex-1 md:pr-12'>
                            <p className='font-bold mb-1 mt-2'>Have to Must Select Identity Name <span className='text-red-600'>*</span></p>
                            <Select
                                placeholder="Please Select One"
                                style={{
                                  width: '100%',
                                }}
                                size='large'
                                required 
                                onChange={e => setIdentityName(e)}
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
                            <p  className='font-bold mb-1 mt-2'>{identityName} {identityName? <span>No: <span className='text-red-600'>*</span></span> : ''}</p>
                            {identityName? <Input size='large' className='capitalize' onChange={e => setIdentityNo(e.target.value)} placeholder={`Type ${identityName} No:`} required /> : ''}
                        </div>
                    </div>
                        <p className='font-bold mb-1 mt-2'>Describe the person using a maximum of three words <span className='text-red-600'>*</span></p>
                        <Checkbox.Group
                            style={{
                              width: '100%',
                            }}
                            id='checkBoxGroup'
                            onChange={e => {
                                setDiscribeWithCheck(e)                                      
                            }}
                            required
                            >
                            <div style={{width: '100%'}} className='flex'>
                                <div className='flex-1 grid grid-cols-1 gap-2'>
                                    <Checkbox className='check pl-2' value="Con Man/Woman">Con Man/Woman</Checkbox>
                                    <Checkbox className='check' value="Stingy/mean">Stingy/mean</Checkbox>
                                    <Checkbox className='check' value="Player/Heart Breaker">Player/Heart Breaker</Checkbox>
                                    <Checkbox className='check' value="Gold Digger">Gold Digger</Checkbox>
                                    <Checkbox className='check' value="Corrupt">Corrupt</Checkbox>
                                    <Checkbox className='check' value="Dishonest">Dishonest</Checkbox>
                                    <Checkbox className='check' value="Thief">Thief</Checkbox>
                                    <Checkbox className='check' value="Violent">Violent</Checkbox>
                                    <Checkbox className='check' value="Does not Pay Debts">Does not Pay Debts</Checkbox>
                                    <Checkbox className='check' value="Horrible Boss">Horrible Boss</Checkbox>
                                    <Checkbox className='check' value="Sexual Pervert">Sexual Pervert</Checkbox> 
                                </div>
                                <div className='flex-1 grid grid-cols-1 gap-2'>
                                    <Checkbox className='check pl-2' value="Truthful">Truthful</Checkbox>
                                    <Checkbox className='check' value="Generous">Generous</Checkbox>
                                    <Checkbox className='check' value="Loyal">Loyal</Checkbox>
                                    <Checkbox className='check' value="Humble">Humble</Checkbox>
                                    <Checkbox className='check' value="Professional">Professional</Checkbox>
                                    <Checkbox className='check' value="Honest">Honest</Checkbox>
                                    <Checkbox className='check' value="Dependable">Dependable</Checkbox>
                                    <Checkbox className='check' value="Disciplined">Disciplined</Checkbox>
                                    <Checkbox className='check' value="Pays Debts">Pays Debts</Checkbox>
                                    <Checkbox className='check' value="Best Boss Ever">Best Boss Ever</Checkbox>
                                    <Checkbox className='check' value="Romantic">Romantic</Checkbox>
                                </div>
                            </div>
                        </Checkbox.Group>
                        {/* Discribe more optional ---------------------------- */}
                        <p className='font-bold mb-1 mt-6'>Describe the person More Details (Optional)</p>
                        <div className='w-100 bg-red-500 md:w-1/2 mt-2' style={{height: '1px'}}></div>
                        <p>Your information will be verified based on the answers to the optional form below</p>
                        <p className='font-bold mb-1 mt-2'>Place where the event described took place (Optional)</p>
                        <TextArea
                            showCount
                            maxLength={200}
                            style={{
                              height: 100,
                              marginBottom: 24,
                            }}
                            onChange={e => {
                                let trueFalseData0 = 'Most likely not true'
                                let trueFalseData1 = 'Maybe true'
                                let trueFalseData2 = 'Most likely true'
                                setDiscriptionMore(e.target.value)
                                if(discriptionMore.length > 5) setTrueFalse(trueFalseData1)
                                if(discriptionMore.length > 5 && date.length > 1) setTrueFalse(trueFalseData2)
                                if(discriptionMore.length < 5 && date.length > 1) setTrueFalse(trueFalseData1)
                                if(discriptionMore.length < 5 && date.length < 1) setTrueFalse(trueFalseData0)
                            }}
                            placeholder="Right Here.........."
                        />
                        <p className='font-bold mb-1 mt-2'>Date and Time when it happened (Optional)</p>
                        <div className='flex '>
                            <DatePicker className='mr-2' onChange={(date, dateString) =>{
                                 let trueFalseData0 = 'Most likely not true'
                                 let trueFalseData1 = 'Maybe true'
                                 let trueFalseData2 = 'Most likely true'
                                 setDate( dateString)
                                 if(dateString.lenght > 1) setTrueFalse(trueFalseData1)
                                 if(dateString.length > 1 && discriptionMore.length > 5)setTrueFalse(trueFalseData2)
                                 if(dateString.length < 1 && discriptionMore.length > 5)setTrueFalse(trueFalseData1)
                                 if(dateString.length < 1 && discriptionMore.length < 5)setTrueFalse(trueFalseData0)
                            }} />
                            <TimePicker onChange={(time, timeString) => setTime(timeString)} defaultValue={dayjs('00:00:00', 'HH:mm:ss')} />
                        </div>
                        {
                            loading === true && <div className=''><Spin size="large"/></div>
                        }
                        {/* Submit Button -------------------------------------------------------- */}
                        <input className='mt-4 py-2 px-10 bg-[#8f0909] border-none font-bold text-white cursor-pointer	' type="submit" value={'Submit'} />
                </form>
            </div>
    );
};

export default PersonPostComponent;