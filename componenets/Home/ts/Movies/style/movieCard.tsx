import { StyleSheet } from 'react-native';

// Colors
import { accentColor } from '../../../../utilities/style/colors';

const PADDING:number = 5;

export const movieCard = StyleSheet.create({
    container: {
        backgroundColor:'white',
        display:'flex',
        flexDirection:'row',
        height:200,
        padding:20,
        marginTop:10,
    },
    title:{
        fontSize:18,
        fontWeight:'bold',
        marginBottom:10,
    },
    date:{
        fontSize:14,
        marginVertical:5
    },
    posterView:{
        padding:PADDING,
        flex:2,
    },
    detailsView:{
       
        marginLeft:5,
        padding:PADDING,
        flex:3
    },
    rateView:{
        flex:1,
        alignSelf:'flex-end',
    },
    rate:{
        fontSize:18,
        fontWeight:'bold',
        color: accentColor,
        textAlign:'right'
    },
    genersView:{
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        flexDirection:'row',
        marginVertical:10,
    }

})