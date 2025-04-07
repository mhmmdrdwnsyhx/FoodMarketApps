import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Rating from '../Rating';

const ItemListFood = ({ image, title, price, items, rating, onPress }) => {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
            <View style={styles.container}>
                <Image source={image} style={styles.image} />
                <View style={{ flex: 1 }}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.price}>{price}</Text>
                </View>
                {items && !rating && <Text style={styles.items}>{items} items</Text>}
                {rating && !items && <Rating rate={rating} maxStars={5} />}
            </View>
        </TouchableOpacity>
    );
};

export default ItemListFood;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingVertical: 8,
        justifyContent: 'space-between',
        alignItems: 'center',
        overflow: 'hidden',
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 8,
        overflow: 'hidden',
        marginRight: 12,
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
    items: {
        fontSize: 13,
        fontFamily: 'Poppins-Regular',
        color: '#8D92A3',
    },
});