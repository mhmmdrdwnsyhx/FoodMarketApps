import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { FoodDummy1, FoodDummy2, FoodDummy4 } from '../../../assets';
import ItemListFood from '../ItemListFood';
import ItemListMenu from '../ItemListMenu';


const Account = () => {
    const navigation = useNavigation();
    return (
        <ScrollView style={{ paddingTop: 8, paddingHorizontal: 24 }}>
            <ItemListMenu text={'Edit Profile'} />
            <ItemListMenu text={'Home Address'} />
            <ItemListMenu text={'Security'} />
            <ItemListMenu text={'Payments'} />
        </ScrollView>
    );
};

const FoodMarket = () => {
    const navigation = useNavigation();
    return (
        <ScrollView style={{ paddingTop: 8, paddingHorizontal: 24 }}>
            <ItemListMenu text={'Rate App'} />
            <ItemListMenu text={'Help Center'} />
            <ItemListMenu text={'Privacy & Policy'} />
            <ItemListMenu text={'Terms & Conditions'} />

        </ScrollView>
    );
};



const initialLayout = { width: Dimensions.get('window').width };

const renderTabBar = (props) => (
    <TabBar
        {...props}
        activeColor="#020202"
        inactiveColor="#8D92A3"
        indicatorStyle={{
            backgroundColor: '#020202',
            height: 3,
        }}
        style={{
            backgroundColor: 'white',
            elevation: 0,
            shadowColor: 'transparent',
            borderBottomWidth: 1,
            borderBottomColor: '#F2F2F2',
        }}
        tabStyle={{ width: 'auto' }}
        renderLabel={({ route, focused }) => (
            <Text style={{}}>
                {route.title}
            </Text>
        )}
    />
);

const ProfileTabSection = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: '1', title: 'Account' },
        { key: '2', title: 'Food Market' },
    ]);

    const renderScene = SceneMap({
        1: Account,
        2: FoodMarket,
    });

    return (
        <TabView
            renderTabBar={renderTabBar}
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            style={{ backgroundColor: 'white' }}
        />
    )
}

export default ProfileTabSection

const styles = StyleSheet.create({

})