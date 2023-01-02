import { Route, Routes } from 'react-router-dom';
import AdminPageLayout from './AdminPages/AdminPageLayout/AdminPageLayout';
import OrganizationPost from './AdminPages/CreatePost/OrganizationPost';
import PersonPost from './AdminPages/CreatePost/PersonPost';
import ProductServicePost from './AdminPages/CreatePost/ProductServicePost';
import Dasboard from './AdminPages/Dashboard/Dasboard';
import ManageOrganizationPost from './AdminPages/ManagePost/ManageOrganizationPost';
import ManagePersonPost from './AdminPages/ManagePost/ManagePersonPost';
import ManageProductServicePost from './AdminPages/ManagePost/ManageProductServicePost';
import SentPostAdmin from './AdminPages/SentPostAdmin';
import './App.css';
import Home from './Pages/Home/Home';
import PostAboutOrganization from './Pages/PostAboutOrganization/PostAboutOrganization';
import PostAboutPerson from './Pages/PostAboutPerson/PostAboutPerson';
import PostAboutProductService from './Pages/PostAboutProductService/PostAboutProductService';
import SearchAboutOrganization from './Pages/SearchAboutOrganization/SearchAboutOrganization';
import SearchAboutPerson from './Pages/SearchAboutPerson/SearchAboutPerson';
import SearchAboutProductService from './Pages/SearchAboutProductService/SearchAboutProductService';
import FooterSection from './SheardComponents/FooterSection/FooterSection';
import NavigationMenu from './SheardComponents/NavigationMenu/NavigationMenu';
import PostSent from './SheardComponents/PostSent/PostSent';
import SinglePage from './SheardComponents/SinglePage/SinglePage';
import SinglePageOrganization from './SheardComponents/SinglePage/SinglePageOrganization';
import SinglePageProductService from './SheardComponents/SinglePage/SinglePageProductService';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminLogin from './Pages/AdminLogin/AdminLogin';
import RequirAuth from './SheardComponents/RequirAuth/RequirAuth';
import EditHeroContent from './AdminPages/EditHeroContent/EditHeroContent';

import ReactGA from 'react-ga';
import { useEffect } from 'react';


function App() {

  useEffect( () => {
    ReactGA.initialize('UA-252883563-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  },[])
  return (
    <div >
      <header className=''>
        <NavigationMenu/>
      </header>
      <main className=''>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/post-about-a-person' element={<PostAboutPerson/>}></Route>
          <Route path='/post-about-an-organization' element={<PostAboutOrganization/>}></Route>
          <Route path='/post-about-an-product-service' element={<PostAboutProductService/>}></Route>
          <Route path='/search-about-a-person' element={<SearchAboutPerson/>}></Route>
          <Route path='/search-about-an-organization' element={<SearchAboutOrganization/>}></Route>
          <Route path='/search-about-product-service' element={<SearchAboutProductService/>}></Route>
          <Route path='/person-details/:id' element={<SinglePage/>}></Route>
          <Route path='/organization-details/:id' element={<SinglePageOrganization/>}></Route>
          <Route path='/product-service-details/:id' element={<SinglePageProductService/>}></Route>
          <Route path='/post-sent' element={<PostSent/>}></Route>
          {/* Admin Pages _____________________________________________________________________________ */}
          <Route path='/admin' element={<AdminLogin/>}></Route>
          {/* <Route path='/admin-dashboard' element={<AdminPageLayout/>}> */}
          <Route path='/admin-dashboard' element={<RequirAuth><AdminPageLayout/></RequirAuth>}>
            <Route index element={<RequirAuth><Dasboard/></RequirAuth>}></Route>
            <Route index element={<Dasboard/>}></Route>
            <Route path='dashboard' element={<RequirAuth><Dasboard/></RequirAuth>}></Route>
            <Route path='create-person-post' element={<RequirAuth><PersonPost/></RequirAuth>}></Route>
            <Route path='create-organization-post' element={<RequirAuth><OrganizationPost/></RequirAuth>}></Route>
            <Route path='create-product-service-post' element={<RequirAuth><ProductServicePost/></RequirAuth>}></Route>
            <Route path='manage-person-post' element={<RequirAuth><ManagePersonPost/></RequirAuth>}></Route>
            <Route path='manage-organization-post' element={<RequirAuth><ManageOrganizationPost/></RequirAuth>}></Route>
            <Route path='manage-product-sercive-post' element={<RequirAuth><ManageProductServicePost/></RequirAuth>}></Route>
            <Route path='post-sent-admin' element={<RequirAuth><SentPostAdmin/></RequirAuth>}></Route>
            <Route path='edit-hero-content' element={<RequirAuth><EditHeroContent/></RequirAuth>}></Route>
          </Route>
        </Routes>
      </main>
      <footer>
        <FooterSection/>
      </footer>
      <ToastContainer/>
    </div>
  );
}

export default App;
