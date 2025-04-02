import React from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FoodDummy6, IcBackWhite } from '../../assets'
import { Button, Counter, Rating } from '../../components'

const FoodDetail = () => {
    return (
        <View style={styles.page}>
            <ImageBackground source={FoodDummy6} style={styles.cover} >
                <TouchableOpacity style={styles.back}>
                    <IcBackWhite />
                </TouchableOpacity>
            </ImageBackground>
            <View style={styles.content}>
                <View style={styles.mainContent}>
                    <View style={styles.contentHeader}>
                        <View>
                            <Text style={styles.title}>Cherry Healthy</Text>
                            <Rating rate={4.5} maxStars={5} />
                        </View>
                        <Counter />
                    </View>
                    <Text style={styles.desc}>
                        Makanan khas Bandung yang cukup sering
                        dipesan oleh anak muda dengan pola makan
                        yang cukup tinggi dengan mengutamakan
                        diet yang sehat dan teratur.
                    </Text>
                    <Text style={styles.label}>Ingredients</Text>
                    <Text style={styles.desc}>Seledri, telur, blueberry, madu.</Text>
                </View>
                <View style={styles.footer}>
                    <View style={styles.totalprice}>
                        <Text style={styles.labelTotal}>Total Price:</Text>
                        <Text style={styles.labelPrice}>IDR 12.289.000</Text>
                    </View>
                    <View style={styles.button}>
                        <Button text="Order Now" title="Order Now" onPress={() => { }} />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default FoodDetail

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',
    },
    cover: {
        height: 330,
        paddingTop: 26,
        paddingLeft: 20,
    },
    back: {
        width: 30,
        height: 30,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
        alignItems: 'center',
        marginBottom: 14,
    },
    content: {
        backgroundColor: 'white',
        flex: 1,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        marginTop: -40,
        paddingTop: 26,
        paddingHorizontal: 16,
    },
    mainContent: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: '#020202',
    },
    desc: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: '#8D92A3',
        marginBottom: 16,
    },
    label: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: '#020202',
        marginBottom: 4,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 16,
    },
    totalprice: {
        justifyContent: 'center',
    },
    labelTotal: {
        fontSize: 13,
        fontFamily: 'Poppins-Regular',
        color: '#8D92A3',
    },
    labelPrice: {
        fontSize: 18,
        fontFamily: 'Poppins-Regular',
        color: '#020202',
    },
    button: {
        width: 163,
        borderRadius: 8,
        justifyContent: 'center',
        backgroundColor: '#FFC700',
    },
})