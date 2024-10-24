'use strict';

let cardsArray = [{
  'name': 'Chien1',
  'img': 'img/chien1.png'
}, {
  'name': 'Chien2',
  'img': 'img/chien2.png'
}, {
  'name': 'Chien3',
  'img': 'img/chien3.png'
}, {
  'name': 'Chien4',
  'img': 'img/chien4.png'
}, {
  'name': 'Chien5',
  'img': 'img/chien5.png'
}, {
  'name': 'Chien6',
  'img': 'img/chien6.png'
}, {
  'name': 'Chien7',
  'img': 'img/chien7.png'
}, {
  'name': 'Chien8',
  'img': 'img/chien8.png'
}, {
  'name': 'Chien9',
  'img': 'img/chien9.png'
}, {
  'name': 'Chien10',
  'img': 'img/chien10.png'
}];

let gameGrid = cardsArray.concat(cardsArray).sort(function () {
  return 0.5 - Math.random();
});

let firstGuess = '';
let secondGuess = '';
let count = 0;
let previousTarget = null;
let delay = (700);

let game = document.getElementById('game');
let grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

gameGrid.forEach(function (item) {
  let name = item.name,
      img = item.img;

  let card = document.createElement('div');
  card.classList.add('card');
  card.dataset.name = name;

  let front = document.createElement('div');
  front.classList.add('front');

  let back = document.createElement('div');
  back.classList.add('back');
  back.style.backgroundImage = 'url(' + img + ')';

  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});

let match = function match() {
  let selected = document.querySelectorAll('.selected');
  selected.forEach(function (card) {
    card.classList.add('match');
  });
};

let resetGuesses = function resetGuesses() {
  firstGuess = '';
  secondGuess = '';
  count = 0;
  previousTarget = null;

  let selected = document.querySelectorAll('.selected');
  selected.forEach(function (card) {
    card.classList.remove('selected');
  });
};

grid.addEventListener('click', function (event) {

  let clicked = event.target;

  if (clicked.nodeName === 'SECTION' || clicked === previousTarget || clicked.parentNode.classList.contains('selected') || clicked.parentNode.classList.contains('match')) {
    return;
  }

  if (count < 2) {
    count++;
    if (count === 1) {
      firstGuess = clicked.parentNode.dataset.name;
      console.log(firstGuess);
      clicked.parentNode.classList.add('selected');
    } else {
      secondGuess = clicked.parentNode.dataset.name;
      console.log(secondGuess);
      clicked.parentNode.classList.add('selected');
    }

    if (firstGuess && secondGuess) {
      if (firstGuess === secondGuess) {
        setTimeout(match, delay);
        firstGuess = '';
        secondGuess = '';
        count = 0;
        previousTarget = null;

        let selected = document.querySelectorAll('.selected');
        selected.forEach(function (card) {
          card.classList.remove('selected');
          card.classList.add('found');
        });

        const replay = document.createElement('p');
        replay.classList.add('replay_message');
        replay.textContent = 'Appuyez sur Espace pour rejouer';
        document.body.appendChild(replay);

        document.addEventListener('keydown', function(event) {
        // Vérifier si la touche pressée est la barre d'espace
        if (event.code === 'Space') {
          location.reload(); // Rafraîchir la page
        }
        });
        return;
      }
      setTimeout(resetGuesses, delay);
    }
    previousTarget = clicked;
  }
});
