import React from 'react';
import {Text, View, ImageBackground} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import bgImage from '../../assets/images/give-classes-background.png';

export default ()=>{
    const navigation = useNavigation();
    function handleNavigateBack(){
        navigation.goBack();
    }
    return <View style={styles.container}>
        <ImageBackground resizeMode="contain" style={styles.content} source={bgImage}>
            <Text style={styles.title}>Quer ser um Proffy?</Text>
            <Text style={styles.description}>Para começar, você precisa se cadastrar como professor 
            na nossa plataforma web.</Text>
        </ImageBackground>
        <RectButton onPress={handleNavigateBack} style={styles.button}>
            <Text style={styles.buttonText}>Tudo bem</Text>
        </RectButton>
    </View>
}