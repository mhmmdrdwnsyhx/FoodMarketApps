import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { EmptyOrder, Gap, Header, OrderTabSection } from '../../components'

const Order = () => {
  const [isEmpty] = useState(false)
  return (
    <View style={styles.page}>
      {isEmpty ? <EmptyOrder /> : (
        <View style={styles.content}>
          <Header title="Your Orders" subTitle={'Wait for the best meal'} />
          <Gap height={24} />
          <View style={styles.tabContainer}>
            <OrderTabSection />
          </View>
        </View>
      )}
    </View>
  )
}

export default Order

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  tabContainer: {
    flex: 1,
  },
})