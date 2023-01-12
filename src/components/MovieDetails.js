import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Hero from './Hero';

const API_KEY='82851af9faf37d9dadc32e70cfc3ed30'
let LANG='en-US';

let BASED_URL=`https://api.themoviedb.org/3/movie/`;
let BASE_IMG_URL="https://image.tmdb.org/t/p/w500/";
let BACKDROP_IMG_URL="https://image.tmdb.org/t/p/original/";

let CardDetails=({title,story,rate,lang,release_date,genre,adult,country})=>{
  return (
    <div className="card">
  <h5 className="card-header">{title}</h5>
  <div className="card-body">
    <h5 className="card-title">story</h5>
    <p className="card-text lead">{story}</p>
  </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">spoken language : <strong>{lang}</strong></li>
        <li className="list-group-item"><strong>{(adult)?  "for adult":'not for adult'}</strong></li>
        <li className="list-group-item">genre : <strong> {genre}</strong></li>
        <li className="list-group-item">vote average : <strong>{rate}</strong></li>
      </ul>
  <div className="card-footer">
      <h5 className="text-muted">released at {release_date}</h5>
      <h5 className="">country: {country}</h5>
      <a href="#" className="btn btn-primary">Go somewhere</a>

</div>
</div>
  )
}


const MovieDetails = () => {
    const {id}=useParams();
 

    
    const [movieDetails,setMovieDetails]=useState();
    const [isLoading,setIsLoading]=useState(true);
    useEffect(()=>{
        
          fetch(BASED_URL+`${id}?api_key=${API_KEY}&language=${LANG}`)
          .then(res=>res.json())
          .then(data =>{setMovieDetails(data)})
          setIsLoading(false)


    },[id]);
    
    function renderDetailsSuccessfully(){
      if(isLoading)
        return <Hero title="loading" />
      }
    if(movieDetails){
     let a= BACKDROP_IMG_URL+movieDetails.backdrop_path
      return ( 
      <>
        <Hero title={movieDetails.title} backdrop={a}/>
        <div className="container-fluid my-5">
          <div className="row  ">
            <div className="col-lg">
              <img src={BASE_IMG_URL+movieDetails.poster_path} alt={MovieDetails.title} className="img-responsive  rounded" />
            </div>
            <div className="col-lg">
             <CardDetails title={movieDetails.title} story={movieDetails.overview} rate={movieDetails.vote_average} country={movieDetails.production_countries[0].name} lang={movieDetails.spoken_languages[0].name} release_date={movieDetails.release_date} genre={movieDetails.genres[0].name} adult={movieDetails.adult} />

            </div>

          </div>
        </div>
      </>)
    }

  return   renderDetailsSuccessfully();
}

export default MovieDetails