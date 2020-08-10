import {View, Text, Image, Linking} from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';
const imguri = 'https://avatars2.githubusercontent.com/u/37739247?s=400&u=8f381cac598f743ec650bd03180c8ed646cddf27&v=4';
import heart from '../../assets/images/icons/heart-outline.png';
import unfavorite from '../../assets/images/icons/unfavorite.png';
import whatsapp from '../../assets/images/icons/whatsapp.png';
import AsyncStorage from '@react-native-community/async-storage';
export interface Teacher{
    availableTimes: {day: string, from: string, to: string}
    biografy: string
    class: string
    cost: number
    name: string
    photoLink: string
    whatsappNumber: number
    __v: number
    _id: string
  }
  export interface TeacherProps{
    teacher:Teacher
  }

const teacherCard:React.FC<TeacherProps> = ({teacher})=>{
    const [favorite, setFavorite] = useState('0');
    function handleWhatsapp(){
        Linking.openURL('whatsapp://send?phone='+teacher.whatsappNumber);
    }  
    async function toggleFavorite(){
        let res:any = await AsyncStorage.getItem(teacher._id);
        let favoriteCheck = JSON.parse(res);
        console.log(favoriteCheck)
        if(favoriteCheck == '0'){
            console.log('entrei em 0')
            setFavorite('1');
            AsyncStorage.setItem(teacher._id,'1');
        }else{
            console.log('entrei em 1')
            setFavorite('0');
            AsyncStorage.setItem(teacher._id,'0');
        }
    }
    return (<View style={styles.container}>
            <View style={styles.cardHeader}>
                <Image style={styles.avatar} source={{uri:teacher.photoLink}} />
                <View>
                    <Text style={styles.name}>{teacher.name}</Text>
                    <Text style={styles.subject}>{teacher.class}</Text>
                </View>
            </View>
            <Text style={styles.cardText}>
            {teacher.biografy}
            </Text>
            <View style={styles.cardFooter}>
                <Text style={styles.price}> Preço/Hora {'  '}
                    <Text style={styles.priceValue}>R$ {teacher.cost}</Text>
                </Text>
                <View style={styles.buttonsContainer}>
                    {favorite === '0' && (<RectButton onPress={toggleFavorite} style={styles.favorite}>
                        <Image source={heart}/> 
                    </RectButton>)}
                    {favorite === '1' && (<RectButton onPress={toggleFavorite} style={styles.unfavorite}>
                        <Image source={unfavorite}/> 
                    </RectButton>)} 
                    <RectButton onPress={handleWhatsapp} style={styles.whatsapp}>
                        <Image source={whatsapp}/>
                        <Text style={styles.contactText}>Entrar em contato</Text> 
                    </RectButton>
                </View>
            </View>
    </View>)
}
export default teacherCard;