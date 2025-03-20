import { hoursLoad } from "../form/hours-load.js";
//Seleciona o input de data
const selectedDate = document.querySelector('#date');
export function schedulesDay(){
    //Obtem a data do input
    const date = selectedDate.value;
    //Carrega os horários disponíveis
    hoursLoad({date});
}