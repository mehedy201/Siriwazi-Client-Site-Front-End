import React from 'react';
import ProductServicePostComponent from '../../SheardComponents/PostComponents/ProductServicePostComponent';

const ProductServicePost = () => {

    const emailSentLink = '/admin/post-sent-admin'

    return (
        <div>
            <ProductServicePostComponent emailSentLink={emailSentLink}/>
        </div>
    );
};

export default ProductServicePost;