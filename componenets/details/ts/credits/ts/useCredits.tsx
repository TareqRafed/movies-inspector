import { useEffect, useState } from "react"
import { mySuperSecretApiKey } from '../../../../api/api';



const useCredits = (movieID:number) => {

    const [Loading, setLoading] = useState(false);
    const [error, setError] = useState({err:false, msg:''});
    const [actors, setActors] = useState<Actor[]>([]);

    useEffect(() => {

        const getData = async () => {

            setLoading(true);
            let request:any = await fetch(getApi(movieID))
            .then(data => data.json())
            .then(data => data.cast)
            .catch(err => setError({err:true, msg:err}))
            setLoading(false)
    
            let actors: Actor[] = request;

            console.log(actors);
    
            setActors(actors)
        }

        getData();
        
    }, [])

    return {actors, Loading, error}
}



const getApi = (movieID:number) => `https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=${mySuperSecretApiKey}&language=en-US`


 

export default useCredits;