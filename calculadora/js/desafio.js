const valorHoraInput = document.querySelector('#valor-hora');

const horasProjetoInput = document.querySelector('#horas-projeto');

const resposta = document.querySelector('#resposta');

const calcular = () => {
     const valorHora= valorHoraInput.valueAsNumber;
     const horasProjeto = horasProjetoInput.valueAsNumber;
     const  valorProjeto =(valorHora * horasProjeto) ;

     resposta.innerHTML = "R$" + valorProjeto.toFixed(2);




}