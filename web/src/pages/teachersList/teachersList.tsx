import React, { useState } from "react";
import "./styles.css";
import Header from "../../components/pageheader/index";
import TeacherCard, {Teacher} from '../../components/teacherCard/index';
import Input from '../../components/input/index';
import Select from '../../components/inputSelect/index';
import api from '../../services/api';
//Teachers list component
export default () => {
  const [subject, setSubject] = useState('');
  const [week_day,setWeek_day] = useState('');
  const [time, setTime] = useState('');
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
  }
  return (
    <div id="page-teacher-list">
      <Header title="Estes são os proffys disponíveis">
        <form id="search-teacher">
          <Select onChange={e=>setSubject(e.target.value)} value={subject} options={[
                    {value: 'Artes', label:'Artes'},
                    {value: 'Biologia', label: 'Biologia'},
                    {value: 'Matematica', label: 'Matemática'},
                    {value: 'Quimica', label:'Química'}
                ]} label="class" text="Matérias"></Select>
           <Select onChange={e=>setWeek_day(e.target.value)} value={week_day} options={[
             {value:'segunda', label:'Segunda'},
             {value:'terça', label:'Terça'},
             {value:'quarta', label:'Quarta'},
             {value:'quinta', label:'Quinta'},
             {value:'sexta', label:'Sexta'},
             {value:'sabado', label:'Sábado'},
             {value:'domingo', label:'Domingo'}
           ]} label="week_day" text="Dia da semana"></Select>
           <Input onChange={e=>setTime(e.target.value)} value={time} text="Horários disponíveis" label="time" type="time"></Input>
           <div className="button-block">
            <button type="button" onClick={sendQuery} id="search">Buscar</button>
           </div>    
        </form>
      </Header>
      {teachers.map((teacher:Teacher)=>{
        return (
          <TeacherCard key={teacher._id} teacher={teacher}></TeacherCard>
        )
      })} 
    </div>
  );
};
