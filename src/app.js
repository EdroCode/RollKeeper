const sidebar = document.getElementById("sidebar")
const dash = document.getElementById("dashboard")

const templates = {
  stopwatch: `

    <div id="stopwatch">
        <div class="flex flex-col gap-1 bg-white border rounded-2xl p-2 border-black w-64 h-64">

            
            <div class="flex items-center justify-between gap-1">

                <div class="flex gap-1 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-8">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>

                    <input class="text-lg font-semibold w-full pl-2" placeholder="Stopwatch" />
                </div>

                <button class="cursor-pointer" onclick="deleteTemplate('stopwatch')">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166
                            m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077
                            L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397
                            m-12 .562c.34-.059.68-.114 1.022-.165
                            m0 0a48.11 48.11 0 0 1 3.478-.397
                            m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201
                            a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916
                            m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                </button>

            </div>

            <hr>

            
            <div class="flex flex-col w-full h-full justify-between py-1">

                <div class="flex w-full h-full items-center justify-center">
                    <h1 id="clockText" class="text-3xl">00:00</h1>
                </div>

                <div class="flex gap-2 w-full">
                    <button id="clockStartButton"
                        class="border rounded-xl px-4 w-full h-10 cursor-pointer hover:bg-black hover:text-white transition-colors duration-200"
                        onclick="toggleClock()">Start</button>

                    <button
                        class="border rounded-xl px-4 w-full h-10 cursor-pointer hover:bg-black hover:text-white transition-colors duration-200"
                        onclick="clearClock()">Clear</button>
                </div>

            </div>

        </div> 
    </div>


  `,
  diceroller: `
    <div id="diceroller" >
        <div class="flex flex-col gap-1 bg-white border rounded-2xl p-2 border-black  h-80 w-md">
            
            <div class="flex items-center justify-between gap-1">
                
                <div class="flex gap-1 items-center">
                    <img src="./images/dice.svg" class="w-8 h-8">
                    <h1 class="text-lg font-semibold w-full pl-2" >DiceRoller</h1> 
                </div>
                <button class="cursor-pointer" onclick="deleteTemplate('diceroller')">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                </button>


            </div>
            <hr>
            
            <div class="flex w-full h-full p-2 gap-2">

                <div class="flex flex-col gap-3 w-1/2 h-full">
                    <div class="flex w-full gap-2 h-1/3">
                        <button onclick="rollDice(4)" class="flex w-1/3 h-full border border-black items-center justify-center rounded-xl hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer ">D4</button>
                        <button onclick="rollDice(6)" class="flex w-1/3 h-full border border-black items-center justify-center rounded-xl hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer">D6</button>
                        <button onclick="rollDice(8)" class="flex w-1/3 h-full border border-black items-center justify-center rounded-xl hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer">D8</button>
                    </div>
                    <div class="flex w-full gap-2 h-1/3">
                        <button onclick="rollDice(10)" class="flex w-1/3 h-full border border-black items-center justify-center rounded-xl hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer">D10</button>
                        <button onclick="rollDice(12)" class="flex w-1/3 h-full border border-black items-center justify-center rounded-xl hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer">D12</button>
                        <button onclick="rollDice(20)" class="flex w-1/3 h-full border border-black items-center justify-center rounded-xl hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer">D20</button>
                        
                    </div>
                    <div class="flex w-full h-1/3">
                        <button onclick="rollDice(100)" class="flex w-1/3 h-full border border-black items-center justify-center rounded-xl hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer">D100</button>

                    </div>
                </div>
                <div class="flex flex-col w-1/2 gap-2 h-full">
                    <div id="diceShow" class="flex border rounded-xl text-6xl p-2 w-full h-2/3 items-center justify-center "></div>
                    <div class="flex border rounded-xl p-2 gap-2 w-full h-1/3  overflow-y-scroll">
                        <p id="diceHistory" class="text-gray-600"></p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  `,
  preset: `
    <template id="preset-template">

        <div class="flex flex-col gap-1 bg-white border rounded-2xl p-2 border-black shadow-xl w-64 h-64">
            <div class="flex items-center  gap-1">
                <!-- Icon -->
                <h1 class="text-lg font-semibold">PresetName</h1>
            </div>
            <hr>
            <div class="flex flex-col w-full h-full justify-between py-1">

            </div>
        </div>
    </template>
  `



};




function loadTemplate(name) {
  
    const add = templates[name]
    console.log(`spawning ${name} into dashboard`)
    dash.innerHTML += add
}

function deleteTemplate(name) {
    
}



// STOPWATCH

let seconds = 0;
let counting = false;
let intervalId; 

function toggleClock() {
    if (counting) {
        stopClock();
    } else {
        startClock();
    }
}


function startClock() {
    const clockTextH = document.getElementById('clockText');
    const startButton = document.getElementById('clockStartButton');
    startButton.textContent = 'Stop'
    counting = true;
    console.log('Clock started')

    if (counting && !intervalId) { 
        intervalId = setInterval(() => {
            seconds += 1;        
            clockTextH.innerHTML = secondsToTimeFormat(seconds);

        }, 1000);
    }
}

function stopClock() {
    const startButton = document.getElementById('clockStartButton');
    startButton.textContent = 'Start';
    console.log('Clock stopped');

    clearInterval(intervalId);
    intervalId = null;      
    counting = false;
}


function clearClock () {
    const clockTextH = document.getElementById('clockText');
    stopClock();
    seconds = 0;

    clockTextH.textContent = '00:00'
}

function secondsToTimeFormat(totalSeconds) {

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;


    const pMinutes = minutes.toString().padStart(2, '0');
    const pSeconds = seconds.toString().padStart(2, '0');

    if (hours > 0) {
        return `${hours}:${pMinutes}:${pSeconds}`;
    }
    else {
        return `${pMinutes}:${pSeconds}`;
    }

}


// DICE ROLLER

let selectedDice = 20 // default

function rollDice (sides) {

    const diceShow = document.getElementById('diceShow')
    const diceHistory = document.getElementById('diceHistory')


    const result = Math.floor(Math.random() * sides); 

    diceHistory.textContent += ` ${result}`;
    diceShow.textContent = `${result}`;





}