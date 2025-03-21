import { schedulesDay } from '../schedules/load';

//Seleciona o input de data
const selectedDate = document.querySelector('#date');

//Recarrega a lista de horarios quando o input de data é alterado
selectedDate.onchange = () => schedulesDay()
