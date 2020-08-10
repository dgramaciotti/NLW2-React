import {View} from 'react-native';
import React from 'react';
import styles from './styles';
import PageHeader from '../../components/pageheader/index';
import TeacherCard from '../../components/teacherCard/index';
import { ScrollView } from 'react-native-gesture-handler';
export default ()=>{
    return (<View style={styles.container}>
        <ScrollView>
            <PageHeader title="Meus Proffys favoritos"></PageHeader>
            <View style={styles.cards}>
                
            </View>
        </ScrollView>
    </View>)
}