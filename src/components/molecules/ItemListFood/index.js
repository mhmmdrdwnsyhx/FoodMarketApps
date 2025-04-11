import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Rating from '../Rating';

const ItemListFood = ({
    image,
    type,
    title,
    price,
    rating,
    items,
    onPress,
    date,
    status,
}) => {
    const renderContent = () => {
        switch (type) {
            case 'product':
                return (
                    <>
                        <View style={styles.content}>
                            <Text style={styles.title}>{title}</Text>
                            <Text style={styles.price}>{price}</Text>
                        </View>
                        <Rating rate={rating} maxStars={5} />
                    </>
                )
            case 'order-summary':
                return (
                    <>
                        <View style={styles.content}>
                            <Text style={styles.title}>{title}</Text>
                            <Text style={styles.price}>{price}</Text>
                        </View>
                        <Text style={styles.items}>{items} items</Text>
                    </>
                )
            case 'in-progress':
                return (
                    <>
                        <View style={styles.content}>
                            <Text style={styles.title}>{title}</Text>
                            <Text style={styles.price}>
                                {items} items • IDR {(items * parseFloat(price.replace(/\./g, ''))).toLocaleString('id-ID')}
                            </Text>
                        </View>
                    </>
                )
            case 'past-orders':
                return (
                    <>
                        <View style={styles.content}>
                            <Text style={styles.title}>{title}</Text>
                            <Text style={styles.price}>
                                {items} items • IDR {price}
                            </Text>
                        </View>
                        <View style={{ alignContent: 'center' }}>
                            <Text style={styles.date}>{date}</Text>
                            <Text style={styles.status}>{status}</Text>
                        </View>
                    </>
                )
            default:
                return (
                    <>
                        <View style={styles.content}>
                            <Text style={styles.title}>{title}</Text>
                            <Text style={styles.price}>{price}</Text>
                        </View>
                        <Rating rate={rating} maxStars={5} />
                    </>
                )
        }
    }

    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
            <View style={styles.container}>
                <Image source={image} style={styles.image} />
                {renderContent()}
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
    content: {
        flex: 1
    },
    date: {
        fontSize: 10,
        fontFamily: 'Poppins-Regular',
        color: '#8D92A3',
    },
    status: {
        fontSize: 10,
        fontFamily: 'Poppins-Regular',
        color: '#D9435E',
    }
});