let counter = 0;
const counterElement = document.getElementById('counter');
const displayElement = document.getElementById('display');

function increaseCounter() {
    counter++;
    updateCounter();
}

function decreaseCounter() {
    if (counter > 0) {
        counter--;
        updateCounter();
    }
}

function updateCounter() {
  counterElement.textContent = counter;
  displayElement.innerHTML = "<span style='font-size: 50px;'>You were distracted </span>";
  const countText = document.createElement('span');
  countText.textContent = counter;
  countText.style.color = '#862e1d';
  countText.style.fontSize = '55px'; 
  displayElement.appendChild(countText);
  displayElement.innerHTML += " <span style='font-size: 50px;'>times</span>";
}

let audio = document.getElementById("audio");

function music_event() {
    return audio.paused ? audio.play() : audio.pause();
};


let wind = document.getElementById("wind");

function music_event2() {
    return wind.paused ? wind.play() : wind.pause();
};

let walse = document.getElementById("walse");

function music_event3() {
    return walse.paused ? walse.play() : walse.pause();
};

let focus = document.getElementById("focus");

function music_event4() {
    return focus.paused ? focus.play() : focus.pause();
};

let violin = document.getElementById("violin");

function music_event5() {
    return violin.paused ? violin.play() : violin.pause();
};
let birds = document.getElementById("birds");

function music_event6() {
    return birds.paused ? birds.play() : birds.pause();
};
let waves = document.getElementById("waves");

function music_event7() {
    return waves.paused ? waves.play() : waves.pause();
};
let rain = document.getElementById("rain");

function music_event8() {
    return rain.paused ? rain.play() : rain.pause();
};