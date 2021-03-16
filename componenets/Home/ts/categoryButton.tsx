import React from 'react';
import { Button, View } from 'react-native';

// Styling
import {categoryButton} from '../style/categoryButton';
import { secondryColor, accentColor } from '../../utilities/style/colors'

interface Props {
    title: string,
    selected: boolean,
    onPress: VoidFunction,
}

const Category: React.FC<Props> = ({title, selected, onPress}) => {

    return (
        <View style={categoryButton.container}>
            <Button color={selected ? accentColor : secondryColor} title={title} onPress={onPress} />
        </View>
    );
}


export default Category;



