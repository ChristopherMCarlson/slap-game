var health = 100;
var hits = 0;
var person = 'Guy Dudeson'

function draw() {
  document.getElementById("health").innerHTML = health;
  document.getElementById("hits").innerHTML = hits;
  document.getElementById("name").innerHTML = person;
}

draw();

function reset() {
  health = 100;
  hits = 0;
  draw();
}

function slap() {
  if (health <= 0) {
    hits++;
    draw();
  } else {
    health--;
    hits++;
    draw()
  };
}

function punch() {
  if (health <= 0) {
    hits++;
    draw();
  } else {
    health -= 5;
    hits++;
    draw();
  }
}
function kick() {
  if (health <= 0) {
    hits++;
    draw();
  } else {
    health -= 10;
    hits++;
    draw();
  }
}
