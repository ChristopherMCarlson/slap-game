// Characters

var person1 = {
  name: 'Guy Dudeson',
  health: 150,
  healthFull: 150,
  hits: 0,
}

var person2 = {
  name: 'Dude Guyson',
  health: 120,
  healthFull: 120,
  hits: 0,
}

// Items

var fire = {
  name: 'Fire',
  modifier: 2,
  description: 'IT BURNS!',
}

function draw() {
  if (person.health <= 0) {
    person.health = 0;
  }
  document.getElementById("health").innerHTML = person.health;
  document.getElementById("hits").innerHTML = person.hits;
  document.getElementById("name").innerHTML = person.name;
}

draw();

function reset() {
  person.health = person.healthFull;
  person.hits = 0;
  draw();
}

function slap() {
  if (person.health <= 0) {
    person.hits++;
    draw();
  } else {
    person.health--;
    person.hits++;
    draw()
  };
}

function punch() {
  if (person.health <= 0) {
    person.hits++;
    draw();
  } else {
    person.health -= 5;
    person.hits++;
    draw();
  }
}
function kick() {
  if (person.health <= 0) {
    // person.health = 0;
    person.hits++;
    draw();
  } else {
    person.health -= 10;
    person.hits++;
    draw();
  }
}
