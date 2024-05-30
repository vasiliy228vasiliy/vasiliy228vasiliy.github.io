let selectLeft = document.querySelector('.select-left');
let selectRight = document.querySelector('.select-right');

let products = [
    {
        name: 'Brawl-Stars',
        normalname: 'Brawl Stars',
        ekran: 250000000,
        security: 'Supersell',
        buttery: 'Supersell',
        procesor:'1.0',
        memory:'3,7/5',
        display: 'розважальна гра якій 7 років для дітей та підлітків'
    },
    {
        name: 'FIFA-24',
        normalname: 'FIFA 24',
        ekran: 19000000,
        security: 'EA Sports',
        buttery: 'EA Sports',
        procesor:'24.0',
        memory:'4,5/5',
        display: 'гра про футбол якій вже 30 років обмежень на вік немає'
    },
    {
        name: 'Standoff-2',
        normalname: 'Standoff 2',
        ekran: 150000000,
        security: 'Axlebolt',
        buttery: 'Axlebolt',
        procesor:'2.0',
        memory:'4,2/5',
        display: 'гра шутер для дітей та підлітків якій вже 7 років'
    },
    {
        name: 'CS:GO',
        normalname: 'CS:GO',
        ekran: 13000000,
        security: 'Valve',
        buttery: 'Valve',
        procesor:'2.0',
        memory:'2,8/5',
        display: 'гра шутер якій вже 23 роки вік в не обмежено'
    },
    {
        name: 'Roblox',
        normalname: 'Roblox',
        ekran: 50000000,
        security: 'Roblox Corparation',
        buttery: 'Roblox Corparation',
        procesor:'1.0',
        memory:'4.8',
        display: 'гра пісочніца для створення своїх ігор якій 18 років вік в ній не обмежено'
    },
    {
        name: 'Fortnite',
        normalname: 'Fortnite',
        ekran:  500000000,
        security: 'Epic Games',
        buttery: 'Epic Games',
        procesor:'23.04',
        memory:'4.5/5',
        display: 'гра шутер якій 10 років омежень на вік немає '

    },
]

function showPropertys(a1, a2, a3, a4,a5, a6, a7, select) {
    let number = 0;
    console.log(select.value);

    for (let i = 0; i < products.length; i++) {
        if (select.value == products[i]['name']) {
            number = i;
        }
        document.querySelector(a1).innerHTML = products[number]['normalname'];
        document.querySelector(a2).innerHTML = products[number]['ekran'];
        document.querySelector(a4).innerHTML = products[number]['display'];
        document.querySelector(a3).innerHTML = products[number]['security'];
        document.querySelector(a5).innerHTML = products[number]['buttery'];
        document.querySelector(a6).innerHTML = products[number]['procesor'];
        document.querySelector(a7).innerHTML = products[number]['memory'];
    
    }
}
showPropertys('.n-1', '.e-1', '.s-1', '.d-1', '.b-1', '.p-1', '.m-1', selectLeft);
showPropertys('.n-2', '.e-2', '.s-2', '.d-2', '.b-2', '.p-2', '.m-2', selectRight);

selectLeft.addEventListener('change', function () {
    showPropertys('.n-1', '.e-1', '.s-1', '.d-1', '.b-1', '.p-1', '.m-1', selectLeft);
})
selectRight.addEventListener('change', function () {
    showPropertys('.n-2', '.e-2', '.s-2', '.d-2', '.b-2', '.p-2', '.m-2', selectRight);

})