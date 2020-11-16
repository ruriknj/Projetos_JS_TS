"use strict";

var inputTarefa = document.querySelector('.input-tarefa');
var btnTarefa = document.querySelector('.btn-tarefa');
var tarefas = document.querySelector('.tarefas');

var criaLi = function criaLi() {
  var li = document.createElement('li');
  return li;
};

inputTarefa.addEventListener('keypress', function (e) {
  if (e.keyCode === 13) {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
    limpaInput();
  }
});

var limpaInput = function limpaInput() {
  inputTarefa.value = '';
  inputTarefa.focus();
};

var criaBotaoApagar = function criaBotaoApagar(li) {
  li.innerText += ' ';
  var botaoApagar = document.createElement('button');
  botaoApagar.innerText = 'Apagar'; //botaoApagar.classList.add('apagar');

  botaoApagar.setAttribute('class', 'apagar');
  botaoApagar.setAttribute('title', 'apagar esta tarefa');
  li.appendChild(botaoApagar);
};

var criaTarefa = function criaTarefa(textoInput) {
  var li = criaLi();
  li.innerText = textoInput;
  tarefas.appendChild(li);
  limpaInput();
  criaBotaoApagar(li);
  salvarTarefas();
};

btnTarefa.addEventListener('click', function (e) {
  if (!inputTarefa.value) return;
  criaTarefa(inputTarefa.value);
});
document.addEventListener('click', function (e) {
  var el = e.target;

  if (el.classList.contains('apagar')) {
    el.parentElement.remove();
    salvarTarefas();
  }
});

var salvarTarefas = function salvarTarefas() {
  var liTarefas = tarefas.querySelectorAll('li');
  var listaDeTarefas = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = liTarefas[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var tarefa = _step.value;
      var tarefaTexto = tarefa.innerText;
      tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
      listaDeTarefas.push(tarefaTexto);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var tarefasJSON = JSON.stringify(listaDeTarefas);
  localStorage.setItem('tarefas', tarefasJSON);
};

var adicionaTarefasSalvas = function adicionaTarefasSalvas() {
  var tarefas = localStorage.getItem('tarefas');
  var listaDeTarefas = JSON.parse(tarefas);
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = listaDeTarefas[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var tarefa = _step2.value;
      criaTarefa(tarefa);
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
};

adicionaTarefasSalvas();