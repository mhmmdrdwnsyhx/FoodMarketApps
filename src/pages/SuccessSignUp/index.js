import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IlSuccessSignUp } from '../../assets'
import { Button, Gap } from '../../components'

const SuccessSignUp = ({ navigation }) => {
  return (
    <View style={styles.page}>
      <IlSuccessSignUp />
      <Gap height={30} />
      <Text style={styles.title}>Yeay! Completed</Text>
      <Gap height={6} />
      <Text style={styles.label}>Now you are able to order</Text>
      <Text style={styles.label}>some foods as a self-reward</Text>
      <Gap height={30} />
      <View style={styles.buttonContainer}>
        <Button text={"Find foods"} onPress={() => navigation.replace('MainApp')} />
      </View>
    </View>
  )
}

export default SuccessSignUp

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    color: '#020202'
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3'
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 80,
  },
})