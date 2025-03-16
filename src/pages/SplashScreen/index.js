import React from 'react';
import {Text, View} from 'react-native';
import { Logo } from '../../assets';

const SplashScreen = () => {
    return(
        <View 
        style={{
            backgroundColor: '#FFC700',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Logo width={200} height={200} fill="#000" style={{ marginBottom: 16 }} />
            <View style={{height: 38}}/>
            <Text style={{fontSize: 32, color: '#020202'}}>FoodMarket</Text>
        </View>
    );
};

export default SplashScreen;