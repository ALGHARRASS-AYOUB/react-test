import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import { Home } from './components/Home';
import NavBar from './components/NavBar';
import { Routes , Route} from 'react-router-dom';
import SearchBar from './components/SearchView';
import { useEffect, useState } from 'react';
import SearchView from './components/SearchView';



function App() {

    const [searchResult,setSearchResult]=useState([]);
    const [searchText,setSrearchText]=useState('');


    const API_KEY='82851af9faf37d9dadc32e70cfc3ed30'
    const LANG='en-US';
    var QUERY=searchText;
    let BASED_URL=`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=${LANG}`;
    useEffect(()=>{
      console.log("search text updated useeffect: ",searchText)
      fetch(BASED_URL+`&query=${QUERY}&include_adult=false`)
      .then(res=>res.json())
      .then(data=>setSearchResult(data.results))
    },[searchText]);
    
  return (
    <> 
    {/* value={searchText} searchText={searchText} */}
      <div>
        <NavBar      setSearchText={setSrearchText}/>
      </div>
        <Hero/>
        <Routes>
          <Route path="/" element={<Home/>} />

          <Route path="/About" element={<About/>}  />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Search" element={<SearchView keyword={searchText} searchResult={searchResult} />} />
        </Routes>
     
    </>

  );
}

export default App;
