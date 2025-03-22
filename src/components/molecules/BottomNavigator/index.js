import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { IcHomeOn, IcHomeOff, IcOrderOn, IcOrderOff, IcProfileOn, IcProfileOff, } from '../../../assets';

const Icon = ({label, focus}) => {
    switch (label) {
        case 'Home':
            return focus ? <IcHomeOn /> : <IcHomeOff />;
        case 'Order':
            return focus ? <IcOrderOn /> : <IcOrderOff />;
        case 'Profile':
            return focus ? <IcProfileOn /> : <IcProfileOff />; 
        default:
            return <IcHomeOn />
    }
};

const BottomNavigator = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  if (focusedOptions.tabBarVisible === false) {
    return null;
}
  return (
    <View style={styles.container}>
        {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const label =
                options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;
            
            const isFocused = state.index === index;
            
            const onPress = () => {
                const event = navigation.emit({
                target: route.key,
                type: 'tabPress',
                canPreventDefault: true,
                });
                
                if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
                }
            };
            
            const onLongPress = () => {
                navigation.emit({
                target: route.key,
                type: 'tabLongPress',
                });
            };  
            
            return (
            <TouchableOpacity
                key={index}
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={{ alignItems: 'center', padding: 16 }}
            >
                <Icon label={label} focus={isFocused}/>
                {/* <Text>{label}</Text> */}
            </TouchableOpacity>
            );
        })}
    </View>
  )
}

export default BottomNavigator

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flexDirection: 'row', 
        paddingTop: 5, 
        paddingBottom: 5,
        paddingHorizontal: 50,
        justifyContent: 'space-between', 
    }
})