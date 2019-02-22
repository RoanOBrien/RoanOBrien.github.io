alert("Welcome aboard the I.T.S. Enterprise!")

//makes an object that is applied to all the crew members
function CrewMember(name, health, hunger, thirst) {
    this.name = name;
    this.health = health;
    this.hunger = hunger;
    this.thirst = thirst;
}

var kirk = new CrewMember("James T. Kirk", 100, 0, 0);
var spock = new CrewMember("Spock", 100, 0, 0);
var uhura = new CrewMember("Uhura", 100, 0, 0);
var scotty = new CrewMember("Scotty", 100, 0, 0);

//array of crew is used later when checking health, hunger and thirst statusses
var crew = [kirk, spock, uhura, scotty];
console.log(crew.length);

var barWidth = 300;
var barWidthPercentage = 100;
var foodAmount = 200;
var barWidthFood = barWidth;
var barWidthWater = barWidth;
var waterAmount = 300;
var counter = 0;
var counterTwo = 0;
var counterThree = 0;

//function that tracks the time and displays it, also makes the rest of the functions run
function time() {
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();

    minutes = checkTime(minutes);
    seconds = checkTime(seconds);

    document.getElementById("time").innerHTML = hours + ":" + minutes + ":" + seconds;
    setTimeout(time, 1000);

    changeHealthBar();
    changeFoodBar();
    changeWaterBar();
    healthDecreaser();
    changeStatus();
    displayStatus();
    checkLife();
    displayFatality();
}

time();

//function that displays and changes the health bar according to the time elapsed
function changeHealthBar() {
    barWidthPercentage = barWidthPercentage - 0.5;
    barWidth = barWidth - 1.5;

    if (counter == 0) {
        document.querySelector(".reserveBar").style.width = barWidth + "px";
        document.getElementById("barReserves").innerHTML = barWidthPercentage + "\xa0%";

        if (barWidth <= 75 && barWidth > 30) {
            document.querySelector(".reserveBar").style.backgroundColor = "orange";
            document.querySelector(".reserveBarTwo").style.color = "white";
        }
        if (barWidth <= 30 && barWidth > 0) {
            document.querySelector(".reserveBar").style.backgroundColor = "red";
            document.querySelector(".reserveBar").style.color = "white";
        }
    }
    if (barWidth <= 0) {
        document.querySelector(".reserveBar").style.width = 300 + "px";
        document.getElementById("barReserves").innerHTML = "You have no medicine anymore!"
        document.querySelector(".reserveBar").style.backgroundColor = "#303443";
        counter = 1;
    }
}

//function that displays and changes the food bar when button is clicked
function changeFoodBar() {
    document.getElementById("foodButton").onclick = function () {
        barWidthFood = barWidthFood - 30;
        foodAmount = foodAmount - 20;
        for (var y = 0; y < 4; y++) {
            crew[y].hunger = 0;
            crew[y].health = crew[y].health + 5;
            if (crew[y].health > 100) {
                crew[y].health = 100;
            }
        }
    }

    barWidthFood;
    foodAmount;
    if (counterTwo == 0) {
        document.querySelector(".reserveBarTwo").style.width = barWidthFood + "px";
        document.getElementById("foodReserves").innerHTML = foodAmount + "\xa0" + "kg";

        if (barWidthFood <= 75 && barWidthFood > 30) {
            document.querySelector(".reserveBarTwo").style.backgroundColor = "orange";
            document.querySelector(".reserveBarTwo").style.color = "white";
        }
        if (barWidthFood <= 30 && barWidthFood > 0) {
            document.querySelector(".reserveBarTwo").style.backgroundColor = "red";
            document.querySelector(".reserveBarTwo").style.color = "white";
        }
    }
    if (barWidthFood <= 0) {
        document.querySelector(".reserveBarTwo").style.width = 300 + "px";
        document.getElementById("foodReserves").innerHTML = "You are out of food!"
        document.querySelector(".reserveBarTwo").style.backgroundColor = "#303443";
        counterTwo = 1;
    }
}

//function that displays and changes the water bar when button is clicked
function changeWaterBar(){
    document.getElementById("waterButton").onclick = function () {
        barWidthWater = barWidthWater - 15;
        waterAmount = waterAmount - 15;
        for (var x = 0; x < 4; x++) {
            crew[x].thirst = 0;
            crew[x].health = crew[x].health + 5;
            if (crew[x].health > 100) {
                crew[x].health = 100;
            }
        }
    }

    barWidthWater;
    waterAmount;
    if (counterThree == 0) {
        document.querySelector(".reserveBarThree").style.width = barWidthWater + "px";
        document.getElementById("waterReserves").innerHTML = waterAmount + "\xa0" + "L";

        if (barWidthWater <= 75 && barWidthWater > 30) {
            document.querySelector(".reserveBarThree").style.backgroundColor = "orange";
            document.querySelector(".reserveBarThree").style.color = "white";
        }
        if (barWidthWater <= 30 && barWidthWater > 0) {
            document.querySelector(".reserveBarThree").style.backgroundColor = "red";
            document.querySelector(".reserveBarThree").style.color = "white";
        }
    }
    if (barWidthWater <= 0) {
        document.querySelector(".reserveBarThree").style.width = 300 + "px";
        document.getElementById("waterReserves").innerHTML = "You are out of water!"
        document.querySelector(".reserveBarThree").style.backgroundColor = "#303443";
        counterThree = 1;
    }
}

//function that decreases the health of the crew members incrementally depending on their hunger and thirst
function healthDecreaser(){
    for (var z = 0; z < 4; z++) {
        if (crew[z].hunger > 100) {
            crew[z].hunger = 100;
            crew[z].health = crew[z].health - 2;
        }
        if (crew[z].thirst > 100) {
            crew[z].thirst = 100;
            crew[z].health = crew[z].health - 4;
        }
    }
}

//adds a "0" to the minutes and seconds so the time is displayed in a constant way
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

//displays the statusses of the crew members, also alters the statusses
function changeStatus() {
    kirk.health = Math.round((kirk.health - 0.5) * 100) / 100;
    kirk.hunger = Math.round((kirk.hunger + 5) * 100) / 100;
    kirk.thirst = Math.round((kirk.thirst + 2.5) * 100) / 100;

    spock.health = Math.round((spock.health - 0.5) * 100) / 100;
    spock.hunger = Math.round((spock.hunger + 2) * 100) / 100;
    spock.thirst = Math.round((spock.thirst + 3) * 100) / 100;

    uhura.health = Math.round((uhura.health - 0.5) * 100) / 100;
    uhura.hunger = Math.round((uhura.hunger + 3) * 100) / 100;
    uhura.thirst = Math.round((uhura.thirst + 4) * 100) / 100;

    scotty.health = Math.round((scotty.health - 0.5) * 100) / 100;
    scotty.hunger = Math.round((scotty.hunger + 3) * 100) / 100;
    scotty.thirst = Math.round((scotty.thirst + 5) * 100) / 100;
}

//displays the status of the crew members' health, hunger and thirst
function displayStatus() {
    document.getElementById("kirk").innerHTML = "<BR/>Name: " + kirk.name + "<BR/><BR/> Health status: " + kirk.health + "%" + "<BR/><BR/> Hunger: " + kirk.hunger + "%" + "<BR/><BR/> Thirst: " + kirk.thirst + "%";

    document.getElementById("spock").innerHTML = "<BR/>Name: " + spock.name + "<BR/><BR/> Health status: " + spock.health + "%" + "<BR/><BR/> Hunger: " + spock.hunger + "%" + "<BR/><BR/> Thirst: " + spock.thirst + "%";

    document.getElementById("uhura").innerHTML = "<BR/>Name: " + uhura.name + "<BR/><BR/> Health status: " + uhura.health + "%" + "<BR/><BR/> Hunger: " + uhura.hunger + "%" + "<BR/><BR/> Thirst: " + uhura.thirst + "%";

    document.getElementById("scotty").innerHTML = "<BR/>Name: " + scotty.name + "<BR/><BR/> Health status: " + scotty.health + "%" + "<BR/><BR/> Hunger: " + scotty.hunger + "%" + "<BR/><BR/> Thirst: " + scotty.thirst + "%";
}

//function that checks whether the crewmembers are still alive and displays how many are alive
function checkLife() {
    var j = 0;

    if (uhura.health <= 0 || kirk.health <= 0 || spock.health <= 0 || scotty.health <= 0) {
        if (uhura.health <= 0) {
            document.getElementById("uhura").innerHTML = "</BR> Oh no! </BR> Uhura is dead!";
            j++;
        }
        if (kirk.health <= 0) {
            document.getElementById("kirk").innerHTML = "</BR> Oh no! </BR> The captain is dead!";
            j++;
        }
        if (spock.health <= 0) {
            document.getElementById("spock").innerHTML = "</BR> Oh no! </BR> Spock just died!";
            j++;
        }
        if (scotty.health <= 0) {
            document.getElementById("scotty").innerHTML = "</BR> Oh no! </BR> We can't be beamed up anymore!";
            j++;
        }
    }
}

//displays the message that says how many crew members are still alive
function displayFatality() {
    var x = 4 - j;
    if (x > 0) {
        document.getElementById("crewAlive").innerHTML = "</BR></BR></BR></BR></BR></BR>" + x + " crewmember(s) are still alive!";
    }
    if (x == 0) {
        document.getElementById("crewAlive").innerHTML = "</BR></BR></BR></BR></BR>" + " Your crew is dead! Chances of survival: 0 %";
    }
}
