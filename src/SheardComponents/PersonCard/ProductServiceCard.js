import React from 'react';
import { useNavigate } from 'react-router-dom';


const ProductServiceCard = ({data, handleDelete}) => {
    const { _id} = data;

    const navigate = useNavigate('')
    const singlePageHandle = () => {
        navigate('/')
    }

    return (
        <tr>
            <th></th> 
            <td className='text-cyan-600 font-semibold'>{ data?.productServiceName? data.productServiceName: ''} </td> 
            <td>{ data?.inputCountryData? data.inputCountryData: ''}</td> 
            <td>{ data?.inputStateData? data.inputStateData: ''}</td> 
            <td>{ data?.inputCityData? data.inputCityData: ''}</td>
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
            <td>{data?.postingDate && data.postingDate}</td> 
            <td><button onClick={() => singlePageHandle(_id)} className='btn btn-xs bg-sky-400 capitalize border-none'>Full Details</button></td> 
            {
                handleDelete && <td><button onClick={() => handleDelete(_id)} className='btn bg-red-700 btn-xs capitalize border-none'>Delete</button></td>
            }
        </tr>
    );
};

export default ProductServiceCard;