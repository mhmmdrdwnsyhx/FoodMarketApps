import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4, FoodDummy5 } from '../../../assets';
import ItemListFood from '../ItemListFood';
import { useNavigation } from '@react-navigation/native';


const inProgress = () => {
    const navigation = useNavigation();
    return (
        <ScrollView style={{ paddingTop: 8, paddingHorizontal: 24 }}>
            <ItemListFood
                image={FoodDummy2}
                type={'in-progress'}
                title="Avocado Salad"
                price="122.000"
                items={3}
                onPress={() => navigation.navigate('FoodDetail')}
            />
            <ItemListFood
                image={FoodDummy4}
                type={'in-progress'}
                title="Butterscotch Creme Latte"
                price="45.000"
                items={10}
                onPress={() => navigation.navigate('FoodDetail')}
            />
            <ItemListFood
                image={FoodDummy5}
                type={'in-progress'}
                title="Rainbow Ice Cream"
                price="450.250"
                items={2}
                onPress={() => navigation.navigate('FoodDetail')}
            />
        </ScrollView>
    );
};

const pastOrders = () => {
    const navigation = useNavigation();
    return (
        <ScrollView style={{ paddingTop: 8, paddingHorizontal: 24 }}>
            <ItemListFood
                image={FoodDummy3}
                type={'past-orders'}
                title="Chicken Soup"
                price="289.000"
                items={1}
                onPress={() => navigation.navigate('FoodDetail')}
                date={'Jun 12, 14:00'}
            />
            <ItemListFood
                image={FoodDummy2}
                type={'past-orders'}
                title="Avocado Salad"
                price="6.000.000"
                items={1}
                onPress={() => navigation.navigate('FoodDetail')}
                date={'Jun 12, 14:00'}
                status={'Cancelled'}
            />
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

const OrderTabSection = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: '1', title: 'In Progress' },
        { key: '2', title: 'Past Orders' },
    ]);

    const renderScene = SceneMap({
        1: inProgress,
        2: pastOrders,
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

export default OrderTabSection

const styles = StyleSheet.create({

})