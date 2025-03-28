import React from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { SceneMap, TabView } from 'react-native-tab-view'
import { FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4, FoodDummy5, ProfileDummy } from '../../assets'
import { FoodCard, Gap } from '../../components'

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#674ab7' }} />
);

const ThirdRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#4a148c' }} />
);

const initialLayout = { width: Dimensions.get('window').width };

const Home = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: '1', title: 'New Taste' },
    { key: '2', title: 'Popular' },
    { key: '3', title: 'Recommended' },
  ]);

  const renderScene = SceneMap({
    1: FirstRoute,
    2: SecondRoute,
    3: FirstRoute,
  });

  return (
    <View style={styles.page}>
      <View style={styles.profileContainer}>
        <View>
          <Text style={styles.appName}>FoodMarket</Text>
          <Text style={styles.desc}>Let's get some foods</Text>
        </View>
        <Image source={ProfileDummy} style={styles.profile} />
      </View>
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.FoodCardContainer}>
            <FoodCard image={FoodDummy1} />
            <FoodCard image={FoodDummy2} />
            <FoodCard image={FoodDummy3} />
            <FoodCard image={FoodDummy4} />
            <FoodCard image={FoodDummy5} />
            <Gap width={24} />
          </View>
        </ScrollView>
      </View>
      <View style={styles.tabContainer}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
        />
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'yellow'
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 24,
    backgroundColor: 'white'
  },
  appName: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
    color: '#020202'
  },
  desc: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3'
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  FoodCardContainer: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    marginVertical: 24,
  },
  tabContainer: {
    flex: 1,
  }
})