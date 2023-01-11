import React from 'react'
import Hero from './Hero'



//API_KEY='82851af9faf37d9dadc32e70cfc3ed30';
// GET movies search example: https://api.themoviedb.org/3/search/movie?api_key=82851af9faf37d9dadc32e70cfc3ed30&language=en-US&query=star%20war&page=1&include_adult=false



const MovieCard=({movie})=> {
  let BASE_IMG_URL="https://image.tmdb.org/t/p/w500"+movie.poster_path;
  return(
    <div className="col-lg-3 col-md-3 col-2 my-2">
          <div className="card">
    <img className="card-img-top" src={BASE_IMG_URL} alt={movie.title}/>
    <div className="card-body">
      <h5 className="card-title">{movie.title}</h5>
      {/* <p  className="card-text p" >{movie.overview}</p> */}
    </div>
    <div className="card-footer">
 
      <small className="text-muted">released at {movie.release_date}</small>
      <span className="text-muted">vote average {movie.vote_average}</span>
    </div>
  </div>
    </div>
  )
}


const SearchView = ({keyword,searchResult}) => {
  
  var title='searching for '+keyword+" . . . .";
  
  
  
  console.log("seach results :",searchResult)
  if(keyword){
    
    const ResultHTML="";
    if(searchResult){
      return (
        <>
      <Hero title={title}/>
      <div className="container">
        <div className="row">
        { 
        searchResult.map((item,index)=>{
       return <MovieCard movie={item} />
      })}
        </div>
      </div>
      </>
    )
  }else{
    return  <Hero title="we do not found the film you are lookin"/>
  }
}else{
  return  <Hero title="search your film in the search bar"/>

}

  
}

export default SearchView