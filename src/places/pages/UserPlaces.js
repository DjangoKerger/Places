import React from 'react';

import PlaceList from '../components/PlaceList';
import { useParams } from 'react-router-dom';

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the most famous skyscrapers in the world!',
        imageUrl: 'https://cdn.cnn.com/cnnnext/dam/assets/130802044459-skyscrapers-gallery---empire-state-building-super-169.jpg',
        address: '20 W 34th St. New York, NY 10001',
        location: {
            lat:40.7484405,
            lng:-73.9878584
        },
        creator: 'u1'

    },
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the most famous skyscrapers in the world!',
        imageUrl: 'https://cdn.cnn.com/cnnnext/dam/assets/130802044459-skyscrapers-gallery---empire-state-building-super-169.jpg',
        address: '20 W 34th St. New York, NY 10001',
        location: {
            lat:40.7484405,
            lng:-73.9878584
        },
        creator: 'u2'

    },
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the most famous skyscrapers in the world!',
        imageUrl: 'https://cdn.cnn.com/cnnnext/dam/assets/130802044459-skyscrapers-gallery---empire-state-building-super-169.jpg',
        address: '20 W 34th St. New York, NY 10001',
        location: {
            lat:40.7484405,
            lng:-73.9878584
        },
        creator: 'u3'

    }
];

const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
    
    return <PlaceList items={ loadedPlaces } />
};

export default UserPlaces;