
// Characters

var characters = {
  person1: {
    name: 'Grunt',
    health: 50,
    healthFull: 50,
    hits: 0,
    img: '<img src="assets/grunt.png" alt="">',
    items: [],
  },
  person2: {
    name: 'Elite',
    health: 120,
    healthFull: 120,
    hits: 0,
    img: '<img src="assets/elite.png" alt="" background-size="cover">',
    items: [],
  },
  person3: {
    name: 'Brute',
    health: 180,
    healthFull: 180,
    hits: 0,
    img: '<img src="assets/brute.png" alt="">',
    items: [],
  },
  player: {
    name: 'Player',
    health: 120,
    healthFull: 120,
    hits: 0,
    img: '<img src="assets/lose.png" alt="">',
    items: [],
  },
}
let selectedCharacter = characters.person1


// Items


var items = {
  fire: {
    name: 'Fire',
    modifier: 1,
    description: 'IT BURNS!',
  },
  ice: {
    name: 'Ice',
    modifier: 2,
    description: 'ITS COLD!',
  },
  water: {
    name: 'Water',
    modifier: 3,
    description: "Its wet!",
  },
}

function draw() {
  if (selectedCharacter.health <= 0) {
    document.getElementById("health").innerHTML = "0";
    document.getElementById("name").innerHTML = "Enemy Defeated!";
    document.getElementById("enemyImg").innerHTML = " "
  } else if (characters.player.health <= 0) {
    document.getElementById("playerHealth").innerHTML = 0;
    document.getElementById("enemyImg").innerHTML = characters.player.img;
    document.getElementById("health").innerHTML = '';
  } else {
    document.getElementById("health").innerHTML = selectedCharacter.health;
    document.getElementById("hits").innerHTML = selectedCharacter.hits;
    document.getElementById("name").innerHTML = selectedCharacter.name;
    document.getElementById('enemyImg').innerHTML = selectedCharacter.img;
    document.getElementById("playerHealth").innerHTML = characters.player.health;
  };
}

draw();



function character1() {
  selectedCharacter = characters.person1;
  draw();
}

function character2() {
  selectedCharacter = characters.person2;
  draw();
}

function character3() {
  selectedCharacter = characters.person3;
  draw();
}

function addMods() {
  let total = 0;
  for (let i = 0; i < selectedCharacter.items.length; i++) {
    total += selectedCharacter.items[i].modifier;
  };
  return total;
  enemyAttack();
};

function reset() {
  characters.person1.health = characters.person1.healthFull;
  characters.person2.health = characters.person2.healthFull;
  characters.person3.health = characters.person3.healthFull;
  characters.player.health = characters.player.healthFull;
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
    draw();
    enemyAttack();
  };
}

function punch() {
  if (selectedCharacter.health <= 0) {
    selectedCharacter.hits++;
    draw();
  } else {
    selectedCharacter.health -= 5 + addMods();
    selectedCharacter.hits++;
    draw();
    enemyAttack();
  }
}
function kick() {
  if (selectedCharacter.health <= 0) {
    selectedCharacter.hits++;
    draw();
  } else {
    selectedCharacter.health -= 10 + addMods();
    selectedCharacter.hits++;
    draw();
    enemyAttack();
  }
}

function giveFire() {
  selectedCharacter.items.push(items.fire);
  enemyAttack();
}

function giveIce() {
  selectedCharacter.items.push(items.ice);
  enemyAttack();
}

function giveWater() {
  selectedCharacter.items.push(items.water);
  enemyAttack();
}

function enemyAttack() {
  if (selectedCharacter == characters.character1) {
    characters.player.health -= Math.floor(Math.random() * 5);
    draw();
  } else if (selectedCharacter == characters.person2) {
    characters.player.health -= Math.floor(Math.random() * 10);
    draw();
  } else {
    characters.player.health -= Math.floor(Math.random() * 15);
    draw();
  }
}

function heal() {
  characters.player.health += Math.floor(Math.random() * 100);
  enemyAttack();
}