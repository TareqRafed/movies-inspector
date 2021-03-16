import { useState } from 'react';
import { mySuperSecretApiKey } from '../../api/api';


 export let genres: Genre[] = [];

const useGenres = () => {
  getData();
}




const getData = async () => {
    console.log('getting genres')
    let request: any = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${mySuperSecretApiKey}&language=en-US`)
    .then(data => data.json())
    .then(data => data.genres)
    .catch(err => console.log(err))
     genres = request;
     console.log(genres);
   
}
export default useGenres;