import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4, FoodDummy5 } from '../../assets'
import { FoodCard, Gap, HomeProfile, HomeTabSection } from '../../components'

const Home = () => {
  return (
    // <ScrollView>
    <View style={styles.page}>
      <HomeProfile />
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
        <HomeTabSection />
      </View>
    </View>
    // </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  page: {
    flex: 1,
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