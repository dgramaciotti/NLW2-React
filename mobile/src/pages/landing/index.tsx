import React, {useState} from 'react';
import { View, Image, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RectButton} from 'react-native-gesture-handler';

import styles from './styles';
import landingImage from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import purpleHeart from '../../assets/images/icons/heart.png';
import api from '../../services/api';
export default ()=>{
    const {navigate} = useNavigation();
    const [totalConnections,setTotalConnections] = useState('');
    api.get('connections').then(res=>setTotalConnections(res.data.totalConnections));
    function handleNavigateToGiveClassesPage(){
        navigate('GiveClasses');
    }
    function handleNavigateToStudyPage(){
        navigate('Study');
    }
    
    return (
        <View style={styles.container}>
            <Image style={styles.banner} source={landingImage} />
            <Text style={styles.title}>
                Seja bem-vindo {'\n'}
                <Text style={styles.titleBold}>
                        O que deseja fazer?
                </Text>
            </Text>
            <View style={styles.buttonsContainer}>
                <RectButton onPress={handleNavigateToStudyPage} style={[styles.button,styles.buttonPrimary]}>
                    <Image source={studyIcon}/>
                    <Text style={styles.buttonText}>Estudar</Text>
                </RectButton>
                <RectButton onPress={handleNavigateToGiveClassesPage} style={[styles.button,styles.buttonSecondary]}>
                    <Image source={studyIcon}/>
                    <Text style={styles.buttonText}>Dar aulas</Text>
                </RectButton>
            </View>
            <Text style={styles.totalConnections}>
                Total de {totalConnections} conexões realizadas {' '} <Image source={purpleHeart}/>
            </Text>
        </View>
    );
}

