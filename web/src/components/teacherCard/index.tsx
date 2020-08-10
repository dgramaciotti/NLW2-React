import React from 'react';
import Whatsapp from '../../assets/images/icons/whatsapp.svg';
import './styles.css';
import api from '../../services/api';

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

const teacherCard:React.FC<TeacherProps> = ({teacher}) => {
  function openWhatsapp(){
    api.post('connections').then(res=>console.log('Added connection'));
    //Open whatsapp
  }  
  
  return(
        <main>
        <article className="teacher-item">
          <header>
            <img alt="professor" src={teacher.photoLink} />
            <div>
              <strong>{teacher.name}</strong>
              <span>{teacher.class}</span>
            </div>
          </header>
          <p>
            {teacher.biografy}
          </p>
          <footer>
              <p>
                  Preço/hora
              <strong> R$ {teacher.cost}</strong>
              </p>
              <button onClick={openWhatsapp} type="button">
                  <img src={Whatsapp} alt="Whatsapp"/> Entrar em contato
              </button>
          </footer>
        </article>
      </main>
    )
}
export default teacherCard;