import React, { useState } from 'react';

const EditForm = ({newData}) => {
    const {_id} = newData;
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        let updateData;
        updateData = {_id, title, text};

        if (title || text) {
            updateData = {_id, title, text}
        } else {
            setTitle(newData.title)
            setText(newData.text)
        }
        fetch('http://localhost:5000/heroContent', {
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateData)
        }).then(res => res.json())
        .then(data => console.log('data', data))

    }
    
    return (
        <form onSubmit={handleSubmit}>
            <p className='font-bold'>Title</p>
                {
                    newData?.title? <input onChange={e => setTitle(e.target.value)} defaultValue={newData.title} className='edite_content_input mb-3' type="text" /> : <input onChange={e => setTitle(e.target.value)} placeholder='Type hero Title' className='edite_content_input mb-3' type="text" />
                }
                <br />
                <p className='font-bold'>Text</p>
                {
                    newData?.text? <textarea onChange={e => setText(e.target.value)} defaultValue={newData.text} className='edite_content_input' name="" id="" cols="10" rows="10"></textarea> : <textarea onChange={e => setText(e.target.value)} placeholder='Type hero Text' className='edite_content_input' name="" id="" cols="10" rows="10"></textarea>
                }
                <br />
                <input className='btn btn-sm bg-primary font-bold pointer' type="submit" value='submit' />
        </form>
    );
};

export default EditForm;