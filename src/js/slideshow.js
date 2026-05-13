var imagens = [
  './../img/slide1.jpg',
  './../img/slide2.jpg',
  './../img/slide3.jpg',];

var atual = 0;
var img = document.getElementById('slide-img');
var pontos = document.getElementById('pontos');

// gera os pontos
for (var i = 0; i < imagens.length; i++) {
  var ponto = document.createElement('span');
  ponto.setAttribute('data-index', i);
  pontos.appendChild(ponto);

  ponto.addEventListener('click', function() {
    atual = parseInt(this.getAttribute('data-index'));
    trocarSlide();
  });
}

function trocarSlide() {
  img.src = imagens[atual];

  var todos = pontos.querySelectorAll('span');
  for (var i = 0; i < todos.length; i++) {
    todos[i].style.background = '#aaa';
  }
  todos[atual].style.background = '#1a1a2e';
}

document.getElementById('btn-anterior').addEventListener('click', function() {
  if (atual == 0) {
    atual = imagens.length - 1;
  } else {
    atual--;
  }
  trocarSlide();
});

document.getElementById('btn-proximo').addEventListener('click', function() {
  if (atual == imagens.length - 1) {
    atual = 0;
  } else {
    atual++;
  }
  trocarSlide();
});

// troca sozinho a cada 3 segundos
setInterval(function() {
  if (atual == imagens.length - 1) {
    atual = 0;
  } else {
    atual++;
  }
  trocarSlide();
}, 3000);

trocarSlide();