import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IcStarOff, IcStarOn } from '../../../assets'

const FoodCard = ({image}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image}/>
      <View style={styles.content}>
        <Text style={styles.text}>Food Name</Text>
        <View style={styles.ratingContainer}>
          <View style={styles.starContainer}>
            <IcStarOn/>
            <IcStarOn/>
            <IcStarOn/>
            <IcStarOn/>
            <IcStarOff/>
          </View>
          <Text>4.5</Text>
        </View>

      </View>
    </View>
  )
}

export default FoodCard

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 14,
    width: 200,
    overflow: 'hidden',
    marginRight: 24,
    marginBottom: 24,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  starContainer: {
    flexDirection: 'row',
  },
  content: {
    padding: 12,
  },
  image: {
    width: 200,
    height: 140,
    resizeMode: 'cover',
  },

})