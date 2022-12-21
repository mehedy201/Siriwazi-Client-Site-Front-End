import React from 'react';
import heroImage from '../../Images/search&post.webp'
import './Home.css';
import { BsPlusLg } from 'react-icons/bs';
import { BsSearch } from 'react-icons/bs';


const Home = () => {
    return (
<div className="hero">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={heroImage} className="max-w-sm" alt='postandsearch'/>
    <div>
      <p className="text-4xl font-bold for_font_family">Access information about other people, organizations or products and services in the market</p>
      <p className="py-6 text-justify">Are you happy with somebody, an organization, or a product/service, share your experience with the world on Siriwazi to promote that person/organization/product. If you are not happy, share your experience so that nobody else will go through what you have experienced. At the end, it all comes to the light, so let us treat each other better</p>
      <div className='flex mt-3'>
        <div className='mr-4'>
        {/* <!-- The button to open modal --> */}
            <label htmlFor="my-modal-6" className="hero_section_button1 flex items-center"><BsPlusLg className='mr-2'/> Post Information</label>
                
            {/* <!-- Put this part before </body> tag --> */}
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                <div className="modal-action">
                  <label htmlFor="my-modal-6" className="btn btn-sm capitalize">Close</label>
                </div>
              </div>
            </div>
        </div>
        <div>
            {/* <!-- The button to open modal --> */}
            <label htmlFor="my-modal-7" className="hero_section_button2 flex items-center"><BsSearch className='mr-2'/> Search Information</label>

            {/* <!-- Put this part before </body> tag --> */}
            <input type="checkbox" id="my-modal-7" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
                <h3 className="font-bold text-lg"> random Internet user!</h3>
                <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                <div className="modal-action">
                  <label htmlFor="my-modal-7" className="btn btn-sm capitalize">Close</label>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default Home;