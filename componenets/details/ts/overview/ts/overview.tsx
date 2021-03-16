import React from 'react';
import { View, Text } from 'react-native';

// Styling
import { overview as overviewStyle } from '../style/overview';


interface Props{
    overview:string | undefined
}


const Overview:React.FC<Props> = ({overview}) => {

    return (
        <View style={overviewStyle.view}>
             <Text style={overviewStyle.headline}>Overview</Text>
             <Text style={overviewStyle.text}>{overview}</Text>
        </View>
    ); 
}

export default Overview;