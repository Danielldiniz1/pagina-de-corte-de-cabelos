import dayjs from 'dayjs';
import {openingHours} from '../../utils/opening-hours.js';

export function hoursLoad({ date }){
   const opening = openingHours.map((hour) =>{
    //Reucupera somente a hora
    const [scheduleHour] = hour.split(":")

    //Adiciona a hora na date e verifica se está no passado
    const isHourPast = dayjs(date).add(scheduleHour, 'hours').isAfter(dayjs())
  

    //Define se o horario esta disponivel

    return  {
        hour,
        available: !isHourPast,
    }
 })
}
