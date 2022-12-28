import { Route, Routes } from 'react-router-dom';
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

function App() {
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
        </Routes>
      </main>
      <footer>
        <FooterSection/>
      </footer>
    </div>
  );
}

export default App;
