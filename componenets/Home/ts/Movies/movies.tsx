import React from 'react';
import { Text, View, ScrollView } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';

// Componenets
import MovieCard from './movieCard';



interface Props{
    MoviesList:Movie[],

    error:{err:boolean, msg:string}
}


const Movies: React.FC<Props> = ({MoviesList, error}) => {

    const movies = MoviesList?.map((movie, index)=> <MovieCard key={`movie-${index}`} Movie={movie} />)

    return (
        <View>
            {error.err ? <Text>{error.msg}</Text> : movies }
        </View>
    );
}


export default Movies;