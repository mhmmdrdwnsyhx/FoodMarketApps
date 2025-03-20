import { StyleSheet, Text, View } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import React from 'react'

// *****************TASK******************
// *Make this atoms based on Figma Design*
// ***************************************

const Select = ({label}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input}>
        <Picker
        // selectedValue={this.state.lengague}
        // onValueChange={{itemValue, itemIndex} =>
            //     this.setState({lengague: itemValue})
        // }
        >
          <Picker.Item label="Select your city" value=""/>
          <Picker.Item label="Indonesia" value=""/>
        </Picker>
      </View>
    </View>
  )
}

export default Select

const styles = StyleSheet.create({
  label: {fontSize: 16, fontFamily: 'Poppins-Regular', color: '#020202'},
  input: {
    borderWidth: 1, 
    borderColor: '#020202', 
    borderRadius: 8, 
    paddingHorizontal: 2, 
    paddingVertical: 0
  },
})