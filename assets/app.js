
// Characters

var characters = {
  person1: {
    name: 'Grunt',
    health: 50,
    healthFull: 50,
    hits: 0,
    img: '<img src="assets/grunt.png" alt="" class="img-shrink">',
    items: [],
  },
  person2: {
    name: 'Elite',
    health: 120,
    healthFull: 120,
    hits: 0,
    img: '<img src="assets/elite.png" alt="" class="img-shrink">',
    items: [],
  },
  person3: {
    name: 'Brute',
    health: 180,
    healthFull: 180,
    hits: 0,
    img: '<img src="assets/brute.png" alt="" class="img-shrink">',
    items: [],
  },
  player: {
    name: 'Player',
    health: 120,
    healthFull: 120,
    hits: 0,
    img: '<img src="assets/lose.png" alt="" class="img-shrink">',
    items: [],
  },
  boss: {
    name: 'Warden Eternal',
    health: 250,
    healthFull: 250,
    hits: 0,
    img: '<img src="assets/wardenEternal.png" alt="" class="img-shrink">',
    items: []
  }
}
let selectedCharacter = characters.person1


// Items


var items = {
  fire: {
    name: 'Fire',
    modifier: Math.floor(Math.random() * 5),
    description: 'IT BURNS!',
  },
  ice: {
    name: 'Ice',
    modifier: Math.floor(Math.random() * 10),
    description: 'ITS COLD!',
  },
  water: {
    name: 'Water',
    modifier: Math.floor(Math.random() * 20),
    description: "Its wet!",
  },
}

function draw() {
  if (characters.player.health <= 0) {
    document.getElementById("playerHealth").innerHTML = 0;
    document.getElementById("enemyImg").innerHTML = characters.player.img;
    document.getElementById("health").innerHTML = '';
    document.getElementById("name").innerHTML = '';
  } else if (selectedCharacter.health <= 0) {
    if (selectedCharacter == characters.person1) {
      var gruntDeathSound = new Audio('assets/gruntDeath.mp3');
      gruntDeathSound.play();
    } else if (selectedCharacter == characters.person2) {
      var eliteDeathSound = new Audio('assets/eliteDeath.mp3');
      eliteDeathSound.play();
    } else if (selectedCharacter == characters.person3) {
      var bruteDeathSound = new Audio('assets/bruteDeath.mp3');
      bruteDeathSound.play();
    } else if (selectedCharacter == characters.boss) {
      var victory = new Audio('assets/victory.mp3');
      victory.play();
    }
    document.getElementById("health").innerHTML = "0";
    document.getElementById("name").innerHTML = "Enemy Defeated!";
    document.getElementById("enemyImg").innerHTML = " "
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
  var gruntSpawnSound = new Audio('assets/gruntSpawn.mp3');
  gruntSpawnSound.play();
  draw();
}

function character2() {
  selectedCharacter = characters.person2;
  var eliteSpawnSound = new Audio('assets/eliteSpawn.mp3');
  eliteSpawnSound.play();
  draw();
}

function character3() {
  selectedCharacter = characters.person3;
  var bruteSpawnSound = new Audio('assets/bruteSpawn.mp3');
  bruteSpawnSound.play();
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
  characters.boss.health = characters.boss.healthFull;
  characters.player.health = characters.player.healthFull;
  characters.person1.hits = 0;
  characters.person2.hits = 0;
  characters.person3.hits = 0;
  characters.boss.hits = 0;
  characters.person1.items = [];
  characters.person2.items = [];
  characters.person3.items = [];
  characters.boss.items = [];
  selectedCharacter = characters.person1
  draw();
}

function slap() {
  if (selectedCharacter.health <= 0) {
    selectedCharacter.hits++;
    draw();
  } else {
    selectedCharacter.health -= Math.floor(Math.random() * 5) + addMods();
    selectedCharacter.hits++;
    var meleeSound = new Audio('assets/melee.mp3');
    meleeSound.play();
    draw();
    enemyAttack();
  };
}

function punch() {
  if (selectedCharacter.health <= 0) {
    selectedCharacter.hits++;
    draw();
  } else {
    selectedCharacter.health -= Math.floor(Math.random() * 10) + addMods();
    selectedCharacter.hits++;
    var shotSound = new Audio('assets/shot.mp3');
    shotSound.play();
    draw();
    enemyAttack();
  }
}
function kick() {
  if (selectedCharacter.health <= 0) {
    selectedCharacter.hits++;
    draw();
  } else {
    selectedCharacter.health -= Math.floor(Math.random() * 20) + addMods();
    selectedCharacter.hits++;
    var grenadeSound = new Audio('assets/grenade.mp3');
    grenadeSound.play();
    draw();
    enemyAttack();
  }
}

function giveFire() {
  selectedCharacter.items.push(items.fire);
  var doubleSound = new Audio('assets/double.mp3');
  doubleSound.play();
  enemyAttack();
}

function giveIce() {
  selectedCharacter.items.push(items.ice);
  var chargeSound = new Audio('assets/charge.mp3');
  chargeSound.play();
  enemyAttack();
}

function giveWater() {
  selectedCharacter.items.push(items.water);
  var explosiveSound = new Audio('assets/explosive.mp3');
  explosiveSound.play();
  enemyAttack();
}

var bossSounds = ['assets/boss1.mp3', 'assets/boss2.mp3', 'assets/boss3.mp3', 'assets/boss4.mp3', 'assets/boss5.mp3']

function enemyAttack() {
  if (selectedCharacter === characters.person1) {
    characters.player.health -= Math.floor(Math.random() * 5);
    draw();
  } else if (selectedCharacter === characters.person2) {
    characters.player.health -= Math.floor(Math.random() * 10);
    draw();
  } else if (selectedCharacter === characters.person3) {
    characters.player.health -= Math.floor(Math.random() * 15);
    draw();
  } else {
    characters.player.health -= Math.floor(Math.random() * 40);
    var randSound = Math.floor(Math.random() * 4);
    var bossFightSound = new Audio(bossSounds[randSound])
    bossFightSound.play();
    draw();
  }
}

function heal() {
  if (characters.player.health >= 120) {
    characters.player.health = 120;
  } else if (characters.player.health <= 0) {
    draw();
  } else {
    characters.player.health += Math.floor(Math.random() * 50);
    var healSound = new Audio('assets/heal.mp3');
    healSound.play();
    enemyAttack();
  }
}

function checkBoss() {
  if (characters.person1.health <= 0 && characters.person2.health <= 0 && characters.person3.health <= 0) {
    selectedCharacter = characters.boss;
    var bossSpawnSound = new Audio('assets/bossSpawn.mp3');
    bossSpawnSound.play();
    draw();
  } else {
    draw();
  }
}