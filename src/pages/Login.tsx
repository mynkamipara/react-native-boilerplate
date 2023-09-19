import React from 'react';
import {
    Button,
    Text,
} from 'react-native';

function App({ navigation }:any): JSX.Element {
    return (
        <>
            <Text>Login</Text>
            <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')}></Button>
        </>
    );
}

export default App;
