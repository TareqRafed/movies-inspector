import React from 'react';
import { View, Text } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

// Components
import ActorList from './actorsList';

// Styling
import { credits as creditsStyling } from '../style/credits';
import { accentColor } from '../../../../utilities/style/colors';

// Custom Hook
import useCredits from './useCredits';


interface Props{
    movieID:number
}


const Credits:React.FC<Props> = ({movieID}) => {

    const {actors, Loading, error} = useCredits(movieID)

    return (
        <View style={creditsStyling.view}>
             <Text style={creditsStyling.headline}>Credits</Text>
             {Loading ? <ActivityIndicator color={accentColor}></ActivityIndicator> : !error.err && <ActorList actors={actors} /> }
             {error.err && <Text>Couldn't get credits :(</Text>}
             
        </View>
    ); 
}

export default Credits;