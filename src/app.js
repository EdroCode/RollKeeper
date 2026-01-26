const sidebar = document.getElementById("sidebar")
const dash = document.getElementById("dashboard")

const turnOrderTemplates = {
    turnLabel: `
    
        <li draggable="true" ondragover="dragOver(event)" ondblclick="this.remove()"  ondragstart="dragStart(event)" class="cursor-grab "><input class="border-b hover:border-red-700 pl-1 py-2 w-full cursor-grab" placeholder="Name"></li>
    `,
    preset2: `
        <div class="flex gap-2">
            <h1 class="flex border w-1/4 items-center justify-center rounded-lg">1</h1>
            <input class="border-b pl-1 py-2 w-full cursor-text" placeholder="Name">
        </div>
        `
}


const templates = {
  stopwatch: `

    
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
            <button class="cursor-pointer" onclick="deleteItem(this)">
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
                <h1 class="clockText text-3xl">00:00</h1>
            </div>
            <div class="flex gap-2 w-full">
                <button class="clockStartButton border rounded-xl px-4 w-full h-10 cursor-pointer hover:bg-black hover:text-white transition-colors duration-200"
                    onclick="toggleClock(this)">Start</button>
                <button class="border rounded-xl px-4 w-full h-10 cursor-pointer hover:bg-black hover:text-white transition-colors duration-200"
                    onclick="clearClock(this)">Clear</button>
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
                <button class="cursor-pointer" onclick="deleteItem(this)">
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
    partypreset: `
    <div class="flex flex-col gap-1 bg-white border rounded-2xl p-2 border-black  h-fit min-w-64">
        <div class="flex items-center justify-between  gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
            </svg>
            <h1 class="text-lg font-semibold">Party Tracker</h1>
            <button class="cursor-pointer" onclick="deleteItem(this)">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
            </button>
        </div>
        <hr>
        <div id="partyTrackerSelect" class="flex flex-col w-full h-full justify-start py-1 gap-2">
            
            
        </div>
        <button class="flex items-center justify-center cursor-pointer border rounded-xl hover:text-white hover:bg-black "
                onclick="loadInitModule('partyTrackerSelect')"
            >
            +
        </button>
    </div>
    `,
    partyTrackerSelect: `
    <div class="flex gap-1 bg-white border rounded-xl p-2 border-black w-full ">
        <div class="border rounded-xl">
            <select name="type" class="cursor-pointer rounded-xl p-1">
            <option value="Enemy">Enemy</option>
            <option value="Ally">Ally</option>
            </select>
        </div>

        <input class="pl-2 auto-width" placeholder="Name">

        <div class="flex gap-1 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>

            <input placeholder="100" type="number" class="w-10 text-center step-1">
        </div>
    </div>

    `,

    note: `
    <div class="flex flex-col gap-2 bg-white border rounded-2xl p-2 border-black w-min min-w-64 h-min">
        <div class="flex items-center justify-between gap-1">
            <input placeholder="Note" class="text-lg font-semibold w-full pl-2 outline-none">
            <button class="cursor-pointer transition-colors" onclick="deleteItem(this)" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
            </button>
        </div>
        <hr>
        <textarea
            id="noteTextarea"
            class="p-1 mb-1 border-none outline-none resize"
            placeholder="Write your note here..."
            oninput="autoGrow(this)"
            rows="1"
            style="min-width: 240px;"
        ></textarea>
    </div>
    `,

    turnorder: `
        <div id="turnorder" class="flex flex-col gap-1 bg-white border rounded-2xl p-2 border-black w-80 ">
                <div class="flex items-center justify-between  gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                    </svg>
                    <h1 class="text-lg font-semibold">Turn Order</h1>
                    <button class="cursor-pointer" onclick="deleteItem(this)">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>
                    </button>
                </div>
                <hr>

                <div id="initiative-roll-panel" class="flex flex-col w-full h-full justify-between py-1 ">
                    
                    <div id="initiative-container" class="flex flex-col w-full m-1 pr-2 gap-2">
                        <div class='flex gap-2'>
                            <h1 class='flex border p-2 w-1/6 items-center justify-center rounded-lg'>1</h1>
                            <input class='border-b py-2 w-3/4 cursor-text outline-0' placeholder='Name'>
                            <input class='flex border-b pl-1 py-2 w-1/4 cursor-text justify-center outline-0' placeholder='20' type='number'>
                        </div>
                    </div>
                    
                    <button class="text-2xl cursor-pointer border rounded-xl w-full mt-2" onclick="addOrder(this)">+</button>  
                </div>
            </div>
    `,

    preset: `
 
    <div class="flex flex-col gap-1 bg-white border rounded-2xl p-2 border-black shadow-xl w-64 h-64">
        <div class="flex items-center justify-between  gap-1">
            <!-- Icon -->
            <h1 class="text-lg font-semibold">PresetName</h1>
            <button class="cursor-pointer" onclick="deleteItem(this)">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>
        </button>
        </div>
        <hr>
        <div class="flex flex-col w-full h-full justify-between py-1">

        </div>
    </div>
  `



};


// GERAL
let itemCounter = 0;
let stopwatchCounter = 0;

function loadTemplate(name) {
    const customID = `item-${itemCounter++}`;
    const add = templates[name];
    let newDiv = ``;
    
    if (name == "stopwatch") {
        newDiv = `
            <div id="${customID}" class="h-min">
                <div id="stopwatch-${stopwatchCounter++}">
                    ${add}
                </div>
            </div>
        `;
    } 
    if (name == "turnorder") {
       
        newDiv = `
            <div id="${customID}" class="h-min">
                ${add}
            </div>
        `;
        
    }
    else {
        newDiv = `
            <div id="${customID}" class="h-min">
                ${add}
            </div>
        `;
    }
    
    console.log(`spawning ${name} into dashboard`);
    dash.insertAdjacentHTML('beforeend', newDiv);
}



function deleteItem(button) {
    const itemDiv = button.closest('[id^="item-"]');
    itemDiv.remove();
}


function isUnique (id) {
    if (document.querySelector(`#${id}`)){
        return false
    }
    else {
        return true
    }
}

// STOPWATCH
function toggleClock(button) {
    const clock = button.closest('[id^="stopwatch-"]');
    
    if (clock.intervalId) {
        stopClock(button);
    } else {
        startClock(button);
    }
}

function startClock(button) {
    const clock = button.closest('[id^="stopwatch-"]');
    const clockText = clock.querySelector('.clockText'); 
    const startButton = clock.querySelector('.clockStartButton'); 
    
    startButton.textContent = 'Stop';
    console.log('Clock started');
    
    if (!clock.seconds) {
        clock.seconds = 0;
    }
    
    if (!clock.intervalId) { 
        clock.intervalId = setInterval(() => {
            clock.seconds += 1;
            clockText.innerHTML = secondsToTimeFormat(clock.seconds);
        }, 1000);
    }
}

function stopClock(button) {
    const clock = button.closest('[id^="stopwatch-"]'); 
    const startButton = clock.querySelector('.clockStartButton');
    
    if (clock.intervalId) {
        clearInterval(clock.intervalId);
        clock.intervalId = null;
        startButton.textContent = 'Start';
    }
}

function clearClock(button) {
    const clock = button.closest('[id^="stopwatch-"]'); 
    const clockText = clock.querySelector('.clockText'); 
    const startButton = clock.querySelector('.clockStartButton'); 
    
    if (clock.intervalId) {
        clearInterval(clock.intervalId);
        clock.intervalId = null;
    }
    
    clock.seconds = 0;
    clockText.innerHTML = '00:00';
    startButton.textContent = 'Start';
}

function secondsToTimeFormat(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
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


// PARTY TRACKER

function loadInitModule(name) {
    
    const initTracker = document.getElementById('partyTrackerSelect');
    const add = templates[name]
    console.log(`spawning ${name} into dashboard`)
    
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = add;
    initTracker.appendChild(tempDiv.firstElementChild);
}


function autoGrow(element) {
    element.style.height = "auto";
    element.style.height = (element.scrollHeight) + "px";
    
}

// INITIATIVE TRACKER


function addOrder(base){
    
    const container = base.closest('#initiative-roll-panel');
    const divContainer = container.querySelector('div'); 
    
    const count = divContainer.querySelectorAll('div').length;
    console.log(count)
    
    const add = `
        <div class='flex gap-2'>
            <h1 class='flex border p-2 w-1/6 items-center justify-center rounded-lg'>${count + 1}</h1>
            <input class='border-b py-2 w-3/4 cursor-text outline-0' placeholder='Name'>
            <input class='flex border-b pl-1 py-2 w-1/4 cursor-text justify-center outline-0' placeholder='20' type='number'>
        </div>
    `;

    divContainer.insertAdjacentHTML('beforeend', add);

                            
}



// LOCAL STORAGE





