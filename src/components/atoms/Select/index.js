import { StyleSheet, Text, View } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import React from 'react'

const Select = () => {
  return (
    <View>
      <Text style={styles.label}>Label Select Option</Text>
      <View style={styles.input}>
        <Picker
        // selectedValue={this.state.lengague}
        // onValueChange={{itemValue, itemIndex} =>
            //     this.setState({lengague: itemValue})
        // }
        >
          <Picker.Item label='Java' value='java'/>
          <Picker.Item label='Java' value='java'/>
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