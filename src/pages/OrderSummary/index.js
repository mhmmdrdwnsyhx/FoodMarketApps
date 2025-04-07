import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Header, ItemListFood, ItemValue } from '../../components'
import { FoodDummy1 } from '../../assets'

const OrderSummary = () => {
    return (
        <View>
            <Header title={"Payment"} subTitle={"You deserve better meal"} onBack={() => { }} />
            <View style={styles.content}>
                <Text style={styles.label}>Item Ordered</Text>
                <ItemListFood image={FoodDummy1} items={14} price={"IDR 122.000"} title="Cherry Healthy" />
                <Text style={styles.label}>Details Transaction</Text>
                <ItemValue label={'Cherry Healthy'} value={'IDR 122.000'} />
                <ItemValue label={'Quantity'} value={'14'} />
                <ItemValue label={'Total'} value={'IDR 1.600.000'} />
                <ItemValue label={'Driver'} value={'IDR 20.000'} />
            </View>

            <View style={styles.content}>
                <Text style={styles.label}>Deliver To:</Text>
                <ItemValue label={'Name'} value={'Muhammad Rizky'} />
                <ItemValue label={'Phone'} value={'081234567'} />
                <ItemValue label={'Address'} value={'Jl. Raya No. 123'} />
                <ItemValue label={'City'} value={'Surabaya'} />
                <ItemValue label={'Country'} value={'Indonesia'} />
            </View>
            <View style={styles.button}>
                <Button text="Checkout Now" onPress={() => navigation.navigate('')} />
            </View>
        </View>
    )
}

export default OrderSummary

const styles = StyleSheet.create({
    content: {
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingVertical: 16,
        marginTop: 24,
    },
    label: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: '#020202',
        marginBottom: 8,
    },
    button: {
        paddingHorizontal: 24,
        marginTop: 24,
    },
})