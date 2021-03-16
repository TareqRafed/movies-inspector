import React from 'react';
import { View, Text } from 'react-native';

// Styling
import { genres as genresStyling } from '../style/genres';

// Components
import Genre from '../../../../utilities/genre/genres'



interface Props{
    genresIDs: any[]
}


const Genres:React.FC<Props> = ({genresIDs}) => {

    

    return (
        <View style={genresStyling.view}>
             <Text style={genresStyling.headline}>Genres</Text>
             <View style={genresStyling.genersView}> 
                {genresIDs.map((gen, index)=><Genre key={`gen${index}`} genreID={gen} />)}
             </View>
        </View>
    ); 
}

export default Genres;