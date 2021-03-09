import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const Icons = ({name}) => {
    switch (name) {
        case 'circle':
            return <Icon name="circle-thin" size={45} color="#8D3DAF"/>
            break;
        case 'cross':
            return <Icon name="times" size={45} color="#38CC77"/>
            break;
        default:
            return <Icon name="pencil" size={45} color="#EDC126"/>
            break;
    }
}

export default Icons;