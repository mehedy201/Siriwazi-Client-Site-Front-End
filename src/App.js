import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import PostAboutPerson from './Pages/PostAboutPerson/PostAboutPerson';
import FooterSection from './SheardComponents/FooterSection/FooterSection';
import NavigationMenu from './SheardComponents/NavigationMenu/NavigationMenu';

function App() {
  return (
    <div >
      <header className='xl:max-w-[1140px] lg:max-w-[90%] md:max-w-[90%] sm:max-w-[90%] w-[95%] mx-auto'>
        <NavigationMenu/>
      </header>
      <main className='xl:max-w-[1140px] lg:max-w-[90%] md:max-w-[90%] sm:max-w-[90%] w-[95%] mx-auto'>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/post-about-a-person' element={<PostAboutPerson/>}></Route>
        </Routes>
      </main>
      <footer>
        <FooterSection/>
      </footer>
    </div>
  );
}

export default App;
