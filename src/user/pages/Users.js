import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {

    const USERS = [
        {
            id: "1",
            name: "Django Kerger",
            image:"https://cdn.goliath.com/eyJidWNrZXQiOiJwdWItc3RvcmFnZSIsImtleSI6ImdvbGlhdGgvd3AtY29udGVudC91cGxvYWRzLzIwMTYvMDIvTGVvR2F0c2J5LmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODk1LCJoZWlnaHQiOjQ4MCwiZml0IjoiY292ZXIiLCJiYWNrZ3JvdW5kIjp7InIiOjAsImciOjAsImIiOjAsImFscGhhIjoxfSwicG9zaXRpb24iOiJ0b3AifX19",
            places: 3
        }
    ];

    return <UsersList items={USERS} 
                
    />;
};

export default Users;