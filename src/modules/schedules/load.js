import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { hoursLoad } from "../form/hours-load.js";
import { schedulesShow } from "./show.js";
//Seleciona o input de data
const selectedDate = document.querySelector('#date');
export async function schedulesDay(){
    //Obtem a data do input
    const date = selectedDate.value;

    //Busca na API os agendamentos da data selecionada
    const dailySchedules = await scheduleFetchByDay({date});

    //Exibe os agendamentos na tela
    schedulesShow({ dailySchedules });
    


    //Carrega os horários disponíveis
    hoursLoad({date, dailySchedules});
}