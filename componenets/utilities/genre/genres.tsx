import React from 'react';
import { Text } from 'react-native';

//Styling
import { genreStyling } from './style/genre';

// genre data
import { genres } from '../../Home/ts/useGenres';

interface Props{
    genreID: number,
}


const Genre: React.FC<Props> = ({genreID}) => {

    

    return (
    <Text style={genreStyling.genre}>
        
        {getGenre(genreID)}
    </Text>
    );
}


const getGenre = (genreID:number) => {
    let genreName:string = '404';
    genres.forEach(genre => {
        
        if(genre.id === genreID){
            genreName = genre.name
        } 
    });
    return genreName;
}

export default Genre;