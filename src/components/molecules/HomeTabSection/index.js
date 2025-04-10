import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4, FoodDummy5 } from '../../../assets';
import ItemListFood from '../ItemListFood';
import { useNavigation } from '@react-navigation/native';


const NewTaste = () => {
    const navigation = useNavigation();
    return (
        <ScrollView style={{ paddingTop: 8, paddingHorizontal: 24 }}>
            <ItemListFood
                image={FoodDummy1}
                type="product"
                title="Cherry Healthy"
                price="122.000"
                rating={4.7}
                onPress={() => navigation.navigate('FoodDetail')}
            />
            <ItemListFood
                image={FoodDummy2}
                type="product"
                title="Avocado Salad"
                price="122.000"
                rating={3.9}
                onPress={() => navigation.navigate('FoodDetail')}
            />
            <ItemListFood
                image={FoodDummy3}
                type="product"
                title="Chicken Soup"
                price="122.000"
                rating={4.1}
                onPress={() => navigation.navigate('FoodDetail')}
            />
            <ItemListFood
                image={FoodDummy4}
                type="product"
                title="Butterscotch Creme Latte"
                price="122.000"
                rating={5}
                onPress={() => navigation.navigate('FoodDetail')}
            />
            <ItemListFood
                image={FoodDummy5}
                type="product"
                title="Rainbow Ice Cream"
                price="122.000"
                rating={2.7}
                onPress={() => navigation.navigate('FoodDetail')}
            />
        </ScrollView>
    );
};

const Popular = () => {
    const navigation = useNavigation();
    return (
        <ScrollView style={{ paddingTop: 8, paddingHorizontal: 24 }}>
            <ItemListFood
                image={FoodDummy2}
                type="product"
                title="Avocado Salad"
                price="122.000"
                rating={3.9}
                onPress={() => navigation.navigate('FoodDetail')}
            />
            <ItemListFood
                image={FoodDummy4}
                type="product"
                title="Butterscotch Creme Latte"
                price="122.000"
                rating={5}
                onPress={() => navigation.navigate('FoodDetail')}
            />
            <ItemListFood
                image={FoodDummy1}
                type="product"
                title="Cherry Healthy"
                price="122.000"
                rating={4.7}
                onPress={() => navigation.navigate('FoodDetail')}
            />
            <ItemListFood
                image={FoodDummy3}
                type="product"
                title="Chicken Soup"
                price="122.000"
                rating={4.1}
                onPress={() => navigation.navigate('FoodDetail')}
            />
        </ScrollView>
    );
};

const Recommended = () => {
    const navigation = useNavigation();
    return (
        <ScrollView style={{ paddingTop: 8, paddingHorizontal: 24 }}>
            <ItemListFood
                image={FoodDummy4}
                type="product"
                title="Butterscotch Creme Latte"
                price="122.000"
                rating={5}
                onPress={() => navigation.navigate('FoodDetail')}
            />
            <ItemListFood
                image={FoodDummy1}
                type="product"
                title="Cherry Healthy"
                price="122.000"
                rating={4.7}
                onPress={() => navigation.navigate('FoodDetail')}
            />
            <ItemListFood
                image={FoodDummy3}
                type="product"
                title="Chicken Soup"
                price="122.000"
                rating={4.1}
                onPress={() => navigation.navigate('FoodDetail')}
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

const HomeTabSection = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: '1', title: 'New Taste' },
        { key: '2', title: 'Popular' },
        { key: '3', title: 'Recommended' },
    ]);

    const renderScene = SceneMap({
        1: NewTaste,
        2: Popular,
        3: Recommended,
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

export default HomeTabSection

const styles = StyleSheet.create({

})