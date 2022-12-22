import { Checkbox, DatePicker, Input, Select, TimePicker } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React, { useState } from 'react';
import dayjs from 'dayjs';

const PostAboutPerson = () => {
    // Input Select Phone or Other------------------------
    const [identityName, setIdentityName] = useState('')
    console.log(identityName)

    const [identityNo, setIdentityNo] = useState('')
    console.log(identityNo)

    const [title, setTitle] = useState('')
    console.log(title)

    // Text Area Value------------------------------------
    const [discribeDetails, setDiscribeDetails] = useState('')
    console.log('Change:', discribeDetails);
    // Text Area Value------------------------------------
    const [discribeMoreDetails, setDiscribeMoreDetails] = useState('')
    console.log('Change:', discribeMoreDetails);
    // Date and Time State
    const [selectDate, setSelectDate] = useState([])
    const [selectTime, setSelectTime] = useState([])
    console.log(selectDate)
    console.log(selectTime)

    // multiple Select Describe The person..................
    const [discribeWithCheck, setDiscribeWithCheck] = useState('')
    console.log(discribeWithCheck)

    // Last True False Value 
    let defaultValue = 'Most likely not true'
    const [trueFals, setTrueFalse] = useState(defaultValue);
 

    


    return (
        // <div className='py-4 bg-[#8f0909] border-t-2 border-white-500'>
        //     <div className='xl:max-w-[1140px] lg:max-w-[90%] md:max-w-[90%] sm:max-w-[90%] w-[95%] mx-auto'>
        //         <div className='py-12'>
        //             <p className='text-white font-bold text-4xl for_font_family'>Post About a Person</p>
        //             <div className='w-100 bg-white md:w-1/2 mt-2' style={{height: '1px'}}></div>
        //         </div>
        //     </div>
        // </div>
        <>
            <div className='py-4 bg-[#8f0909] border-t-2 border-white-500'>
                <div className='xl:max-w-[1140px] lg:max-w-[90%] md:max-w-[90%] sm:max-w-[90%] w-[95%] mx-auto'>
                    <div className='py-12'>
                        <p className='text-white font-bold text-4xl for_font_family'>Post About a Person</p>
                        <div className='w-100 bg-white md:w-1/2 mt-2' style={{height: '1px'}}></div>
                    </div>
                </div>
            </div>
            <div className='mb-12 xl:max-w-[1140px] lg:max-w-[90%] md:max-w-[90%] sm:max-w-[90%] w-[95%] mx-auto md:p-12 shadow'>
                <form className='p-6 md:p-12 shadow'>
                    <p className='font-bold text-2xl for_font_family mb-4'>Post Your valuable Feadback</p>
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
                            {identityName? <Input size='large' onChange={e => setIdentityNo(e.target.value)} placeholder={`Type ${identityName} No:`} required /> : ''}
                        </div>
                    </div>
                        {/* Post Title ----------------------------- */}
                        <p className='font-bold mb-1 mt-2'>Post Title <span className='text-red-600'>*</span></p>
                        <Input className='font-bold' onChange={e => setTitle(e.target.value)} size='large' placeholder='Title...' required />
                        {/* Discribe About Person ------------ */}
                        <p className='font-bold mb-1 mt-2'>Describe the person <span className='text-red-600'>*</span></p>
                        <TextArea
                            showCount
                            maxLength={200}
                            style={{
                              height: 120,
                              marginBottom: 24,
                            }}
                            onChange={e => setDiscribeDetails(e.target.value)}
                            placeholder="Right Here.........."
                            required
                        />
                        <p className='font-bold mb-1 mt-2'>Describe the person using a maximum of three words <span className='text-red-600'>*</span></p>
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
                                <Checkbox className='checkBoxInput pl-2' value="Con Man/Woman">Con Man/Woman</Checkbox>
                                <Checkbox className='checkBoxInput' value="Stingy/mean">Stingy/mean</Checkbox>
                                <Checkbox className='checkBoxInput' value="Player/Heart Breaker">Player/Heart Breaker</Checkbox>
                                <Checkbox className='checkBoxInput' value="Gold Digger">Gold Digger</Checkbox>
                                <Checkbox className='checkBoxInput' value="Corrupt">Corrupt</Checkbox>
                                <Checkbox className='checkBoxInput' value="Dishonest">Dishonest</Checkbox>
                                <Checkbox className='checkBoxInput' value="Thief">Thief</Checkbox>
                                <Checkbox className='checkBoxInput' value="Violent">Violent</Checkbox>
                                <Checkbox className='checkBoxInput' value="Does not Pay Debts">Does not Pay Debts</Checkbox>
                                <Checkbox className='checkBoxInput' value="Horrible Boss">Horrible Boss</Checkbox>
                                <Checkbox className='checkBoxInput' value="Sexual Pervert">Sexual Pervert</Checkbox>
                                <Checkbox className='checkBoxInput' value="Truthful">Truthful</Checkbox>
                                <Checkbox className='checkBoxInput' value="Generous">Generous</Checkbox>
                                <Checkbox className='checkBoxInput' value="Loyal">Loyal</Checkbox>
                                <Checkbox className='checkBoxInput' value="Humble">Humble</Checkbox>
                                <Checkbox className='checkBoxInput' value="Professional">Professional</Checkbox>
                                <Checkbox className='checkBoxInput' value="Honest">Honest</Checkbox>
                                <Checkbox className='checkBoxInput' value="Dependable">Dependable</Checkbox>
                                <Checkbox className='checkBoxInput' value="Disciplined">Disciplined</Checkbox>
                                <Checkbox className='checkBoxInput' value="Pays Debts">Pays Debts</Checkbox>
                                <Checkbox className='checkBoxInput' value="Best Boss Ever">Best Boss Ever</Checkbox>
                                <Checkbox className='checkBoxInput' value="Romantic">Romantic</Checkbox>
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
                                setDiscribeMoreDetails(e.target.value)
                                if(discribeMoreDetails.length > 5) setTrueFalse(trueFalseData1)
                                if(discribeMoreDetails.length > 5 && selectDate.length > 1) setTrueFalse(trueFalseData2)
                                if(discribeMoreDetails.length < 5 && selectDate.length > 1) setTrueFalse(trueFalseData1)
                                if(discribeMoreDetails.length < 5 && selectDate.length < 1) setTrueFalse(trueFalseData0)
                            }}
                            placeholder="Right Here.........."
                        />
                        <p className='font-bold mb-1 mt-2'>Date and Time when it happened (Optional)</p>
                        <div className='flex '>
                            <DatePicker className='mr-2' onChange={(date, dateString) =>{
                                 let trueFalseData0 = 'Most likely not true'
                                 let trueFalseData1 = 'Maybe true'
                                 let trueFalseData2 = 'Most likely true'
                                 setSelectDate( dateString)
                                 if(dateString.lenght > 1) setTrueFalse(trueFalseData1)
                                 if(dateString.length > 1 && discribeMoreDetails.length > 5)setTrueFalse(trueFalseData2)
                                 if(dateString.length < 1 && discribeMoreDetails.length > 5)setTrueFalse(trueFalseData1)
                                 if(dateString.length < 1 && discribeMoreDetails.length < 5)setTrueFalse(trueFalseData0)
                            }} />
                            <TimePicker onChange={(time, timeString) => setSelectTime(timeString)} defaultValue={dayjs('00:00:00', 'HH:mm:ss')} />
                        </div>
                        <p className='font-bold mb-1 mt-2'>The value of this input will depend on your form fill</p>
                        <Input size='large' value={trueFals? trueFals: ''} disabled readOnly/>
                        {/* Submit Button -------------------------------------------------------- */}
                        <input className='mt-4 py-2 px-10 bg-[#8f0909] border-none font-bold text-black-500' type="submit" value={'Submit'} />
                </form>
            </div>
        </>
    );
};

export default PostAboutPerson;