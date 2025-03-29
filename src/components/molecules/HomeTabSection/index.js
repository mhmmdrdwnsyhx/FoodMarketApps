import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { FoodDummy1, FoodDummy3, FoodDummy4, FoodDummy5 } from '../../../assets';
import Rating from '../Rating';


const NewTaste = () => {
    return (
        <View style={{ paddingHorizontal: 24, paddingVertical: 16 }} >
            {/* First Item */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                <Image source={FoodDummy3} style={styles.image} />
                <View style={{ flex: 1, marginLeft: 12 }}>
                    <Text style={styles.title}>Soup Bumil</Text>
                    <Text style={styles.price}>IDR 289.000</Text>
                </View>
                <Rating rate={4.1} maxStars={5} />
            </View>

            {/* Second Item */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Image source={FoodDummy1} style={styles.image} />
                <View style={{ flex: 1, marginLeft: 12 }}>
                    <Text style={styles.title}>Cherry Healthy</Text>
                    <Text style={styles.price}>IDR 122.000</Text>
                </View>
                <Rating rate={3.9} maxStars={5} />
            </View>

        </View>
    );
};

const Popular = () => {
    return (
        <View style={{ paddingHorizontal: 24, paddingVertical: 16 }} >
            {/* First Item */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                <Image source={FoodDummy3} style={styles.image} />
                <View style={{ flex: 1, marginLeft: 12 }}>
                    <Text style={styles.title}>Soup Bumil</Text>
                    <Text style={styles.price}>IDR 289.000</Text>
                </View>
                <Rating rate={4.1} maxStars={5} />
            </View>

            {/* Second Item */}
            <View style={{ flexDirection: 'row', paddingBottom: 16, justifyContent: 'space-between', alignItems: 'center' }}>
                <Image source={FoodDummy1} style={styles.image} />
                <View style={{ flex: 1, marginLeft: 12 }}>
                    <Text style={styles.title}>Chicken</Text>
                    <Text style={styles.price}>IDR 459.000</Text>
                </View>
                <Rating rate={3.8} maxStars={5} />
            </View>

            {/* Second Item */}
            <View style={{ flexDirection: 'row', padddingVertical: 16, justifyContent: 'space-between', alignItems: 'center' }}>
                <Image source={FoodDummy5} style={styles.image} />
                <View style={{ flex: 1, marginLeft: 12 }}>
                    <Text style={styles.title}>Ice Cream</Text>
                    <Text style={styles.price}>IDR 12.000</Text>
                </View>
                <Rating rate={5} maxStars={5} />
            </View>
        </View>
    );
}

const Recommended = () => {
    return (
        <View style={{ paddingHorizontal: 24, paddingVertical: 16 }} >
            {/* First Item */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                <Image source={FoodDummy4} style={styles.image} />
                <View style={{ flex: 1, marginLeft: 12 }}>
                    <Text style={styles.title}>Butterscotch creme latte</Text>
                    <Text style={styles.price}>IDR 24.000</Text>
                </View>
                <Rating rate={5} maxStars={5} />
            </View>
        </View>
    );
}

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
        style={{ backgroundColor: 'white' }}
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
        />
    )
}

export default HomeTabSection

const styles = StyleSheet.create({
    image: {
        width: 60,
        height: 60,
        borderRadius: 8,
        resizeMode: 'cover',
    },
    title: {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: '#020202',
    },
    price: {
        fontSize: 13,
        fontFamily: 'Poppins-Regular',
        color: '#8D92A3',
    },
})