import React from "react";
import { FoodDetail, Home, Order, Profile, SignIn, SignUp, SignUpAddress, SplashScreen, SuccessSignUp, OrderSummary, SuccessOrder } from "../pages";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomNavigator } from "../components";
import OrderDetail from "../pages/OrderDetail";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
            <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Tab.Screen name="Order" component={Order} options={{ headerShown: false }} />
            <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        </Tab.Navigator>
    )
};

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
            <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
            <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
            <Stack.Screen name="SignUpAddress" component={SignUpAddress} options={{ headerShown: false }} />
            <Stack.Screen name="SuccessSignUp" component={SuccessSignUp} options={{ headerShown: false }} />
            <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }} />
            <Stack.Screen name="FoodDetail" component={FoodDetail} options={{ headerShown: false }} />
            <Stack.Screen name="OrderSummary" component={OrderSummary} options={{ headerShown: false }} />
            <Stack.Screen name="SuccessOrder" component={SuccessOrder} options={{ headerShown: false }} />
            <Stack.Screen name="OrderDetail" component={OrderDetail} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export default Router;