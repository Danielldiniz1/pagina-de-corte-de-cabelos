import dayjs from 'dayjs';
import { apiConfig } from './api.config';
export async function scheduleFetchByDay({ date }){
   try {
    //Fazendo a requisição para a API
    const response = await fetch(`${apiConfig.baseURL}/schedules`);
    //Converte a resposta para json
    const data = await response.json();

    //Filtra os agendamentos pela data selecionada
    const dailySchedules = data.filter((schedule) => dayjs(date).isSame(schedule.when, "day")
) 

    //Retorna os agendamentos
    return dailySchedules;

   } catch (error) {
    console.log(error);
    alert("Não foi possível carregar os agendamentos");
   }
}