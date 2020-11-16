# Projetos_JS_TS

Projeto: Lista de Tarefas

Usa localStorage para armazenar as tarefas no Browser.
comandos:
Armazenar locamente:
localStorage.setItem('tarefas', tarefasJSON);
const tarefasJSON = JSON.stringify(listaDeTarefas); // precisa passar o array tarefas para um Json stirng.

Recuperar as tarefas locamente:
const tarefas = localStorage.getItem('tarefas');
const listaDeTarefas = JSON.parse(tarefas); // Precisa passar a string tarefas para um array.
