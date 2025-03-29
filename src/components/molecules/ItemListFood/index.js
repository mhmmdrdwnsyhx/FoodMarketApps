import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Rating from '../Rating';

const ItemListFood = ({ image, title, price, rating }) => {
    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image} />
            <View style={{ flex: 1 }}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.price}>{price}</Text>
            </View>
            <Rating rate={rating} maxStars={5} />
        </View>
    );
};

export default ItemListFood;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingHorizontal: 24,
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
});