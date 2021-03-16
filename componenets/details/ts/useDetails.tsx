import { useEffect, useState } from "react"
import { mySuperSecretApiKey } from '../../api/api';



const useDetails = (movieID:number) => {

    const [Loading, setLoading] = useState(false);
    const [error, setError] = useState({err:false, msg:''});
    const [details, setDetails] = useState<MovieDetails>();

    useEffect(() => {

        const getData = async () => {

            setLoading(true);
            let request:any = await fetch(getApi(movieID))
            .then(data => data.json())
            .then(data => data)
            .catch(err => setError({err:true, msg:err}))
            setLoading(false)
    
            let details: MovieDetails = request;

            console.log(details);
    
            setDetails(details)
        }

        getData();
        
    }, [])

    return {details, Loading, error}
}



const getApi = (movieID:number) => `https://api.themoviedb.org/3/movie/${movieID}?api_key=${mySuperSecretApiKey}&language=en-US`


 

export default useDetails;