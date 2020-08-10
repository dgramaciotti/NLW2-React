import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import teacherList from '../pages/teacherList';
import favorites from '../pages/favorites';
import { Ionicons } from '@expo/vector-icons'
const {Navigator, Screen} = createBottomTabNavigator();

export default () =>{
    return(
        <Navigator
            tabBarOptions={{
                style:{
                    elevation:0,
                    shadowOpacity:0,
                    height:64
                },
                tabStyle:{
                    flexDirection:'row',
                    alignItems:'center',
                    justifyContent:'center'
                },
                iconStyle:{
                    flex:0,
                    width:20,
                    height:20
                },
                labelStyle:{
                    fontFamily:'Archivo_700Bold',
                    fontSize:14,
                    marginLeft:16
                },
                inactiveBackgroundColor:'#fafafc',
                activeBackgroundColor:'#febebf5',
                inactiveTintColor:'#c1bccc',
                activeTintColor: '#32264d'
            }}
        >
            <Screen options={{
                tabBarLabel:'Proffys',
                tabBarIcon: ({color, size})=>{
                    return(
                        <Ionicons size={size} color={color} name='ios-easel' />
                    )
                }
            }} name="TeacherList" component={teacherList} />
            <Screen options={{
                tabBarLabel:'Favoritos',
                tabBarIcon: ({color, size})=>{
                    return(
                        <Ionicons size={size} color={color} name='ios-heart' />
                    )
                }
            }} name="Favorites" component={favorites}/>
        </Navigator>
    )
}