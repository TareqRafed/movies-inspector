import React from 'react';

import { View, Text, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

// Utilites
import { FactorImage } from '../../../../utilities/helpers/factorImage';

// Styling
import { actorsList } from '../style/actorsList';


interface Props{
    actors: Actor[]
}


const ActorList: React.FC<Props> = ({actors}) => {

    let actorsView = actors.map((act, index) => <View style={actorsList.actorView} key={`actor-${index}`}>
        <Image style={actorsList.image} source={{uri : FactorImage(act.profile_path)}} />
        <Text>{act.name}</Text>
    </View>) 

    return (
        <ScrollView horizontal>
            {actorsView}
        </ScrollView>
    );
}


export default ActorList; 