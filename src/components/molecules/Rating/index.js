import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IcStarOff, IcStarOn } from '../../../assets'

const Rating = ({ rate = 0, maxStars = 5 }) => {
    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= maxStars; i++) {
            stars.push(i <= rate ? <IcStarOn key={i} /> : <IcStarOff key={i} />);
        }
        return stars;
    };

    return (
        <View style={styles.ratingContainer}>
            <View style={styles.starContainer}>
                {renderStars()}
            </View>
            <Text>{rate.toFixed(1)}</Text>
        </View>
    );
};

export default Rating;

const styles = StyleSheet.create({
    ratingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    starContainer: {
        flexDirection: 'row',
    },
});