import React, { useEffect, useState, useCallback, useReducer } from 'react';


// Allowed categories
import { CategoriesValues } from './categories';

// helpers
import { valueExists } from '../../utilities/helpers/checkValueInObj';

// api
import { mySuperSecretApiKey } from '../../api/api';




/// This page contains the whole logic for the main screen

type Reducer<State, Action> = (state: State, action: Action) => State;

type State = {
  movies: Movie[];
  fetching: boolean;
  page: number;
  category: string,
}


enum ActionKind {
  CategoryChanged = 'CATEGORYCHANGED',
  StackMovies = 'STACKMOVIES',
  Fetching = 'FETCHING',
  AdvancePage = 'ADVANCEPAGE'
}




type Action =
  | {
    type: ActionKind.StackMovies,
    payload: Movie[]
  }
  | {
    type: ActionKind.Fetching,
    payload: boolean
  }
  | {
    type: ActionKind.AdvancePage,
  }
  | {
    type: ActionKind.CategoryChanged,
    payload: string,
  }




export const useMovies = (clickedCategory: string) => {




  const moviesReducer = (state: State, action: Action) => {
    switch (action.type) {
      case ActionKind.StackMovies:
        return { ...state, movies: state.movies.concat(action.payload) }
      case ActionKind.Fetching:
        return { ...state, fetching: action.payload }
      case ActionKind.AdvancePage:
        return { ...state, page: state.page + 1 }
      case ActionKind.CategoryChanged:
        return { page: 1, movies: [], fetching: false, category: action.payload }

      default:
        return state;
    }
  }

  const [moviesData, moviesDispatch] = useReducer(moviesReducer, { movies: [], fetching: true, page: 1, category: clickedCategory })
  const [error, setError] = useState({ err: false, msg: '' }); // error indicator


  // check if category changed, is so change the state, which will lead to get back to init state
  if(clickedCategory != moviesData.category){
    moviesDispatch({type:ActionKind.CategoryChanged, payload:clickedCategory})
  }


  // this function is returned when the end of the list is reached
  const fetchMore = () => moviesDispatch({ type: ActionKind.AdvancePage })




  useEffect(() => {

    console.log('started useEffect')



    // Check no wrong value used to avoid bugs.
    if (!valueExists(CategoriesValues, clickedCategory)) {
      throw new Error("Category is not assigned in Categories Values.");
    }

    // To do get request

    const getData = async () => {

      moviesDispatch({ type: ActionKind.Fetching, payload: true })


      let request: any = await fetch(getApi(clickedCategory, moviesData.page))
        .then(data => data.json())
        .then(data => data.results)
        .catch(err => setError({ err: true, msg: err }))

      console.log(error)

      moviesDispatch({ type: ActionKind.Fetching, payload: false })

      let MoviesList: Movie[] = request;

      moviesDispatch({ type: ActionKind.StackMovies, payload: MoviesList });





    }

    getData();






  }, [moviesData.page, moviesData.category, moviesDispatch])



  return { moviesData, fetchMore, error };

}




const getApi = (category: string, page: number) => {

  
  const baseLink = `https://api.themoviedb.org/3/movie/`;

  // ex: https://api.themoviedb.org/3/movie/upcoming?api_key=<<api_key>>&language=en-US&page=1
  return `${baseLink}${getCategoryLink(category)}?api_key=${mySuperSecretApiKey}&language=en-US&page=${page}`;
}

const getCategoryLink = (category: string) => {
  switch (category) {
    case CategoriesValues.upcoming: // https://developers.themoviedb.org/3/movies/get-upcoming
      return 'upcoming';
    case CategoriesValues.popular: // https://developers.themoviedb.org/3/movies/get-popular-movies
      return 'popular';
    case CategoriesValues.topRated: // https://developers.themoviedb.org/3/movies/get-top-rated-movies 
      return 'top_rated'
    default:
      break;
  }

}