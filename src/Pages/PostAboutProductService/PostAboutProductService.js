import React, { useState } from 'react';
import { Checkbox, DatePicker, Input, TimePicker } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import dayjs from 'dayjs';

const PostAboutProductService = () => {
    
    const [organizationName, setOrganizationName] = useState('')
    const [discriptionMore, setDiscriptionMore] = useState('')
    const [date, setDate] = useState([])
    const [time, setTime] = useState([])
    const [discribeWithCheck, setDiscribeWithCheck] = useState('')

    // Last True False Value 
    let defaultValue = 'Most likely not true'
    const [trueFals, setTrueFalse] = useState(defaultValue);

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
            <div  className='mb-12 xl:max-w-[1140px] lg:max-w-[90%] md:max-w-[90%] sm:max-w-[90%] w-[95%] mx-auto md:p-12 shadow'>
                <form className='p-6 md:p-12 shadow'>
                    <p className='font-bold text-2xl for_font_family mb-4'>Post Your valuable Feadback</p>
                    <div className='w-100 bg-red-200 md:w-1/2 mb-4' style={{height: '1px'}}></div>
                    <p className='font-bold mb-1 mt-2'><span>Product/Service Name <span className='text-red-600'>*</span></span></p>
                    <Input size='large' className='font-semibold text-xl' onChange={e => setOrganizationName(e.target.value)} placeholder='' required />







                    <p className='font-bold mb-1 mt-2'>Describe the Product/Service using Checkbox Optional</p>
                        {/* <Checkbox.Group options={plainOptions} defaultValue={['']} onChange={handleMultipleSelect} /> */}
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
                            <div className='grid md:grid-cols-5 sm:grid-cols-3 gap-4'>
                                <Checkbox className='checkBoxInput pl-2' value="Too expensive">Too expensive</Checkbox>
                                <Checkbox className='checkBoxInput' value="Didn’t meet my expectations">Didn’t meet my expectations</Checkbox>
                                <Checkbox className='checkBoxInput' value="Horrible product/service">Horrible product/service</Checkbox>
                                <Checkbox className='checkBoxInput' value="Limiting features">Limiting features</Checkbox>
                                <Checkbox className='checkBoxInput' value="Same old, nothing new">Same old, nothing new</Checkbox>
                                <Checkbox className='checkBoxInput' value="Fairly priced">Fairly priced</Checkbox>
                                <Checkbox className='checkBoxInput' value="Exceeded my expectations">Exceeded my expectations</Checkbox>
                                <Checkbox className='checkBoxInput' value="Great product/service">Great product/service</Checkbox>
                                <Checkbox className='checkBoxInput' value="New and enhanced features">New and enhanced features</Checkbox>
                                <Checkbox className='checkBoxInput' value="Inventive and relevant">Inventive and relevant</Checkbox>
                            </div>
                        </Checkbox.Group>
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
                        <p className='font-bold mb-1 mt-2'>The value of this input will depend on your form fill</p>
                        <Input size='large' value={trueFals? trueFals: ''} disabled readOnly/>
                </form>
            </div>
            
        </>
    );
};

export default PostAboutProductService;