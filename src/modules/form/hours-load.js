import dayjs from 'dayjs';
import {openingHours} from '../../utils/opening-hours.js';


const hours = document.getElementById('hours');

export function hoursLoad({ date }){
   const opening = openingHours.map((hour) =>{
    //Reucupera somente a hora
    const [scheduleHour] = hour.split(":")

    //Adiciona a hora na date e verifica se está no passado
    const isHourPast = dayjs(date).add(scheduleHour, 'hours').isBefore(dayjs())
  

    //Define se o horario esta disponivel

    return  {
        hour,
        available: !isHourPast,
    }
 })

 //Renderiza os horarios na tela
 opening.forEach(({hour, available}) =>{
    const li = document.createElement('li');

    li.classList.add("hour");
    li.classList.add(available ? "hour-available" : "hour-unavailable");
    li.textContent = hour;
    hours.append(li);
 })
}
