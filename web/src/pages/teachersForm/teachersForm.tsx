import React, {useState} from 'react';
import './styles.css';
import Header from '../../components/pageheader/index';
import Input from '../../components/input/index';
import TextArea from '../../components/textArea/index';
import Select from '../../components/inputSelect/index';
import warningIcon from '../../assets/images/icons/warning.svg';
import api from '../../services/api';
export default ()=> {
    const [name,setName] = useState('');
    const [photoLink,setphotoLink] = useState('');
    const [whatsapp,setwhatsapp] = useState('');
    const [about,setabout] = useState('');
    const [subject,setSubject] = useState('');
    const [cost,setCost] = useState('');
    
    function submitInfo(){
        const postObject = {
            name,
            photoLink,
            whatsappNumber:whatsapp,
            biografy:about,
            class:subject,
            cost,
            availableTimes:scheduleItems
        }
        console.log(postObject)
        api.post('user',postObject).then((res)=>{
            console.log(res);
            alert('Cadastro realizado com Sucesso!')
        }).catch(e=>{
            console.log(e);
            alert('Erro no cadastro!')})
    }
    const [scheduleItems,setSchedule] = useState([
        {week_day:'',from:'',to:''}
    ]);
    function setScheduleItemValue(pos:number, field:string, value:string){
        const newArray = scheduleItems.map((item,index)=>{
            if(index === pos){
                return {...item,[field]:value};
            }
            return item;
        })
        setSchedule(newArray);
    }
    function addNewScheduleItem(){
        setSchedule([...scheduleItems,{week_day:'',from:'',to:''}]);
    }
    return (<div id="page-teacher-form" className="container">
        <Header title="Que incrível que você quer dar aulas" description="O primeiro passo é preencher seu formulário de inscrição">
        </Header>
        <main>
            <fieldset>
                <legend>Seus Dados</legend>
                <Input onChange={e=>setName(e.target.value)} value={name} 
                label="name" text="Nome completo" type="string"></Input>

                <Input onChange={e=>setphotoLink(e.target.value)} value={photoLink} 
                label="photoLink" text="Link da sua foto" type="string"></Input>

                <Input onChange={e=>setwhatsapp(e.target.value)} value={whatsapp} 
                label="whatsapp" text="Whatsapp" type="number"></Input>

                <TextArea onChange={e=>setabout(e.target.value)} value={about} 
                label="about" text="Biografia"></TextArea>

            </fieldset>
            <fieldset>
                <legend>Sobre a aula</legend>
                <Select onChange={e=>setSubject(e.target.value)} value={subject} options={[
                    {value: 'Artes', label:'Artes'},
                    {value: 'Biologia', label: 'Biologia'},
                    {value: 'Matematica', label: 'Matemática'},
                    {value: 'Quimica', label:'Química'}
                ]} label="class" text="Matéria"></Select>
                <Input onChange={e=>setCost(e.target.value)} value={cost} 
                label="cost" text="Custo da sua hora por aula" type="number"></Input>
            </fieldset>
            <fieldset>
                <legend>Horários disponíveis
                    <button onClick={addNewScheduleItem} type="button">+ Novo horário</button>
                </legend>

                {scheduleItems.map((item, index)=>{
                    return (<div key={item.week_day} className="schedule-item">
                        <Select value={item.week_day}
                        onChange={e=>setScheduleItemValue(index,'week_day',e.target.value)}
                        options={[
                            {value:'segunda', label:'Segunda'},
                            {value:'terça', label:'Terça'},
                            {value:'quarta', label:'Quarta'},
                            {value:'quinta', label:'Quinta'},
                            {value:'sexta', label:'Sexta'},
                            {value:'sabado', label:'Sábado'},
                            {value:'domingo', label:'Domingo'}
                        ]} label="week_day" text="Dia da semana">
                    </Select>
                    <Input value={item.from}
                    onChange={e=>setScheduleItemValue(index,'from',e.target.value)} 
                    type="time" label="from" text="Das"></Input>
                    <Input value={item.to} onChange={e=>setScheduleItemValue(index,'to',e.target.value)} 
                    type="time" label="to" text="Até"></Input>
                    </div>)
                })}
            </fieldset>
            <footer>
                <p>
                    <img src={warningIcon} alt="Aviso importante" />
                    Importante!
                    <br />
                    Preencha todos os dados
                </p>
                <button onClick={submitInfo}>Salvar cadastro</button>
            </footer>
            
        </main>
    </div>)
}