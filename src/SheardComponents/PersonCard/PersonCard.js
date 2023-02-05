import React from 'react';
import { useNavigate } from 'react-router-dom';

const PersonCard = ({data, handleDelete}) => {
    const { _id} = data;
    console.log(data)

    const navigate = useNavigate('')
    const singlePageHandle = (id) => {
        navigate(`/person-details/${id}`)
    }

    
    return (
         <tr>
            <th></th> 
            <td className='text-cyan-600 font-semibold'>{ data?.identityName? data.identityName: ''} </td> 
            <td>{ data?.identityNo? data.identityNo: ''}</td> 
            <td>{ data?.singleCountry? data.singleCountry: ''}</td> 
            <td>
                {
                    data?.trueFals === 'Most likely not true' && <span className='font-semibold py-0.5 px-4 border border-red-700'>{data?.trueFals}</span>
                }
                {
                    data?.trueFals === 'Most likely true' && <span className='font-semibold py-0.5 px-4 border border-green-500'>{data?.trueFals}</span>
                }
                {
                    data?.trueFals === 'Maybe true' && <span className='font-semibold py-0.5 px-4 border border-amber-400'>{data?.trueFals}</span>
                }
            </td> 
            <td>{data?.date && data.date}</td> 
            <td><button onClick={() => singlePageHandle(_id)} className='btn btn-xs bg-sky-400 capitalize border-none'>Full Details</button></td> 
            {
                handleDelete && <td><button onClick={() => handleDelete(_id)} className='btn bg-red-700 btn-xs capitalize border-none'>Delete</button></td>
            }
        </tr>
    );
};

export default PersonCard;