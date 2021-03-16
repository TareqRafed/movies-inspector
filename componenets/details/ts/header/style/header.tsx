import { StyleSheet } from 'react-native';
import { accentColor } from '../../../../utilities/style/colors'


export const header = StyleSheet.create({
    view: {
        flexDirection:'column',
        alignItems: 'center',
        height:350,
        justifyContent: 'center'
    },
    rate: {
        color:accentColor
    },
    text: {
        marginVertical:2,
        fontSize:20,
        fontWeight:'bold'
    }

})