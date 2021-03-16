import { RouteProp, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { FactorImage } from '../../utilities/helpers/factorImage';

//Components
import Header from './header/ts/header';
import Overview from './overview/ts/overview';
import { ActivityIndicator } from 'react-native-paper';
import Genres from './genres/ts/genres';
import Credits from './credits/ts/credits';

//styling
import { accentColor } from '../../utilities/style/colors'


// Custom Hooks
import useDetails from './useDetails';

type ProfileScreenRouteProp = RouteProp<StackParamList, 'Movies'>;

type Props = {
  route: ProfileScreenRouteProp;
};

const DetailsScreen: React.FC<Props> = () => {

  const route = useRoute<ProfileScreenRouteProp>();

  const {details, Loading, error} = useDetails(route.params.movie.id);
  
    return (
        <View>
          <ScrollView>
            <Header movie={route.params.movie} />
            {error.err && <Text>Couldn't connect to the server, check internet connection</Text>}
            {Loading ?  <ActivityIndicator color={accentColor}></ActivityIndicator> : !error.err && <Overview overview={details?.overview} /> }
            <Genres genresIDs={route.params.movie.genre_ids} />
            <Credits movieID={route.params.movie.id}  />
          </ScrollView>
        </View>
      );
}


export default DetailsScreen;