import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ProfileTabSection } from '../../components'
import { ProfileDummy } from '../../assets'

const Profile = () => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <View style={styles.photo}>
          <View style={styles.borderPhoto}>
            <Image source={ProfileDummy} style={styles.photoContainer} />
          </View>
        </View>
        <Text style={styles.username}>Angga Risky</Text>
        <Text style={styles.email}>Wepanda@gmail.com</Text>
      </View>
      <View style={styles.tabContainer}>
        <ProfileTabSection />
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  page: { flex: 1 },
  container: {
    backgroundColor: 'white',
    paddingVertical: 26,
  },
  photo: {
    marginTop: 16,
    alignItems: 'center',
    marginBottom: 16
  },
  borderPhoto: {
    borderWidth: 1,
    borderColor: '#8D92A3',
    width: 110,
    height: 110,
    borderRadius: 110,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoContainer: {
    width: 90,
    height: 90,
    borderRadius: 90,
    backgroundColor: '#F0F0F0',
    padding: 24,
  },
  username: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
    textAlign: 'center',

  },
  email: {
    fontSize: 13,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
    textAlign: 'center',

  },
  tabContainer: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 24,
  },
})