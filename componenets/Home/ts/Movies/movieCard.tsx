import React from 'react';
import { Text, View, Image } from 'react-native';

// Componenets
import Geners from '../../../utilities/genre/genres';

// Styling
import { movieCard } from './style/movieCard';

// utilities
import { FactorImage } from '../../../utilities/helpers/factorImage';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

type ProfileScreenNavigationProp = StackNavigationProp<
StackParamList,
'Home'
>;

interface Props{
    Movie: Movie,
   
}

const MovieCard: React.FC<Props> = ({Movie}) => {

    const navigation = useNavigation<ProfileScreenNavigationProp>();

    return (
        <View onTouchEnd={()=> navigation.push('Movies', {movie:Movie})} style={movieCard.container}>
            <View style={movieCard.posterView}>
                <Image style={{borderRadius:20,maxWidth: '100%',height:'100%',aspectRatio:1}} source={{uri : FactorImage(Movie.poster_path)}} />
            </View>
            <View style={[movieCard.detailsView]}>
                <Text style={movieCard.title}>
                    {Movie.title}
                </Text>
                <Text style={movieCard.date}>
                    {Movie.release_date}
                </Text>
                <View style={movieCard.genersView}>
                    {Movie.genre_ids.map((gen, index)=><Geners key={`gen${index}`} genreID={gen} />)}
                </View>
             
            </View>
            <View style={movieCard.rateView}>
                <Text style={movieCard.rate}>
                    {Movie.vote_average*10}%
                </Text>
            </View>
        </View>
    );
}


export default MovieCard;