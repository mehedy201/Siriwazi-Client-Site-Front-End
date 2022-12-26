import React, { useState } from 'react';
import heroImage from '../../Images/search&post.webp'
import './Home.css';
import { BsPlusLg } from 'react-icons/bs';
import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Checkbox } from 'antd';



const Home = () => {
  const [termsCondition, setTermsCondition] = useState(false);

  const onChange = (e) => {
    setTermsCondition(e.target.checked);
  };


    return (
        <div className='xl:max-w-[1140px] lg:max-w-[90%] md:max-w-[90%] sm:max-w-[90%] w-[95%] mx-auto'>
          <div className="hero my-8">
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
                      <div className="modal">
                        <div className="modal-box w-11/12 max-w-5xl relative">
                        <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                          {
                            termsCondition === true ?
                            <h3 className="font-bold text-xl for_font_family capitalize mb-4">Post Information</h3>
                            :
                            <h3 className="font-bold text-xl for_font_family capitalize mb-4">Accept terms and conditions</h3>
                          }
                          {
                            termsCondition === true ? 
                          <div className='divide-y divide-slate-200'>
                            <Link className='block p-2 flex items-center font-semibold hover:bg-slate-100	' to={'/post-about-a-person'}><BsPlusLg className='mr-2'/> Posting About a Person</Link>
                            <Link className='block p-2 flex items-center font-semibold hover:bg-slate-100 ' to={'/post-about-an-organization'}><BsPlusLg className='mr-2'/> Posting About an Organization</Link>
                            <Link className='block p-2 flex items-center font-semibold hover:bg-slate-100	' to={'/post-about-an-product-service'}><BsPlusLg className='mr-2'/> Posting About an Product/Service</Link>
                          </div>
                          : 
                          <div>
                            <p className='text-justify'>
                              The information provided by Siriwazi (“we”, “us” or “our”) on <a className='text-primary' href="http://siriwazi.com">http://siriwazi.com</a> is for general information purposes only. All information on the site is provided in good faith however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site. UNDER NO CIRCUMSTANCES SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE SITE OR RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE. YOUR USE OF THE SITE AND RELIANCE ON ANY INFORMATION ON THE SITE IS SOLELY AT YOUR OWN RISK, AND IS YOUR OWN RESPONSIBILITY. We, however, reserve the right to delete or suspend any post, upon our discretion, deemed unfit or unethical to the consumption of the general public without giving prior notice to you as a user, or any other party.
                            </p>
                            <Checkbox className='text-primary font-semibold mt-4' onChange={onChange}>Accept Terms and Condition</Checkbox>
                          </div>
                          }
                        </div>
                      </div>
                  </div>
                  <div>
                      {/* <!-- The button to open modal --> */}
                      <label htmlFor="my-modal-7" className="hero_section_button2 flex items-center"><BsSearch className='mr-2'/> Search Information</label>

                      {/* <!-- Put this part before </body> tag --> */}
                      <input type="checkbox" id="my-modal-7" className="modal-toggle" />
                      <div className="modal">
                        <div className="modal-box w-11/12 max-w-5xl relative">
                        <label htmlFor="my-modal-7" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                          {
                            termsCondition === true ?
                            <h3 className="font-bold text-xl for_font_family capitalize mb-4">Search Information</h3>
                            :
                            <h3 className="font-bold text-xl for_font_family capitalize mb-4">Accept terms and conditions</h3>
                          }
                          {
                            termsCondition === true ? 
                            <div className='divide-y divide-slate-200'>
                              <Link className='block p-2 flex items-center font-semibold hover:bg-slate-100	' to={'/'}><BsSearch className='mr-2'/> Person Search</Link>
                              <Link className='block p-2 flex items-center font-semibold  hover:bg-slate-100 ' to={'/'}><BsSearch className='mr-2'/> Organization Search</Link>
                              <Link className='block p-2 flex items-center font-semibold hover:bg-slate-100	' to={'/'}><BsSearch className='mr-2'/> Product/Service Search</Link>
                            </div>
                          : 
                          <div>
                            <p className='text-justify'>
                              The information provided by Siriwazi (“we”, “us” or “our”) on <a className='text-primary' href="http://siriwazi.com">http://siriwazi.com</a> is for general information purposes only. All information on the site is provided in good faith however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site. UNDER NO CIRCUMSTANCES SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE SITE OR RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE. YOUR USE OF THE SITE AND RELIANCE ON ANY INFORMATION ON THE SITE IS SOLELY AT YOUR OWN RISK, AND IS YOUR OWN RESPONSIBILITY. We, however, reserve the right to delete or suspend any post, upon our discretion, deemed unfit or unethical to the consumption of the general public without giving prior notice to you as a user, or any other party.
                            </p>
                            <Checkbox className='text-primary font-semibold mt-4' onChange={onChange}>Accept Terms and Condition</Checkbox>
                          </div>
                          }
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