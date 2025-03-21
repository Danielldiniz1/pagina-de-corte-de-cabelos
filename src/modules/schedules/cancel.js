import { schedulesDay } from './load';
import { scheduleCancel } from '../../services/schedule-cancel,js';

const periods = document.querySelectorAll('.period');


//Gera o evento de click para cada periodo
periods.forEach((periods) => {
//captura o evento de click
periods.addEventListener('click', async(event) => {
    //verifica se o elemento clicado é um icone de cancelamento
     if(event.target.classList.contains('cancel-icon')){
        //remove o elemento pai do icone
        const item = event.target.closest("li") 
       //Pega o id do agendamento para remover
        const {id} = item.dataset;
       //Verifica se o id existe
        if(id){
            //Pergunta se o usuario deseja cancelar o agendamento
            const isConfirm = confirm("Tem certeza que deseja cancelar este agendamento?");
            //Se o usuario confirmar, remove o agendamento
            if(isConfirm){
                //Chama a função de cancelamento
                await scheduleCancel({id});
                //Atualiza a lista de agendamentos
                schedulesDay();
              
            }
        }

    }
})
})
