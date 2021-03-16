import React from 'react';
import { View, Image, Text } from 'react-native';


// utilities
import { FactorImage } from '../../../../utilities/helpers/factorImage';


// Styling
import {header} from '../style/header';

interface Props{
    movie:Movie,
}

const Header:React.FC<Props> = ({movie}) => {

    return (
        <View style={header.view}>
             <Image style={{borderRadius:20,maxWidth: '40%',height:250,aspectRatio:1, marginBottom:20}} source={{uri : FactorImage(movie.poster_path)}} />
             <Text style={header.text}>{movie.title}</Text>
             <Text style={[header.text,header.rate]}>{movie.vote_average*10}%</Text>
        </View>
    ); 
}

export default Header;