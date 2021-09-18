import * as React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Settings from '../Screens/Settings';
import Home from '../Screens/Home';
import Price from '../Screens/Price';
import Protfoli from '../Screens/Protfoli';
import Icon from 'react-native-vector-icons/Feather';
import postScreen from '../Screens/PostScreen';



const Tab = createBottomTabNavigator();
const TabBarCustomButton = ({ childern, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                top: -30,
                justifyContent: "center",
                alignItems: "center"
            }}

            onPress={onPress}
        >
            <View style={{
                width: 70,
                height: 70,
                borderRadius: 35,
                // backgroundColor: 'red',
                // position:"absolute"
                borderColor:"blue",
                borderWidth:1
            
            }}>
                {childern}
            </View>

        </TouchableOpacity>
    )
}

export default function TabsNavigation() {
    return (

        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    elevation: 0,
                    backgroundColor: "green",
                    // borderTopColor:"black",

                    height: 70,
                    // borderRadius:"29"


                }
            }}>
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: "center", justifyContent: "center", top: 0, borderColor: "red", borderWidth: 1, width: 50 }}>

                            <Icon
                                name="home"
                                size={30}


                            />
                            <Text style={{ color: focused ? 'red' : 'blue' }}>
                                HOME
                            </Text>
                        </View>
                    )
                }}


            />
            <Tab.Screen name="Settings" component={Settings}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: "center", justifyContent: "center", borderColor: "red", borderWidth: 1, width: 50 }}>

                            <Icon
                                name="home"
                                size={30}


                            />
                            <Text style={{ color: focused ? 'red' : 'blue' }}>
                                HOME
                            </Text>
                        </View>
                    )
                }}

            />
            <Tab.Screen name="PostScreen" component={postScreen}


                options={{
                    tabBarIcon: ({ focused }) => (


                        <Image
                            source={require('../assets/plue.jpg')}
                            resizeMode="contain"
                            style={{
                                width: 50,
                                height: 50,
                                // tintColor: "blue",
                                // position: "absolute",
                                // zIndex:1,
                                top:-30
                            }}


                        />

                    ),
                    // tabBarButton: (props) => (
                    //     <TabBarCustomButton

                    //         {...props}
                    //     />
                    // )

                }}

            />

            <Tab.Screen name="Price" component={Price}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: "center", justifyContent: "center", borderColor: "red", borderWidth: 1, width: 50 }}>

                            <Icon
                                name="home"
                                size={30}


                            />
                            <Text style={{ color: focused ? 'red' : 'blue' }}>
                                HOME
                            </Text>
                        </View>
                    )
                }}

            />


            <Tab.Screen name="Protfoli" component={Protfoli}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: "center", justifyContent: "center", borderColor: "red", borderWidth: 1, width: 50 }}>

                            <Icon
                                name="home"
                                size={30}


                            />
                            <Text style={{ color: focused ? 'red' : 'blue' }}>
                                HOME
                            </Text>
                        </View>
                    )
                }}

            />




        </Tab.Navigator>

    );
}