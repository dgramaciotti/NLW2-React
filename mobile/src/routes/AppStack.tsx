import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Landing from '../pages/landing/index';
import GiveClasses from '../pages/giveClasses/index';
import TeacherList from '../pages/teacherList/index';
import Favorites from '../pages/favorites/index';
import StudyTabs from './StudyTabs';


const {Navigator, Screen} = createStackNavigator();

export default ()=>{
    return(
        <NavigationContainer>
            <Navigator screenOptions={{headerShown:false}}>
                <Screen name="Landing" component={Landing} />
                <Screen name="GiveClasses" component={GiveClasses} />
                <Screen name="Study" component={StudyTabs} />
            </Navigator>
        </NavigationContainer>
    );
}