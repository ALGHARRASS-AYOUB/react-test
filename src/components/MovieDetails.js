import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Hero from './Hero';

const API_KEY='82851af9faf37d9dadc32e70cfc3ed30'
const LANG='en-US';

let BASED_URL=`https://api.themoviedb.org/3/movie/`;
let BASE_IMG_URL="https://image.tmdb.org/t/p/w500/";

const CardDetails=({title,story,rate,lang,release_date,genre,adult})=>{
  return (
    <div class="card">
  <h5 class="card-header">{title}</h5>
  <div class="card-body">
    <h5 class="card-title">story</h5>
    <p class="card-text lead">{story}</p>
  </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">spoken language : {lang}</li>
        <li class="list-group-item">{(adult)?"for adult":'not for adult'}</li>
        <li class="list-group-item">genre : {genre}</li>
        <li class="list-group-item">vote average : {rate}</li>
      </ul>
  <div className="card-footer">
      <h5 className="text-muted">released at {release_date}</h5>
      <a href="#" class="btn btn-primary">Go somewhere</a>

</div>
</div>
  )
}


const MovieDetails = () => {
    const {id}=useParams();
 
    BASED_URL=BASED_URL+`${id}?api_key=${API_KEY}&language=${LANG}`
    
    const [movieDetails,setMovieDetails]=useState();
    const [isLoading,setIsLoading]=useState(true);
    useEffect(()=>{
        
          fetch(BASED_URL)
          .then(res=>res.json())
          .then(data =>{setMovieDetails(data)})
          setIsLoading(false)


    },[id]);
    
    function renderDetailsSuccessfully(){
      if(isLoading)
        return <Hero title="loading" />
      }
    if(movieDetails){
    
      return ( 
      <>
        <Hero title={movieDetails.title}/>
        <div className="container-fluid my-5">
          <div className="row">
            <div className="col-3">
              <img src={BASE_IMG_URL+movieDetails.poster_path} alt={MovieDetails.title} className=" rounded" />
            </div>
            <div className="col-9">
            <CardDetails title={movieDetails.title} story={movieDetails.overview} rate={movieDetails.vote_average} lang={movieDetails.spoken_languages.name} release_date={movieDetails.release_date} genre={movieDetails.genres.name} adult={movieDetails.adult} />

            </div>

          </div>
        </div>
      </>)
    }

  return   renderDetailsSuccessfully();
}

export default MovieDetails