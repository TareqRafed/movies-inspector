import React, { useEffect } from 'react';
import { ScrollView, View } from 'react-native';

// Componenets 
import Category from './categoryButton';

// Styling
import { categories } from '../style/categories';

interface Props {
    selectedCategory:string,
    setSelectedCategory:(x:string)=>void
}


// All available categories
export const CategoriesValues: any = {
    upcoming:'Upcoming',
    popular:'Popular',
    topRated:'Top Rated'
}


const Categories: React.FC<Props> = ({selectedCategory, setSelectedCategory}) => {

    let CategoriesComponents:JSX.Element[] = [];

    for(let category in CategoriesValues){
        CategoriesComponents.push(<Category key={category} selected={CategoriesValues[category] == selectedCategory} title={CategoriesValues[category]} onPress={()=>setSelectedCategory(CategoriesValues[category])} />)
    }
   

    return (
        <ScrollView pagingEnabled showsHorizontalScrollIndicator={false} contentContainerStyle={categories.container} horizontal >
            {CategoriesComponents}
        </ScrollView>
    );

}


export default Categories;