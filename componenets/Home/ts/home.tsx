
import React, { useState } from 'react';
import {NativeScrollEvent, Text, View} from 'react-native';
import { ActivityIndicator, Colors } from 'react-native-paper';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

// Componenets
import Categories, { CategoriesValues } from './categories';
import Movies from './Movies/movies';

// custom hooks
import { useMovies } from './useMovies';
import useGenres from './useGenres';

//Styling
import { homeScreen } from '../style/home';
import { accentColor } from '../../utilities/style/colors';

//navigation
import { StackNavigationProp } from '@react-navigation/stack';



const HomeScreen: React.FC = ( ) => {

  const [selectedCategory, setSelectedCategory] = useState(CategoriesValues.upcoming); // default category
  const {moviesData, fetchMore, error} = useMovies(selectedCategory); // takes the default value
   useGenres();

    return (
        <View>
          
          <ScrollView 
          onScroll={({nativeEvent}) => {
            if (isCloseToBottom(nativeEvent)) {
              fetchMore();
              console.log('reached end')
            }
          }}
          scrollEventThrottle={400}
          >
            <Categories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            
            <Movies  MoviesList={moviesData.movies} error={error} />
            { 
              moviesData.fetching &&
              <View style={homeScreen.loading}>
                <ActivityIndicator color={accentColor} />
              </View>
            }

          </ScrollView>
        </View>
      );
}


const isCloseToBottom = (nativeEvent:NativeScrollEvent) => {
  const paddingToBottom = 20;
  return nativeEvent.layoutMeasurement.height + nativeEvent.contentOffset.y >= nativeEvent.contentSize.height - paddingToBottom;
};



export default HomeScreen;