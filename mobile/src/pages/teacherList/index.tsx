import {View, ScrollView, Text, TextInput} from 'react-native';
import React, { useState } from 'react';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons';
import styles from './styles';
import PageHeader from '../../components/pageheader/index';
import TeacherCard, { Teacher } from '../../components/teacherCard/index';
import api from '../../services/api';
export default ()=>{
    const [formVisibility,setFormVisibility] = useState(false);
    const [subject,setSubject] = useState('');
    const [week_day,setWeek_day] = useState('');
    const [time,setTime] = useState('');
    const [teachers,setTeachers] = useState([]);
    function sendQuery(){
        const queryObject = {subject,week_day,time};
        
        if(subject && week_day && time){
          getTeachers(queryObject);
        }else{
          getTeachers({});
        }
      }
    async function getTeachers(queries:object){
    const resp = await api.get('user',{params:queries});
    setTeachers(resp.data);
    toggleFormVisibility();
    }
    function handleFav(teacher:any){
        console.log(teacher)
    }

    function toggleFormVisibility(){
        if(!formVisibility){
            setFormVisibility(true);
        }else{
            setFormVisibility(false);
        }
    }

    return (<View style={styles.container}>
        <ScrollView contentContainerStyle={{
            paddingBottom:16
        }} style={styles.teacherList}>
        <PageHeader title="Proffys Disponíveis" rightContent={
        <BorderlessButton onPress={toggleFormVisibility}>
            <Feather size={30} name='filter' color="#FFF" />
        </BorderlessButton>
        }>
        {formVisibility && (
            <View style={styles.searchForm}>
                <Text style={styles.label}>Matéria</Text>
                <TextInput value={subject} onChangeText={text=>setSubject(text)}
                placeholderTextColor='#c1bccc' placeholder="Qual a matéria?" style={styles.input} />
                <View style={styles.inputGroup}>
                    <View style={styles.inputBlock}>
                        <Text style={styles.label}>Dia da semana</Text>
                        <TextInput value={week_day} onChangeText={text=>setWeek_day(text)}
                        placeholderTextColor='#c1bccc' placeholder="Qual o dia?" style={styles.input} />
                    </View>
                    <View style={styles.inputBlock}>
                        <Text style={styles.label}>Horário</Text>
                        <TextInput value={time} onChangeText={text=>setTime(text)}
                        placeholderTextColor='#c1bccc' placeholder="Qual o horário?" style={styles.input} />
                    </View>
                </View>
                <RectButton onPress={sendQuery} style={styles.submitButton}>
                    <Text style={styles.buttonText}>
                        Filtrar
                    </Text>
                </RectButton>
            </View>
        )}
        </PageHeader>
        <View style={styles.cards}>
            {teachers.map((teacher:Teacher)=>{
                return (<TeacherCard key={teacher._id} teacher={teacher}></TeacherCard>)
            })}
        </View>
        </ScrollView>
    </View>)
}