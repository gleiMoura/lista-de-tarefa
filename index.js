function adicionarTarefa() {
    const inputTarefa = document.getElementById('tarefa'); //pega o elemento HTML com Id tarefa do DOM
    const tarefa = inputTarefa.value.trim(); //pega o valor do elemento com id "tarefa" usando trim para remover espaços

    if (tarefa !== '') { //se tarefa for diferente de vazio
        const listaDeTarefas = document.getElementById('listaDeTarefas'); //Pega o lugar onde as tarefas deverão ser colocadas
        const novaTarefa = document.createElement('li'); //Cria um elemento "li" para colocar dentro das tarefas
        novaTarefa.textContent = tarefa; //coloca o valor da nova tarefa dentro do elemento "li" 
        listaDeTarefas.appendChild(novaTarefa); // Coloca a nova tarefa "li" dentro do elemento do DOM "ul"
        inputTarefa.value = ''; // Limpa o campo de entrada
    }
}