import dayjs from 'dayjs';

import { scheduleNew } from '../../services/schedule-new';
import { schedulesDay } from '../schedules/load';
const form = document.querySelector('form');
const clientName = document.getElementById('client');
const selectedDate = document.getElementById('date');

//Data atual para input
const inputToday = dayjs(new Date()).format('YYYY-MM-DD');


//Carrega a data atual,Define a data minima para agendamento.
selectedDate.value = inputToday;
selectedDate.min = inputToday;

form.onsubmit = async (event) => {
    event.preventDefault();

    try {
        const name = clientName.value.trim();


        if(!name){
            return alert("Informe o nome do cliente");
        }

        //Recupera o horario selecionado
        const hourSelected = document.querySelector('.hour-selected');
       
        //Recupera o horário selecionado
        if(!hourSelected){
            return alert("Selecione um horário");
        }

        
  //Recupera somente o horario
  const [hour] = hourSelected.innerHTML.split(":");


  //Insere a hora e data
  const when = dayjs(selectedDate.value).add(hour, 'hours');
  console.log(when);

  //Dera um ID
  const id = new Date().getTime();

  //Faz o agendamento
  await scheduleNew({
    id,
    name,
    when,
  });
  
  //Carrega os agendamentos
  await schedulesDay();
//Limpa o input de name do cliente
  clientName.value = '';
    } catch (error) {
        alert("Não foi possível realizar o agendamento");
        console.log(error);
        
    }
   
}
