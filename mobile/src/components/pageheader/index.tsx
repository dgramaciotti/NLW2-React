import {View, Text, Image} from 'react-native';
import { BorderlessButton} from 'react-native-gesture-handler';
import React from 'react';

import styles from './styles';
import backIcon from '../../assets/images/icons/back.png';
import logoIcon from '../../assets/images/logo.png';
import { useNavigation } from '@react-navigation/native';

interface pageHeaderProps{
    title:string,
    rightContent?:React.ReactNode
}

const pageHeader:React.FC<pageHeaderProps> =  (props) => {
    const {navigate} = useNavigation();
    function handleNavigateToMainPage(){
        navigate('Landing');
    }
    
    return (<View style={styles.container}>
        <View style={styles.icons}>
            <BorderlessButton onPress={handleNavigateToMainPage}>
                <Image resizeMode="contain" source={backIcon}/>
            </BorderlessButton>
            <BorderlessButton>
                <Image resizeMode="contain" source={logoIcon}/>
            </BorderlessButton>
        </View>
        <View style={styles.headerText}>
            <Text style={styles.title}>{props.title}</Text>
            {props.rightContent}
        </View>
        
        <View>
            {props.children}
        </View>
    </View>)
}
export default pageHeader