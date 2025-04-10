import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FoodDummy1 } from '../../assets'
import { Button, Header, ItemListFood, ItemValue } from '../../components'
import { ScrollView } from 'react-native-gesture-handler'

const OrderDetail = ({ navigation }) => {
    return (
        <ScrollView>

            <View>
                <Header title="Payment" subTitle={"You deserve better meal"} onBack={() => navigation.goBack()} />
                <View style={styles.content}>
                    <Text style={styles.label}>Item Ordered</Text>
                    <ItemListFood
                        image={FoodDummy1}
                        type={"order-summary"}
                        items={14}
                        price={"IDR 289.000"}
                        title="Cherry Healthy"
                    />
                    <ItemValue label={'Cherry Healthy'} value={'IDR 18.390.000'} />
                    <ItemValue label={'Driver'} value={'IDR 50.000'} />
                    <ItemValue label={'Tax 10%'} value={'IDR 1.600.000'} />
                    <ItemValue label={'Total Price'} value={'IDR 20.000'} valueColor='#1ABC9C' />
                </View>

                <View style={styles.content}>
                    <Text style={styles.label}>Deliver To:</Text>
                    <ItemValue label={'Name'} value={'Muhammad Rizky'} />
                    <ItemValue label={'Phone No.'} value={'081234567'} />
                    <ItemValue label={'Address'} value={'Jl. Raya No. 123'} />
                    <ItemValue label={'House No.'} value={'A5 Hook'} />
                    <ItemValue label={'City'} value={'Surabaya'} />
                </View>

                <View style={styles.content}>
                    <Text style={styles.label}>Order Status:</Text>
                    <ItemValue label={'#FM209391'} value={'Paid'} valueColor='#1ABC9C' />
                </View>
                <View style={styles.button}>
                    <Button text="Cancel My Order" color="#FF5C60" textColor='white' onPress={() => ('')} />
                </View>
            </View>
        </ScrollView>
    )
}

export default OrderDetail

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