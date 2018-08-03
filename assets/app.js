// Characters

var characters = {
  person1: {
    name: 'Guy Dudeson',
    health: 150,
    healthFull: 150,
    hits: 0,
    items: [],
  },
  person2: {
    name: 'Dude Guyson',
    health: 120,
    healthFull: 120,
    hits: 0,
    items: [],
  },
}


// Items


var items = {
  fire: {
    name: 'Fire',
    modifier: 2,
    description: 'IT BURNS!',
  },
  ice: {
    name: 'Ice',
    modifier: 1,
    description: 'ITS COLD!',
  },
}

let selectedCharacter = characters.person1

function character1() {
  selectedCharacter = characters.person1;
  draw();
}

function character2() {
  selectedCharacter = characters.person2;
  draw();
}

function addMods() {
  let total = 0;
  for (let i = 0; i < selectedCharacter.items.length; i++) {
    total += selectedCharacter.items[i].modifier;
  }
  return total;
}

function draw() {
  if (selectedCharacter.health <= 0) {
    selectedCharacter.health = 0;
  }
  document.getElementById("health").innerHTML = selectedCharacter.health;
  document.getElementById("hits").innerHTML = selectedCharacter.hits;
  document.getElementById("name").innerHTML = selectedCharacter.name;
}

draw();

function reset() {
  selectedCharacter.health = selectedCharacter.healthFull;
  selectedCharacter.hits = 0;
  selectedCharacter.items = [];
  draw();
}

function slap() {
  if (selectedCharacter.health <= 0) {
    selectedCharacter.hits++;
    draw();
  } else {
    selectedCharacter.health -= 1 + addMods();
    selectedCharacter.hits++;
    draw()
  };
}

function punch() {
  if (selectedCharacter.health <= 0) {
    selectedCharacter.hits++;
    draw();
  } else {
    selectedCharacter.health -= 5;
    selectedCharacter.hits++;
    draw();
  }
}
function kick() {
  if (selectedCharacter.health <= 0) {
    // selectedCharacter.health = 0;
    selectedCharacter.hits++;
    draw();
  } else {
    selectedCharacter.health -= 10;
    selectedCharacter.hits++;
    draw();
  }
}

function giveFire() {
  selectedCharacter.items.push(items.fire);
}

function giveIce() {
  selectedCharacter.items.push(items.ice);
}